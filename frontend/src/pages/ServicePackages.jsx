"use client";

import { useRef, useState, useEffect } from "react";
import GradientGlowText from "@/Component/Typography/Heading";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServicePackageCard from "@/Component/ServicePackCard/ServicePackageCard";
import "swiper/css";

const ServicePackages = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  const packages = [
    {
      id: 1,
      title: "MARKETING",
      features: [
        "Branding & Positioning",
        "Social Media Management",
        "2–3 Content Campaigns",
        "KOL + PR Outreach",
        "Design + Creative Assets",
      ],
    },
    {
      id: 2,
      title: "WEB3",
      features: [
        "TGE Advisory",
        "Content Marketing",
        "Community Building",
        "KOL/Influencer Push",
        "PR & Hype Creation",
      ],
    },
    {
      id: 3,
      title: "EVENT",
      features: [
        "Event Planning & Setup",
        "End-to-End Execution",
        "Panel + Booth Curation",
        "Speaker + Guest Outreach",
        "Post-Event Amplification",
      ],
    },
    {
      id: 4,
      title: "GO-TO-MARKET",
      features: [
        "GTM Plans",
        "Content Marketing",
        "KOL Promotion",
        "PR & Hype Creation",
        "Community & Events",
      ],
    },
    // {
    //   id: 5,
    //   title: "BLOCK CHAIN",
    //   features: [
    //     "Event Planning & Setup",
    //     "End-to-End Execution",
    //     "Panel + Booth Curation",
    //     "Speaker + Guest Outreach",
    //     "Post-Event Amplification",
    //   ],
    // },
  ];

  // Calculate max height dynamically
  useEffect(() => {
    const updateHeights = () => {
      const heights = cardRefs.current.map((el) =>
        el ? el.offsetHeight : 0
      );
      setMaxHeight(Math.max(...heights));
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, [packages]);

  return (
    <section
      id="Packages"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 container mx-auto px-4 py-18 lg:py-24">
        <div className="text-center mb-20">
          <GradientGlowText
            className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-gray-600 mb-11 cursor-pointer whitespace-nowrap overflow-hidden"
            circleSize={120}
            baseTextColor="text-gray-600"
          >
            SERVICE PACKAGES
          </GradientGlowText>

          <h2 className="text-2xl md:text-3xl lg:text-5xl text-white mb-4">
            <div className="mb-2">Choose a Plan That Fits</div>
            <div>
              Your{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Growth Stage
              </span>
            </div>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {packages.map((pkg, index) => (
              <SwiperSlide
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                style={{
                  height: maxHeight ? `${maxHeight}px` : "auto",
                }}
              >
                <ServicePackageCard packages={pkg} indexId={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="absolute -bottom-10 sm:bottom-2 flex items-center gap-3 z-10">
            <button className="custom-prev border border-white p-4 rounded-full hover:scale-110 transform transition-all">
              <ArrowLeft />
            </button>
            <button className="custom-next border border-white p-4 rounded-full hover:scale-110 transform transition-all">
              <ArrowRight />
            </button>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: white;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet:hover {
          background-color: gray;
        }
        .swiper-pagination-bullet-active {
          background-color: #ac00e1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default ServicePackages;
