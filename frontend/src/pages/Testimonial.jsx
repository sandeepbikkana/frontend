// ClientTestimonials.jsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import TestimonialCard from "../Component/TestimonialCard/testimonialCard";

const testimonials = [
  {
    name: "Vikas Singh",
    title: "Founder, XTrading",
    quote:
      '"Fast-tracked our token listing on CoinMarketCap & CoinGecko within 28 business hours - powered by GTM Labs."',
  },
  {
    name: "Mustafa Guler",
    title: "Founder & CEO, Edu3Labs",
    quote:
      '"GTM Labs fast-tracked our CMC & CG listings and boosted our visibility with top-tier trending support."',
  },
  {
    name: "Dhivya Daniel",
    title: "CEO, Metawise Marketing",
    quote:
      '"GTM Labs fast-tracked GTY’s listing on CoinMarketCap and CoinGecko within 30 business hours."',
  },
  {
    name: "Artur",
    title: "Founder & CEO, GT Protocol",
    quote:
      '"GTM Labs smoothly got our GTAI token listed on KoinBX - a great experience."',
  },
  {
    name: "Dhivya Daniel",
    title: "CEO, Metawise Marketing",
    quote:
      '"GTM Labs drove many projects presale marketing with effective shilling, trending, and channel promotions pre-TGE."',
  },
  {
    name: "Keith Salins",
    title: "Founder, Crowwd Labs",
    quote:
      '"GTM Labs supported our KOL marketing and Twitter Space promotions, driving strong engagement and results."',
  },
  {
    name: "Mustafa Guler",
    title: "Founder & CEO, Edu3Labs",
    quote:
      '"GTM Labs secured Tier 1 launchpad connections for our IDO pre-TGE."',
  },
  {
    name: "Anonymous",
    title: "Founder, Tidy Coin",
    quote:
      '"GTM Labs secured over 400+ press placements for Tidy Coin, generating massive attraction and publicity for our project."',
  },
  {
    name: "Manu Singh",
    title: "Founder & CEO, Contrarian Technologies",
    quote:
      '"GTM Labs got our token PepeCashFun listed on both CMC and CG within just 24 business hours."',
  },
];

export default function ClientTestimonials() {
  return (
    <section className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden">
      <div className="absolute w-[600px] h-[600px] left-[-400px] top-[-20%] sm:w-[800px] sm:h-[800px] sm:left-[-500px] bg-[radial-gradient(circle_at_center,rgba(48,158,255,0.574)_0%,rgba(48,158,255,0.377)_30%,rgba(48,158,255,0.188)_50%,transparent_70%)] rounded-full blur-[60px] sm:blur-[80px] z-0 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] right-[-400px] top-[-20%] sm:w-[800px] sm:h-[800px] sm:right-[-500px] bg-[radial-gradient(circle_at_center,rgba(177,69,255,0.574)_0%,rgba(177,69,255,0.377)_30%,rgba(177,69,255,0.188)_50%,transparent_70%)] rounded-full blur-[60px] sm:blur-[80px] z-0 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto text-center z-0"></div>
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-white mb-4">
          <div className="mb-2">What Our</div>
          <div>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </div>
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Don’t just take our word for it.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard {...t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
