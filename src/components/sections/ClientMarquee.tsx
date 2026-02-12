"use client";

import React, { useEffect, useRef } from "react";
import FadeInLeft from "@/components/ui/FadeInLeft";
import FadeInRight from "@/components/ui/FadeInRight";
import FadeInUp from "@/components/ui/FadeInUp";

const ClientMarquee = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const clientTypes = [
    "Municipalities",
    "Environmental Agencies",
    "Research Institutes",
    "NGOs",
    "Urban Planners",
    "Agricultural Sectors",
    "Utility Companies",
    "Emergency Services",
    "Government Bodies",
    "Conservation Groups",
  ];

  const values = [
    "River Health",
    "Flood AI",
    "Water Quality",
    "Erosion Tracking",
    "Real-time Data",
    "Sustainability",
  ];

  // Repeat values for infinite marquee effect
  const marqueeValues = [...values, ...values, ...values, ...values, ...values, ...values];

  return (
    <section className="customer bg-[#fafafa] overflow-hidden">
      <div className="box-scroll relative">
        {/* Vertical client list with reveal effect */}
        <FadeInUp>
          <div className="content-all-customers_en pt-[120px] pb-[60px] flex flex-col items-end pr-[5%] text-right gap-y-4 sm:gap-y-8 [&:has(.ref-text-mask:hover)_.ref-text-mask:not(:hover)]:blur-[6px] [&:has(.ref-text-mask:hover)_.ref-text-mask:not(:hover)]:opacity-40">
            {clientTypes.map((type, idx) => (
              <div
                key={idx}
                className="ref-text-mask h-auto transition-all duration-500"
              >
                <div
                  className={`text-big text-[clamp(3.5rem,8vw,12rem)] font-bold leading-[0.9] tracking-[-0.04em] uppercase transition-transform duration-700 ${
                    type === "NGOs" ? "lowercase" : ""
                  }`}
                  style={{
                    color: "#000000",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  <div>{type}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Horizontal Parallax Scroller */}
        <FadeInRight delay={0.2}>
          <div className="container-fluid bg-black py-8 my-20">
            <a href="/aboutus" className="block cursor-pointer outline-none">
              <div className="parallax overflow-hidden whitespace-nowrap">
                <div className="scroller flex items-center animate-marquee-fast">
                  {marqueeValues.map((value, idx) => (
                    <span
                      key={idx}
                      className="text-large inline-flex items-center text-[clamp(2.5rem,5vw,4rem)] font-light px-8 uppercase"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "#ffffff",
                      }}
                    >
                      {value}
                      <div className="star ml-8 text-white">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                        </svg>
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </FadeInRight>

        {/* Quote Section */}
        <FadeInUp delay={0.2}>
          <div className="container mx-auto px-8 mb-32">
            <div className="content-description text-center max-w-6xl mx-auto">
              <span className="block text-[clamp(2rem,4vw,3.5rem)] font-regular leading-[1.2] italic tracking-tight text-black">
                <span className="words block">
                  <span>“</span>
                  {" Protecting our water"}
                </span>
                <span className="words block">
                  {"resources through advanced"}
                </span>
                <span className="words block">
                  {"monitoring and AI"}
                </span>
                <span className="words block">
                  {"prediction. ”"}
                </span>
              </span>
            </div>
          </div>
        </FadeInUp>

        {/* Contact Marquee */}
        <FadeInLeft delay={0.2}>
          <div className="scroller-contact border-t border-black py-10">
            <a href="/contact" className="block">
              <div className="parallax overflow-hidden whitespace-nowrap">
                <div className="scroller flex items-center animate-marquee-slow direction-reverse">
                  {[...Array(10)].map((_, idx) => (
                    <span
                      key={idx}
                      className="text-large inline-flex items-center text-[clamp(3.5rem,8vw,8rem)] font-bold px-12"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "#000000",
                      }}
                    >
                      Get in touch
                      <div className="pixel w-[20px] h-[20px] bg-black ml-12"></div>
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </FadeInLeft>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-fast {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }
        .direction-reverse {
          animation-direction: reverse;
        }
        .text-big {
          font-family: var(--font-display);
        }
        .text-large {
          font-family: var(--font-display);
        }
      `}</style>
    </section>
  );
};

export default ClientMarquee;