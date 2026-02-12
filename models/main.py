import os
import json
from typing import Any, Dict, List, Optional, Tuple
import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import rasterio
from rasterio.mask import mask as rio_mask
from rasterio.features import shapes as rio_shapes
from rasterio.warp import transform_geom
from shapely.geometry import shape as shp_shape, mapping as shp_mapping
from shapely.ops import unary_union
import pickle


class FloodRequest(BaseModel):
    region_polygon: Dict[str, Any] = Field(..., description="GeoJSON Polygon or MultiPolygon representing AOI")
    rainfall_mm: int = Field(..., ge=0, description="Simulated rainfall depth in millimeters")


class FloodResponse(BaseModel):
    flood_geojson: Dict[str, Any]
    risk_summary: Dict[str, Any]


def get_dem_path() -> str:
    env_path = os.getenv("DEM_TIF_PATH")
    if env_path and os.path.exists(env_path):
        return env_path
    raise FileNotFoundError("DEM_TIF_PATH is not set or points to a missing file")


def load_dem(dem_path: str) -> Tuple[np.ndarray, rasterio.Affine, Any, Optional[float]]:
    with rasterio.open(dem_path) as ds:
        band1 = ds.read(1, masked=True)
        transform = ds.transform
        crs = ds.crs if ds.crs is not None else None
        nodata = ds.nodata
    return band1, transform, crs, nodata


def ensure_polygon_in_dem_crs(geom: Dict[str, Any], dem_crs: Any) -> Dict[str, Any]:
    if dem_crs is None:
        return geom
    try:
        dem_crs_use = dem_crs.to_string()
    except Exception:
        dem_crs_use = dem_crs
    src_crs = None
    if "crs" in geom and geom["crs"]:
        src_crs = geom["crs"]
        if isinstance(src_crs, dict):
            name = None
            try:
                name = src_crs.get("properties", {}).get("name")
            except Exception:
                name = None
            if name:
                src_crs = name
    if src_crs is None:
        src_crs = "EPSG:4326"
    try:
        return transform_geom(src_crs, dem_crs_use, geom)
    except Exception:
        return geom


def polygonize_mask(mask_array: np.ndarray, transform: rasterio.Affine) -> List[Dict[str, Any]]:
    as_uint8 = np.where(mask_array, 1, 0).astype(np.uint8)
    geoms = []
    for geom, val in rio_shapes(as_uint8, transform=transform):
        if int(val) == 1:
            geoms.append(geom)
    return geoms


def union_to_multipolygon_geojson(geoms: List[Dict[str, Any]]) -> Dict[str, Any]:
    if not geoms:
        return {"type": "MultiPolygon", "coordinates": []}
    shapely_geoms = [shp_shape(g) for g in geoms]
    merged = unary_union(shapely_geoms)
    mapped = shp_mapping(merged)
    if mapped["type"] == "Polygon":
        return {"type": "MultiPolygon", "coordinates": [mapped["coordinates"]]}
    if mapped["type"] == "MultiPolygon":
        return mapped
    return {"type": "MultiPolygon", "coordinates": []}


def compute_area_sqm(geojson_geom: Dict[str, Any]) -> float:
    geom = shp_shape(geojson_geom)
    return float(geom.area)


def danger_level_from_area(area_sqm: float) -> str:
    if area_sqm < 10_000:
        return "Low"
    if area_sqm < 100_000:
        return "Medium"
    return "High"


def reproject_to_4326(geom: Dict[str, Any], src_crs: Any) -> Dict[str, Any]:
    if src_crs is None:
        return geom
    try:
        return transform_geom(src_crs, "EPSG:4326", geom)
    except Exception:
        return geom


app = FastAPI(title="AquaVigil AI Flood Simulation API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/simulate-flood", response_model=FloodResponse)
def simulate_flood(payload: FloodRequest, return_epsg4326: bool = False) -> FloodResponse:
    dem_path = get_dem_path()
    dem_array, dem_transform, dem_crs, dem_nodata = load_dem(dem_path)
    aoi_dem_crs = ensure_polygon_in_dem_crs(payload.region_polygon, dem_crs)
    try:
        clipped, clipped_transform = rio_mask(
            dataset=rasterio.open(dem_path),
            shapes=[aoi_dem_crs],
            crop=True,
            filled=True,
            nodata=dem_nodata if dem_nodata is not None else None,
        )
    except Exception as e:
        print(f"Error during clipping: {e}")
        raise HTTPException(status_code=400, detail=f"Failed to clip DEM: {str(e)}")
    clipped_dem = np.ma.masked_array(clipped[0], mask=np.isnan(clipped[0])) if np.isnan(clipped[0]).any() else np.ma.masked_array(clipped[0])
    
    # Debug: Print stats of the clipped area
    if clipped_dem.count() > 0:
        print(f"DEBUG: Clipped DEM Stats - Min: {clipped_dem.min()}, Max: {clipped_dem.max()}, Mean: {clipped_dem.mean()}")
    else:
        print("DEBUG: Clipped DEM is empty (all masked)")

    # Adjust logic: If river_baseline_m is 0, we might default to something sensible for Kolkata if needed,
    # or rely on the user. For now, let's keep it but log it.
    river_baseline_m = float(os.getenv("RIVER_BASELINE_M", "4.0")) # Changed default to 4.0m for Kolkata testing
    threshold_m = (payload.rainfall_mm / 1000.0) + river_baseline_m
    
    print(f"DEBUG: Rainfall: {payload.rainfall_mm}mm, Baseline: {river_baseline_m}m, Threshold: {threshold_m}m")

    flood_mask = np.ma.filled(clipped_dem < threshold_m, False)
    
    print(f"DEBUG: Flooded pixels: {np.sum(flood_mask)} / {flood_mask.size}")

    geom_list = polygonize_mask(flood_mask, clipped_transform)
    flood_multipolygon = union_to_multipolygon_geojson(geom_list)
    total_area_sqm = compute_area_sqm(flood_multipolygon)
    
    if return_epsg4326:
        flood_multipolygon = reproject_to_4326(flood_multipolygon, dem_crs)

    summary = {"total_flooded_area_sqm": total_area_sqm, "danger_level": danger_level_from_area(total_area_sqm)}
    return FloodResponse(flood_geojson=flood_multipolygon, risk_summary=summary)


