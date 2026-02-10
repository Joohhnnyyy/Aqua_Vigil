"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
    { label: "Agency", href: "#agency" },
    { label: "Expertises", href: "#expertises" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed left-0 top-0 bottom-0 w-[80px] bg-white border-r border-black z-[100] flex flex-col items-center justify-between py-8">
        {/* Hamburger Menu Toggle */}
        <div 
          className="relative w-full flex justify-center cursor-pointer group z-[110]"
          onClick={toggleMenu}
        >
          <div className="flex flex-col gap-[6px] p-4">
            <span 
              className={cn(
                "w-8 h-[2px] bg-black transition-all duration-300 ease-in-out origin-center",
                isOpen && "translate-y-[4px] rotate-45"
              )}
            />
            <span 
              className={cn(
                "w-8 h-[2px] bg-black transition-all duration-300 ease-in-out origin-center",
                isOpen && "-translate-y-[4px] -rotate-45"
              )}
            />
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex flex-col gap-4 mb-2">
          <ul className="flex flex-col items-center gap-2">
            <li 
              className={cn(
                "text-[14px] uppercase cursor-pointer transition-colors duration-200 font-medium",
                lang === "fr" ? "text-black" : "text-[#666666]"
              )}
              onClick={() => setLang("fr")}
            >
              fr
            </li>
            <li 
              className={cn(
                "text-[14px] uppercase cursor-pointer transition-colors duration-200 font-medium",
                lang === "en" ? "text-black" : "text-[#666666]"
              )}
              onClick={() => setLang("en")}
            >
              en
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[90] transition-all duration-500 ease-in-out flex items-center justify-center",
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {/* Background Blur Effect */}
        <div 
          className={cn(
            "absolute inset-0 bg-white/10 backdrop-blur-[20px] transition-opacity duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={toggleMenu}
        />
        
        {/* Menu Content Box */}
        <div 
          className={cn(
            "relative z-[91] w-full h-full bg-white transition-transform duration-500 ease-out flex flex-col items-center justify-center",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <ul className="flex flex-col items-center gap-12">
            {menuItems.map((item, index) => (
              <li 
                key={item.label}
                className={cn(
                  "overflow-hidden transition-all duration-700 delay-[calc(var(--index)*100ms)]",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                )}
                style={{ "--index": index } as React.CSSProperties}
              >
                <a 
                  href={item.href}
                  className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-[1.1] hover:text-[#3B82C4] transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-12 text-[14px] text-[#666666] flex gap-8">
            <a href="/legal" className="hover:text-black transition-colors">[ Legal Notice ]</a>
            <a href="/privacy" className="hover:text-black transition-colors">[ Privacy Policy ]</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .sidebar-fixed {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 80px;
          border-right: 1px solid #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 0;
          z-index: 50;
          background: #ffffff;
        }
      `}</style>
    </>
  );
};

export default Navigation;