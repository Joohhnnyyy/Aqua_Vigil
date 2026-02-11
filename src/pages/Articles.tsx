import React from 'react';
import Head from 'next/head';

/**
 * Articles Page Component
 * Reflected from the design: A grid of expert insights/blog posts
 * with large headings, 'pixel' branding accents, and organic visual treatments.
 */

const Articles = () => {
  const articles = [
    {
      id: 1,
      category: 'Strategy',
      title: 'Digital resilience in 2024',
      date: 'March 12, 2024',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      category: 'Design',
      title: 'Minimalism vs Brutalism',
      date: 'Feb 28, 2024',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      category: 'Development',
      title: 'Next.js 15: The future of web',
      date: 'Jan 15, 2024',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      category: 'Motion',
      title: 'The art of micro-interactions',
      date: 'Dec 03, 2023',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] selection:bg-[#3B82C4] selection:text-white">
      <Head>
        <title>Articles | AquaVigil - Expert Insights</title>
      </Head>

      {/* Sidebar - Consistent with High Level Design */}
      <div className="sidebar-fixed hidden lg:flex">
        <div className="flex flex-col gap-1 cursor-pointer group">
          <span className="w-6 h-[1px] bg-black transition-transform group-hover:translate-y-1"></span>
          <span className="w-4 h-[1px] bg-black transition-transform group-hover:-translate-y-1 self-end"></span>
        </div>
        
        <div className="flex flex-col gap-4 text-[11px] uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
          <span className="text-[#666666] hover:text-black cursor-pointer transition-colors">fr</span>
          <span className="text-black font-bold">en</span>
        </div>
      </div>

      <main className="pl-0 lg:pl-[80px]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-8">
              <span className="letter-wave text-[14px] font-light tracking-widest uppercase text-[#666666]">
                <span>I</span><span>n</span><span>s</span><span>i</span><span>g</span><span>h</span><span>t</span><span>s</span>
                <span> & </span>
                <span>T</span><span>h</span><span>o</span><span>u</span><span>g</span><span>h</span><span>t</span><span>s</span>
              </span>
            </div>

            <h1 className="leading-[0.9] mb-12">
              <span className="block italic font-light text-[0.4em] mb-4">Our</span>
              Articles
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <p className="max-w-xl text-[24px] md:text-[32px] leading-tight font-normal">
                Exploring the intersection of <span className="relative inline-block">
                  creativity
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#3B82C4]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span> and code through pixel-perfect lenses.
              </p>
              <div className="pixel-accent mb-2 hidden md:block"></div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {articles.map((article) => (
              <a 
                key={article.id} 
                href={`/articles/${article.id}`}
                className="group block border-t border-black pt-8 overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="bracket-text text-[14px] font-light uppercase tracking-widest text-[#666666]">
                    {article.category}
                  </span>
                  <span className="text-[14px] font-light">{article.date}</span>
                </div>

                <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>

                <h3 className="text-[40px] md:text-[56px] leading-[1] font-bold group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {article.title}
                </h3>
                
                <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[14px] font-bold uppercase tracking-tighter">Read Article</span>
                  <div className="h-[1px] w-12 bg-black"></div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Marquee Footer CTA */}
        <section className="mt-20 border-t border-black bg-white overflow-hidden py-12">
          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center text-[100px] md:text-[150px] font-bold uppercase tracking-tighter mx-8">
                Stay Curated
                <div className="mx-12 w-6 h-6 bg-black"></div>
                Subscribe
                <div className="mx-12 w-6 h-6 bg-[#3B82C4]"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="px-6 md:px-12 py-12 border-t border-black flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] uppercase tracking-widest">
          <div className="flex gap-8">
            <a href="#" className="hover:line-through transition-all">Instagram</a>
            <a href="#" className="hover:line-through transition-all">LinkedIn</a>
            <a href="#" className="hover:line-through transition-all">Twitter [X]</a>
          </div>
          <div>© 2024 AquaVigil — Engineered in California</div>
          <div className="flex gap-4 items-center">
            <span className="text-[#666666]">Back to top</span>
            <div className="w-3 h-3 bg-black cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          text-transform: lowercase;
        }
        .bracket-text::before {
          content: '[';
          margin-right: 6px;
        }
        .bracket-text::after {
          content: ']';
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
};

export default Articles;