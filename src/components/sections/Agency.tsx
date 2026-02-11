"use client";

import React, { useEffect, useRef } from 'react';

const Agency = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const traceExpertiseRef = useRef<SVGPathElement>(null);
  const traceBesoinsRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      const maskElements = sectionRef.current.querySelectorAll('.line-mask');
      maskElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="agency relative overflow-hidden bg-[#FAFAFA]" 
      id="agency"
      ref={sectionRef}
      style={{ padding: '120px 0' }}
    >
      <div className="container mx-auto px-8 max-w-[1440px]">
        {/* Header Section */}
        <div className="flex flex-col mb-20">
          <div className="legend mb-4">
            <span className="text-wave text-[14px] font-light flex gap-[2px]">
              {["W", "e", "'", "r", "e", " ", "l", "i", "s", "t", "e", "n", "i", "n", "g"].map((char, i) => (
                <span key={i} className="letter-wave inline-block transform hover:-translate-y-1 transition-transform duration-300">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </div>
          <div className="brand border-b border-black pb-4">
            <h2 className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter leading-[1.1] uppercase">
              Mission
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side Static Text */}
          <div className="lg:col-span-4 self-center">
            <div className="text-[2.5rem] font-medium leading-tight text-gray-400">
              Protecting
            </div>
          </div>

          {/* Right Side Reveal Text */}
          <div className="lg:col-span-8">
            <div className="max-w-[800px]">
              <div className="flex flex-col gap-1">
                {[
                  "AquaVigil sets itself apart by",
                  "providing real-time data",
                  "from across the river network",
                  "to support you with accurate",
                  "and actionable insights",
                  "that protect our waters."
                ].map((line, idx) => (
                  <div key={idx} className="overflow-hidden line-mask">
                    <div 
                      className={`text-medium text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.2] tracking-tight transform transition-transform duration-1000 ease-out translate-y-full opacity-0 [transition-delay:${idx * 150}ms] [.is-visible_&]:translate-y-0 [.is-visible_&]:opacity-100`}
                    >
                      {idx === 1 ? (
                        <span className="relative inline-block">
                          {line.split(" ")[0]} {line.split(" ")[1]} 
                          <span className="relative">
                             {" "}real-time data
                            <svg 
                              className="absolute -bottom-1 left-0 w-full"
                              width="318" 
                              height="9" 
                              viewBox="0 0 318 9" 
                              fill="none"
                            >
                              <path 
                                d="M2.5 6.5C50.5 4.5 150.5 2.5 315.5 2.5" 
                                stroke="black" 
                                strokeWidth="2" 
                                strokeLinecap="round"
                                className="path-draw"
                              />
                            </svg>
                          </span>
                        </span>
                      ) : idx === 5 ? (
                        <span className="relative inline-block">
                          <span className="relative">
                            {line}
                            <svg 
                              className="absolute -top-4 -left-4 w-[110%] h-[180%] pointer-events-none"
                              width="410" 
                              height="62" 
                              viewBox="0 0 410 62" 
                              fill="none"
                            >
                              <path 
                                d="M10 45C50 55 350 58 395 30C405 20 380 5 300 8C200 12 50 15 15 35C5 45 40 55 120 52" 
                                stroke="black" 
                                strokeWidth="1.5" 
                                strokeLinecap="round"
                                fill="none"
                                className="path-draw-circle"
                              />
                            </svg>
                          </span>
                        </span>
                      ) : line}
                    </div>
                  </div>
                ))}
              </div>

              {/* About Us & Dashboard CTA */}
              <div className="mt-12 opacity-0 transform translate-y-10 transition-all duration-1000 delay-1000 [.is-visible_&]:opacity-100 [.is-visible_&]:translate-y-0 flex gap-8">
                <a 
                  href="/aboutus" 
                  className="inline-flex items-center gap-2 group text-[1.1rem] font-light"
                >
                  <span className="text-black">[</span>
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">About us</span>
                    <span className="absolute top-full left-0 inline-block transition-transform duration-300 group-hover:-translate-y-full text-[#3B82C4]">About us</span>
                  </span>
                  <span className="text-black">]</span>
                </a>

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
          </div>
        </div>
      </div>

      <style jsx>{`
        .path-draw {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
        }
        .is-visible .path-draw {
          animation: draw 1.5s ease-out forwards 1.2s;
        }
        
        .path-draw-circle {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
        }
        .is-visible .path-draw-circle {
          animation: draw 2s ease-out forwards 1.8s;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .letter-wave:hover {
          animation: wave 0.5s ease-in-out infinite alternate;
        }

        @keyframes wave {
          from { transform: translateY(0); }
          to { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default Agency;