class RFRequest(BaseModel):
    region_polygon: Dict[str, Any] = Field(..., description="GeoJSON Polygon or MultiPolygon representing AOI")
    threshold_proba: float = Field(0.5, ge=0.0, le=1.0, description="Probability threshold for class 1")


class RFResponse(BaseModel):
    predicted_geojson: Dict[str, Any]
    risk_summary: Dict[str, Any]


BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def get_rf_model_path() -> str:
    default_path = os.path.join(BASE_DIR, "best_rf_model.pkl")
    env_path = os.getenv("RF_MODEL_PATH", default_path)
    if env_path and os.path.exists(env_path):
        return env_path
    raise FileNotFoundError(f"RF_MODEL_PATH is not set or points to a missing file: {env_path}")


def load_rf_model(model_path: str):
    with open(model_path, "rb") as f:
        return pickle.load(f)


def clip_raster(path: str, aoi_geom: Dict[str, Any]) -> Tuple[np.ndarray, rasterio.Affine, Optional[float]]:
    with rasterio.open(path) as ds:
        try:
            clipped, transform = rio_mask(ds, [aoi_geom], crop=True, filled=True, nodata=ds.nodata)
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Failed to clip raster {os.path.basename(path)}: {str(e)}")
    arr = np.ma.masked_array(clipped[0])
    return arr, transform, ds.nodata


@app.post("/predict-rf", response_model=RFResponse)
def predict_rf(payload: RFRequest, return_epsg4326: bool = False) -> RFResponse:
    dem_path = get_dem_path()
    _, _, dem_crs, _ = load_dem(dem_path)
    aoi_dem_crs = ensure_polygon_in_dem_crs(payload.region_polygon, dem_crs)
    feature_files = [
        os.path.join(BASE_DIR, "slope.tif"),
        os.path.join(BASE_DIR, "aspect.tif"),
        os.path.join(BASE_DIR, "curvature.tif"),
        os.path.join(BASE_DIR, "distance_to_river.tif"),
        os.path.join(BASE_DIR, "flow_accumulation.tif"),
        os.path.join(BASE_DIR, "twi.tif"),
    ]
    arrays = []
    ref_transform = None
    for idx, p in enumerate(feature_files):
        arr, transform, nodata = clip_raster(p, aoi_dem_crs)
        if idx == 0:
            ref_transform = transform
        arrays.append(arr)
    shapes = [a.shape for a in arrays]
    if len(set(shapes)) != 1:
        raise HTTPException(status_code=500, detail="Feature rasters are not aligned to same grid")
    valid = np.ones(arrays[0].shape, dtype=bool)
    for a in arrays:
        valid &= ~np.ma.getmask(a)
    X = np.column_stack([np.ma.filled(a, fill_value=np.nan).reshape(-1) for a in arrays])
    valid_flat = valid.reshape(-1)
    X_valid = X[valid_flat]
    model = load_rf_model(get_rf_model_path())
    proba = None
    try:
        proba = model.predict_proba(X_valid)[:, 1]
        y_pred = proba >= payload.threshold_proba
    except Exception:
        y_pred = model.predict(X_valid)
        try:
            proba = y_pred.astype(float)
        except Exception:
            proba = None
    pred_mask = np.zeros(valid.shape, dtype=bool)
    pred_mask_flat = pred_mask.reshape(-1)
    pred_mask_flat[valid_flat] = y_pred
    geoms = polygonize_mask(pred_mask, ref_transform)
    predicted_multipolygon = union_to_multipolygon_geojson(geoms)
    total_area_sqm = compute_area_sqm(predicted_multipolygon)
    
    if return_epsg4326:
        predicted_multipolygon = reproject_to_4326(predicted_multipolygon, dem_crs)

    summary = {"total_predicted_area_sqm": total_area_sqm, "danger_level": danger_level_from_area(total_area_sqm)}
    if proba is not None and proba.size > 0:
        summary["mean_probability"] = float(np.mean(proba))
    return RFResponse(predicted_geojson=predicted_multipolygon, risk_summary=summary)
