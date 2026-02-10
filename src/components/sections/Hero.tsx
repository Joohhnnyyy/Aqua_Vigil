"use client";

import React from 'react';

const Hero = () => {
  return (
    <section 
      className="hero relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAFA] pt-[120px] pb-[120px]" 
      id="home"
      style={{ fontFamily: 'Satoshi-Variable, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <div className="container mx-auto px-8 md:px-[80px] lg:px-[120px] max-w-[1440px]">
        {/* Animated Legend Wrapper */}
        <div className="header-section mb-6">
          <div className="legend mb-4">
            <span className="text-wave text-[14px] font-light uppercase tracking-widest text-[#666666] flex gap-[2px]">
              {"Just imagine, we design".split("").map((char, index) => (
                <span 
                  key={index} 
                  className="letter-wave inline-block transition-transform duration-300 hover:-translate-y-1 cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </div>

          <h1 className="sr-only">Pixel Loom - Creative web agency Paris | Creation of tailor-made websites</h1>
          
          {/* Main Brand Logo - Pixel Loom */}
          <div className="text-big brand flex flex-wrap items-baseline text-[clamp(4rem,12vw,12rem)] font-bold leading-[0.9] tracking-tight text-black lowercase">
            <div className="part-pixel relative flex items-baseline">
              pixel
              {/* Interactive Ground Element 1 (Square pixel) */}
              <div className="ground-pixel absolute -bottom-[10%] left-[15%] w-[12px] height-[12px] bg-black hidden lg:block" />
              {/* Interactive Ground Element 2 (Square pixel) */}
              <div className="ground-pixel2 absolute -bottom-[15%] left-[60%] w-[12px] height-[12px] bg-black hidden lg:block" />
            </div>
            <div className="part-loom flex items-baseline ml-[0.3em]">
              <span className="letter">l</span>
              {/* The 'oo' are often visual spaces or subtle gaps in this specific brand styling */}
              <span className="letter inline-block w-[0.1em]"></span>
              <span className="letter inline-block w-[0.1em]"></span>
              <span className="letter">m</span>
            </div>
          </div>
        </div>

        {/* Hero Content Description */}
        <div className="content mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="ground h-px w-full md:w-1/3 bg-black opacity-10 md:hidden" />
          
          <div className="content-description max-w-[600px]">
            <div className="ref-text-mask space-y-2">
              <div className="text-medium text-[24px] md:text-[32px] lg:text-[40px] leading-tight font-normal">
                <div>The web agency expert in</div>
              </div>
              <div className="text-medium text-[24px] md:text-[32px] lg:text-[40px] leading-tight font-normal">
                <div>website creation with a</div>
              </div>
              <div className="text-medium text-[24px] md:text-[32px] lg:text-[40px] leading-tight font-normal relative mt-2">
                <span className="relative inline-block">
                  <span className="relative z-10">genuine savoir-faire.</span>
                  {/* SVG Underline Trace */}
                  <svg 
                    className="absolute -bottom-2 md:-bottom-4 left-0 w-full pointer-events-none" 
                    width="100%" 
                    height="auto" 
                    viewBox="0 0 151 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M2 15.5C25.5 10.5 54.5 9 149 13" 
                      stroke="black" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeDasharray="150"
                      className="animate-[draw_1.5s_ease-out_forwards]"
                      style={{ strokeDashoffset: '0' }}
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes draw {
          from { stroke-dashoffset: 150; }
          to { stroke-dashoffset: 0; }
        }
        
        .letter-wave:hover {
          animation: wave 0.6s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Pixel elements hover interaction */
        .part-pixel:hover .ground-pixel {
           transform: scale(1.5) rotate(45deg);
           transition: transform 0.3s ease;
        }
        .part-pixel:hover .ground-pixel2 {
           transform: translateY(-20px) scale(0.8);
           transition: transform 0.5s ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;