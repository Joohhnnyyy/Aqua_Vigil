"use client";

import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, FeatureGroup, GeoJSON, useMap, Rectangle, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";

// Fix for default marker icons in Next.js
const iconRetinaUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png';
const iconUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png';
const shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';

const DrawControl = ({ onCreated }: { onCreated: (geojson: any) => void }) => {
  const map = useMap();
  const featureGroupRef = useRef<L.FeatureGroup | null>(null);

  useEffect(() => {
    // Initialize FeatureGroup to store drawn items
    const featureGroup = new L.FeatureGroup();
    featureGroupRef.current = featureGroup;
    map.addLayer(featureGroup);

    // Initialize Draw Control
    const drawControl = new L.Control.Draw({
      position: 'topright',
      edit: {
        featureGroup: featureGroup,
        remove: true,
      },
      draw: {
        marker: false,
        circle: false,
        circlemarker: false,
        polyline: false,
        rectangle: { shapeOptions: { color: '#3b82f6', weight: 2 } },
        polygon: {
          allowIntersection: false,
          showArea: true,
          shapeOptions: { color: '#3b82f6', weight: 2 }
        },
      },
    });

    map.addControl(drawControl);

    // Event listener for when a shape is drawn
    const onDrawCreated = (e: any) => {
      const layer = e.layer;
      
      // Clear previous layers - we only want one polygon for the simulation
      featureGroup.clearLayers();
      featureGroup.addLayer(layer);

      // Get GeoJSON
      const geojson = layer.toGeoJSON();
      onCreated(geojson);
    };

    map.on(L.Draw.Event.CREATED, onDrawCreated);

    return () => {
      map.removeControl(drawControl);
      map.removeLayer(featureGroup);
      map.off(L.Draw.Event.CREATED, onDrawCreated);
    };
  }, [map, onCreated]);

  return null;
};

// Custom Grid Layer
const GridLayer = () => {
  const map = useMap();

  useEffect(() => {
    // Extend GridLayer to create a custom canvas grid
    const CustomGrid = L.GridLayer.extend({
      createTile: function(coords: any, done: any) {
        const tile = document.createElement('canvas');
        const size = this.getTileSize();
        tile.width = size.x;
        tile.height = size.y;
        
        const ctx = tile.getContext('2d');
        if (ctx) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          // Draw border
          ctx.moveTo(0, 0);
          ctx.lineTo(size.x, 0);
          ctx.lineTo(size.x, size.y);
          ctx.lineTo(0, size.y);
          ctx.closePath();
          ctx.stroke();

          // Add coordinates text
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.font = '10px monospace';
          ctx.fillText(`X:${coords.x} Y:${coords.y}`, 5, 15);
        }

        // Simulate async
        setTimeout(() => {
          done(null, tile);
        }, 0);

        return tile;
      }
    });

    const grid = new CustomGrid();
    grid.addTo(map);

    return () => {
      grid.remove();
    };
  }, [map]);

  return null;
};

interface MapComponentProps {
  show3DTerrain?: boolean;
  showContours?: boolean;
  showGrid?: boolean;
  flyToLocation?: { lat: number; lng: number; zoom: number } | null;
}

