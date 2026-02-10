import React from 'react';

const ContactHero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 max-w-[1200px] pt-[150px] pb-[60px]">
        <div className="flex flex-col items-start">
          <h1 
            className="text-[clamp(3rem,8vw,5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#000000] mb-8"
            style={{
              fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
            }}
          >
            Contact
          </h1>
          <div className="max-w-[600px]">
            <p 
              className="text-[1.125rem] leading-[1.6] text-[#666666]"
              style={{
                fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Vous avez un projet en tête ? Parlons-en. Notre équipe basée à Paris est prête à vous accompagner dans vos défis digitaux les plus ambitieux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;