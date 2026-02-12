"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "html",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Slower, smoother lag
      }
    });
  }, { dependencies: [] });

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[9999] pointer-events-none">
      <div 
        ref={progressRef}
        className="h-full bg-[#3B82C4] origin-left scale-x-0 will-change-transform"
      />
    </div>
  );
};

export default ScrollProgress;
