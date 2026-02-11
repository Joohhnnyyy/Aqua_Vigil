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
  Scan,
  DownloadSimple,
  TrendDown,
  CalendarCheck,
  Ruler,
  WarningCircle,
  MagnifyingGlassPlus,
  MagnifyingGlassMinus,
  Compass,
  ArrowsOutSimple,
  ArrowsLeftRight,
  Stack
} from "@phosphor-icons/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ErosionPage() {
  const [comparisonValue, setComparisonValue] = React.useState(50);

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
          <NavItem icon={<Mountains className="w-6 h-6" />} href="/erosion" active />
          <NavItem icon={<Warning className="w-6 h-6" />} href="/alerts" />
          <NavItem icon={<MapTrifold className="w-6 h-6" />} href="/map" />
          <NavItem icon={<Pulse className="w-6 h-6" />} href="/monitoring" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-24 p-8 lg:p-12 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2">Erosion Tracking</h1>
            <p className="text-zinc-400">LiDAR-based riverbank erosion monitoring with centimeter accuracy</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-zinc-900 border-zinc-800 rounded-[2rem] text-zinc-300 hover:bg-zinc-800 hover:text-white shadow-sm">
              <Scan className="w-4 h-4 mr-2" />
              New Scan
            </Button>
            <Button variant="outline" className="bg-zinc-900 border-zinc-800 rounded-[2rem] text-zinc-300 hover:bg-zinc-800 hover:text-white shadow-sm">
              <DownloadSimple className="w-4 h-4 mr-2" />
              Export DEM
            </Button>
          </div>
        </header>

        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard 
            icon={<TrendDown className="w-5 h-5 text-red-500" />}
            label="Total Erosion (30d)"
            value="-5.2"
            unit="meters avg"
            trend="-2.1m"
            highlight={true}
            trendColor="text-red-500"
            color="border-red-500/20"
          />
          <MetricCard 
            icon={<Warning className="w-5 h-5 text-red-500" />}
            label="Critical Zones"
            value="2"
            unit=""
            color="border-red-500/20"
          />
          <MetricCard 
            icon={<CalendarCheck className="w-5 h-5 text-blue-500" />}
            label="Last LiDAR Scan"
            value="2"
            unit="hours ago"
            color="border-blue-500/20"
          />
          <MetricCard 
            icon={<Ruler className="w-5 h-5 text-green-500" />}
            label="Scan Resolution"
            value="10"
            unit="cm"
            color="border-green-500/20"
          />
        </div>

        {/* Middle Section: Map & List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* 3D Map */}
          <div className="lg:col-span-2 relative bg-[#09101a] rounded-[2rem] border border-zinc-800 overflow-hidden min-h-[400px] group">
            {/* Map Controls */}
            <div className="absolute top-6 left-6 z-10 flex gap-2">
              <Badge className="bg-blue-600 text-white hover:bg-blue-500 cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium border-0">Terrain</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white cursor-pointer px-4 py-1.5 rounded-full">Satellite</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white cursor-pointer px-4 py-1.5 rounded-full">Flood Risk</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white cursor-pointer px-4 py-1.5 rounded-full">DEM</Badge>
            </div>

            {/* Map Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 p-8 rounded-[2rem] text-center max-w-sm z-10">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Stack className="w-8 h-8 text-blue-600" weight="fill" />
                </div>
                <h3 className="text-white text-lg font-medium mb-2">3D Map Ready</h3>
                <p className="text-zinc-400 text-sm">Mapbox GL JS integration point.<br/>Connect your LiDAR DEM data here.</p>
              </div>
            </div>

            {/* Right Controls */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
               <div className="bg-zinc-900/90 backdrop-blur p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer text-zinc-400 hover:text-white"><MagnifyingGlassPlus className="w-5 h-5" /></div>
               <div className="bg-zinc-900/90 backdrop-blur p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer text-zinc-400 hover:text-white"><MagnifyingGlassMinus className="w-5 h-5" /></div>
               <div className="bg-zinc-900/90 backdrop-blur p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer text-zinc-400 hover:text-white mt-2"><Compass className="w-5 h-5" /></div>
               <div className="bg-zinc-900/90 backdrop-blur p-2 rounded-full border border-zinc-700 hover:bg-zinc-800 cursor-pointer text-zinc-400 hover:text-white"><ArrowsOutSimple className="w-5 h-5" /></div>
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

          {/* Erosion Monitoring List */}
          <Card className=" bg-zinc-950 border-zinc-800 text-white rounded-[2rem] h-full shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-800 rounded-[2rem]">
                  <Mountains className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <CardTitle className="text-white font-medium">Erosion Monitoring</CardTitle>
                  <p className="text-xs text-zinc-500">LiDAR-based tracking</p>
                </div>
              </div>
              <span className="text-xs text-zinc-500">Last scan: 2h ago</span>
            </CardHeader>
            <CardContent className="space-y-3">
              <ErosionItem 
                name="Sector 7 - North Bank" 
                risk="Critical" 
                riskColor="text-red-500" 
                borderColor="border-red-500/20"
                bg="bg-red-500/10"
                erosion="-2.4m" 
                time="2h ago" 
              />
              <ErosionItem 
                name="Yamuna Confluence" 
                risk="High" 
                riskColor="text-orange-500" 
                borderColor="border-orange-500/20"
                bg="bg-orange-500/10"
                erosion="-1.8m" 
                time="4h ago" 
              />
              <ErosionItem 
                name="Delta Region A" 
                risk="Moderate" 
                riskColor="text-yellow-500" 
                borderColor="border-yellow-500/20"
                bg="bg-yellow-500/10"
                erosion="-0.6m" 
                time="6h ago" 
              />
              <ErosionItem 
                name="Upper Basin" 
                risk="Low" 
                riskColor="text-green-500" 
                borderColor="border-green-500/20"
                bg="bg-green-500/10"
                erosion="-0.2m" 
                time="8h ago" 
              />
              
              <div className="pt-4 mt-4 border-t border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-500">Critical zones</span>
                <span className="text-red-500 font-medium">2</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500">Total erosion (30d)</span>
                <span className="text-white font-medium">-5.2m avg</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Erosion Trend Chart */}
        <Card className="bg-zinc-950 border-zinc-800 text-white rounded-[2rem] mb-8 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Erosion Trend (2024)</CardTitle>
            <p className="text-sm text-zinc-500">Cumulative bank erosion by zone</p>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={erosionTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="month" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }}
                    itemStyle={{ color: '#fafafa' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="Sector 7" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="Yamuna Confluence" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="Delta Region" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Satellite Bank Line Detection */}
        <Card className="bg-zinc-950 border-zinc-800 text-white rounded-[2rem] mb-8 overflow-hidden shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between bg-zinc-900/50">
            <div>
              <div className="flex items-center gap-2 mb-1">
                 <Stack className="w-5 h-5 text-blue-500" />
                 <CardTitle className="text-lg font-medium">Satellite Bank Line Detection</CardTitle>
              </div>
              <p className="text-sm text-zinc-500">Compare satellite imagery to detect riverbank shifts (Powered by NASA GIBS)</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2">
                 <span className="text-xs text-zinc-500">Start Date</span>
                 <div className="bg-zinc-900 border border-zinc-700 rounded-[2rem] px-3 py-1.5 text-sm font-mono text-zinc-300">15/06/2023</div>
               </div>
               <ArrowsLeftRight className="text-zinc-500" />
               <div className="flex items-center gap-2">
                 <span className="text-xs text-zinc-500">End Date</span>
                 <div className="bg-zinc-900 border border-zinc-700 rounded-[2rem] px-3 py-1.5 text-sm font-mono">15/06/2024</div>
               </div>
               <Button size="sm" className="bg-zinc-800 hover:bg-zinc-700 rounded-[2rem] text-white ml-2">
                 <Scan className="w-3 h-3 mr-2" /> Analyze Shift
               </Button>
            </div>
          </CardHeader>
          <div className="relative h-[400px] w-full bg-zinc-900 select-none group">
             {/* Base Image (After) */}
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ 
                 backgroundImage: 'url(https://mt1.google.com/vt/lyrs=s&x=5300&y=3200&z=13)', // Mock Satellite Image 2
                 filter: 'grayscale(20%) sepia(10%)'
               }}
             />
             <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded text-xs font-mono z-20">2024-06-15</div>

             {/* Overlay Image (Before) - Clipped */}
             <div 
                className="absolute inset-0 bg-cover bg-center border-r-2 border-blue-500 z-10"
                style={{ 
                  width: `${comparisonValue}%`,
                  backgroundImage: 'url(https://mt1.google.com/vt/lyrs=s&x=5301&y=3200&z=13)', // Mock Satellite Image 1 (Different)
                  filter: 'grayscale(40%) contrast(1.1)'
                }}
             >
                <div className="absolute top-4 left-4 bg-black/70 px-2 py-1 rounded text-xs font-mono">2023-06-15</div>
             </div>

             {/* Slider Handle */}
             <div 
               className="absolute top-0 bottom-0 w-10 -ml-5 z-30 cursor-ew-resize flex items-center justify-center group-hover:opacity-100"
               style={{ left: `${comparisonValue}%` }}
             >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                  <ArrowsLeftRight className="text-white w-5 h-5" weight="bold" />
                </div>
             </div>
             
             {/* Invisible Range Input for Interaction */}
             <input 
               type="range" 
               min="0" 
               max="100" 
               value={comparisonValue}
               onChange={(e) => setComparisonValue(parseInt(e.target.value))}
               className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
             />

             {/* Disclaimer */}
             <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur border-t border-zinc-800 p-3 flex items-center gap-3 z-20">
                <WarningCircle className="text-blue-500 w-5 h-5" />
                <p className="text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-300">Note:</span> Using NASA MODIS/VIIRS data for demonstration. For precision bank line monitoring (&lt;10m accuracy), integration with <span className="text-white font-medium">Sentinel-2 (ESA)</span> or <span className="text-white font-medium">Commercial LiDAR</span> is required. Current view shows Level 9 approximate resolution.
                </p>
             </div>
          </div>
        </Card>

        {/* LiDAR Scan History */}
        <Card className="bg-zinc-950 border-zinc-800 text-white rounded-[2rem] shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-zinc-800 rounded-lg">
                 <Stack className="w-5 h-5 text-white" />
               </div>
               <div>
                 <CardTitle className="text-lg font-medium">LiDAR Scan History</CardTitle>
                 <p className="text-sm text-zinc-500">Recent DEM data acquisitions</p>
               </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
             <Table>
               <TableHeader className="bg-zinc-900/50">
                 <TableRow className="border-zinc-800 hover:bg-transparent">
                   <TableHead className="text-zinc-500 pl-6">Date</TableHead>
                   <TableHead className="text-zinc-500">Resolution</TableHead>
                   <TableHead className="text-zinc-500">Coverage</TableHead>
                   <TableHead className="text-zinc-500">Status</TableHead>
                   <TableHead className="text-zinc-500 text-right pr-6">Actions</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 <ScanRow date="2024-01-15" resolution="10cm" coverage="12.5 km²" status="Processed" />
                 <ScanRow date="2024-01-10" resolution="10cm" coverage="12.5 km²" status="Processed" />
                 <ScanRow date="2024-01-05" resolution="10cm" coverage="12.5 km²" status="Processed" />
                 <ScanRow date="2024-01-01" resolution="10cm" coverage="12.5 km²" status="Processed" />
               </TableBody>
             </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

