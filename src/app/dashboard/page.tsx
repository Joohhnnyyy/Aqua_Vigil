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
  MagnifyingGlass, 
  Waves,
  Thermometer,
  Wind,
  WarningCircle
} from "@phosphor-icons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

export default function DashboardPage() {
  // Mock Data for Weather
  const weatherData = [
    { day: "Mon", temperature: 28, rainfall: 0 },
    { day: "Tue", temperature: 27, rainfall: 5 },
    { day: "Wed", temperature: 26, rainfall: 10 },
    { day: "Thu", temperature: 25, rainfall: 3 },
    { day: "Fri", temperature: 24, rainfall: 0 },
    { day: "Sat", temperature: 23, rainfall: 15 },
    { day: "Sun", temperature: 22, rainfall: 2 },
  ];

  // Mock Data for River Health
  const riverHealthData = [
    { time: "00:00", value: 85 },
    { time: "04:00", value: 82 },
    { time: "08:00", value: 88 },
    { time: "12:00", value: 92 },
    { time: "16:00", value: 89 },
    { time: "20:00", value: 84 },
    { time: "23:59", value: 86 },
  ];

  const metrics = [
    {
      title: "Water Level",
      value: "12.4m",
      change: "+0.2m",
      icon: <Waves className="w-6 h-6 text-blue-400" />,
      highlight: false
    },
    {
      title: "Flow Rate",
      value: "450",
      unit: "m³/s",
      change: "-12",
      icon: <Wind className="w-6 h-6 text-cyan-400" />,
      highlight: false
    },
    {
      title: "Turbidity",
      value: "38",
      unit: "NTU",
      change: "+2.1",
      icon: <Drop className="w-6 h-6 text-yellow-400" />,
      highlight: false
    },
    {
      title: "Active Alerts",
      value: "3",
      change: "Critical",
      icon: <WarningCircle className="w-6 h-6 text-red-400" />,
      highlight: true
    }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="w-24 flex flex-col items-center py-8 border-r border-zinc-800 bg-black fixed h-full z-10">
        <div className="mb-8 p-3 bg-zinc-900 rounded-2xl">
          <RocketLaunch className="w-6 h-6 text-white" weight="fill" />
        </div>
        
        <nav className="flex flex-col gap-6 flex-1 w-full items-center">
          <NavItem icon={<House className="w-6 h-6" />} href="/" />
          <NavItem icon={<SquaresFour className="w-6 h-6" />} href="/dashboard" active />
          <NavItem icon={<CloudRain className="w-6 h-6" />} href="/flood-simulation" />
          <NavItem icon={<Drop className="w-6 h-6" />} href="/river-health" />
          <NavItem icon={<Mountains className="w-6 h-6" />} href="/erosion" />
          <NavItem icon={<Warning className="w-6 h-6" />} href="/alerts" />
          <NavItem icon={<MapTrifold className="w-6 h-6" />} href="/map" />
          <NavItem icon={<Pulse className="w-6 h-6" />} href="/monitoring" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-24 p-8 lg:p-12 overflow-y-auto">
        {/* Top Bar */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-light tracking-tight mb-2 capitalize">Dashboard</h1>
            <p className="text-zinc-400">Ganga Basin Monitoring System</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative w-64 hidden md:block">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <Input 
                placeholder="Search location..."  
                className="pl-9 bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500 rounded-full h-10 focus-visible:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border border-zinc-800">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, i) => (
            <Card 
              key={i} 
              className={`border-zinc-800 bg-zinc-900/30 text-white rounded-[1.5rem] overflow-hidden ${
                metric.highlight ? "ring-1 ring-red-500/20 bg-red-500/5" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-xl bg-zinc-900/50 border border-zinc-800`}>
                    {metric.icon}
                  </div>
                  {metric.highlight && (
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  )}
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">{metric.title}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-medium">{metric.value}</span>
                    {metric.unit && <span className="text-zinc-500 text-sm">{metric.unit}</span>}
                  </div>
                  <p className={`text-xs mt-2 ${
                    metric.change.includes("+") ? "text-green-400" : 
                    metric.change.includes("-") ? "text-blue-400" : "text-red-400"
                  }`}>
                    {metric.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* River Health Chart */}
          <Card className="lg:col-span-2 bg-zinc-900/30 border-zinc-800 text-white rounded-[2rem]">
            <CardHeader className="flex flex-row items-center justify-between px-8 pt-8">
              <CardTitle className="text-lg font-normal text-zinc-300">River Health Metrics</CardTitle>
              <Badge variant="outline" className="bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800 cursor-pointer px-3 py-1 rounded-full">
                Live Data
              </Badge>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={riverHealthData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="#333" strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#71717a', fontSize: 12 }} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#71717a', fontSize: 12 }} 
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                      itemStyle={{ color: '#e4e4e7' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Weather Forecast (The requested implementation) */}
          <Card className="lg:col-span-1 bg-zinc-900/30 border-zinc-800 text-white rounded-[2rem]">
            <CardHeader className="flex flex-row items-center justify-between px-8 pt-8">
              <CardTitle className="text-lg font-normal text-zinc-300">Weather Forecast</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weatherData}>
                    <CartesianGrid vertical={false} stroke="#333" strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#71717a', fontSize: 12 }} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#71717a', fontSize: 12 }} 
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                      itemStyle={{ color: '#e4e4e7' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="#f59e0b" 
                      strokeWidth={2} 
                      dot={{ fill: '#f59e0b', r: 4 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rainfall" 
                      stroke="#0ea5e9" 
                      strokeWidth={2} 
                      dot={{ fill: '#0ea5e9', r: 4 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span>Temp (°C)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>Rainfall (mm)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, active = false, href }: { icon: React.ReactNode; active?: boolean; href: string }) {
  return (
    <Link href={href}>
      <div className={`
        relative p-3 rounded-xl cursor-pointer transition-all duration-300 group
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
