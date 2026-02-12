"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Preloader = ({ onComplete }: { onComplete?: () => void }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min((elapsedTime / duration) * 100, 100);

      // Apply a slight easing for smoother feel (easeOutQuad)
      // const easedProgress = 100 * (1 - (1 - progress / 100) * (1 - progress / 100));
      // Or stick to linear for consistent counting speed if preferred, but usually easing is "smoother"
      // User requested "smooth", usually implies high frame rate and maybe easing. 
      // Let's stick to linear-ish but high precision for now to match the "counter" feel.
      
      setCount(progress);

      if (progress < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500); // Wait for preloader fade out
        }, 600);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      id="preloader"
      className={cn(
        "fixed font-sans inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] bg-[#FAFAFA]",
        count === 100 && !isVisible ? "opacity-0" : "opacity-100"
      )}
      style={{
        backgroundColor: "rgb(250, 250, 250)",
      }}
    >
      <div className="container relative flex h-full w-full flex-col items-center justify-center">
        {/* Progress Container */}
        <div 
          className="content-square relative bg-[#337AB7]"
          style={{
            width: "800px",
            height: "110px",
            maxWidth: "90vw",
            backgroundColor: "rgb(51, 124, 191)",
          }}
        >
          {/* Progress Mask - Shrinks from right to reveal blue */}
            <div
              className="absolute right-0 top-0 h-full bg-[#FAFAFA]"
              style={{
                width: `${100 - count}%`,
                backgroundColor: "rgb(250, 250, 250)",
              }}
            />
          
          {/* Inset Square (White Box that moves across) */}
          <div
            className="square absolute top-0 h-full border-2 border-[#337AB7] bg-white"
            style={{
              width: "110px",
              left: `${(count / 100) * (100 - (110/800 * 100))}%`, // Adjusting for its own width
            }}
          />
        </div>

        {/* Counter - Fixed to bottom right according to screenshots */}
        <div 
          className="content-count absolute bottom-[5%] right-[5%] flex items-baseline"
          style={{
            color: "rgb(0, 0, 0)",
            zIndex: 10,
          }}
        >
          <span 
            className="count font-sans text-[120px] leading-[1.1] font-light"
          >
            {Math.floor(count)}
          </span>
          <span 
            className="text-medium ml-1 font-sans text-sm font-medium"
          >
            %
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;