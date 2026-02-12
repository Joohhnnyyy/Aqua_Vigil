"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  RocketLaunch, 
  House,
  SquaresFour,
  CloudRain,
  Drop,
  Mountains,
  Warning,
  MapTrifold,
  Pulse,
  DownloadSimple,
  ArrowsOut,
  Stack,
  MagnifyingGlassPlus,
  MagnifyingGlassMinus,
  Compass,
  ArrowsOutSimple,
  Globe,
  MapPin,
  WarningCircle,
  Cloud
} from "@phosphor-icons/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import AppSidebar from "@/components/AppSidebar";
import { useSidebar } from "@/components/SidebarProvider";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-900 animate-pulse rounded-[2rem]" />
});

export default function MapPage() {
  const { isCollapsed: isSidebarCollapsed, toggleSidebar } = useSidebar();
  
  // State for map options
  const [show3DTerrain, setShow3DTerrain] = useState(true);
  const [showContours, setShowContours] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  // State for quick navigation
  const [flyToLocation, setFlyToLocation] = useState<{lat: number, lng: number, zoom: number} | null>(null);

  const handleQuickNavigate = (lat: number, lng: number, zoom: number) => {
    setFlyToLocation({ lat, lng, zoom });
    // Reset after a short delay so the same location can be clicked again
    setTimeout(() => setFlyToLocation(null), 100);
  };

  return (
    <div className="flex min-h-screen bg-black text-zinc-50 font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <AppSidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={toggleSidebar} 
      />

      {/* Main Content */}
      <main className={`flex-1 p-6 lg:p-8 h-screen overflow-hidden flex flex-col transition-all duration-300 ${isSidebarCollapsed ? "ml-24" : "ml-64"}`}>
        {/* Header */}
        <header className="flex justify-between items-start mb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-1 capitalize ">3D Map View</h1>
            <p className="text-zinc-400">Interactive terrain visualization with LiDAR DEM data</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-zinc-900 border-zinc-800 rounded-[2rem] text-zinc-300 hover:bg-zinc-800 hover:text-white shadow-sm">
              <DownloadSimple className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-500 rounded-[2rem]  text-white border-0">
              <ArrowsOut className="w-4 h-4 mr-2" />
              Fullscreen
            </Button>
          </div>
        </header>

        {/* Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-0">
          
          {/* Map Area */}
          <div className="lg:col-span-3 relative bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-[2rem] overflow-hidden group">
            {/* Map Controls Top Left */}
            <div className="absolute top-6 left-6 z-[1000] flex gap-2">
              <Badge 
                className={`cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium border-0 transition-colors ${show3DTerrain ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-zinc-900/90 text-zinc-300 border-zinc-700 hover:bg-zinc-800"}`}
                onClick={() => setShow3DTerrain(!show3DTerrain)}
              >
                Terrain
              </Badge>
              <Badge 
                variant="outline" 
                className={`backdrop-blur border-zinc-700 cursor-pointer px-4 py-1.5 rounded-full transition-colors ${showContours ? "bg-blue-600 text-white border-transparent" : "bg-zinc-900/90 text-zinc-300 hover:bg-zinc-800"}`}
                onClick={() => setShowContours(!showContours)}
              >
                Contours
              </Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">Flood Risk</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">DEM</Badge>
            </div>

            {/* Map Component */}
            <div className="absolute inset-0 z-0">
               <MapComponent 
                 show3DTerrain={show3DTerrain}
                 showContours={showContours}
                 showGrid={showGrid}
                 flyToLocation={flyToLocation}
               />
            </div>

            {/* Right Controls */}
            <div className="absolute bottom-24 right-6 flex flex-col gap-2 z-10">
               <div className="bg-zinc-900/90 backdrop-blur p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer text-zinc-400 hover:text-white transition-colors"><MagnifyingGlassPlus className="w-5 h-5" /></div>
               <div className="bg-zinc-900/90 backdrop-blur p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer text-zinc-400 hover:text-white transition-colors"><MagnifyingGlassMinus className="w-5 h-5" /></div>
               <div className="bg-zinc-900/90 backdrop-blur p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer text-zinc-400 hover:text-white transition-colors mt-2"><Compass className="w-5 h-5" /></div>
               <div className="bg-zinc-900/90 backdrop-blur p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer text-zinc-400 hover:text-white transition-colors"><ArrowsOutSimple className="w-5 h-5" /></div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none z-10">
              <div className="bg-zinc-900/90 backdrop-blur px-4 py-2 rounded-full border border-zinc-700 text-xs text-zinc-400 font-mono">
                Lat: 25.4358°N  |  Lng: 81.8463°E  |  Zoom: 12.5
              </div>
              <div className="bg-zinc-900/90 backdrop-blur px-4 py-2 rounded-full border border-zinc-700 flex items-center gap-3">
                <div className="h-1 w-16 bg-zinc-700 rounded-full relative overflow-hidden">
                   <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-zinc-400"></div>
                </div>
                <span className="text-xs text-zinc-400 font-mono">2 km</span>
              </div>
            </div>
          </div>

          {/* Sidebar Controls */}
          <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide">
            
            {/* View Options */}
            <Card className="bg-zinc-950 border-zinc-800 text-white rounded-[2rem] shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white font-medium">View Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="3d-terrain" className="text-sm text-zinc-400 cursor-pointer">3D Terrain</label>
                  <Switch 
                    id="3d-terrain" 
                    checked={show3DTerrain}
                    onCheckedChange={setShow3DTerrain}
                    className="data-[state=checked]:bg-blue-600 bg-zinc-700" 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="contour-lines" className="text-sm text-zinc-400 cursor-pointer">Contour Lines</label>
                  <Switch 
                    id="contour-lines" 
                    checked={showContours}
                    onCheckedChange={setShowContours}
                    className="data-[state=checked]:bg-blue-600 bg-zinc-700" 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="grid-overlay" className="text-sm text-zinc-400 cursor-pointer">Grid Overlay</label>
                  <Switch 
                    id="grid-overlay" 
                    checked={showGrid}
                    onCheckedChange={setShowGrid}
                    className="data-[state=checked]:bg-blue-600 bg-zinc-700" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Data Layers */}
            <Card className="bg-zinc-950 border-zinc-800 text-white rounded-[2rem] flex-1 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Stack className="w-5 h-5 text-zinc-500" />
                  <CardTitle className="text-white font-medium">Data Layers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <LayerItem 
                  icon={<Mountains className="w-4 h-4 text-blue-500" />}
                  label="Digital Elevation Model"
                  active
                />
                <LayerItem 
                  icon={<Drop className="w-4 h-4 text-blue-500" />}
                  label="Flood Risk Zones"
                  active
                />
                <LayerItem 
                  icon={<WarningCircle className="w-4 h-4 text-orange-500" />}
                  label="Erosion Hotspots"
                  active={false}
                />
                <LayerItem 
                  icon={<Cloud className="w-4 h-4 text-blue-500" />}
                  label="Precipitation"
                  active={false}
                />
              </CardContent>
            </Card>

            {/* Quick Navigate */}
            <Card className="bg-zinc-950 border-zinc-800 text-white rounded-[2rem] shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-zinc-500" />
                  <CardTitle className="text-white font-medium">Quick Navigate</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <NavLocation 
                  label="Sector 5 IT Hub" 
                  coords="22.5726°N, 88.4374°E"
                  active={false}
                  onClick={() => handleQuickNavigate(22.5726, 88.4374, 14)}
                />
                <NavLocation 
                  label="Hooghly River Bank" 
                  coords="22.5448°N, 88.3426°E"
                  onClick={() => handleQuickNavigate(22.5448, 88.3426, 13)}
                />
                <NavLocation 
                  label="New Town Action Area" 
                  coords="22.5958°N, 88.4719°E"
                  onClick={() => handleQuickNavigate(22.5958, 88.4719, 13)}
                />
                <NavLocation 
                  label="Salt Lake City" 
                  coords="22.5867°N, 88.4173°E"
                  onClick={() => handleQuickNavigate(22.5867, 88.4173, 14)}
                />
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}