// Data
const erosionTrendData = [
  { month: 'Jan', "Sector 7": 10, "Yamuna Confluence": 20, "Delta Region": 5 },
  { month: 'Feb', "Sector 7": 20, "Yamuna Confluence": 40, "Delta Region": 10 },
  { month: 'Mar', "Sector 7": 50, "Yamuna Confluence": 80, "Delta Region": 30 },
  { month: 'Apr', "Sector 7": 120, "Yamuna Confluence": 180, "Delta Region": 80 },
  { month: 'May', "Sector 7": 280, "Yamuna Confluence": 350, "Delta Region": 150 },
  { month: 'Jun', "Sector 7": 420, "Yamuna Confluence": 750, "Delta Region": 280 },
  { month: 'Jul', "Sector 7": 580, "Yamuna Confluence": 950, "Delta Region": 380 },
  { month: 'Aug', "Sector 7": 700, "Yamuna Confluence": 1150, "Delta Region": 450 },
  { month: 'Sep', "Sector 7": 800, "Yamuna Confluence": 1300, "Delta Region": 520 },
  { month: 'Oct', "Sector 7": 850, "Yamuna Confluence": 1400, "Delta Region": 550 },
  { month: 'Nov', "Sector 7": 880, "Yamuna Confluence": 1450, "Delta Region": 580 },
  { month: 'Dec', "Sector 7": 888.6, "Yamuna Confluence": 1481, "Delta Region": 592.4 },
];

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

