"use client";

import React from "react";
import GradientGlowText from "@/Component/Typography/Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import EventCard from "@/Component/EventCard/EventCard";
import Block_Asia_tour_Singapor_2025 from "../Assets/EventImgs/BlackAsiaSingapor2025.jpg";
import Block_Asia_tour_Delhi_2025 from "../Assets/EventImgs/BlockAsiaDelhi2025.jpg";

const defaultEvents = [
  {
    id: 1,
    img: Block_Asia_tour_Delhi_2025,
    title: "BlockAsia Tour Delhi Edition",
    date: "Sep 25 2025",
    location: "Delhi",
    description: "AI x WEB-3 Founders, Investors & Kols Mixer",
    link: "https://lu.ma/7oaps1pt",
    category: "Hackathon",
  },
  {
    id: 2,
    img: Block_Asia_tour_Singapor_2025,
    title: "BlockAsia Tour Singapore Edition",
    date: "October 1-2, 2024",
    location: "Singapore",
    description: "AI x WEB-3 Founders, Investors & Kols Mixer",
    link: "https://lu.ma/vh4ukkx2",
    category: "Side Event",
  },
];

function Events() {
  return (
    <section
      id="EventSection"
      className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden"
    >
      <div className="absolute w-[600px] h-[600px] left-[-400px] top-[-20%] sm:w-[800px] sm:h-[800px] sm:left-[-500px] bg-[radial-gradient(circle_at_center,rgba(48,158,255,0.574)_0%,rgba(48,158,255,0.377)_30%,rgba(48,158,255,0.188)_50%,transparent_70%)] rounded-full blur-[60px] sm:blur-[80px] z-0 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] right-[-400px] top-[-20%] sm:w-[800px] sm:h-[800px] sm:right-[-500px] bg-[radial-gradient(circle_at_center,rgba(177,69,255,0.574)_0%,rgba(177,69,255,0.377)_30%,rgba(177,69,255,0.188)_50%,transparent_70%)] rounded-full blur-[60px] sm:blur-[80px] z-0 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-20">
          <GradientGlowText
            className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-gray-600 mb-11 cursor-pointer whitespace-nowrap overflow-hidden"
            circleSize={120}
            baseTextColor="text-gray-600"
          >
            EVENTS
          </GradientGlowText>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-sora text-white mb-4">
            <div className="mb-2">Join the Future of Web3 Innovation</div>
            <div>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Where Innovation Meets Opportunity
              </span>
            </div>
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl mx-auto">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3400, disableOnInteraction: false }}
              loop={true}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="!overflow-visible px-4"
            >
              {defaultEvents.map((event, idx) => (
                <SwiperSlide key={idx} className="!flex !justify-center">
                  <EventCard {...event} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="text-center mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 w-full px-2">
            <span className="font-sora font-light text-sm sm:text-base md:text-lg lg:text-xl tracking-widest uppercase whitespace-nowrap">
              CONNECT
            </span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-tr from-[#30A0FF] to-[#B145FF] blur-[2px] sm:blur-[3px] shadow-lg mx-1" />
            <span className="font-sora font-light text-sm sm:text-base md:text-lg lg:text-xl tracking-widest uppercase whitespace-nowrap">
              INNOVATE
            </span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-tr from-[#30A0FF] to-[#B145FF] blur-[2px] sm:blur-[3px] shadow-lg mx-1" />
            <span className="font-sora font-light text-sm sm:text-base md:text-lg lg:text-xl tracking-widest uppercase whitespace-nowrap">
              SCALE
            </span>
          </div>
          <h2 className="bg-gradient-to-r text-3xl sm:text-3xl md:text-3xl font-semibold from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {defaultEvents.length <= 1 ? "Total Event" : "Total Events"} -{" "}
            {defaultEvents.length}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Events;
