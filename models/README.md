# AquaVigil AI — LiDAR Bathtub Flood API (v1)

This FastAPI service exposes a simple “bathtub” flood simulation over a LiDAR-derived DEM. It clips the DEM to a requested AOI, thresholds elevations by rainfall depth plus a baseline, and returns inundation polygons and a risk summary.

## Coordinate System

- DEM CRS: EPSG:32645 (WGS 84 / UTM Zone 45N)
- AOI input: If no CRS is specified in the GeoJSON, AOI is assumed to be EPSG:4326 and is reprojected to the DEM CRS internally.

## Environment Variables

- `DEM_TIF_PATH` (required): Absolute path to the processed LiDAR DEM `.tif` file.
- `RIVER_BASELINE_M` (optional, default `0.0`): Baseline river level in meters added to the rainfall threshold.

## Install and Run

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export DEM_TIF_PATH="/absolute/path/to/your/dem.tif"
export RIVER_BASELINE_M="0.5"   # optional
uvicorn main:app --host 0.0.0.0 --port 8000
```

## Endpoint

- `POST /simulate-flood`

### Request Body

```json
{
  "region_polygon": {
    "type": "Polygon",
    "coordinates": [
      [
        [86.300, 23.700],
        [86.320, 23.700],
        [86.320, 23.720],
        [86.300, 23.720],
        [86.300, 23.700]
      ]
    ]
  },
  "rainfall_mm": 150
}
```

- `region_polygon`: GeoJSON Polygon or MultiPolygon of the AOI. If `crs` is omitted, it is treated as EPSG:4326 and reprojected.
- `rainfall_mm`: Rainfall depth in millimeters.

### Response Body

```json
{
  "flood_geojson": {
    "type": "MultiPolygon",
    "coordinates": [ /* inundation polygons in EPSG:32645 */ ]
  },
  "risk_summary": {
    "total_flooded_area_sqm": 12345.67,
    "danger_level": "Medium"
  }
}
```

- `flood_geojson`: MultiPolygon of inundated areas derived from `DEM < (rainfall_mm/1000 + RIVER_BASELINE_M)`.
- `risk_summary.total_flooded_area_sqm`: Area in square meters (UTM units).
- `risk_summary.danger_level`: Categorized by area (`Low` < 10k m², `Medium` < 100k m², else `High`).

## Notes for Frontend

- Send AOI as standard GeoJSON. If your coordinates are lon/lat (WGS84), omit `crs` and the service will handle reprojection.
- For Mapbox displays, you can render the returned `MultiPolygon` directly after transforming to the map’s projection if needed.