function MetricCard({ icon, label, value, unit, trend, trendColor, color, highlight = false }: { icon: React.ReactNode, label: string, value: string, unit: string, trend?: string, trendColor?: string, color?: string, highlight?: boolean }) {
  return (
    <Card className={`
      relative overflow-hidden transition-all duration-300 hover:scale-[1.02] rounded-[2rem]
      ${highlight ? "bg-blue-600 text-white border-0" : "bg-zinc-900 text-white border border-zinc-800"}
    `}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-full backdrop-blur-md ${highlight ? "bg-white/30" : "bg-zinc-800"}`}>
            {icon}
          </div>
          {trend && (
            <Badge variant="outline" className={`border-0 ${highlight ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-300"}`}>
              {trend}
            </Badge>
          )}
        </div>
        <div>
          <p className={`text-sm font-medium mb-1 ${highlight ? "text-blue-100" : "text-zinc-400"}`}>{label}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-semibold tracking-tight">{value}</span>
            <span className={`text-sm ${highlight ? "text-blue-100" : "text-zinc-400"}`}>{unit}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ErosionItem({ name, risk, riskColor, borderColor, bg, erosion, time }: { name: string, risk: string, riskColor: string, borderColor: string, bg: string, erosion: string, time: string }) {
  return (
    <div className={`p-4 rounded-xl border ${borderColor} ${bg}`}>
      <div className="flex justify-between items-start mb-1">
        <h4 className={`font-medium text-sm ${riskColor}`}>{name}</h4>
        <div className="text-right">
          <span className={`block font-mono text-sm ${riskColor}`}>{erosion}</span>
          <span className="text-[10px] text-zinc-500">{time}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-500">Risk:</span>
        <span className={`text-xs font-medium ${riskColor}`}>{risk}</span>
      </div>
    </div>
  );
}

function ScanRow({ date, resolution, coverage, status }: { date: string, resolution: string, coverage: string, status: string }) {
  return (
    <TableRow className="border-zinc-800 hover:bg-zinc-800/50">
      <TableCell className="font-medium text-zinc-200 pl-6 py-4">{date}</TableCell>
      <TableCell className="text-zinc-400 font-mono">{resolution}</TableCell>
      <TableCell className="text-zinc-400 font-mono">{coverage}</TableCell>
      <TableCell>
        <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">{status}</Badge>
      </TableCell>
      <TableCell className="text-right pr-6">
        <Button variant="ghost" className="text-blue-500 hover:text-blue-400 hover:bg-blue-500/10 h-8 text-xs">
          Compare
        </Button>
      </TableCell>
    </TableRow>
  );
}
