"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2000; // 2 seconds total duration
    const intervalTime = 20; // Update every 20ms
    const totalSteps = duration / intervalTime;
    const incrementPerStep = 100 / totalSteps;

    let currentCount = 0;
    const counter = setInterval(() => {
      currentCount += incrementPerStep;
      if (currentCount >= 100) {
        setCount(100);
        clearInterval(counter);
        // Delay before fading out
        setTimeout(() => {
          setIsVisible(false);
        }, 600);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, intervalTime);

    // Lock scroll while preloading
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(counter);
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
        "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] bg-[#FAFAFA]",
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
                transition: "width 20ms linear",
                backgroundColor: "rgb(250, 250, 250)",
              }}
            />
          
          {/* Inset Square (White Box that moves across) */}
          <div
            className="square absolute top-0 h-full border-2 border-[#337AB7] bg-white"
            style={{
              width: "110px",
              left: `${(count / 100) * (100 - (110/800 * 100))}%`, // Adjusting for its own width
              transition: "left 20ms linear",
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
            className="count font-serif text-[120px] leading-[1.1]"
            style={{ fontFamily: "var(--font-serif), Didot, 'Times New Roman', serif" }}
          >
            {count}
          </span>
          <span 
            className="text-medium ml-1 font-sans text-sm font-medium"
            style={{ fontFamily: 'var(--font-sans), "Satoshi-Variable", sans-serif' }}
          >
            %
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;