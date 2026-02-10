import React from 'react';

const AgencyExpertise = () => {
  return (
    <section className="bg-white text-black py-[120px]">
      <div className="container mx-auto px-8 max-w-[1440px]">
        {/* Section Title - Huge Impactful Hero Text */}
        <div className="mb-24">
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] font-bold uppercase leading-none tracking-[-0.02em]">
            Agency
          </h1>
        </div>

        {/* L'agence Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-[#E2E8F0] pt-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.01em] uppercase">
              L&apos;agence
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8">
            <p className="text-[1.125rem] leading-[1.6] text-[#666666] max-w-[700px]">
              Pixel Loom est une agence créative spécialisée dans la conception et le développement d&apos;expériences digitales haute couture. Nous fusionnons l&apos;élégance du design parisien avec les technologies les plus avancées pour donner vie à vos ambitions les plus audacieuses.
            </p>
            <p className="text-[1.125rem] leading-[1.6] text-[#666666] max-w-[700px]">
              Notre ADN repose sur une quête perpétuelle de l&apos;excellence esthétique et technique. Chaque projet est traité comme une œuvre unique, façonnée avec la précision d&apos;un maître artisan et la vision d&apos;un architecte digital.
            </p>
          </div>
        </div>

        {/* Expertise / Services Grid */}
        <div className="mt-32 pt-12 border-t border-[#E2E8F0]">
          <div className="mb-16">
            <span className="text-label text-[#000000]">Expertise</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Strategy */}
            <div className="group border-b border-[#E2E8F0] pb-10">
              <span className="block text-[0.875rem] font-medium text-[#666666] mb-6">01</span>
              <h3 className="font-display text-2xl font-semibold mb-6 uppercase tracking-tight">Stratégie</h3>
              <ul className="space-y-3 text-[1rem] text-[#666666]">
                <li>Audit & Analyse</li>
                <li>Positionnement de marque</li>
                <li>Conseil technologique</li>
                <li>Architecture de l&apos;information</li>
              </ul>
            </div>

            {/* Design */}
            <div className="group border-b border-[#E2E8F0] pb-10">
              <span className="block text-[0.875rem] font-medium text-[#666666] mb-6">02</span>
              <h3 className="font-display text-2xl font-semibold mb-6 uppercase tracking-tight">Design</h3>
              <ul className="space-y-3 text-[1rem] text-[#666666]">
                <li>Direction artistique</li>
                <li>UI / UX Design</li>
                <li>Motion Design</li>
                <li>Identité visuelle</li>
              </ul>
            </div>

            {/* Development */}
            <div className="group border-b border-[#E2E8F0] pb-10">
              <span className="block text-[0.875rem] font-medium text-[#666666] mb-6">03</span>
              <h3 className="font-display text-2xl font-semibold mb-6 uppercase tracking-tight">Développement</h3>
              <ul className="space-y-3 text-[1rem] text-[#666666]">
                <li>Développement sur-mesure</li>
                <li>Applications Web & Mobiles</li>
                <li>E-commerce haut de gamme</li>
                <li>Maintenance & Évolution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Link */}
        <div className="mt-20">
          <a 
            href="#contact" 
            className="cta-underline text-[1.125rem] font-medium inline-block text-black"
          >
            Lancer un projet avec nous &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgencyExpertise;