"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Mission", href: "/#agency" },
    { name: "Features", href: "/#expertises" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-[5%] max-w-[1440px] flex items-center justify-between">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3fc41ebf-6cc6-48d3-935a-dba65c5c420c-pxloom-com/assets/icons/favicon180x180-4.png"
              alt="AquaVigil"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-[20px] font-bold tracking-tight text-black">
            AquaVigil
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[14px] font-medium text-[#1a1a1a] hover:text-[#337ab7] transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="flex items-center gap-3 border-l border-[#e0e0e0] pl-8 ml-2">
            <button className="text-[12px] font-bold text-black uppercase cursor-pointer hover:text-[#337ab7] transition-colors">
              FR
            </button>
            <span className="text-[#e0e0e0] text-[12px]">|</span>
            <button className="text-[12px] font-medium text-[#666666] uppercase cursor-pointer hover:text-black transition-colors">
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-black hover:text-[#337ab7] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[90] lg:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center p-10 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-bold text-black hover:text-[#337ab7] transition-colors lowercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-6 pt-10 mt-10 border-t border-[#e0e0e0] w-full justify-center">
            <button className="text-sm font-bold text-black uppercase">FR</button>
            <button className="text-sm font-medium text-[#666666] uppercase">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;