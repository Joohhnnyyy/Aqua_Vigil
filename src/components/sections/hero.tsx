"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-[#337AB7] selection:text-white">
      {/* Background Grid Pattern (Subtle) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-[120px]">
        <div className="max-w-[1200px]">
          <div className="mb-6 inline-flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#337AB7]" />
            <span className="font-sans text-[14px] font-medium uppercase tracking-[0.1em] text-[#666666]">
              Digital Craftsmanship
            </span>
          </div>

          <h1 className="mb-8 font-sans text-[64px] font-[800] leading-[1.05] tracking-[-0.03em] text-black md:text-[84px] lg:text-[100px]">
            Pixel Loom
            <br />
            <span className="text-[#337AB7]">Agence web Paris</span>
          </h1>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-[600px] font-sans text-[18px] leading-[1.6] text-[#666666] md:text-[22px]">
              Nous concevons des exp&eacute;riences num&eacute;riques minimalistes et
              performantes qui &eacute;l&egrave;vent votre pr&eacute;sence digitale vers de
              nouveaux standards d&apos;excellence.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex h-[60px] items-center justify-center bg-black px-10 font-sans text-[14px] font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#337AB7]"
              >
                D&eacute;marrer un projet
              </a>
              <a
                href="#expertises"
                className="inline-flex h-[60px] items-center justify-center border-2 border-black px-10 font-sans text-[14px] font-semibold uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
              >
                Voir nos r&eacute;alisations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute right-0 bottom-0 p-8 hidden md:block">
        <div className="flex flex-col items-end gap-2 text-right">
          <span className="font-sans text-[12px] font-bold uppercase tracking-widest text-[#666666]">
            Based in France
          </span>
          <div className="h-[1px] w-[200px] bg-black" />
          <span className="font-sans text-[12px] font-medium text-[#666666]">
            48.8566&deg; N, 2.3522&deg; E
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
