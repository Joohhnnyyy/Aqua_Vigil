import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#E0E0E0] py-16 md:py-24">
      <div className="container mx-auto px-[5%] max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Agency Mini-Logo & Brand */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3fc41ebf-6cc6-48d3-935a-dba65c5c420c-pxloom-com/assets/icons/favicon32x32-3.png"
                  alt="Pixel Loom Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-[20px] font-bold tracking-tight text-black font-sans">
                Pixel Loom
              </span>
            </div>
            <p className="text-[#666666] text-[14px] leading-relaxed max-w-[240px]">
              Avant-garde digital agency specializing in premium web experiences and minimalist design.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-black mb-2">
              Contact
            </h3>
            <a 
              href="mailto:hello@pxloom.com" 
              className="text-[16px] text-[#1A1A1A] hover:text-[#337AB7] transition-colors duration-300"
            >
              hello@pxloom.com
            </a>
            <a 
              href="tel:+33100000000" 
              className="text-[16px] text-[#1A1A1A] hover:text-[#337AB7] transition-colors duration-300"
            >
              +33 (0)1 00 00 00 00
            </a>
          </div>

          {/* Office Locations */}
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row lg:flex-col lg:space-y-8 gap-8">
            <div className="flex flex-col space-y-3">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-black">
                Paris Office
              </h3>
              <address className="not-italic text-[14px] text-[#666666] leading-6">
                12 Rue de la Paix<br />
                75002 Paris, France
              </address>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-black">
                Porto Office
              </h3>
              <address className="not-italic text-[14px] text-[#666666] leading-6">
                Rua de Santa Catarina<br />
                4000-447 Porto, Portugal
              </address>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-black mb-2">
              Follow Us
            </h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#337AB7] transition-colors duration-300 w-fit"
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#337AB7] transition-colors duration-300 w-fit"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#337AB7] transition-colors duration-300 w-fit"
              >
                Twitter / X
              </a>
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#337AB7] transition-colors duration-300 w-fit"
              >
                Behance
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-[#F5F5F5] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[12px] text-[#666666] font-medium uppercase tracking-tight">
            © {new Date().getFullYear()} Pixel Loom. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="/legal" className="text-[12px] text-[#666666] hover:text-black transition-colors uppercase font-bold tracking-tight">
              Legal Notice
            </a>
            <a href="/privacy" className="text-[12px] text-[#666666] hover:text-black transition-colors uppercase font-bold tracking-tight">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;