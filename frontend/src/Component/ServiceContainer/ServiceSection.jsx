"use client";
import React, { memo, useState } from "react";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";
import Lamp from "../../Assets/Lamp.png";
import GradientGlowText from "../Typography/Heading";

const ServiceCard = memo(({ service, isOpen, onToggle, isHovered, isDimmed }) => {
  return (
    <div className="relative bg-[#1a1a1a]/80 p-3 sm:p-4 backdrop-blur-md rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-[0_0_30px_#0ff3ff22] hover:shadow-blue-500/40 transition-all duration-300 w-full max-w-[1100px] mx-auto">
      {/* Mobile Layout (< md) */}
      <div className="md:hidden flex flex-col">
        {/* Header Section */}
        <div className="relative bg-black rounded-t-[16px] p-4 sm:p-6 pt-16 sm:pt-20">
          <div className="absolute -top-[45px] sm:-top-[55px] left-3 sm:left-4 z-20">
            <Image
              src={Lamp}
              alt="Lamp"
              width={200}
              height={160}
              className="object-contain drop-shadow-[0_0_25px_#0ff3ff] opacity-90 w-[200px] h-[160px] sm:w-[220px] sm:h-[180px]"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-2 bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-transparent bg-clip-text">
            {service.title}
          </h3>
          <h4 className="text-sm sm:text-base font-medium text-white/90 mb-3">
            {service.subtitle}
          </h4>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Icon Section */}
        <div className="flex items-center justify-center bg-black px-4 py-6">
          <div className="p-2 rounded-xl bg-black">
            {service.iconType === "image" ? (
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={120}
                height={120}
                className="object-contain w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
              />
            ) : (
              <service.icon
                size={28}
                color="white"
                className="sm:size-[32px]"
              />
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-[#1e1e1e] rounded-b-[16px] flex flex-col">
          <ul
            className={`text-xs sm:text-sm text-white w-full transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {service.features?.map((feature, idx) => (
              <li
                key={idx}
                className={`px-4 lg:px-5 py-2.5 lg:py-3 ${
                  idx !== 0 ? "border-t border-gray-800" : ""
                }`}
              >
                <span className="font-bold">{feature.point}</span>
                {feature.paragraph && (
                  <>
                    : <span className="opacity-80">{feature.paragraph}</span>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="px-4 py-3 flex justify-center items-center border-t border-gray-800">
            <button
              onClick={onToggle}
              className="text-sm sm:text-md border border-gray-600 rounded-full px-4 sm:px-5 py-2 font-semibold bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-transparent bg-clip-text hover:border-purple-400 transition-colors"
            >
              {isOpen ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= md) */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] h-full overflow-hidden">
        {/* Left Section - Content */}
        <div className="bg-black w-full flex flex-col justify-center p-6 lg:p-8 xl:p-10 rounded-[20px_0_0_20px] lg:rounded-[24px_0_0_24px] relative">
          <div className="absolute -top-[70px] lg:-top-[90px] xl:-top-[110px] left-4 lg:left-6 z-20">
            <Image
              src={Lamp}
              alt="Lamp"
              width={250}
              height={200}
              className="object-contain drop-shadow-[0_0_25px_#0ff3ff] opacity-90 w-[220px] h-[180px] lg:w-[250px] lg:h-[200px] xl:w-[280px] xl:h-[230px]"
            />
          </div>

          <h3 className="text-xl lg:text-2xl xl:text-3xl font-extrabold uppercase tracking-wide mb-2 bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-transparent bg-clip-text">
            {service.title}
          </h3>
          <h4 className="text-sm lg:text-base xl:text-lg font-medium text-white/90 mb-3">
            {service.subtitle}
          </h4>
          <p className="text-gray-300 text-xs lg:text-sm leading-relaxed max-w-md">
            {service.description}
          </p>
        </div>

        {/* Middle Section - Icon */}
        <div className="flex items-center justify-center bg-black px-3 py-4 lg:px-4 lg:py-6 xl:px-6">
          <div className="p-2 rounded-xl bg-black">
            {service.iconType === "image" ? (
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={180}
                height={180}
                className="object-contain w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[220px] xl:h-[220px]"
              />
            ) : (
              <service.icon
                size={28}
                color="white"
                className="lg:size-[32px] xl:size-[36px]"
              />
            )}
          </div>
        </div>

        {/* Right Section - Features */}
        <div className="bg-[#1e1e1e] rounded-[0_20px_20px_0] lg:rounded-[0_24px_24px_0] flex flex-col justify-center w-full">
          <ul className="text-xs lg:text-sm text-white w-full max-h-none opacity-100">
            {service.features?.map((feature, idx) => (
              <li
                key={idx}
                className={`px-4 lg:px-5 py-2.5 lg:py-3 ${
                  idx !== 0 ? "border-t border-gray-800" : ""
                }`}
              >
                <span className="font-bold">{feature.point}</span>
                {feature.paragraph && (
                  <>
                    : <span className="opacity-80">{feature.paragraph}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

const ServiceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="ServiceSection"
      className="bg-black text-white py-12 sm:py-16 lg:py-20 px-3 sm:px-4 md:px-8 lg:px-16 xl:px-32"
    >
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <GradientGlowText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-black mb-4 sm:mb-6 tracking-widest leading-tight">
          SERVICES
        </GradientGlowText>

        <h2 className="text-2xl md:text-3xl lg:text-5xl text-white mb-4">
          <div className="mb-2">Your All-In-One </div>
          <div>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Web3 Growth Engine
            </span>
          </div>
        </h2>

        <p className="text-xs sm:text-sm lg:text-base text-gray-400 mt-2 sm:mt-3 max-w-xl mx-auto px-4">
          End-to-end strategies and execution to help Web3, AI, and Tech
          startups grow with clarity and confidence.
        </p>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(ServiceSection);

// "use client";
// import React, { memo } from "react";
// import Image from "next/image";
// import { servicesData } from "@/data/servicesData";
// import Lamp from "../../Assets/Lamp.png";
// import GradientGlowText from "../Typography/Heading";

// const ServiceCard = memo(({ service }) => (
//   <div className="relative bg-[#1a1a1a] border-[10px] md:border-[17px] border-[#2b2b2b] rounded-[20px] md:rounded-[30px] shadow-[0_0_30px_#0ff3ff22] hover:shadow-blue-500/40 transition duration-300 w-full max-w-[1100px]">
//     <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] h-full">
//       <div className="bg-black w-full flex flex-col justify-center p-6 sm:p-8 md:p-10 rounded-t-[20px] md:rounded-[30px_0_0_30px] relative">
//         <div className="absolute -top-[85px] sm:-top-[70px] md:-top-[80px] left-2 sm:left-4 md:left-6 z-20">
//           <Image
//             src={Lamp}
//             alt="Lamp"
//             width={300}
//             height={250}
//             className="object-contain drop-shadow-[0_0_25px_#0ff3ff] opacity-90"
//           />
//         </div>

//         <h3 className="text-2xl font-extrabold uppercase tracking-wide mb-2 bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-transparent bg-clip-text">
//           {service.title}
//         </h3>
//         <h4 className="text-base md:text-lg font-medium text-white mb-1">
//           {service.subtitle}
//         </h4>
//         <p className="text-gray-300 text-sm max-w-md">{service.description}</p>
//       </div>

//       <div className="flex items-center justify-center bg-black px-4 py-4 md:px-4">
//         <div className="p-2 rounded-xl bg-black">
//           {service.iconType === "image" ? (
//             <Image
//               src={service.icon}
//               alt={`${service.title} icon`}
//               width={250}
//               height={250}
//               className="object-contain"
//             />
//           ) : (
//             <service.icon size={32} color="white" />
//           )}
//         </div>
//       </div>

//       <div className="bg-[#1e1e1e] border-t border-b border-black rounded-b-[20px] md:rounded-[0_30px_30px_0] flex flex-col justify-center h-full w-full">
//         <ul className="text-sm text-white w-full">
//           {service.features?.map((feature, idx) => (
//             <li
//               key={idx}
//               className={`px-4 py-3 border-black ${
//                 idx !== 0 ? "border-t" : ""
//               } ${idx !== service.features.length - 1 ? "border-b" : ""}`}
//             >
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>
// ));

// const ServiceSection = () => {
//   return (
//     <section
//       id="ServiceSection"
//       className="bg-black text-white py-20 px-4 md:px-16 lg:px-32"
//     >
//       <div className="text-center mb-20">
//         <GradientGlowText className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-black mb-6 tracking-widest leading-tight">
//           SERVICES
//         </GradientGlowText>

//         <p className="text-base sm:text-lg md:text-xl">
//           Your All-In-One{" "}
//           <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-bold">
//             Web3 Growth Engine
//           </span>
//         </p>
//         <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto px-2">
//           End-to-end strategies and execution to help Web3, AI, and Tech
//           startups grow with clarity and confidence.
//         </p>
//       </div>
//       <div className="flex flex-col gap-12 items-center">
//         {servicesData.map((service, index) => (
//           <ServiceCard key={index} service={service} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default memo(ServiceSection);
