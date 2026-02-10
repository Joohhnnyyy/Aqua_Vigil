import React from 'react';

/**
 * AgencyHero Component
 * 
 * A pixel-perfect clone of the "About Us" introduction section.
 * Features:
 * - Large typography heading "L'AGENCE" (Swiss-style)
 * - Two-column minimalist layout for the description
 * - High-contrast black and white styling
 * - Seamless integration with the overall agency design system
 */

const AgencyHero: React.FC = () => {
  return (
    <section className="bg-white pt-[120px] pb-[80px]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-20">
        {/* Large Hero Title */}
        <div className="mb-24">
          <h1 
            className="text-[12vw] leading-[0.9] font-bold tracking-[-0.03em] uppercase transition-all duration-700 ease-out"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)' 
            }}
          >
            L&apos;AGENCE
          </h1>
        </div>

        {/* Introduction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-x-12">
          {/* Subsection Header */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 
              className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight uppercase"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--color-primary)'
              }}
            >
              Pixel Loom
            </h2>
          </div>

          {/* Main Description Text */}
          <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
            <div className="space-y-8">
              <p 
                className="text-lg md:text-xl lg:text-[22px] leading-[1.6] text-[#333333]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
              >
                Pixel Loom est une agence créative spécialisée dans la conception et le développement d&apos;expériences numériques haut de gamme. Basés à Paris, nous accompagnons les marques dans leur transformation digitale avec une approche mêlant rigueur technique et audace esthétique.
              </p>
              
              <p 
                className="text-base md:text-lg leading-[1.7] text-[#666666]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
              >
                Notre philosophie repose sur l&apos;équilibre entre forme et fonction. Nous croyons que chaque pixel doit avoir un but et que la simplicité est la forme ultime de la sophistication. De la stratégie de marque à la mise en ligne, nous tissons des liens solides entre vos idées et leurs réalisations concrètes sur le web.
              </p>

              {/* Decorative line separator */}
              <div className="pt-12 w-full border-t border-[#E2E8F0]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyHero;