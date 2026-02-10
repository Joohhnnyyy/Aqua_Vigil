"use client";

import React from 'react';

/**
 * Footer Component
 * 
 * Features:
 * - Large "Talk to us" horizontal marquee/parallax effect
 * - Social media links (LinkedIn, Instagram)
 * - Legal links (Legal notice, Privacy policy)
 * - Copyright and "Made with love" credit
 * - Minimalist brutalist design consistent with Pixel Loom brand
 */

const Footer = () => {
  const marqueeItems = Array(15).fill("Talk to us");

  return (
    <footer className="w-full bg-white pt-20">
      {/* Contact Marquee Section */}
      <div className="scroller-contact border-t border-b border-black overflow-hidden py-8 mb-24">
        <a href="/contact" className="block group">
          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeItems.map((text, index) => (
              <span 
                key={index} 
                className="text-[clamp(4rem,10vw,8rem)] font-bold uppercase flex items-center px-8 transition-colors duration-300 group-hover:text-[#3B82C4]"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.04em' }}
              >
                {text}
                <div className="w-4 h-4 bg-black ml-12 group-hover:bg-[#3B82C4]"></div>
              </span>
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div className="flex whitespace-nowrap animate-marquee" aria-hidden="true">
            {marqueeItems.map((text, index) => (
              <span 
                key={`dup-${index}`} 
                className="text-[clamp(4rem,10vw,8rem)] font-bold uppercase flex items-center px-8 transition-colors duration-300 group-hover:text-[#3B82C4]"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.04em' }}
              >
                {text}
                <div className="w-4 h-4 bg-black ml-12 group-hover:bg-[#3B82C4]"></div>
              </span>
            ))}
          </div>
        </a>
      </div>

      <div className="container mx-auto px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Copyright & Location */}
          <div className="flex flex-col space-y-2">
            <span className="text-[14px] font-light text-black">
              © {new Date().getFullYear()} Pixel Loom
            </span>
            <span className="text-[14px] font-light text-[#666666]">
              Digital creative agency based in Paris
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <span className="text-[14px] font-bold uppercase tracking-widest mb-2">Social</span>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[18px] font-light bracket-text hover:text-[#3B82C4] transition-colors w-fit"
              >
                LinkedIn
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[18px] font-light bracket-text hover:text-[#3B82C4] transition-colors w-fit"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col space-y-4">
            <span className="text-[14px] font-bold uppercase tracking-widest mb-2">Legal</span>
            <div className="flex flex-col space-y-2">
              <a 
                href="/legal" 
                className="text-[18px] font-light bracket-text hover:text-[#3B82C4] transition-colors w-fit"
              >
                Legal notice
              </a>
              <a 
                href="/privacy" 
                className="text-[18px] font-light bracket-text hover:text-[#3B82C4] transition-colors w-fit"
              >
                Privacy policy
              </a>
            </div>
          </div>

          {/* Credit */}
          <div className="flex flex-col items-start lg:items-end justify-between h-full">
            <div className="text-right flex flex-col items-start lg:items-end">
              <span className="text-[14px] font-light text-[#666666] mb-1">
                Made with love in Paris
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-[14px] font-medium">Looming the web</span>
                <div className="w-2 h-2 bg-black"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bottom Divider */}
        <div className="mt-20 pt-8 border-t border-black/10 flex justify-between items-center text-[12px] text-[#666666] uppercase tracking-tighter">
          <span>Pixel Loom - Agence web Paris</span>
          <span className="hidden md:inline">Website creation & digital strategy</span>
        </div>
      </div>

      <style jsx global>{`
        .bracket-text::before {
          content: '[ ';
          opacity: 0.3;
        }
        .bracket-text::after {
          content: ' ]';
          opacity: 0.3;
        }
        .bracket-text:hover::before,
        .bracket-text:hover::after {
          opacity: 1;
          color: #3B82C4;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .scroller-contact {
          display: flex;
          white-space: nowrap;
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;