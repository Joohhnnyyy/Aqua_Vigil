import React from 'react';

/**
 * ExpertiseOverview Component
 * 
 * Clones the expertises section from pxloom.com featuring a minimalist grid 
 * layout that showcases core services like Web Design, Web Development, 
 * and Digital Strategy.
 */

const ExpertiseOverview: React.FC = () => {
  const expertises = [
    {
      label: "SKILL 01",
      title: "Web Design",
      description: "Nous créons des interfaces intuitives et esthétiques qui captivent vos utilisateurs. Notre approche combine ergonomie (UX) et design visuel (UI) pour offrir une expérience mémorable sur tous les supports.",
      tags: ["UX/UI Design", "Prototypage", "Design System"]
    },
    {
      label: "SKILL 02",
      title: "Web Development",
      description: "Du site vitrine à l'application web complexe, nous développons des solutions performantes, sécurisées et évolutives. Nous utilisons les dernières technologies pour garantir une rapidité optimale.",
      tags: ["Next.js", "Shopify", "React", "Node.js"]
    },
    {
      label: "SKILL 03",
      title: "Digital Strategy",
      description: "Nous vous accompagnons dans la définition de votre présence en ligne. De l’audit SEO à la stratégie de contenu, nous plaçons la croissance de votre entreprise au cœur de nos réflexions.",
      tags: ["SEO", "Content Strategy", "Digital Marketing"]
    }
  ];

  return (
    <section 
      id="expertises" 
      className="bg-[#ffffff] section-padding"
      style={{ 
        paddingTop: '120px', 
        paddingBottom: '120px' 
      }}
    >
      <div className="container mx-auto px-8 max-w-[1400px]">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-label inline-block mb-4 text-[#666666] text-[12px] font-medium uppercase tracking-[0.1em]">
            NOS EXPERTISES
          </span>
          <h2 className="text-[#000000] text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] max-w-[800px]">
            Des solutions sur-mesure pour vos ambitions digitales.
          </h2>
        </div>

        {/* Expertise Grid/List */}
        <div className="flex flex-col">
          {expertises.map((item, index) => (
            <div 
              key={index}
              className="expertise-row group relative flex flex-col md:flex-row border-t border-[#eeeeee] py-12 md:py-16 transition-all duration-300 ease-out last:border-b"
            >
              {/* Left Column: Label */}
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-[#666666] text-[12px] font-medium tracking-[0.1em]">
                  {item.label}
                </span>
              </div>

              {/* Middle Column: Title & Description */}
              <div className="md:w-2/4 pr-0 md:pr-12">
                <h3 className="text-[#000000] text-[32px] md:text-[40px] font-semibold leading-[1.2] mb-6 tracking-[-0.01em] group-hover:translate-x-2 transition-transform duration-300 ease-out">
                  {item.title}
                </h3>
                <p className="text-[#333333] text-[16px] md:text-[18px] leading-[1.6] max-w-[500px]">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Tags/Footer */}
              <div className="md:w-1/4 mt-8 md:mt-0 flex flex-wrap gap-2 items-start content-start">
                {item.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="inline-block px-3 py-1 border border-[#eeeeee] text-[12px] text-[#666666] rounded-full group-hover:border-[#000000] group-hover:text-[#000000] transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Animated Line or indicator can be added here if needed based on typical agency styles */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#000000] transition-all duration-500 ease-in-out group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-16 text-right">
          <a 
            href="#contact" 
            className="link-hover text-[#000000] text-[18px] font-medium group flex items-center justify-end"
          >
            <span>Démarrer un projet</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path 
                d="M5 12H19M19 12L13 6M19 12L13 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .expertise-row {
          border-top: 1px solid #eeeeee;
        }
        .expertise-row:last-child {
          border-bottom: 1px solid #eeeeee;
        }
        .link-hover {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .link-hover::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .link-hover:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </section>
  );
};

export default ExpertiseOverview;