// Components
function LayerItem({ icon, label, active }: { icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <div className={`
      flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer
      ${active 
        ? "bg-blue-500/10 border-blue-500/20" 
        : "bg-transparent border-transparent hover:bg-zinc-900 hover:border-zinc-800"}
    `}>
      <div className="flex items-center gap-3">
        <div className={`p-1.5 rounded-full ${active ? "bg-blue-500/20" : "bg-zinc-800"}`}>
          {active ? icon : React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4 text-zinc-500" })}
        </div>
        <span className={`text-sm ${active ? "text-blue-400 font-medium" : "text-zinc-400"}`}>{label}</span>
      </div>
      {active && (
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
      )}
    </div>
  );
}

function NavLocation({ label, coords, active = false, onClick }: { label: string, coords: string, active?: boolean, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`
      p-3 rounded-xl border transition-all cursor-pointer
      ${active 
        ? "bg-blue-500/10 border-blue-500/20" 
        : "bg-transparent border-transparent hover:bg-zinc-900 hover:border-zinc-800"}
    `}>
      <h4 className={`text-sm font-medium mb-0.5 ${active ? "text-blue-400" : "text-zinc-300"}`}>{label}</h4>
      <p className="text-xs text-zinc-500 font-mono">{coords}</p>
    </div>
  );
}
