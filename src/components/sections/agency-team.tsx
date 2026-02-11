import React from 'react';
import Image from 'next/image';

/**
 * AgencyTeam Component
 * 
 * Clones the team section showcasing "Loomers" with a minimalist grid-based layout.
 * Features:
 * - Precise 12-column grid layout (Swiss-style).
 * - Sharp cornered (0px radius) team portraits.
 * - Subtle opacity hover effects.
 * - High-contrast typography matching Helvetic Neue/Arial/Inter hierarchy.
 * - Minimalist monochromatic aesthetic.
 */

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Antoine Lefebvre',
    role: 'Fondateur & Directeur de Création',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Marie Dupont',
    role: 'Chef de Projet Senior',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Julien Bernard',
    role: 'Lead Developer Fullstack',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Sophie Martin',
    role: 'Senior UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Thomas Morel',
    role: 'Directeur Artistique',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Léa Garcia',
    role: 'Consultante SEO & Marketing',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Nicolas Petit',
    role: 'Développeur Front-end',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'Chloé Dubois',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  }
];

const AgencyTeam = () => {
  return (
    <section 
      id="team" 
      className="bg-[#FFFFFF] py-[120px] px-8 md:px-16"
      style={{ fontFamily: 'var(--font-sans)', color: 'rgb(0, 0, 0)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-10 mb-24">
          <div className="col-span-12 lg:col-span-8">
            <h4 className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#666666] mb-8">
              The Team
            </h4>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-black">
              The AquaVigil Team. <br />
              <span className="text-[#666666]">Collective expertise for water sustainability.</span>
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="group cursor-default">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F5] mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-80 grayscale-[0.2]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-[1.125rem] font-bold leading-tight uppercase tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[0.875rem] text-[#666666] font-medium tracking-tight m-0">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar / Join Us */}
        <div className="mt-32 pt-20 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-[1.125rem] text-[#666666] max-w-md m-0">
            We are always looking for new talent passionate about environmental technology and sustainability.
          </p>
          <a 
            href="mailto:careers@aquavigil.com" 
            className="mt-8 md:mt-0 text-black text-[1.125rem] font-semibold cta-underline flex items-center gap-2"
          >
            Join our mission
            <svg 
              width="15" 
              height="15" 
              viewBox="0 0 15 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mt-0.5"
            >
              <path 
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4L6.5 4C6.22386 4 6 3.77614 6 3.5C6 3.22386 6.22386 3 6.5 3H11.5C11.7761 3 12 3.22386 12 3.5V8.5C12 8.77614 11.7761 9 11.5 9C11.2239 9 11 8.77614 11 8.5L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" 
                fill="currentColor" 
                fillRule="evenodd" 
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .cta-underline {
          position: relative;
          text-decoration: none;
        }

        .cta-underline::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .cta-underline:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </section>
  );
};

export default AgencyTeam;