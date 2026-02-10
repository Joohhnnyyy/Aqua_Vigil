"use client";

import React, { useState } from 'react';

const expertisesData = [
  {
    title: "Visual Identity",
    subservices: ["Logo", "Brand guideline", "Content Creation", "Signage"]
  },
  {
    title: "Digital Marketing",
    subservices: ["Digital Strategy", "SEO", "Online Advertising", "Community Management", "Email Marketing", "Performance Analysis"]
  },
  {
    title: "Web Development",
    subservices: ["Website Design", "E-commerce Website", "Website Redesign", "Blog", "Web Application", "Hosting, Maintenance & Support"]
  },
  {
    title: "Creative Development",
    subservices: ["Immersive Experience", "Promotional Website", "Animation & Motion Design", "3D"]
  }
];

const WaveText = ({ text }: { text: string }) => {
  return (
    <span className="text-wave text-thin flex flex-wrap">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter-wave inline-block"
          style={{ animationDelay: `${index * 0.05}s`, whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const ExpertiseItem = ({ title, subservices }: { title: string, subservices: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="content-expertise group cursor-pointer border-t border-black pb-8 pt-6 transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="ref-text-mask overflow-hidden">
        <div className="border-bottom-dark">
          <h3 className="content-service-title text-[2.5rem] md:text-[40px] font-normal leading-[1.1] lowercase tracking-[-0.04em] py-2">
            {title}
          </h3>
        </div>
      </div>
      
      <div 
        className={`content-subservice flex flex-wrap gap-x-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        {subservices.map((item, idx) => (
          <div key={idx} className="ref-text-mask">
            <div className="text-medium text-[1.1rem] font-light lowercase">
              <div className="subservice-item text-extra-thin inline-flex items-center">
                <span className="opacity-60">[</span>
                <h4 className="px-1">{item}</h4>
                <span className="opacity-60">]</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Expertises = () => {
  return (
    <section className="expertises py-[120px] bg-white relative" id="expertises">
      <div className="container mx-auto px-8 md:px-[2rem] max-w-[1440px]">
        {/* Header Section */}
        <div className="content-header mb-20 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="header-section">
            <div className="legend mb-4">
              <WaveText text="Expertise down to the pixel" />
            </div>
            <div className="brand">
              <h2 className="text-big text-[3rem] md:text-[8rem] font-bold leading-[0.9] tracking-[-0.04em] uppercase">
                Expertises
              </h2>
            </div>
          </div>
          <div className="ground hidden md:block w-1/3 h-[1px] bg-black/10 self-end mb-4"></div>
        </div>

        {/* Interactive Collapse List */}
        <div className="content-collapse border-b border-black">
          {expertisesData.map((expertise, index) => (
            <ExpertiseItem 
              key={index} 
              title={expertise.title} 
              subservices={expertise.subservices} 
            />
          ))}
        </div>
      </div>

      {/* Background/Visual Decorations for the section if any */}
      <style jsx global>{`
        .letter-wave {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .header-section:hover .letter-wave {
          animation: wave 0.6s ease-in-out infinite alternate;
        }
        @keyframes wave {
          from { transform: translateY(0); }
          to { transform: translateY(-8px); }
        }
        .content-service-title {
          font-family: var(--font-display);
        }
      `}</style>
    </section>
  );
};

export default Expertises;