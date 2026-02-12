"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HeroSection: React.FC<{ startAnimation?: boolean }> = ({ startAnimation = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-white selection:bg-blue-500 selection:text-white flex flex-col justify-center">
      {/* Top Left Text */}
      <div className="absolute top-[35%] left-[5%] transform -translate-y-1/2 z-10">
        <span className="font-sans text-[12px] md:text-[14px] font-medium uppercase tracking-[0.2em] text-[#666666]">
          Monitor. Analyze. Protect.
        </span>
      </div>

      {/* Main Headline Container */}
      <div className="w-full relative z-10">
        <div className="px-[5%]">
          <h1 className="font-sans text-[13vw] leading-[0.8] font-thin tracking-tighter text-black flex items-center gap-4 uppercase">
            <TextRoll className="text-black" trigger={startAnimation}>AQUA</TextRoll>
            <TextRoll className="text-[#3B82C4]" trigger={startAnimation}>VIGIL</TextRoll>
          </h1>
        </div>
        
        {/* Horizontal Line - Positioned relative to the title container */}
        <div className="w-full h-[2px] bg-black mt-2" />
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-[15%] right-[10%] max-w-[500px] text-right z-10">
        <p className="font-sans text-[18px] md:text-[24px] leading-[1.4] text-[#333333] font-light uppercase">
          The advanced AI platform for river health monitoring with{" "}
          <span className="relative inline-block px-2">
            real-time
            <svg 
              className="absolute -top-4 -left-2 w-[110%] h-[180%] pointer-events-none text-[#3B82C4]"
              viewBox="0 0 410 62" 
              fill="none"
              preserveAspectRatio="none"
            >
              <path 
                d="M10 45C50 55 350 58 395 30C405 20 380 5 300 8C200 12 50 15 15 35C5 45 40 55 120 52" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>{" "}
          insights.
        </p>
        <div className="mt-8 flex justify-end">
          <a 
            href="/dashboard" 
            className="inline-flex items-center gap-2 group text-[1.1rem] font-light"
          >
            <span className="text-black">[</span>
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Dashboard</span>
              <span className="absolute top-full left-0 inline-block transition-transform duration-300 group-hover:-translate-y-full text-[#3B82C4]">Dashboard</span>
            </span>
            <span className="text-black">]</span>
          </a>
        </div>
      </div>

    </section>
  );
};

const STAGGER = 0.035;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
  trigger?: boolean;
}> = ({ children, className, center = false, trigger = false }) => {
  return (
    <motion.span
      initial="initial"
      animate={trigger ? "hovered" : "initial"}
      className={cn("relative block overflow-hidden leading-[1.0]", className)}
    >
      <div className="flex">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1], // Custom ease for smoother motion
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1], // Custom ease for smoother motion
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export default HeroSection;
