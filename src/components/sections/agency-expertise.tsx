import React from 'react';

const AgencyExpertise = () => {
  return (
    <section className="bg-white text-black py-[120px]">
      <div className="container mx-auto px-8 max-w-[1440px]">
        {/* Section Title - Huge Impactful Hero Text */}
        <div className="mb-24">
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] font-bold uppercase leading-none tracking-[-0.02em]">
            Platform
          </h1>
        </div>

        {/* Platform Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-[#E2E8F0] pt-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.01em] uppercase">
              Our Platform
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8">
            <p className="text-[1.125rem] leading-[1.6] text-[#666666] max-w-[700px]">
              AquaVigil is a leading environmental technology platform specializing in real-time river health monitoring and flood prediction. We merge advanced sensor networks with state-of-the-art AI to provide actionable insights for a sustainable future.
            </p>
            <p className="text-[1.125rem] leading-[1.6] text-[#666666] max-w-[700px]">
              Our core mission is to empower communities and organizations with precise data. Every data point is analyzed with the accuracy of scientific rigor and the foresight of predictive modeling.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-32 pt-12 border-t border-[#E2E8F0]">
          <div className="mb-16">
            <span className="text-label text-[#000000]">Capabilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Monitoring */}
            <div className="group border-b border-[#E2E8F0] pb-10">
              <span className="block text-[0.875rem] font-medium text-[#666666] mb-6">01</span>
              <h3 className="font-display text-2xl font-semibold mb-6 uppercase tracking-tight">Monitoring</h3>
              <ul className="space-y-3 text-[1rem] text-[#666666]">
                <li>Real-time Data Acquisition</li>
                <li>Water Quality Sensors</li>
                <li>Flow Rate Analysis</li>
                <li>Pollution Detection</li>
              </ul>
            </div>

            {/* AI Analysis */}
            <div className="group border-b border-[#E2E8F0] pb-10">
              <span className="block text-[0.875rem] font-medium text-[#666666] mb-6">02</span>
              <h3 className="font-display text-2xl font-semibold mb-6 uppercase tracking-tight">AI Analysis</h3>
              <ul className="space-y-3 text-[1rem] text-[#666666]">
                <li>Predictive Modeling</li>
                <li>Pattern Recognition</li>
                <li>Anomaly Detection</li>
                <li>Flood Forecasting</li>
              </ul>
            </div>

            {/* Reporting */}
            <div className="group border-b border-[#E2E8F0] pb-10">
              <span className="block text-[0.875rem] font-medium text-[#666666] mb-6">03</span>
              <h3 className="font-display text-2xl font-semibold mb-6 uppercase tracking-tight">Reporting</h3>
              <ul className="space-y-3 text-[1rem] text-[#666666]">
                <li>Custom Dashboards</li>
                <li>Automated Alerts</li>
                <li>Compliance Reports</li>
                <li>Historical Data Archives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Link */}
        <div className="mt-20">
          <a 
            href="/contact" 
            className="cta-underline text-[1.125rem] font-medium inline-block text-black"
          >
            Start a conversation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgencyExpertise;