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
            THE MISSION
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
              AquaVigil
            </h2>
          </div>

          {/* Main Description Text */}
          <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
            <div className="space-y-8">
              <p 
                className="text-lg md:text-xl lg:text-[22px] leading-[1.6] text-[#333333]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
              >
                AquaVigil is an advanced AI platform specializing in real-time river health monitoring and flood prediction. Based in California, we empower communities and organizations with data-driven insights to protect vital water resources and ensure environmental sustainability.
              </p>
              
              <p 
                className="text-base md:text-lg leading-[1.7] text-[#666666]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
              >
                Our philosophy rests on the balance between precision and action. We believe that every data point serves a purpose and that accurate prediction is the ultimate form of protection. From sensor deployment to actionable alerts, we bridge the gap between environmental data and real-world safety.
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