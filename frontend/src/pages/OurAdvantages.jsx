"use client";
import React, { useMemo } from "react";
import InfoCard from "../Component/InfoCard/InfoCard";
import internet from "../Assets/internet.png";
import Peoples from "../Assets/Peoples.png";
import Rocket from "../Assets/Rocket.png";
import Circle from "../Assets/Circle.png";
import GradientGlowText from "../Component/Typography/Heading";

export default function OurAdvantages() {
  const advantages = useMemo(
    () => [
      {
        image: Peoples,
        text: "Web3 & AI Native Team",
        subtext:
          "Built for Web3. We speak the language of DeFi, DAOs, and AI, creating strategies made for crypto-native audiences, not Web2 templates.",
        className: "h-[270px] w-[362px]",
      },
      {
        image: Circle,
        text: "Outcome-Driven Approach",
        subtext:
          "We build campaigns that drive real business results from user growth to fundraising with ROI at the core of everything we do.",
        className: "h-[270px] w-[362px]",
      },
      {
        image: Rocket,
        text: "Fundraising & Launchpad Support",
        subtext:
          "We support your raise with sharp GTM strategy, decks, and warm intros. Then help you launch seamlessly across Tier-1 platforms with full listing, liquidity, and compliance support.",
        className: "h-[270px] w-[362px]",
      },
      {
        image: internet,
        text: "Global Network Access",
        subtext:
          "We launch globally, activate locally. With on-ground partners and cultural fluency, we scale campaigns that truly resonate.",
        className: "h-[270px] w-[362px]",
      },
    ],
    []
  );

  return (
    <section
      id="OurAdvantages"
      className="relative bg-black text-white py-20 px-6 text-center overflow-hidden"
    >
      {/* Decorative SVG lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        width="100%"
        height="100%"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18 }}
      >
        <path d="M0 100 Q400 200 800 100 T1440 100" stroke="white" strokeWidth="2" fill="none" />
        <path d="M0 300 Q600 400 1200 300" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="12 8" />
        <path d="M0 500 Q500 350 1440 500" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 6" />
        <path d="M200 0 Q400 300 1200 0" stroke="white" strokeWidth="1" fill="none" strokeDasharray="10 10" />
        {/* Additional crazy lines */}
        <path d="M0 200 Q700 50 1440 200" stroke="white" strokeWidth="1.2" fill="none" strokeDasharray="8 6" />
        <path d="M0 400 Q900 600 1440 400" stroke="white" strokeWidth="1.2" fill="none" strokeDasharray="6 10" />
        <path d="M100 50 Q720 300 1340 50" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5 7" />
        <path d="M0 550 Q720 100 1440 550" stroke="white" strokeWidth="1" fill="none" strokeDasharray="12 6" />
        <path d="M300 0 Q720 600 1140 0" stroke="white" strokeWidth="1" fill="none" strokeDasharray="7 7" />
        <path d="M0 50 Q500 500 1440 50" stroke="white" strokeWidth="1" fill="none" strokeDasharray="9 5" />
      </svg>
      <GradientGlowText className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-black mb-6 tracking-widest leading-tight">
        <span className="block sm:inline">OUR</span>{" "}
        <span className="block sm:inline">ADVANTAGES</span>
      </GradientGlowText>

      <h3 className="text-2xl sm:text-4xl md:text-4xl text-center leading-snug">
        Not Just Another Agency,
        <br />
        <span className="text-transparent bg-gradient-to-r mt-2 from-blue-400 to-purple-500 bg-clip-text">
          A Real Growth Partner.
        </span>
      </h3>

      <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-sm sm:text-base md:text-lg">
        Here's how we help Web3 and AI startups grow with purpose.
      </p>

      <div className="orbit-container my-16">
        {advantages.map((item, index) => (
          <InfoCard
            key={index}
            image={item.image}
            text={item.text}
            subtext={item.subtext}
            className={`${item.className} orbit-card orbit-card-${index}`}
          />
        ))}
      </div>

      <a href="https://calendly.com/gtmlabsxyz/consult">
        <button className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg">
          Turn Strategy Into Action
        </button>
      </a>
    </section>
  );
}
