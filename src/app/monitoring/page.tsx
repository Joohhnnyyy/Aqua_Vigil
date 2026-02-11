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
  WifiHigh,
  Clock,
  Database,
  ArrowsClockwise,
  HardDrives,
  CheckCircle,
  WarningCircle,
  TerminalWindow,
  Cpu
} from "@phosphor-icons/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function MonitoringPage() {
  return (
    <div className="flex min-h-screen bg-black text-zinc-50 font-sans selection:bg-green-500/30">
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
          <NavItem icon={<MapTrifold className="w-6 h-6" />} href="/map" />
          <NavItem icon={<Pulse className="w-6 h-6" />} href="/monitoring" active />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-24 p-8 lg:p-12 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2">Live Monitoring</h1>
            <p className="text-zinc-500">Real-time system health and data pipeline status</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-3 py-1.5 h-9 rounded-full gap-2 hover:bg-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              All Systems Operational
            </Badge>
            <Button variant="outline" className="bg-zinc-900 border-zinc-800 rounded-[2rem]  text-zinc-300 hover:bg-zinc-800 hover:text-white shadow-sm">
              <ArrowsClockwise className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </header>

        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-zinc-900 border border-zinc-800 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-50"></div>
            <CardContent className="p-6 relative z-10">
              <div className="p-2 bg-green-500/10 rounded-lg w-fit mb-4 text-green-500">
                <WifiHigh className="w-6 h-6" />
              </div>
              <p className="text-zinc-400 text-sm mb-1">Active Connections</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-white">6</span>
                <span className="text-sm text-zinc-500">services</span>
              </div>
            </CardContent>
          </Card>

          <MetricCard 
            icon={<Clock className="w-6 h-6 text-cyan-500" />}
            label="Avg Latency"
            value="157"
            unit="ms"
            trend="-12ms"
            trendColor="text-red-500"
            trendIcon={<Pulse className="w-3 h-3 rotate-180" />}
            color="border-zinc-800"
          />

          <MetricCard 
            icon={<Pulse className="w-6 h-6 text-cyan-500" />}
            label="Requests/min"
            value="2,847"
            unit=""
            trend="+15%"
            trendColor="text-green-500"
            color="border-zinc-800"
          />

          <MetricCard 
            icon={<Database className="w-6 h-6 text-cyan-500" />}
            label="Data Processed"
            value="1.2"
            unit="TB today"
            color="border-zinc-800"
          />
        </div>

        {/* System Status Grid */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <HardDrives className="w-5 h-5 text-zinc-500" />
            <h2 className="text-lg font-medium text-white">System Status</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatusCard 
              name="LiDAR Data Stream"
              latency="45ms"
              lastSeen="2s ago"
              status="healthy"
            />
            <StatusCard 
              name="Satellite Feed (Sentinel-2)"
              latency="120ms"
              lastSeen="5s ago"
              status="healthy"
            />
            <StatusCard 
              name="Weather API"
              latency="85ms"
              lastSeen="3s ago"
              status="healthy"
            />
            <StatusCard 
              name="ML Prediction Engine"
              latency="230ms"
              lastSeen="1s ago"
              status="healthy"
            />
            <StatusCard 
              name="Database Cluster"
              latency="12ms"
              lastSeen="1s ago"
              status="healthy"
            />
            <StatusCard 
              name="Edge Processing Node"
              latency="450ms"
              lastSeen="15s ago"
              status="warning"
            />
          </div>
        </div>

        {/* System Throughput Chart */}
        <Card className="bg-zinc-900 border border-zinc-800 shadow-sm mb-8 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-white">System Throughput</CardTitle>
            <p className="text-sm text-zinc-400">Requests and latency over 24 hours</p>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={throughputData}>
                  <defs>
                    <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis 
                    dataKey="time" 
                    stroke="#71717a" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    interval={3}
                  />
                  <YAxis 
                    stroke="#71717a" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    domain={[0, 3200]}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="requests" 
                    stroke="#06b6d4" 
                    fillOpacity={1} 
                    fill="url(#colorRequests)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Logs */}
        <Card className="bg-zinc-900 border border-zinc-800 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between bg-zinc-900 border-b border-zinc-800 pb-4">
            <div>
              <CardTitle className="text-lg font-medium text-white">Recent Logs</CardTitle>
              <p className="text-sm text-zinc-400">Latest system events</p>
            </div>
            <Button variant="ghost" className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/30 h-8 text-sm">
              View all
            </Button>
          </CardHeader>
          <div className="divide-y divide-zinc-800">
            <LogItem 
              time="16:42:15"
              level="INFO"
              message="Flood simulation completed for Sector 7"
            />
            <LogItem 
              time="16:41:58"
              level="WARN"
              message="Edge node latency exceeded threshold (450ms)"
            />
            <LogItem 
              time="16:41:32"
              level="INFO"
              message="New LiDAR scan data received (12.5 km²)"
            />
            <LogItem 
              time="16:40:45"
              level="INFO"
              message="Weather data refreshed from OpenWeatherMap"
            />
            <LogItem 
              time="16:39:22"
              level="ERROR"
              message="Satellite feed timeout - retrying..."
            />
            <LogItem 
              time="16:39:25"
              level="INFO"
              message="Satellite feed reconnected successfully"
            />
          </div>
        </Card>

      </main>
    </div>
  );
}

