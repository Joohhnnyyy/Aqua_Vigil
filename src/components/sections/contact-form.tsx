"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white contact-section-padding px-8 md:px-0">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[40px]">
          {/* Left Column: Agency Information */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="text-[#000000] font-semibold text-[48px] leading-[1.2] mb-12 tracking-tight">
              Contact
            </h2>
            
            <div className="space-y-12">
              {/* Paris Office */}
              <div>
                <h3 className="text-[#000000] font-medium text-[24px] mb-4">Paris</h3>
                <div className="text-[#666666] text-[16px] leading-[1.6] space-y-1">
                  <p>15 Rue de la Paix</p>
                  <p>75002 Paris, France</p>
                  <p className="pt-2">
                    <a href="tel:+33123456789" className="hover:text-[#337ab7] transition-colors">
                      +33 (0)1 23 45 67 89
                    </a>
                  </p>
                </div>
              </div>

              {/* General Inquiries */}
              <div>
                <h3 className="text-[#000000] font-medium text-[24px] mb-4">Inquiries</h3>
                <div className="text-[#666666] text-[16px] leading-[1.6] space-y-1">
                  <p>
                    <a href="mailto:hello@pixelloom.fr" className="hover:text-[#337ab7] transition-colors border-b border-transparent hover:border-[#337ab7]">
                      hello@pixelloom.fr
                    </a>
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-[#000000] font-medium text-[24px] mb-4">Follow us</h3>
                <div className="flex flex-wrap gap-6 text-[#666666] text-[14px] font-medium uppercase tracking-wider">
                  <a href="#" className="hover:text-[#337ab7] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#337ab7] transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-[#337ab7] transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Name Field */}
                <div className="relative group">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-minimal text-[16px] text-black"
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-minimal text-[16px] text-black"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-minimal text-[16px] text-black"
                />
              </div>

              {/* Message Field */}
              <div className="relative group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-minimal text-[16px] text-black resize-none min-h-[120px]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#000000] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-[0.1em] hover:bg-[#337ab7] transition-colors duration-300 flex items-center group"
                >
                  Send Message
                  <svg 
                    className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .contact-section-padding {
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .form-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #000000;
          margin-bottom: 0px;
          display: block;
        }
        .input-minimal {
          border: none;
          border-bottom: 1px solid #eeeeee;
          border-radius: 0;
          padding: 1rem 0;
          width: 100%;
          background: transparent;
          transition: border-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .input-minimal:focus {
          outline: none;
          border-color: #337ab7;
        }
        .input-minimal::placeholder {
          color: #cccccc;
        }
        @media (max-width: 768px) {
          .contact-section-padding {
            padding-top: 60px;
            padding-bottom: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;