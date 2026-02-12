"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  VideoCamera,
  Export,
  WaveSine,
  Eye,
  Flask,
  Thermometer,
  WarningCircle,
  ArrowsOutSimple,
  MagnifyingGlassPlus,
  MagnifyingGlassMinus,
  Compass,
  MapTrifold
} from "@phosphor-icons/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppSidebar from "@/components/AppSidebar";
import { useSidebar } from "@/components/SidebarProvider";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  LineChart
} from "recharts";

export default function RiverHealthPage() {
  const { isCollapsed: isSidebarCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className="flex min-h-screen bg-black text-zinc-50 font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <AppSidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={toggleSidebar} 
      />

      {/* Main Content */}
      <main className={`flex-1 p-8 lg:p-12 overflow-y-auto transition-all duration-300 ${isSidebarCollapsed ? "ml-24" : "ml-64"}`}>
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2 capitalize">River Health Monitor</h1>
            <p className="text-zinc-400">AI-powered water quality analysis and pollution detection</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] border-0 shadow-sm shadow-blue-900/20">
              <VideoCamera className="w-4 h-4 mr-2" />
              Live Feed
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] border-0 shadow-sm shadow-blue-900/20">
              <Export className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </header>

        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          <MetricCard 
            icon={<WaveSine className="w-5 h-5 text-yellow-500" />}
            label="Dissolved Oxygen"
            value="6.0"
            unit="mg/L"
            trend="-0.8"
            trendColor="text-red-500"
            color="border-yellow-500/20"
          />
          <MetricCard 
            icon={<Eye className="w-5 h-5 text-blue-500" />}
            label="Turbidity"
            value="38"
            unit="NTU"
            trend="+5"
            trendColor="text-green-500"
            color="border-blue-500/20"
          />
          <MetricCard 
            icon={<Flask className="w-5 h-5 text-green-500" />}
            label="pH Level"
            value="7.2"
            unit=""
            trend="stable"
            trendColor="text-zinc-500"
            color="border-green-500/20"
          />
          <MetricCard 
            icon={<Thermometer className="w-5 h-5 text-blue-500" />}
            label="Water Temp"
            value="26"
            unit="°C"
            trend="+1.5°C"
            trendColor="text-green-500"
            color="border-blue-500/20"
          />
          <MetricCard 
            icon={<WarningCircle className="w-5 h-5 text-red-500" />}
            label="Pollution Events"
            value="3"
            unit=""
            trend="+2 today"
            trendColor="text-green-500"
            color="border-red-500/20"
          />
        </div>

        {/* Middle Section: Map & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 3D Map */}
          <div className="relative bg-[#09101a] rounded-[2rem] border border-zinc-800 overflow-hidden min-h-[400px] group">
            {/* Map Controls */}
            <div className="absolute top-6 left-6 z-10 flex gap-2">
              <Badge className="bg-blue-600 text-white hover:bg-blue-500 cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium border-0">Terrain</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">Satellite</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">Flood Risk</Badge>
              <Badge variant="outline" className="bg-zinc-900/90 backdrop-blur text-zinc-300 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-4 py-1.5 rounded-full">DEM</Badge>
            </div>

            {/* Map Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 p-8 rounded-[2rem] text-center max-w-sm z-10">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapTrifold className="w-8 h-8 text-blue-600" weight="fill" />
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

          {/* Health Metrics Chart */}
          <Card className="bg-[#09101a] border border-zinc-800 text-white rounded-[2rem] overflow-hidden shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium">River Health Metrics</CardTitle>
              <p className="text-sm text-zinc-400">7-day forecast & history</p>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={healthMetricsData}>
                    <defs>
                      <linearGradient id="colorDischarge" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorTurbidity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#eab308" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="day" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="discharge" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorDischarge)" />
                    <Area type="monotone" dataKey="turbidity" stroke="#eab308" strokeWidth={2} fillOpacity={1} fill="url(#colorTurbidity)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium">
                 <div className="flex items-center gap-2 text-blue-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    Discharge (m³/s)
                 </div>
                 <div className="flex items-center gap-2 text-yellow-400">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    Turbidity (NTU)
                 </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
                  <p className="text-xs text-zinc-500 mb-1">Current Discharge</p>
                  <p className="text-xl font-mono text-blue-400">0 m³/s</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
                  <p className="text-xs text-zinc-500 mb-1">Avg Turbidity</p>
                  <p className="text-xl font-mono text-yellow-400">~38 NTU</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
                  <p className="text-xs text-zinc-500 mb-1">pH Level</p>
                  <p className="text-xl font-mono text-green-400">~7.0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section: Pollution Params & Events */}
        <div className="space-y-6">
          {/* Pollution Parameters */}
          <Card className="bg-[#09101a] border border-zinc-800 text-white rounded-[2rem] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Pollution Parameters</CardTitle>
              <p className="text-sm text-zinc-400">BOD, COD, and Dissolved Oxygen levels</p>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={pollutionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="time" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }}
                    />
                    <Line type="step" dataKey="bod" stroke="#ef4444" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0 }} />
                    <Line type="step" dataKey="do" stroke="#22c55e" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
                
                {/* Custom Tooltip Overlay Mockup (Fixed Position as per design) */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-zinc-800 p-3 rounded-lg text-xs shadow-md">
                   <div className="text-zinc-400 mb-1">00:00</div>
                   <div className="text-red-400 font-mono mb-1">BOD (mg/L) : 250</div>
                   <div className="text-green-400 font-mono">DO (mg/L) : 5.9</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detected Pollution Events */}
          <Card className="bg-[#09101a] border-0 text-zinc-900 rounded-[2rem] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white font-medium">Detected Pollution Events</CardTitle>
                <p className="text-sm text-zinc-500">AI-detected anomalies from satellite imagery</p>
              </div>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">View all</Button>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-zinc-100">
                 <PollutionEventRow 
                   title="Industrial Discharge"
                   location="Sector 4"
                   severity="High"
                   severityColor="text-red-500"
                   time="14:32"
                   dotColor="bg-red-500"
                 />
                 <PollutionEventRow 
                   title="Agricultural Runoff"
                   location="Delta Zone"
                   severity="Moderate"
                   severityColor="text-yellow-500"
                   time="12:15"
                   dotColor="bg-yellow-500"
                 />
                 <PollutionEventRow 
                   title="Sewage Overflow"
                   location="Urban Block B"
                   severity="High"
                   severityColor="text-red-500"
                   time="09:45"
                   dotColor="bg-red-500"
                 />
               </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