// Data
const throughputData = [
  { time: '00:00', requests: 1200 },
  { time: '01:00', requests: 1100 },
  { time: '02:00', requests: 1000 },
  { time: '03:00', requests: 900 },
  { time: '04:00', requests: 850 },
  { time: '05:00', requests: 800 },
  { time: '06:00', requests: 1200 },
  { time: '07:00', requests: 1800 },
  { time: '08:00', requests: 2400 },
  { time: '09:00', requests: 2800 },
  { time: '10:00', requests: 3100 },
  { time: '11:00', requests: 3200 },
  { time: '12:00', requests: 3150 },
  { time: '13:00', requests: 3000 },
  { time: '14:00', requests: 2800 },
  { time: '15:00', requests: 2600 },
  { time: '16:00', requests: 2400 },
  { time: '17:00', requests: 2200 },
  { time: '18:00', requests: 2000 },
  { time: '19:00', requests: 1800 },
  { time: '20:00', requests: 1650 },
  { time: '21:00', requests: 1550 },
  { time: '22:00', requests: 1450 },
  { time: '23:00', requests: 1400 },
  { time: '24:00', requests: 1350 },
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

function MetricCard({ icon, label, value, unit, trend, trendColor, trendIcon, color }: { icon: React.ReactNode, label: string, value: string, unit: string, trend?: string, trendColor?: string, trendIcon?: React.ReactNode, color: string }) {
  return (
    <Card className={`bg-zinc-900 border border-zinc-800 shadow-sm relative overflow-hidden group`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700 group-hover:bg-zinc-700 transition-colors">
            {icon}
          </div>
          {trend && (
            <Badge variant="outline" className={`bg-zinc-800 border-zinc-700 ${trendColor} flex gap-1`}>
              {trendIcon}
              {trend}
            </Badge>
          )}
        </div>
        <p className="text-zinc-400 text-sm mb-1">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold text-white">{value}</span>
          <span className="text-sm text-zinc-500">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusCard({ name, latency, lastSeen, status }: { name: string, latency: string, lastSeen: string, status: 'healthy' | 'warning' | 'error' }) {
  return (
    <Card className={`
      bg-zinc-900 border border-zinc-800 shadow-sm rounded-2xl transition-all
      ${status === 'warning' ? 'ring-1 ring-orange-500/30' : ''}
    `}>
      <CardContent className="p-5 flex items-center justify-between">
        <div>
          <h3 className="font-medium text-white mb-1">{name}</h3>
          <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
            <span>{latency}</span>
            <span>{lastSeen}</span>
          </div>
        </div>
        <div>
          {status === 'healthy' && <CheckCircle className="w-5 h-5 text-green-500" weight="fill" />}
          {status === 'warning' && <Pulse className="w-5 h-5 text-orange-500 animate-pulse" weight="bold" />}
          {status === 'error' && <WarningCircle className="w-5 h-5 text-red-500" weight="fill" />}
        </div>
      </CardContent>
    </Card>
  );
}

function LogItem({ time, level, message }: { time: string, level: 'INFO' | 'WARN' | 'ERROR', message: string }) {
  const levelStyles = {
    INFO: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    WARN: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    ERROR: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <div className="flex items-center gap-4 px-6 py-4 hover:bg-zinc-800/50 transition-colors">
      <span className="text-zinc-500 font-mono text-xs">{time}</span>
      <Badge variant="outline" className={`border ${levelStyles[level]} text-[10px] w-12 justify-center`}>
        {level}
      </Badge>
      <span className="text-zinc-300 text-sm font-mono">{message}</span>
    </div>
  );
}
