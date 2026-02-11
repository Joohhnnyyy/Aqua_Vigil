"use client";

import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Agency from "@/components/sections/Agency";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Expertises from "@/components/sections/Expertises";
import VisionAnimation from "@/components/sections/VisionAnimation";
import Footer from "@/components/sections/footer";
import CookieConsent from "@/components/sections/CookieConsent";
import Preloader from "@/components/sections/preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main className="pr-[80px]">
        <Hero />
        <ServicesOverview />
        <Agency />
        <ClientMarquee />
        <Expertises />
        <VisionAnimation />
      </main>
      <div className="pr-[80px]">
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
}
