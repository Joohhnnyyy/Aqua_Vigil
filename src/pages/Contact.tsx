import React, { useState } from 'react';
import Head from 'next/head';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#000000] font-sans">
      <Head>
        <title>Contact | AquaVigil - Contact</title>
      </Head>

      {/* Persistent Sidebar (Simplified for standalone page) */}
      <div className="fixed left-0 top-0 bottom-0 w-[80px] border-r border-[#000000] flex flex-col items-center justify-between py-8 z-50 bg-white">
        <div className="button-menu flex flex-col gap-1.5 cursor-pointer">
          <span className="w-6 h-[1px] bg-black"></span>
          <span className="w-6 h-[1px] bg-black"></span>
        </div>
        <div className="block-lang">
          <ul className="flex flex-col gap-4 text-[12px] font-bold uppercase tracking-widest items-center">
            <li className="text-[#666666] cursor-pointer hover:text-black transition-colors">fr</li>
            <li className="active text-black cursor-default border-b border-black">en</li>
          </ul>
        </div>
      </div>

      <main className="pl-[80px]">
        {/* Header Section */}
        <section className="pt-24 pb-12 px-8 lg:px-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12">
              <span className="text-[14px] font-light italic tracking-widest text-[#666666] inline-block mb-4 overflow-hidden">
                <span className="flex">
                  {"Let's talk about your project".split('').map((char, i) => (
                    <span 
                      key={i} 
                      className="inline-block hover:-translate-y-1 transition-transform duration-300"
                      style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
              <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter lowercase m-0 p-0">
                Contact
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24 px-8 lg:px-20">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase mb-4 tracking-wider">Name*</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="[ Your name ]"
                    className="w-full bg-transparent border-b border-[#000000] pb-4 text-[24px] focus:outline-none focus:border-[#3b82c4] transition-colors placeholder:text-[#e5e5e5]"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase mb-4 tracking-wider">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="[ your@email.com ]"
                    className="w-full bg-transparent border-b border-[#000000] pb-4 text-[24px] focus:outline-none focus:border-[#3b82c4] transition-colors placeholder:text-[#e5e5e5]"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase mb-4 tracking-wider">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="[ company name ]"
                    className="w-full bg-transparent border-b border-[#000000] pb-4 text-[24px] focus:outline-none focus:border-[#3b82c4] transition-colors placeholder:text-[#e5e5e5]"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase mb-4 tracking-wider">Your Message*</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="[ How can we help you? ]"
                    className="w-full bg-transparent border-b border-[#000000] pb-4 text-[24px] focus:outline-none focus:border-[#3b82c4] transition-colors placeholder:text-[#e5e5e5] resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="group relative inline-flex items-center overflow-hidden border border-black px-12 py-5 transition-all hover:bg-black hover:text-white"
                >
                  <span className="text-[18px] font-bold uppercase tracking-widest relative z-10">[ Send message ]</span>
                </button>
              </form>
            </div>

            {/* Direct Details & Location */}
            <div className="space-y-24 pt-4">
              {/* Paris Office */}
              <div>
                <h3 className="text-[14px] font-bold uppercase mb-8 tracking-widest text-[#666666]">Locate us</h3>
                <div className="space-y-4">
                  <p className="text-[40px] font-bold leading-tight lowercase">
                    California<br />
                    AquaVigil Headquarters<br />
                    123 Innovation Drive, Tech Park, CA 94025
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block border-b border-black text-[14px] font-bold uppercase tracking-widest mt-4 pb-1 hover:border-transparent transition-all"
                  >
                    [ Map View ]
                  </a>
                </div>
              </div>

              {/* Direct Reach */}
              <div>
                <h3 className="text-[14px] font-bold uppercase mb-8 tracking-widest text-[#666666]">Direct reach</h3>
                <div className="space-y-6">
                  <div>
                    <span className="block text-[12px] uppercase mb-1 font-bold text-[#666666]">Mail</span>
                    <a href="mailto:hello@aquavigil.com" className="text-[32px] font-bold hover:text-[#3b82c4] transition-colors">
                      hello@aquavigil.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-[12px] uppercase mb-1 font-bold text-[#666666]">Follow</span>
                    <div className="flex gap-6 mt-2">
                      <a href="#" className="text-[18px] font-bold underline hover:no-underline">Instagram</a>
                      <a href="#" className="text-[18px] font-bold underline hover:no-underline">LinkedIn</a>
                      <a href="#" className="text-[18px] font-bold underline hover:no-underline">Behance</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Marquee */}
        <section className="mb-12">
          <div className="border-t border-b border-black overflow-hidden py-10">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center mx-4">
                  <span className="text-[64px] font-bold uppercase tracking-tighter">New projects</span>
                  <div className="w-[15px] h-[15px] bg-black mx-12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 lg:px-20 py-12">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8 border-t border-[#f0f0f0] pt-12">
            <div className="text-[14px] font-light text-[#666666]">
              ©2024 AquaVigil. All rights reserved.
            </div>
            <div className="flex flex-col items-end">
              <div className="pixel-accent mb-4 w-3 h-3 bg-black"></div>
              <div className="text-[14px] font-bold uppercase italic tracking-widest">
                Made with love in Paris
              </div>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Contact;