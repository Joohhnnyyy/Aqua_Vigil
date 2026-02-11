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
  Siren,
  Bell,
  Clock,
  Funnel,
  Check,
  X,
  CaretRight,
  Waves,
  MapPin,
  Thermometer,
  CloudFog
} from "@phosphor-icons/react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AlertsPage() {
  const [activeFilter, setActiveFilter] = React.useState("All");

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
          <NavItem icon={<Warning className="w-6 h-6" />} href="/alerts" active />
          <NavItem icon={<MapTrifold className="w-6 h-6" />} href="/map" />
          <NavItem icon={<Pulse className="w-6 h-6" />} href="/monitoring" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-24 p-8 lg:p-12 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2">Alerts Center</h1>
            <p className="text-zinc-500 mb-1">Real-time alerts and notifications from all monitoring systems</p>
            <p className="text-xs text-zinc-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Syncing with Supabase...
            </p>
          </div>
          
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-[2rem]  border-0 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            <Siren className="w-4 h-4 mr-2" />
            Trigger Manual Alert
          </Button>
        </header>

        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <MetricCard 
            icon={<Warning className="w-6 h-6 text-red-500" />}
            label="Critical Alerts"
            value="2"
            color="border-red-500/30 text-red-500"
            bg="bg-red-500/5"
          />
          <MetricCard 
            icon={<Bell className="w-6 h-6 text-yellow-500" />}
            label="Warnings"
            value="2"
            color="border-yellow-500/30 text-yellow-500"
            bg="bg-yellow-500/5"
          />
          <MetricCard 
            icon={<Clock className="w-6 h-6 text-blue-600" />}
            label="Unacknowledged"
            value="5"
            color="border-zinc-800 text-zinc-400"
            bg="bg-zinc-900 shadow-sm"
          />
          <MetricCard 
            icon={<Bell className="w-6 h-6 text-blue-600" />}
            label="Total Today"
            value="5"
            color="border-zinc-800 text-zinc-400"
            bg="bg-zinc-900 shadow-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-6">
          <div className="text-zinc-500 p-2">
            <Funnel className="w-5 h-5" />
          </div>
          <FilterButton label="All" active={activeFilter === "All"} onClick={() => setActiveFilter("All")} />
          <FilterButton label="Critical" active={activeFilter === "Critical"} onClick={() => setActiveFilter("Critical")} />
          <FilterButton label="Warning" active={activeFilter === "Warning"} onClick={() => setActiveFilter("Warning")} />
          <FilterButton label="Info" active={activeFilter === "Info"} onClick={() => setActiveFilter("Info")} />
        </div>

        {/* Alerts List */}
        <div className="space-y-4 ">
          <AlertItem 
            type="critical"
            icon={<Waves className="w-6 h-6" />}
            title="Flash Flood Warning"
            description="Rapid water level rise detected. Expected depth: 2.4m in next 2 hours."
            location="Ganga Basin - Sector 7"
            time="21/1/2026, 11:00:09 AM"
            isNew
          />
          <AlertItem 
            type="critical"
            icon={<Mountains className="w-6 h-6" />}
            title="Critical Bank Erosion"
            description="LiDAR scan detected 45cm erosion in last 24 hours. Immediate attention required."
            location="Sector 7 - North Bank"
            time="21/1/2026, 11:00:09 AM"
            isNew
          />
          <AlertItem 
            type="warning"
            icon={<Thermometer className="w-6 h-6" />}
            title="High Turbidity Alert"
            description="Unusual sediment concentration detected. Possible upstream disturbance."
            location="Yamuna Confluence"
            time="21/1/2026, 11:00:09 AM"
            isNew
          />
          <AlertItem 
            type="warning"
            icon={<CloudFog className="w-6 h-6" />}
            title="Heavy Rainfall Expected"
            description="85% probability of heavy rainfall (>50mm) in next 6 hours."
            location="Entire Basin"
            time="21/1/2026, 11:00:09 AM"
            isNew
          />
          <AlertItem 
            type="info"
            icon={<Waves className="w-6 h-6" />}
            title="Water Level Rising"
            description="Water level increased by 0.3m in last hour. Monitoring continues."
            location="Upper Basin"
            time="21/1/2026, 11:00:09 AM"
            isNew
          />
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

function MetricCard({ icon, label, value, color, bg, highlight = false }: { icon: React.ReactNode, label: string, value: string, color?: string, bg?: string, highlight?: boolean }) {
  return (
    <Card className={`
      border border-zinc-800 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] rounded-[2rem]
      ${highlight ? "bg-blue-600 text-white" : `${bg || "bg-zinc-900"} text-white`}
    `}>
      <CardContent className="p-6">
        <div className={`p-3 rounded-full w-fit mb-4 backdrop-blur-md ${highlight ? "bg-white/30" : "bg-zinc-800"}`}>
          {icon}
        </div>
        <p className={`text-sm font-medium mb-1 ${highlight ? "text-blue-100" : "text-zinc-400"}`}>{label}</p>
        <p className="text-3xl font-semibold tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}

function FilterButton({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`
        px-4 py-1.5 rounded-full text-sm font-medium transition-all
        ${active 
          ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
          : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800"}
      `}
    >
      {label}
    </button>
  );
}

function AlertItem({ 
  type, 
  icon, 
  title, 
  description, 
  location, 
  time, 
  isNew 
}: { 
  type: 'critical' | 'warning' | 'info', 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  location: string, 
  time: string, 
  isNew?: boolean 
}) {
  const styles = {
    critical: {
      wrapper: "bg-zinc-900 border border-zinc-800 shadow-sm hover:shadow-md hover:shadow-red-500/5",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500",
      badge: "bg-red-600 text-white",
      title: "text-red-400"
    },
    warning: {
      wrapper: "bg-zinc-900 border border-zinc-800 shadow-sm hover:shadow-md hover:shadow-yellow-500/5",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
      badge: "bg-yellow-500 text-white",
      title: "text-yellow-400"
    },
    info: {
      wrapper: "bg-zinc-900 border border-zinc-800 shadow-sm hover:shadow-md hover:shadow-blue-500/5",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      badge: "bg-blue-600 text-white",
      title: "text-blue-400"
    }
  };

  const style = styles[type];

  return (
    <div className={`
      relative overflow-hidden rounded-2xl border transition-all duration-300 group
      ${style.wrapper}
    `}>
      {/* Glow Effect */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${style.badge}`}></div>

      <div className="flex items-center p-4 lg:p-6 gap-6">
        {/* Icon */}
        <div className={`p-3 rounded-xl ${style.iconBg} ${style.iconColor} shrink-0`}>
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className={`font-semibold text-lg ${style.title}`}>{title}</h3>
            <Badge className={`${style.badge} border-0 px-2 py-0.5 text-[10px] uppercase tracking-wider`}>
              {type}
            </Badge>
            {isNew && (
              <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-[10px] bg-zinc-900/50">
                New
              </Badge>
            )}
          </div>
          
          <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono">{time}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-green-500/10 hover:text-green-500 flex items-center justify-center transition-colors border border-transparent hover:border-green-500/20 text-zinc-400">
            <Check className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors border border-transparent hover:border-zinc-600 text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors border border-transparent hover:border-zinc-600 text-zinc-400 hover:text-white">
            <CaretRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
