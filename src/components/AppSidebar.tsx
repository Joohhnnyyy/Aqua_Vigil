"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  House, 
  SquaresFour, 
  CloudRain, 
  Drop, 
  Mountains, 
  Warning, 
  MapTrifold, 
  Pulse,
  CaretLeft,
  CaretRight
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function AppSidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside 
      className={`
        flex flex-col items-center py-8 border-r border-zinc-800 bg-black fixed h-full z-20 transition-all duration-300
        ${isCollapsed ? "w-24" : "w-64"}
      `}
    >
      <div 
        className={`
          mb-8 bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300
          ${isCollapsed ? "p-2" : "py-2 px-6"}
        `}
      >
        <Image 
          src="/white-logo.png" 
          alt="AquaVigil Logo" 
          width={56} 
          height={56} 
          className="w-14 h-14 object-contain shrink-0"
        />
        <span 
          className={`
            font-bold text-2xl text-white whitespace-nowrap overflow-hidden transition-all duration-300
            ${isCollapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100 ml-3"}
          `}
        >
          AquaVigil
        </span>
      </div>

      
      <nav className="flex flex-col gap-4 flex-1 w-full px-4 overflow-y-auto scrollbar-hide">
        <NavItem 
          icon={<House className="w-6 h-6" />} 
          label="Home" 
          href="/" 
          active={pathname === "/"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<SquaresFour className="w-6 h-6" />} 
          label="Dashboard" 
          href="/dashboard" 
          active={pathname === "/dashboard"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<CloudRain className="w-6 h-6" />} 
          label="Flood Sim" 
          href="/flood-simulation" 
          active={pathname === "/flood-simulation"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<Drop className="w-6 h-6" />} 
          label="River Health" 
          href="/river-health" 
          active={pathname === "/river-health"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<Mountains className="w-6 h-6" />} 
          label="Erosion" 
          href="/erosion" 
          active={pathname === "/erosion"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<Warning className="w-6 h-6" />} 
          label="Alerts" 
          href="/alerts" 
          active={pathname === "/alerts"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<MapTrifold className="w-6 h-6" />} 
          label="Map" 
          href="/map" 
          active={pathname === "/map"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<Pulse className="w-6 h-6" />} 
          label="Monitoring" 
          href="/monitoring" 
          active={pathname === "/monitoring"} 
          isCollapsed={isCollapsed}
        />
      </nav>

      <div className="mt-auto px-4 w-full flex justify-center py-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggle}
          className="bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full shadow-md border border-zinc-800 transition-colors"
        >
          {isCollapsed ? <CaretRight className="w-5 h-5" /> : <CaretLeft className="w-5 h-5" />}
        </Button>
      </div>
    </aside>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  isCollapsed: boolean;
}

function NavItem({ icon, label, href, active = false, isCollapsed }: NavItemProps) {
  return (
    <Link href={href} className="w-full">
      <div 
        className={`
        relative p-3 rounded-xl cursor-pointer transition-all duration-300 group flex items-center
        ${active ? "text-white bg-zinc-900/50" : "text-zinc-600 hover:text-white hover:bg-zinc-900"}
        ${isCollapsed ? "justify-center" : ""}
      `}
      >
        {active && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
        )}
        
        <div className="shrink-0">
          {icon}
        </div>
        
        <span 
          className={`
            font-medium whitespace-nowrap overflow-hidden transition-all duration-300
            ${isCollapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100 ml-3"}
          `}
        >
          {label}
        </span>
        
        {/* Tooltip for collapsed state */}
        {isCollapsed && (
          <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity duration-200">
            {label}
          </div>
        )}
      </div>
    </Link>
  );
}
