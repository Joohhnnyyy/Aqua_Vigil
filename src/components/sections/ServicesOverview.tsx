"use client";

import React from 'react';

const ServicesOverview: React.FC = () => {
  return (
    <section 
      className="services py-[120px] bg-[#fafafa]" 
      id="services-overview"
      style={{
        display: 'block',
        position: 'static',
        width: '100%',
        backgroundColor: 'rgb(250, 250, 250)',
      }}
    >
      <div className="container mx-auto px-8 max-w-[1440px]">
        <div 
          className="content-services flex flex-col items-start space-y-2"
        >
          {/* Monitoring */}
          <div 
            className="title-service text-large"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 100,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: 'rgb(0, 0, 0)',
              textTransform: 'lowercase',
            }}
          >
            Monitoring
          </div>

          {/* Analysis - AI Prediction */}
          <div 
            className="title-service text-large text-hyphen flex items-center flex-wrap"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 100,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: 'rgb(0, 0, 0)',
              textTransform: 'lowercase',
            }}
          >
            Analysis 
            <div 
              className="hyphen mx-[0.2em] w-[0.8em] h-[4px] bg-[#3B82C4] inline-block align-middle"
              style={{
                height: 'clamp(4px, 0.5vw, 8px)',
                width: 'clamp(40px, 8vw, 120px)',
              }}
            ></div>
            <span className="font-thin opacity-100">AI Prediction</span>
          </div>

          {/* - Alerts */}
          <div 
            className="title-service text-large text-hyphen flex items-center"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 100,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: 'rgb(0, 0, 0)',
              textTransform: 'lowercase',
            }}
          >
            <div 
              className="hyphen mr-[0.2em] w-[0.8em] h-[4px] bg-[#3B82C4]  inline-block align-middle"
              style={{
                height: 'clamp(4px, 0.5vw, 8px)',
                width: 'clamp(40px, 8vw, 120px)',
              }}
            ></div>
            <strong className="font-bold">Alerts</strong>
          </div>

          {/* Simulation */}
          <div 
            className="title-service text-large"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 100,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: 'rgb(0, 0, 0)',
              textTransform: 'lowercase',
              paddingLeft: 'clamp(2rem, 15vw, 10rem)',
            }}
          >
            Simulation
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-large {
          font-variation-settings: "wght" 100;
        }
        
        @media (max-width: 768px) {
          .services {
            padding: 80px 0;
          }
          .title-service {
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesOverview;