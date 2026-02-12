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
  MagnifyingGlass, 
  Waves,
  Thermometer,
  Wind,
  WarningCircle,
  CaretRight,
  X,
  Play,
  Siren,
  FileText,
  DownloadSimple,
  ShareNetwork,
  ArrowsClockwise
} from "@phosphor-icons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AppSidebar from "@/components/AppSidebar";
import { useSidebar } from "@/components/SidebarProvider";
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
  const { isCollapsed: isSidebarCollapsed, toggleSidebar } = useSidebar();

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
      icon: <Waves className="w-6 h-6 text-white" />,
    },
    {
      title: "Flow Rate",
      value: "450",
      unit: "m³/s",
      change: "-12",
      icon: <Wind className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Turbidity",
      value: "38",
      unit: "NTU",
      change: "+2.1",
      icon: <Drop className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Active Alerts",
      value: "0",
      change: "new",
      icon: <WarningCircle className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Erosion Zones",
      value: "3",
      change: "critical",
      unit: "critical",
      icon: <Mountains className="w-6 h-6 text-orange-400" />,
    },
    {
      title: "Temperature",
      value: "25",
      change: "Haze",
      unit: "°C",
      icon: <Thermometer className="w-6 h-6 text-cyan-400" />,
    }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <AppSidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={toggleSidebar} 
      />

      {/* Main Content */}
      <main className={`flex-1 p-8 lg:p-12 overflow-y-auto transition-all duration-300 ${isSidebarCollapsed ? "ml-24" : "ml-64"}`}>
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

        {/* Alert Banner */}
        <div className="mb-8 p-4 rounded-[1.5rem] bg-red-900/10 border border-red-900/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="flex items-start gap-4 z-10">
            <div className="p-3 rounded-full bg-red-500/20 text-red-500">
              <Warning className="w-6 h-6" weight="fill" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-red-500">Flash Flood Warning</h3>
                <span className="text-zinc-500 text-sm">21/1/2026, 11:00:09 AM</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Rapid water level rise detected. Expected depth: 2.4m in next 2 hours. • Ganga Basin - Sector 7
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 z-10 self-end md:self-center">
            <Badge variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700 cursor-pointer">
              +4 more
            </Badge>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full">
              <CaretRight className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <Button className="bg-blue-600 hover:bg-cyan-600 text-white rounded-xl font-medium px-6">
            <Play className="w-4 h-4 mr-2" weight="fill" />
            Run Simulation
          </Button>
          
          <Button variant="outline" className="bg-transparent border-red-500/20 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl px-6">
            <Siren className="w-4 h-4 mr-2" />
            Trigger Alert
          </Button>
          
          <Button variant="secondary" className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl px-6">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
          
          <Button variant="secondary" className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl px-6">
            <DownloadSimple className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          
          <Button variant="secondary" className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl px-6">
            <ShareNetwork className="w-4 h-4 mr-2" />
            Share View
          </Button>
          
          <Button variant="secondary" className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl px-6">
            <ArrowsClockwise className="w-4 h-4 mr-2" />
            Sync Data
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, i) => (
            <Card 
              key={i} 
              className="rounded-[2rem] overflow-hidden min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] bg-zinc-900/30 text-white border border-zinc-800 hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/20 group"
            >
              <CardContent className="h-full flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-base text-zinc-400 group-hover:text-blue-100 transition-colors">{metric.title}</p>
                  <div className="p-3 rounded-full backdrop-blur-md bg-zinc-800/50 border border-zinc-700/50 group-hover:bg-white/20 group-hover:border-white/10 text-white transition-colors">
                    {metric.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-semibold tracking-tight text-white">{metric.value}</span>
                    {metric.unit && <span className="text-lg font-medium text-zinc-500 group-hover:text-blue-100 transition-colors">{metric.unit}</span>}
                  </div>
                  <p className={`text-sm font-medium transition-colors group-hover:text-blue-50 ${
                    metric.change.includes("+") ? "text-green-400" : 
                    metric.change.includes("-") ? "text-blue-400" : 
                    metric.change === "new" ? "text-red-400" : "text-zinc-500"
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
