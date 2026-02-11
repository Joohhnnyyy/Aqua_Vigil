"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white selection:bg-blue-500 selection:text-white flex flex-col justify-center">
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
            AQUA
            <span className="relative inline-flex items-center mx-2 h-[0.6em]">
              <span className="w-[0.5em] h-[0.5em] border-[5px] border-black inline-block" />
              <span className="w-[0.5em] h-[0.5em] border-[5px] border-[#3B82C4] inline-block ml-4" />
            </span>
            VIGIL
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
              className="absolute left-1/2 top-1/2 w-[130%] h-[160%] -translate-x-1/2 -translate-y-1/2 -z-10 text-[#3B82C4]"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              fill="none"
            >
               <path
                d="M5,20 C10,5 90,5 95,20 C90,35 10,35 5,20 Z"
                stroke="currentColor"
                strokeWidth="2"
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

export default HeroSection;
