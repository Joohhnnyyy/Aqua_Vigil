import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAFAFA] text-black pt-20 pb-8 px-6 md:px-12 font-sans border-t-2 border-b-2">
      {/* Top Section: Brand Name */}
      <div className="flex justify-center mb-8 relative">
        <h1 className="text-[12vw] leading-none font-medium tracking-tighter text-black select-none">
          AquaVigil
        </h1>
        <span className="text-xl md:text-3xl font-light absolute top-2 right-[8%] md:right-[23%]">©</span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-zinc-200 mb-12"></div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
        {/* Left Column: Tagline */}
        <div className="flex flex-col space-y-6">
          <div className="text-2xl font-light">+</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-2xl text-zinc-900">
            Engineering the Pulse<br />
            of River Health.
          </h2>
        </div>

        {/* Right Column: Navigation */}
        <div className="flex flex-col items-end md:items-end space-y-2 pt-12">
          <Link href="/" className="text-xl md:text-2xl text-zinc-600 hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/dashboard" className="text-xl md:text-2xl text-zinc-600 hover:text-black transition-colors">
            Platform
          </Link>
          <Link href="/solutions" className="text-xl md:text-2xl text-zinc-600 hover:text-black transition-colors">
            Solutions
          </Link>
          <Link href="/about" className="text-xl md:text-2xl text-zinc-600 hover:text-black transition-colors">
            About Us
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center text-[10px] md:text-xs font-bold tracking-widest text-zinc-400 uppercase pt-8 border-t border-zinc-200">
        {/* Locations */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <span>Tokyo</span>
          <span>San Francisco</span>
          <span>London</span>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 text-right md:text-left">
          <span>©AQUAVIGIL {currentYear}</span>
          <span className="hidden md:inline">|</span>
          <Link href="/terms" className="hover:text-zinc-600 transition-colors">
            Terms of Service
          </Link>
          <span className="hidden md:inline">|</span>
          <span>AquaVigil Inc.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