// Data
const healthMetricsData = [
  { day: 'Sun', discharge: 10, turbidity: 24 },
  { day: 'Mon', discharge: 15, turbidity: 28 },
  { day: 'Tue', discharge: 20, turbidity: 22 },
  { day: 'Wed', discharge: 18, turbidity: 21 },
  { day: 'Thu', discharge: 22, turbidity: 23 },
  { day: 'Fri', discharge: 25, turbidity: 21 },
  { day: 'Sat', discharge: 28, turbidity: 25 },
];

const pollutionData = [
  { time: '06:00', bod: 250, do: 6 },
  { time: '09:00', bod: 250, do: 6.2 },
  { time: '12:00', bod: 250, do: 6.5 },
  { time: '15:00', bod: 250, do: 6.3 },
  { time: '18:00', bod: 250, do: 6.1 },
  { time: '21:00', bod: 250, do: 5.8 },
  { time: '00:00', bod: 250, do: 5.9 },
];

// Components
function MetricCard({ icon, label, value, unit, trend, trendColor, color }: { icon: React.ReactNode, label: string, value: string, unit: string, trend: string, trendColor: string, color?: string }) {
  return (
    <Card className={`
      relative overflow-hidden transition-all duration-300 hover:scale-[1.02] rounded-[2rem] py-0
      bg-zinc-900/30 text-white border border-zinc-800
      hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/20
      group
    `}>
      <CardContent className="p-8 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-full backdrop-blur-md transition-colors bg-zinc-900 border border-zinc-800 group-hover:bg-white/20 group-hover:border-white/10`}>
            {icon}
          </div>
          <Badge variant="outline" className={`border-0 px-3 py-1 rounded-full transition-colors bg-zinc-900 text-zinc-400 border border-zinc-800 group-hover:bg-blue-500 group-hover:text-white`}>
            {trend}
          </Badge>
        </div>
        <div>
          <p className={`text-base font-medium mb-2 transition-colors text-zinc-400 group-hover:text-blue-100`}>{label}</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-4xl font-semibold tracking-tight">{value}</span>
            <span className={`text-sm font-medium transition-colors text-zinc-500 group-hover:text-blue-100`}>{unit}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PollutionEventRow({ title, location, severity, severityColor, time, dotColor }: { title: string, location: string, severity: string, severityColor: string, time: string, dotColor: string }) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
        <div>
          <h4 className="text-sm font-medium text-zinc-900">{title}</h4>
          <p className="text-xs text-zinc-500">{location}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-xs font-medium ${severityColor}`}>{severity}</p>
        <p className="text-xs text-zinc-500">{time}</p>
      </div>
    </div>
  );
}
