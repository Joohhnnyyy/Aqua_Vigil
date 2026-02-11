"use client";

import React from "react";
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

export default function MapPage() {
  return (
    <div className="flex min-h-screen bg-black text-zinc-50 font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="w-24 flex flex-col items-center py-8 border-r border-zinc-800 bg-black fixed h-full z-10">
        <div className="mb-8 p-3 bg-zinc-900 rounded-2xl">
          <RocketLaunch className="w-6 h-6 text-white" weight="fill" />
        </div>
        
        <nav className="flex flex-col gap-6 flex-1 w-full items-center">
          <NavItem icon={<House className="w-6 h-6" />} href="/" />
          <NavItem icon={<SquaresFour className="w-6 h-6" />} href="/dashboard" />
          <NavItem icon={<CloudRain className="w-6 h-6" />} href="/flood-simulation" />
          <NavItem icon={<Drop className="w-6 h-6" />} href="/river-health" />
          <NavItem icon={<Mountains className="w-6 h-6" />} href="/erosion" />
          <NavItem icon={<Warning className="w-6 h-6" />} href="/alerts" />
          <NavItem icon={<MapTrifold className="w-6 h-6" />} href="/map" active />
          <NavItem icon={<Pulse className="w-6 h-6" />} href="/monitoring" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-24 p-6 lg:p-8 h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-start mb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-1">3D Map View</h1>
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
            <div className="absolute top-6 left-6 z-10 flex gap-2">
              <Badge className="bg-blue-600 text-white hover:bg-blue-500 cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium border-0">Terrain</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">Satellite</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">Flood Risk</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">DEM</Badge>
            </div>

            {/* Map Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              {/* Central Status Card */}
              <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-900 p-8 rounded-[2rem] text-center max-w-sm z-10 shadow-2xl">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Stack className="w-8 h-8 text-blue-600" weight="fill" />
                </div>
                <h3 className="text-white text-lg font-medium mb-2">3D Map Ready</h3>
                <p className="text-zinc-400 text-sm">Mapbox GL JS integration point.<br/>Connect your LiDAR DEM data here.</p>
              </div>

              {/* Decorative Map Elements */}
              <div className="absolute top-1/3 left-1/4">
                <div className="relative">
                   <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
                   <MapPin className="w-8 h-8 text-red-500 relative z-10" weight="fill" />
                </div>
              </div>
              <div className="absolute bottom-1/3 right-1/3">
                <MapPin className="w-6 h-6 text-green-500" weight="fill" />
              </div>

              {/* River Path Decoration */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,60 C20,50 40,80 60,70 S 90,50 100,60" fill="none" stroke="#2563eb" strokeWidth="0.5" />
                <path d="M0,62 C20,52 40,82 60,72 S 90,52 100,62" fill="none" stroke="#2563eb" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Right Controls */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
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
          <div className="flex flex-col gap-4 overflow-y-auto">
            
            {/* View Options */}
            <Card className="bg-zinc-950 border-zinc-800 text-white rounded-[2rem] shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-white font-medium">View Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="3d-terrain" className="text-sm text-zinc-400 cursor-pointer">3D Terrain</label>
                  <Switch id="3d-terrain" defaultChecked className="data-[state=checked]:bg-blue-600 bg-zinc-700" />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="contour-lines" className="text-sm text-zinc-400 cursor-pointer">Contour Lines</label>
                  <Switch id="contour-lines" defaultChecked className="data-[state=checked]:bg-blue-600 bg-zinc-700" />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="grid-overlay" className="text-sm text-zinc-400 cursor-pointer">Grid Overlay</label>
                  <Switch id="grid-overlay" className="data-[state=checked]:bg-blue-600 bg-zinc-700" />
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
                  label="Sector 7 Critical Zone" 
                  coords="25.4358°N, 81.8463°E"
                  active
                />
                <NavLocation 
                  label="Yamuna Confluence" 
                  coords="25.4123°N, 81.8234°E"
                />
                <NavLocation 
                  label="Delta Region A" 
                  coords="25.3891°N, 81.8567°E"
                />
                <NavLocation 
                  label="Upper Basin Station" 
                  coords="25.4567°N, 81.8123°E"
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
function NavItem({ icon, active = false, href }: { icon: React.ReactNode; active?: boolean; href: string }) {
  return (
    <Link href={href} className="w-full px-4">
      <div className={`
        relative p-3 rounded-xl cursor-pointer transition-all duration-300 group flex justify-center
        ${active ? "text-white bg-zinc-900" : "text-zinc-600 hover:text-white hover:bg-zinc-900"}
      `}>
        {active && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
        )}
        {icon}
      </div>
    </Link>
  );
}

function LayerItem({ icon, label, active }: { icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <div className={`
      flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer
      ${active 
        ? "bg-blue-500/10 border-blue-500/20" 
        : "bg-transparent border-transparent hover:bg-zinc-900 hover:border-zinc-800"}
    `}>
      <div className="flex items-center gap-3">
        <div className={`p-1.5 rounded-lg ${active ? "bg-blue-500/20" : "bg-zinc-800"}`}>
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

function NavLocation({ label, coords, active = false }: { label: string, coords: string, active?: boolean }) {
  return (
    <div className={`
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
