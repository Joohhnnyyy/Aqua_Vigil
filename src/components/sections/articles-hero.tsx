import React from 'react';

const ArticlesHero = () => {
  return (
    <section className="bg-white pt-[160px] pb-[120px] md:pt-[200px] md:pb-[160px]">
      <div className="container mx-auto px-[5%] max-w-[1440px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="max-w-[800px]">
            <h1 
              className="text-[clamp(3.5rem,10vw,7rem)] font-bold leading-[0.9] tracking-tight text-black mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Articles
            </h1>
            <div className="max-w-[540px]">
              <p 
                className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed opacity-90"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Explore our collection of insights, industry news, and expert perspectives 
                on digital design, development, and the future of web experiences.
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div 
              className="text-[#666666] text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <div className="h-[2px] w-[60px] bg-[#337ab7]"></div>
              <span>Keep Exploring</span>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-[1px] bg-[#e0e0e0] mt-20 md:mt-32"></div>
      </div>
    </section>
  );
};

export default ArticlesHero;