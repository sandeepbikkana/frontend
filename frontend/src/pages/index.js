"use client";
import React from "react";
import dynamic from "next/dynamic";
import OurAdvantages from "./OurAdvantages";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import PartnersAndPlatforms from "./PartnersSection";
import Footer from "./Footer";
import ClientTestimonials from "./Testimonial";
import ServiceSection from "../Component/ServiceContainer/ServiceSection.jsx";
import ContactUsSection from "./ContactForm";
// import Events from "./Events";
import SEO from "@/Component/SEO/SEO";
import Head from "next/head";

const TopBar = dynamic(() => import("./Topbar"), {
  loading: () => <div className="h-20 bg-black" />,
  ssr: false,
});

const HeroBanner = dynamic(() => import("./HeroBannerSection"), {
  loading: () => <div className="h-screen bg-black" />,
});

const ServicePackages = dynamic(() => import("./ServicePackages"), {
  ssr: false,
});

const SmartSolutions = dynamic(() => import("./SmartSolutions"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <SEO
        title="GTM Labs - From Idea to Influence"
        description="We help future forward Start-ups build Traction, Community, and Revenue
    with Full-Stack growth, Marketing, and Development services."
        image="https://gtmlabs.xyz/meta/og-logo.png"
        url="https://gtmlabs.xyz"
      />

      <div className="min-h-screen bg-black overflow-x-auto">
        <TopBar />
        <HeroBanner />
        <OurAdvantages />
        <AboutSection />
        <main id="ServiceSection">
          <ServiceSection />
        </main>

        <div id="Packages">
          <ServicePackages />
        </div>

        <div id="smart-solutions">
          <SmartSolutions />
        </div>
        {/* <Events /> */}
        <PartnersAndPlatforms />
        <ClientTestimonials />
        {/* <TeamSection /> */}
        <ContactUsSection />
        <Footer />
      </div>
    </>
  );
}
