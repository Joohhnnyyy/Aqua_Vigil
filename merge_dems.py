import rasterio
from rasterio.merge import merge
from rasterio.plot import show
import glob
import os
from rasterio.warp import transform_bounds

# Define the root directory to search
root_dir = "/Users/anshjohnson/Desktop/AquaVigil/models/kolkata"
output_path = "/Users/anshjohnson/Desktop/AquaVigil/models/kolkata_full_dem.tif"

print("Searching for DEM files...")
# Find all DEM tiff files recursively
dem_files = []
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if "DEM" in file and file.endswith(".tif") and "kolkata_full_dem" not in file:
             dem_files.append(os.path.join(root, file))

print(f"Found {len(dem_files)} DEM files.")

if not dem_files:
    print("No DEM files found. Exiting.")
    exit()

# Open all files
src_files_to_mosaic = []
for fp in dem_files:
    src = rasterio.open(fp)
    src_files_to_mosaic.append(src)

print("Merging files... this may take a moment.")
# Merge function returns the merged array and the transformation
mosaic, out_trans = merge(src_files_to_mosaic)

# Copy the metadata
out_meta = src_files_to_mosaic[0].meta.copy()

# Update the metadata
out_meta.update({
    "driver": "GTiff",
    "height": mosaic.shape[1],
    "width": mosaic.shape[2],
    "transform": out_trans,
    "crs": src_files_to_mosaic[0].crs
})

print(f"Writing merged DEM to {output_path}...")
with rasterio.open(output_path, "w", **out_meta) as dest:
    dest.write(mosaic)

print("Merge complete!")

# Calculate and print bounds for the new merged file
with rasterio.open(output_path) as src:
    bounds = src.bounds
    crs = src.crs
    print(f"Merged CRS: {crs}")
    print(f"Merged Bounds (Native): {bounds}")
    
    if crs:
         w, s, e, n = transform_bounds(crs, "EPSG:4326", *bounds)
         print(f"Merged Bounds (EPSG:4326): West={w}, South={s}, East={e}, North={n}")
         print(f"Use these bounds in MapComponent.tsx:")
         print(f"[[{s}, {w}], [{n}, {e}]]")

# Close source files
for src in src_files_to_mosaic:
    src.close()
