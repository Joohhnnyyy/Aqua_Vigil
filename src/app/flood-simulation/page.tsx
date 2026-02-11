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
  Clock,
  Waves,
  MapPinArea,
  Play,
  ArrowCounterClockwise,
  SlidersHorizontal,
  FloppyDisk,
  ClockCounterClockwise,
  ArrowRight
} from "@phosphor-icons/react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function FloodSimulationPage() {
  const [rainfall, setRainfall] = React.useState([50]);
  const [damRelease, setDamRelease] = React.useState([30]);
  const [saturation, setSaturation] = React.useState([65]);
  const [duration, setDuration] = React.useState([24]);

  return (
    <div className="flex min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="w-24 flex flex-col items-center py-8 border-r border-white/10 bg-black fixed h-full z-10">
        <div className="mb-8 p-3 bg-zinc-900 rounded-2xl">
          <RocketLaunch className="w-6 h-6 text-white" weight="fill" />
        </div>
        
        <nav className="flex flex-col gap-6 flex-1 w-full items-center">
          <NavItem icon={<House className="w-6 h-6" />} href="/" />
          <NavItem icon={<SquaresFour className="w-6 h-6" />} href="/dashboard" />
          <NavItem icon={<CloudRain className="w-6 h-6" />} href="/flood-simulation" active />
          <NavItem icon={<Drop className="w-6 h-6" />} href="/river-health" />
          <NavItem icon={<Mountains className="w-6 h-6" />} href="/erosion" />
          <NavItem icon={<Warning className="w-6 h-6" />} href="/alerts" />
          <NavItem icon={<MapTrifold className="w-6 h-6" />} href="/map" />
          <NavItem icon={<Pulse className="w-6 h-6" />} href="/monitoring" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-24 p-8 lg:p-12 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2 capitalize">Flood Simulation</h1>
            <p className="text-zinc-400">Run predictive flood models with real-time LiDAR terrain data</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-zinc-900 rounded-[2rem] border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white">
              <ClockCounterClockwise className="w-4 h-4 mr-2" />
              History
            </Button>
            <Button variant="outline" className="bg-zinc-900 rounded-[2rem]  border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white">
              <FloppyDisk className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button className="bg-blue-600 rounded-[2rem] hover:bg-blue-700 text-white font-medium">
              <Play className="w-4 h-4 mr-2" weight="fill" />
              Run Simulation
            </Button>
          </div>
        </header>

        {/* Quick Scenarios */}
        <div className="mb-8 p-6 bg-zinc-900/30 border border-zinc-800 rounded-[2rem]">
          <h3 className="text-zinc-400 text-sm font-medium mb-4 capitalize">Quick Scenarios</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <ScenarioCard 
              title="Monsoon Peak" 
              details="120mm • 48h" 
              active 
            />
            <ScenarioCard 
              title="Cloudburst" 
              details="150mm • 6h" 
            />
            <ScenarioCard 
              title="Dam Release" 
              details="30mm • 24h" 
            />
            <ScenarioCard 
              title="2019 Flood" 
              details="100mm • 72h" 
            />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard 
            icon={<Waves className="w-6 h-6 text-white" />}
            label="Max Water Depth"
            value="2.4"
            unit="meters"
            highlight
          />
          <MetricCard 
            icon={<Clock className="w-6 h-6 text-white" />}
            label="Time to Peak"
            value="6.5"
            unit="hours"
          />
          <MetricCard 
            icon={<MapPinArea className="w-6 h-6 text-white" />}
            label="Affected Area"
            value="12.8"
            unit="km²"
          />
          <MetricCard 
            icon={<Warning className="w-6 h-6 text-white" />}
            label="At-Risk Population"
            value="24,500"
            unit=""
          />
        </div>

        {/* Split View: Map & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Map View */}
          <div className="lg:col-span-2 relative bg-[#09101a] rounded-[2rem] border border-zinc-800 overflow-hidden min-h-[500px] group">
            {/* Map Controls */}
            <div className="absolute top-6 left-6 z-10 flex gap-2">
              <Badge className="bg-blue-600 text-white hover:bg-blue-500 cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium border-0">Terrain</Badge>
              <Badge variant="outline" className="bg-zinc-900/80 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">Satellite</Badge>
              <Badge variant="outline" className="bg-zinc-900/80 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">Flood Risk</Badge>
              <Badge variant="outline" className="bg-zinc-900/80 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">DEM</Badge>
            </div>

            {/* Map Overlay Placeholder */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Central Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 p-8 rounded-3xl text-center max-w-sm">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapTrifold className="w-8 h-8 text-blue-500" weight="fill" />
                </div>
                <h3 className="text-white text-lg font-medium mb-2">3D Map Ready</h3>
                <p className="text-zinc-400 text-sm">Mapbox GL JS integration point.<br/>Connect your LiDAR DEM data here.</p>
              </div>
            </div>

            {/* Map Markers (Mock) */}
            <div className="absolute top-1/3 left-1/4">
               <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute"></div>
               <div className="w-4 h-4 bg-red-500 rounded-full relative border-2 border-white shadow-lg"></div>
            </div>
            <div className="absolute bottom-1/3 right-1/3">
               <div className="w-3 h-3 bg-green-500 rounded-full relative border-2 border-white shadow-lg"></div>
            </div>

            {/* Right Controls (Zoom) */}
            <div className="absolute top-6 right-6 flex flex-col gap-2">
               <div className="bg-zinc-900/80 backdrop-blur p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 cursor-pointer text-zinc-300"><MagnifyingGlassPlus className="w-5 h-5" /></div>
               <div className="bg-zinc-900/80 backdrop-blur p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 cursor-pointer text-zinc-300"><MagnifyingGlassMinus className="w-5 h-5" /></div>
               <div className="bg-zinc-900/80 backdrop-blur p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 cursor-pointer text-zinc-300 mt-2"><Compass className="w-5 h-5" /></div>
               <div className="bg-zinc-900/80 backdrop-blur p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 cursor-pointer text-zinc-300"><ArrowsOutSimple className="w-5 h-5" /></div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
              <div className="bg-zinc-900/80 backdrop-blur px-4 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400 font-mono">
                Lat: 25.4358°N  |  Lng: 81.8463°E  |  Zoom: 12.5
              </div>
              <div className="bg-zinc-900/80 backdrop-blur px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-3">
                <div className="h-1 w-16 bg-zinc-600 rounded-full"></div>
                <span className="text-xs text-zinc-400 font-mono">2 km</span>
              </div>
            </div>
          </div>

          {/* Configuration Panel */}
          <Card className="bg-zinc-950 border-zinc-800 text-white rounded-[2rem] h-full">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <CloudRain className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg capitalize">Flood Simulation</h3>
                    <p className="text-xs text-zinc-500">Configure parameters</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-500 rounded-[2rem]  text-white h-8 px-4 font-medium">
                    <Play className="w-3 h-3 mr-2" weight="fill" /> Run
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 bg-zinc-900 rounded-[2rem]  border-zinc-800 text-zinc-400 hover:text-white">
                    <ArrowCounterClockwise className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 bg-zinc-900 rounded-[2rem]  border-zinc-800 text-zinc-400 hover:text-white">
                    <SlidersHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Rainfall Intensity */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <CloudRain className="w-4 h-4" /> Rainfall Intensity
                  </div>
                  <span className="font-mono text-white">{rainfall[0]} mm/hr</span>
                </div>
                <Slider 
                  defaultValue={[50]} 
                  max={150} 
                  step={1} 
                  value={rainfall}
                  onValueChange={setRainfall}
                  className="py-2"
                />
                <div className="flex justify-between text-[10px] text-zinc-600 font-medium uppercase tracking-wider">
                  <span>Light</span>
                  <span>Moderate</span>
                  <span>Heavy</span>
                  <span>Extreme</span>
                </div>
              </div>

              {/* Dam Release */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <Waves className="w-4 h-4" /> Dam Release Rate
                  </div>
                  <span className="font-mono text-white">{damRelease[0]}%</span>
                </div>
                <Slider 
                  defaultValue={[30]} 
                  max={100} 
                  step={1} 
                  value={damRelease}
                  onValueChange={setDamRelease}
                  className="py-2"
                />
              </div>

              {/* Soil Saturation */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <Drop className="w-4 h-4" /> Soil Saturation Level
                  </div>
                  <span className="font-mono text-white">{saturation[0]}%</span>
                </div>
                <Slider 
                  defaultValue={[65]} 
                  max={100} 
                  step={1} 
                  value={saturation}
                  onValueChange={setSaturation}
                  className="py-2"
                />
              </div>

              {/* Forecast Duration */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <Clock className="w-4 h-4" /> Forecast Duration
                  </div>
                  <span className="font-mono text-white">{duration[0]} hours</span>
                </div>
                <Slider 
                  defaultValue={[24]} 
                  max={72} 
                  step={1} 
                  value={duration}
                  onValueChange={setDuration}
                  className="py-2"
                />
              </div>

              <div className="pt-4 border-t border-zinc-800/50 space-y-4">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Visualization Layers</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Show Flow Velocity</span>
                  <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Show Water Depth</span>
                  <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Zone Analysis Table */}
        <div className="rounded-[2rem] border border-zinc-800 overflow-hidden bg-zinc-950/50">
          <div className="p-6 border-b border-zinc-800">
            <h3 className="text-lg font-medium text-white">Zone-by-Zone Analysis</h3>
            <p className="text-sm text-zinc-500">Predicted flood impact per zone</p>
          </div>
          <Table>
            <TableHeader className="bg-zinc-900/50">
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="text-zinc-500 pl-6">Zone</TableHead>
                <TableHead className="text-zinc-500">Predicted Depth</TableHead>
                <TableHead className="text-zinc-500">Flow Velocity</TableHead>
                <TableHead className="text-zinc-500">Risk Level</TableHead>
                <TableHead className="text-zinc-500 text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <ZoneRow 
                name="Sector 7" 
                depth="2.4m" 
                velocity="1.8 m/s" 
                risk="Critical" 
                riskColor="text-red-500"
              />
              <ZoneRow 
                name="Industrial Area" 
                depth="1.2m" 
                velocity="0.9 m/s" 
                risk="High" 
                riskColor="text-orange-500"
              />
              <ZoneRow 
                name="Residential Block A" 
                depth="0.6m" 
                velocity="0.4 m/s" 
                risk="Moderate" 
                riskColor="text-yellow-500"
              />
              <ZoneRow 
                name="Agricultural Zone" 
                depth="0.3m" 
                velocity="0.2 m/s" 
                risk="Low" 
                riskColor="text-green-500"
              />
            </TableBody>
          </Table>
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
        ${active ? "text-white" : "text-zinc-600 hover:text-white hover:bg-zinc-900"}
      `}>
        {active && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
        )}
        {icon}
      </div>
    </Link>
  );
}

function ScenarioCard({ title, details, active = false }: { title: string, details: string, active?: boolean }) {
  return (
    <div className={`
      flex-shrink-0 p-4 rounded-2xl border cursor-pointer transition-all w-40
      ${active 
        ? "bg-blue-600/10 border-blue-600/50" 
        : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"}
    `}>
      <h4 className={`font-medium text-sm mb-1 ${active ? "text-blue-400" : "text-zinc-300"}`}>{title}</h4>
      <p className="text-xs text-zinc-500">{details}</p>
    </div>
  );
}

function MetricCard({ icon, label, value, unit, highlight = false }: { icon: React.ReactNode, label: string, value: string, unit: string, highlight?: boolean }) {
  return (
    <Card className={`
      relative overflow-hidden transition-all duration-300 hover:scale-[1.02] rounded-[2rem]
      ${highlight ? "bg-blue-600 text-white border-0" : "bg-zinc-900 border border-zinc-800 text-white"}
    `}>
      <CardContent className="px-8 pb-8 pt-8">
        <div className="flex flex-row items-start justify-between mb-4">
          <p className={`text-base font-normal ${highlight ? "text-blue-100" : "text-zinc-400"}`}>{label}</p>
          <div className={`p-3 rounded-full backdrop-blur-md ${highlight ? "bg-white/30" : "bg-zinc-800"}`}>
            {icon}
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-5xl font-medium tracking-tight">{value}</span>
          <span className={`text-sm ${highlight ? "text-blue-100" : "text-zinc-400"}`}>{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function ZoneRow({ name, depth, velocity, risk, riskColor }: { name: string, depth: string, velocity: string, risk: string, riskColor: string }) {
  return (
    <TableRow className="border-zinc-800 hover:bg-zinc-900/30">
      <TableCell className="font-medium text-white pl-6 py-4">{name}</TableCell>
      <TableCell className="text-zinc-300 font-mono">{depth}</TableCell>
      <TableCell className="text-zinc-300 font-mono">{velocity}</TableCell>
      <TableCell className={`font-medium ${riskColor}`}>{risk}</TableCell>
      <TableCell className="text-right pr-6">
        <Button variant="ghost" className="text-blue-600 hover:text-blue-500 hover:bg-blue-600/10 h-8 text-xs">
          View on map <ArrowRight className="ml-1 w-3 h-3" />
        </Button>
      </TableCell>
    </TableRow>
  );
}

// Icons needed for Map controls
function MagnifyingGlassPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" {...props}>
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm104,0a8,8,0,0,1-8,8H120v16a8,8,0,0,1-16,0V120H88a8,8,0,0,1,0-16h16V88a8,8,0,0,1,16,0v16h16A8,8,0,0,1,144,112Z"></path>
    </svg>
  );
}

function MagnifyingGlassMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" {...props}>
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm96,0a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,112Z"></path>
    </svg>
  );
}

function Compass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" {...props}>
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-133.66a8,8,0,0,0-10.4-2.24L104.79,111.6a8,8,0,0,0-4.19,4.19L71.9,174.29a8,8,0,0,0,10.4,10.4l58.51-31.49a8,8,0,0,0,4.19-4.19l28.66-58.49A8,8,0,0,0,173.66,82.34Zm-26.49,63.13L106.68,167.3l21.83-40.49,40.49-21.83Z"></path>
    </svg>
  );
}

function ArrowsOutSimple(props: React.SVGProps<SVGSVGElement>) {
  return (
     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" {...props}>
      <path d="M216,48V96a8,8,0,0,1-16,0V56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM96,200H56v-40a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16Zm112-48a8,8,0,0,0-8,8v40h-40a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM48,104a8,8,0,0,0,8-8V56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8v48A8,8,0,0,0,48,104Z"></path>
    </svg>
  )
}
