"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"fr" | "en">("en");

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Missions", href: "#agency" },
    { label: "Expertises", href: "#expertises" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed right-0 top-0 bottom-0 w-[80px] z-[100] flex flex-col items-center justify-between transition-colors duration-300 border-l",
          isOpen ? "bg-black border-black/20" : "bg-white border-black"
        )}
      >
        {/* Hamburger Menu Toggle - Black Box when closed */}
        <div 
          className={cn(
            "w-full aspect-square flex items-center justify-center cursor-pointer group transition-colors duration-300",
            isOpen ? "bg-transparent" : "bg-black"
          )}
          onClick={toggleMenu}
        >
          <div className="flex flex-col gap-[6px] p-4">
            <span 
              className={cn(
                "w-8 h-[2px] transition-all duration-300 ease-in-out origin-center",
                isOpen ? "bg-white translate-y-[4px] rotate-45" : "bg-white"
              )}
            />
            <span 
              className={cn(
                "w-8 h-[2px] transition-all duration-300 ease-in-out origin-center",
                isOpen ? "bg-white -translate-y-[4px] -rotate-45" : "bg-white"
              )}
            />
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex flex-col gap-4 mb-8">
          <ul className="flex flex-col items-center gap-2">
            <li 
              className={cn(
                "text-[14px] uppercase cursor-pointer transition-colors duration-200 font-medium",
                lang === "fr" 
                  ? (isOpen ? "text-white" : "text-black")
                  : (isOpen ? "text-gray-500" : "text-[#666666]")
              )}
              onClick={() => setLang("fr")}
            >
              fr
            </li>
            <li 
              className={cn(
                "text-[14px] uppercase cursor-pointer transition-colors duration-200 font-medium",
                lang === "en" 
                  ? (isOpen ? "text-white" : "text-black")
                  : (isOpen ? "text-gray-500" : "text-[#666666]")
              )}
              onClick={() => setLang("en")}
            >
              en
            </li>
          </ul>
        </div>
      </nav>

      {/* Backdrop Blur Layer */}
      <div 
        className={cn(
          "fixed inset-0 z-[85] transition-opacity duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] bg-black/5 backdrop-blur-sm",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Main Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[90] flex justify-end transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        style={{
          clipPath: isOpen 
            ? "inset(0 0 0 0)" 
            : "inset(0 0 calc(100% - 80px) calc(100% - 80px))"
        }}
      >
        {/* Menu Panel - Black */}
        <div 
          className="w-full md:w-[70%] bg-black h-full text-white flex flex-col justify-start px-24 pt-32 relative"
        >
          <div className="flex items-start gap-20">
               {/* Menu Items */}
               <ul className="flex flex-col gap-2">
                 {menuItems.map((item, index) => (
                   <li 
                     key={item.label}
                     className={cn(
                       "overflow-hidden transition-all duration-700 delay-[calc(var(--index)*100ms)]",
                       isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                     )}
                     style={{ "--index": index } as React.CSSProperties}
                   >
                     <a 
                       href={item.href}
                       className="text-[4rem] font-light tracking-tight leading-tight hover:text-blue-400 transition-colors duration-300 uppercase"
                       onClick={toggleMenu}
                     >
                       {item.label}
                     </a>
                   </li>
                 ))}
               </ul>

               {/* Vertical Divider */}
               <div className={cn(
                  "w-[1px] bg-white/20 self-stretch transition-all duration-1000 delay-500",
                  isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
               )}></div>

               {/* Contact & Socials */}
               <div className={cn(
                 "flex flex-col justify-between py-2 h-full gap-20 transition-all duration-700 delay-500",
                 isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
               )}>
                   <div className="flex flex-col gap-2 text-right items-end">
                       <a href="#" className="flex items-center gap-2 hover:text-blue-400 text-lg group">
                         Instagram <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                       </a>
                       <a href="#" className="flex items-center gap-2 hover:text-blue-400 text-lg group">
                         LinkedIn <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                       </a>
                       <a href="#" className="flex items-center gap-2 hover:text-blue-400 text-lg group">
                         X (Twitter) <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                       </a>
                   </div>
                   
                   <div className="text-right flex flex-col gap-1">
                        <p className="text-lg hover:text-blue-400 cursor-pointer">contact@aquavigil.com</p>
                        <p className="text-lg">+1 (555) 123-4567</p>
                   </div>
               </div>
           </div>

           {/* Bottom Logo */}
           <div className={cn(
             "absolute bottom-10 left-24 right-24 transition-all duration-1000 delay-300",
             isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
           )}>
                <h2 className="text-[6vw] uppercase font-bold tracking-widest flex items-center gap-4">
                   AQUA <span className="inline-block w-[0.8em] h-[0.8em] border-[6px] border-blue-500"></span> VIGIL
                </h2>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
