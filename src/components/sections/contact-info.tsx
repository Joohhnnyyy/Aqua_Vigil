import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section 
      className="bg-white"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Left Column: Agency Contact Information */}
          <div className="flex flex-col space-y-12">
            <div>
              <h2 
                className="mb-8"
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: '1.2',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--foreground)'
                }}
              >
                AquaVigil Headquarters
              </h2>
              <address 
                className="not-italic space-y-1"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666666'
                }}
              >
                <p className="m-0">123 Innovation Drive</p>
                <p className="m-0">Tech Park, CA 94025</p>
              </address>
            </div>

            <div className="space-y-6">
              <div>
                <span 
                  className="block uppercase tracking-widest mb-1"
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#999999'
                  }}
                >
                  Call us
                </span>
                <a 
                  href="tel:+15551234567" 
                  className="hover:text-[#3b82c4] transition-colors duration-300"
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'var(--foreground)',
                    textDecoration: 'none'
                  }}
                >
                  +1 (555) 123-4567
                </a>
              </div>

              <div>
                <span 
                  className="block uppercase tracking-widest mb-1"
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#999999'
                  }}
                >
                  Email us
                </span>
                <a 
                  href="mailto:hello@aquavigil.com" 
                  className="hover:text-[#3b82c4] transition-colors duration-300"
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'var(--foreground)',
                    textDecoration: 'none'
                  }}
                >
                  hello@aquavigil.com
                </a>
              </div>
            </div>

            <div>
              <span 
                className="block uppercase tracking-widest mb-4"
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#999999'
                }}
              >
                Follow us
              </span>
              <div className="flex space-x-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-[#337ab7] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-[#337ab7] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-[#337ab7] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative / Brand Space (Placeholder or visual balance as per agency standard) */}
          <div className="hidden md:flex items-start justify-end">
            <div 
              style={{
                maxWidth: '400px',
                textAlign: 'right'
              }}
            >
              <p 
                style={{
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: '#999999',
                  fontStyle: 'italic'
                }}
              >
                Working together to protect our most vital resource. Our team based in California supports you with data-driven insights and environmental monitoring solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;