"use client";

import React, { useState } from "react";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Agency from "@/components/sections/Agency";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Expertises from "@/components/sections/Expertises";
import VisionAnimation from "@/components/sections/VisionAnimation";
import Footer from "@/components/sections/footer";
import Preloader from "@/components/sections/preloader";
import FadeInUp from "@/components/ui/FadeInUp";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setLoadingComplete(true)} />
      <Navigation />
      <main className="pr-[80px]">
        <Hero startAnimation={loadingComplete} />
        
        <FadeInUp>
          <ServicesOverview />
        </FadeInUp>
        
        <FadeInUp>
          <Agency />
        </FadeInUp>
        
        <ClientMarquee />
        
        <FadeInUp>
          <Expertises />
        </FadeInUp>
        
        <FadeInUp>
          <VisionAnimation />
        </FadeInUp>
      </main>
      <div className="pr-[80px]">
        <FadeInUp>
          <Footer />
        </FadeInUp>
      </div>
    </>
  );
}