const MapComponent = ({ 
  show3DTerrain = true, 
  showContours = true, 
  showGrid = false,
  flyToLocation
}: MapComponentProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [coordinates, setCoordinates] = useState<string>("");
  const [regionGeoJSON, setRegionGeoJSON] = useState<any>(null);
  const [floodData, setFloodData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Map Controller component to handle flyTo actions
  const MapController = () => {
    const map = useMap();
    
    useEffect(() => {
      if (flyToLocation) {
        map.flyTo([flyToLocation.lat, flyToLocation.lng], flyToLocation.zoom, {
          duration: 2 // smooth animation
        });
      }
    }, [map]);

    return null;
  };

  // Bounds of the full Kolkata DEM (kolkata_full_dem.tif)
  // West=88.24345676088025, South=22.392421500087607, East=88.46931811195348, North=22.62912186953277
  const demBounds: [[number, number], [number, number]] = [
    [22.392421500087607, 88.24345676088025], // South-West
    [22.62912186953277, 88.46931811195348]   // North-East
  ];

  useEffect(() => {
    setIsMounted(true);
    
    // Fix Leaflet icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full bg-zinc-900 animate-pulse rounded-[2rem]" />;
  }

  const handleCreated = (geojson: any) => {
    setRegionGeoJSON(geojson.geometry);
    const coords = geojson.geometry.coordinates;
    setCoordinates(JSON.stringify(coords, null, 2));
    setFloodData(null); // Reset previous flood data
    setError(null);
  };

  const handleSimulate = async () => {
    if (!regionGeoJSON) return;

    setIsLoading(true);
    setError(null);

    try {
      // Prepare request payload
      // Ensure we are sending valid GeoJSON Polygon
      const payload = {
        region_polygon: {
          type: "Polygon",
          coordinates: regionGeoJSON.coordinates,
          crs: { "type": "name", "properties": { "name": "EPSG:4326" } }
        },
        rainfall_mm: 150 // Default value
      };

      const response = await fetch("http://localhost:8000/simulate-flood?return_epsg4326=true", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Simulation failed: ${response.statusText}`);
      }

      const data = await response.json();
      setFloodData(data.flood_geojson);
    } catch (err: any) {
      console.error("Simulation error:", err);
      setError(err.message || "An error occurred during simulation");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full relative z-0 group">
      <MapContainer 
        center={[22.51, 88.36]} // Center of the full Kolkata area
        zoom={11} // Zoomed out to see the whole city
        scrollWheelZoom={true} 
        className="w-full h-full rounded-[2rem]"
        style={{ height: "100%", width: "100%", borderRadius: "2rem" }}
      >
        <MapController />

        {/* Base Layer Logic */}
        {show3DTerrain ? (
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        ) : !showContours ? (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        ) : (
          <TileLayer
            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        )}

        {/* Overlay for Contours if 3D is ON - using OpenTopoMap with opacity */}
        {show3DTerrain && showContours && (
           <TileLayer
              attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              opacity={0.5}
           />
        )}

        {/* Grid Overlay */}
        {showGrid && <GridLayer />}
        
        {/* Visual Guide for Demo Area */}
        <Rectangle bounds={demBounds} pathOptions={{ color: 'green', fillOpacity: 0.1, weight: 2, dashArray: '5, 5' }}>
          <Tooltip direction="top" permanent>
            Available Data Area
          </Tooltip>
        </Rectangle>

        <DrawControl onCreated={handleCreated} />

        {/* Render Flood Data if available */}
        {floodData && (
          <GeoJSON 
            data={floodData} 
            style={{
              color: "#3b82f6", // Blue color for flood
              weight: 0,
              fillOpacity: 0.6,
              fillColor: "#3b82f6"
            }} 
          />
        )}
      </MapContainer>

      {/* Control Panel - Centered Bottom Action Bar */}
      {coordinates && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-[1000] bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-3 rounded-full shadow-2xl animate-in slide-in-from-bottom-4 flex items-center gap-4">
          <div className="flex items-center gap-2 pl-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-white font-medium text-xs">Region Selected</span>
          </div>
          
          <div className="h-4 w-px bg-zinc-700 mx-1"></div>

          <div className="flex gap-2">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(coordinates);
                  alert("Coordinates copied!");
                }}
                className="text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white px-3 py-1.5 rounded-full transition-colors border border-zinc-700"
              >
                Copy Coords
              </button>
              <button 
                onClick={handleSimulate}
                disabled={isLoading}
                className="text-xs bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-1.5 rounded-full transition-colors font-medium flex items-center gap-2 shadow-lg shadow-blue-900/20"
              >
                {isLoading ? (
                  <>
                    <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                    Simulating...
                  </>
                ) : (
                  "Run Simulation"
                )}
              </button>
          </div>
          
          {error && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-red-400 text-xs bg-red-950/90 backdrop-blur px-3 py-1.5 rounded-full border border-red-500/20 shadow-lg animate-in fade-in slide-in-from-bottom-2">
              {error}
            </div>
          )}
          
          {floodData && !isLoading && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-green-400 text-xs bg-green-950/90 backdrop-blur px-3 py-1.5 rounded-full border border-green-500/20 shadow-lg animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Simulation Complete!
            </div>
          )}
        </div>
      )}
      
      {/* Helper Text */}
      {!coordinates && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000] bg-black/80 text-white px-4 py-2 rounded-full text-xs backdrop-blur pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          Use the draw tool (top right) to select a region
        </div>
      )}
    </div>
  );
};

export default MapComponent;
