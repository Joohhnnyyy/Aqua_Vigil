"use client";

import React, { useEffect, useRef } from "react";

const ClientMarquee = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const clientTypes = [
    "Companies",
    "Craftsmen",
    "Artists",
    "Brands",
    "Institutions",
    "NGOs",
    "Universities",
    "Consultants",
    "Startups",
    "Freelancers",
    "Studios",
    "Agencies",
    "Publishers",
  ];

  const values = [
    "Expertise",
    "Creativity",
    "Commitment",
    "Reliability",
    "Trust",
  ];

  // Repeat values for infinite marquee effect
  const marqueeValues = [...values, ...values, ...values, ...values];

  return (
    <section className="customer bg-[#fafafa] overflow-hidden">
      <div className="box-scroll relative">
        {/* Vertical client list with reveal effect */}
        <div className="content-all-customers_en pt-[120px] pb-[60px] flex flex-col items-center">
          {clientTypes.map((type, idx) => (
            <div
              key={idx}
              className="ref-text-mask overflow-hidden h-[100px] sm:h-[130px] md:h-[150px]"
            >
              <div
                className={`text-big text-[clamp(3.5rem,8vw,12rem)] font-bold leading-[1.1] tracking-[-0.04em] uppercase transition-transform duration-700 ${
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

        {/* Horizontal Parallax Scroller */}
        <div className="container-fluid border-t border-b border-black py-8 my-20">
          <a href="/aboutus" className="block cursor-pointer outline-none">
            <div className="parallax overflow-hidden whitespace-nowrap">
              <div className="scroller flex items-center animate-marquee">
                {marqueeValues.map((value, idx) => (
                  <span
                    key={idx}
                    className="text-large inline-flex items-center text-[clamp(2.5rem,5vw,4rem)] font-bold px-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#000000",
                    }}
                  >
                    {value}
                    <div className="star ml-8">
                      <svg
                        width="28.747"
                        height="28.747"
                        viewBox="0 0 28.747 28.747"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Tracé_93"
                          d="M14.373 0L17.766 10.981H28.747L19.864 17.766L23.257 28.747L14.373 21.961L5.49 28.747L8.883 17.766L0 10.981H10.981L14.373 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>

        {/* Quote Section */}
        <div className="container mx-auto px-8 mb-32">
          <div className="content-description text-center max-w-6xl mx-auto">
            <span className="block text-[clamp(2rem,4vw,3.5rem)] font-regular leading-[1.2] italic tracking-tight text-black">
              <span className="words block">
                <span>“</span>
                {" Let's build a"}
              </span>
              <span className="words block">
                {"memorable & inspiring"}
              </span>
              <span className="words block">
                {"digital experience"}
              </span>
              <span className="words block">
                {"together. ”"}
              </span>
            </span>
          </div>
        </div>

        {/* Contact Marquee */}
        <div className="scroller-contact border-t border-black py-10">
          <a href="/contact" className="block">
            <div className="parallax overflow-hidden whitespace-nowrap">
              <div className="scroller flex items-center animate-marquee direction-reverse">
                {[...Array(10)].map((_, idx) => (
                  <span
                    key={idx}
                    className="text-large inline-flex items-center text-[clamp(3.5rem,8vw,8rem)] font-bold px-12"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#000000",
                    }}
                  >
                    Contact us
                    <div className="pixel w-[20px] h-[20px] bg-black ml-12"></div>
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
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
        .animate-marquee {
          animation: marquee 30s linear infinite;
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