"use client";

import React, { useEffect, useRef, useState } from 'react';

const VisionAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through the section
      // The section is pinned, but we use the parent container's position
      const progress = Math.min(Math.max(-rect.top / (rect.height - windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content for the 3 phases
  const phases = [
    { text: ["make ", "you ", "dream "], id: "w0" },
    { text: ["touch ", "your ", "heart "], id: "w1" },
    { text: ["surprise ", "your ", "users "], id: "w2" }
  ];

  // Helper to get opacity and transform for each text block based on scroll progress
  const getPhaseStyles = (index: number) => {
    const start = index * 0.33;
    const end = (index + 1) * 0.33;
    const isActive = scrollProgress >= start && scrollProgress < end;
    
    // Smooth transition between phases
    let opacity = 0;
    let translateY = 20;

    if (isActive) {
      opacity = 1;
      translateY = 0;
    } else if (scrollProgress >= end) {
      opacity = 0;
      translateY = -20;
    }

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      transition: 'all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)'
    };
  };

  return (
    <section 
      ref={containerRef} 
      className="container-animation relative" 
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
        <div className="box-animation w-full max-w-[1440px] px-8 md:px-16">
          <div className="content relative flex flex-col items-center justify-center h-full">
            
            {/* SVG Morphing Container (Representative of the complex SVG morph in instructions) */}
            <div className="content-element relative w-full flex flex-col items-center">
              <div className="content-svg w-full max-w-[1200px] mb-12">
                {/* Simplified dynamic SVG path to simulate morphing */}
                <svg 
                  viewBox="0 0 1425 261" 
                  className="w-full h-auto stroke-current text-black fill-none"
                  style={{ strokeWidth: '1.5px' }}
                >
                  <path 
                    d={scrollProgress < 0.33 
                      ? "M100,130 Q700,10 1300,130" 
                      : scrollProgress < 0.66 
                        ? "M100,130 Q700,250 1300,130" 
                        : "M100,130 L1300,130"
                    }
                    className="transition-all duration-700 ease-in-out"
                  />
                  {/* These paths would typically be the complex letter shapes morphing */}
                </svg>
              </div>

              {/* Synchronized Text Transitions */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                {phases.map((phase, idx) => (
                  <p 
                    key={phase.id}
                    className={`content-text text-[clamp(2rem,8vw,6rem)] font-bold tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap`}
                    style={getPhaseStyles(idx)}
                  >
                    {phase.text.map((word, wIdx) => (
                      <span key={wIdx} className="inline-block hover:italic transition-all duration-300">
                        {word}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom Progress Indicator (Pixel Style) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
              {[0, 1, 2].map((dot) => (
                <div 
                  key={dot}
                  className={`w-3 h-3 transition-colors duration-500 ${
                    scrollProgress >= dot * 0.33 && scrollProgress < (dot + 1) * 0.33 
                      ? 'bg-black' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Legend in corner matching site style */}
        <div className="absolute top-12 left-8 md:left-16">
          <span className="text-wave text-[14px] font-light flex gap-[2px] opacity-40">
            {"vision".split('').map((char, i) => (
              <span key={i} className="letter-wave inline-block hover:-translate-y-1 transition-transform duration-300">
                {char}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Helper styles for animations */}
      <style jsx>{`
        .letter-wave:hover {
          animation: wave 0.5s ease-in-out infinite alternate;
        }
        @keyframes wave {
          from { transform: translateY(0); }
          to { transform: translateY(-5px); }
        }
        .content-text {
          font-family: var(--font-display), "Helvetica Neue", Arial, sans-serif;
          text-transform: lowercase;
        }
      `}</style>
    </section>
  );
};

export default VisionAnimation;