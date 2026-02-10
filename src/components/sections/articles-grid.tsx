import React from 'react';
import Image from 'next/image';

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const articles: Article[] = [
  {
    id: '1',
    category: 'Design',
    title: 'The Future of Minimalist Interface Design in 2024',
    excerpt: 'Exploring how brutalism and minimalism are merging to create new digital experiences for modern brands.',
    date: 'March 14, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    category: 'Development',
    title: 'Why Performance is the Only SEO Metric That Matters',
    excerpt: 'Beyond keywords and backlinks, speed is the foundation of user retention and search engine rankings.',
    date: 'March 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    category: 'Strategy',
    title: 'Scaling Digital Products: From MVP to Enterprise',
    excerpt: 'A comprehensive guide on maintaining design integrity while scaling functionality for millions of users.',
    date: 'March 05, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    category: 'Agency Loft',
    title: 'Inside Our Paris Studio: Collaboration & Creativity',
    excerpt: 'A look behind the scenes at how Pixel Loom fosters innovation through physical space and culture.',
    date: 'February 28, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    category: 'Innovation',
    title: 'AI in the Creative Process: Tool or Replacement?',
    excerpt: 'Analyzing the shift in agency workflows as generative tools become standard in design and dev.',
    date: 'February 22, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    category: 'UX Research',
    title: 'The Psychology of Color in Financial Dashboards',
    excerpt: 'How color theory influences user trust and decision making in complex data environments.',
    date: 'February 15, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop'
  }
];

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden mb-8 border border-[#E0E0E0]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] scale-100 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <span className="category-label text-[12px] font-bold tracking-[0.05em] uppercase text-[#000000]">
          {article.category}
        </span>
        <h3 className="text-[24px] font-semibold leading-[1.4] text-[#000000] group-hover:text-[#337AB7] transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-[16px] text-[#1A1A1A] line-clamp-2 font-normal leading-relaxed">
          {article.excerpt}
        </p>
        <div className="flex items-center space-x-4 pt-2">
          <span className="meta-text text-[14px] font-medium text-[#666666]">
            {article.date}
          </span>
          <span className="w-1 h-1 bg-[#E0E0E0] rounded-full" />
          <span className="meta-text text-[14px] font-medium text-[#666666]">
            {article.readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

const ArticlesGrid = () => {
  return (
    <section className="bg-white py-[120px]">
      <div className="container mx-auto px-[5%] max-w-[1440px]">
        {/* Responsive Grid System: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[80px]">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-[120px] flex justify-center">
          <button className="relative group px-12 py-5 border border-[#000000] overflow-hidden transition-all duration-300">
            <span className="relative z-10 text-[12px] font-bold uppercase tracking-widest text-[#000000] group-hover:text-white transition-colors duration-300">
              Load More Articles
            </span>
            <div className="absolute inset-0 bg-[#000000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;