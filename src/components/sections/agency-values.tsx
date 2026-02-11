import React from 'react';

/**
 * AgencyValues Component
 * Renders the philosophical introduction section ("L'agence") for Pixel Loom.
 * Follows Swiss-style typography and a minimalist 12-column grid.
 */

const AgencyValues: React.FC = () => {
  return (
    <section 
      id="about-us" 
      className="bg-background section-padding"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div className="container mx-auto px-8 max-w-[1440px]">
        {/* Subtle separator line if needed by layout context, 
            though often handled by section transitions */}
        <div className="w-full h-[1px] bg-[#E2E8F0] mb-12" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Left Column: Heading & Label */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span 
              className="text-label text-[#666666] mb-8"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Philosophy
            </span>
            <h2 
              className="font-display text-foreground leading-[1.1] tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 600,
                maxWidth: '10ch'
              }}
            >
              The future of water monitoring.
            </h2>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 pt-2 lg:pt-0">
            <div className="max-w-2xl space-y-10">
              <p 
                className="text-[#000000] leading-relaxed"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  marginBottom: '2.5rem'
                }}
              >
                AquaVigil is a river health monitoring platform. We assist organizations in their environmental stewardship through an approach combining exceptional data accuracy and technical excellence.
              </p>
              
              <div className="space-y-6">
                <p 
                  className="text-[#666666]"
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.6'
                  }}
                >
                  Our philosophy is based on the conviction that monitoring is not just about data collection, but a strategic solution to complex environmental challenges. We prioritize accuracy over volume, and actionable insights over raw numbers.
                </p>
                
                <p 
                  className="text-[#666666]"
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.6'
                  }}
                >
                  Every project is an opportunity to push the boundaries of environmental protection. We work closely with our partners to create monitoring solutions that not only meet their needs but exceed their expectations for safety and sustainability.
                </p>
              </div>

              {/* Call to Action Link */}
              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="cta-underline text-[#000000] font-medium inline-block"
                  style={{
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Discover our approach
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Stats/Capabilities Row that often follows this content block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 pt-16 border-t border-[#E2E8F0]">
          <div>
            <h3 className="text-[2.5rem] font-bold mb-2">01</h3>
            <h4 className="text-label text-foreground mb-4">Precision Engineering</h4>
            <p className="text-sm text-[#666666]">Meticulous attention to every sensor reading and data point.</p>
          </div>
          <div>
            <h3 className="text-[2.5rem] font-bold mb-2">02</h3>
            <h4 className="text-label text-foreground mb-4">AI-Driven Insights</h4>
            <p className="text-sm text-[#666666]">Continuous exploration of new technologies for sustainable solutions.</p>
          </div>
          <div>
            <h3 className="text-[2.5rem] font-bold mb-2">03</h3>
            <h4 className="text-label text-foreground mb-4">Sustainability</h4>
            <p className="text-sm text-[#666666]">A partnership founded on transparency and the pursuit of excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyValues;