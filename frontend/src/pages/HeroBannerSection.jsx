"use client";

import React from "react";

const Button = ({ className, onClick, text, style }) => {
  return (
    <button 
      className={className} 
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};

export const HeroBanner = () => {
  const handleStartScaling = () => {
    window.open("https://calendly.com/gtmlabsxyz/consult", "_blank");
  };

  const handleScrollToServices = () => {
    const element = document.getElementById("ServiceSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-white px-8 py-24 min-h-screen bg-black overflow-hidden" id="HeroBanner">
      {/* Gradient background circles */}
      <div className="absolute w-[800px] h-[800px] left-[-400px] top-[10%] bg-[radial-gradient(circle_at_center,rgba(48,158,255,0.574)_0%,rgba(48,158,255,0.377)_30%,rgba(48,158,255,0.188)_50%,transparent_70%)] rounded-full blur-[80px] z-10 pointer-events-none" />
      <div className="absolute w-[800px] h-[800px] right-[-400px] top-[10%] bg-[radial-gradient(circle_at_center,rgba(177,69,255,0.574)_0%,rgba(177,69,255,0.377)_30%,rgba(177,69,255,0.188)_50%,transparent_70%)] rounded-full blur-[80px] z-10 pointer-events-none" />
      <div className="relative z-20 flex flex-col items-center gap-10 max-w-5xl w-full text-center animate-fadeInUp">
        {/* STRATEGY • EXECUTION • RESULTS */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-5 mb-8 w-full px-2">
          <span className="font-sora font-light text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl tracking-widest uppercase whitespace-nowrap transition-colors duration-300 hover:text-[#8e79c7] cursor-pointer">
            STRATEGY
          </span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-tr from-[#30A0FF] to-[#B145FF] blur-[3px] sm:blur-[4px] shadow-lg mx-1 sm:mx-2" />
          <span className="font-sora font-light text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl tracking-widest uppercase whitespace-nowrap transition-colors duration-300 hover:text-[#8e79c7] cursor-pointer">
            EXECUTION
          </span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-tr from-[#30A0FF] to-[#B145FF] blur-[3px] sm:blur-[4px] shadow-lg mx-1 sm:mx-2" />
          <span className="font-sora font-light text-base xs:text-lg sm:text-xl md:text-1xl lg:text-2xl tracking-widest uppercase whitespace-nowrap transition-colors duration-300 hover:text-[#8e79c7] cursor-pointer">
            RESULTS
          </span>
        </div>
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="transition-colors duration-300 hover:text-gray-800 cursor-pointer">Web3</span>
          <span className="mx-2">.</span>
          <span className="transition-colors duration-300 hover:text-gray-800 cursor-pointer">AI</span>
          <span className="mx-2">.</span>
          <span className="transition-colors duration-300 text-[#8e79c7] hover:text-[#6C2BD7] cursor-pointer">Growth</span>
          <span className="mx-2">.</span>
          <span className="transition-colors duration-300 text-[#8e79c7] hover:text-[#6C2BD7] cursor-pointer">Delivered</span>
        </h1>
        {/* Sub Heading */}
        <p className="font-sora text-lg md:text-xl text-white/90 mb-0 -mt-7 max-w-1xl mx-auto">
          We help future forward Start-ups build Traction, Community, and Revenue<br />
          with Full-Stack growth, Marketing, and Development services.
        </p>
        {/* Buttons */}
        <div className="flex justify-center items-center gap-6 flex-wrap mt-1">
          <Button
            className="rounded-full h-[56px] px-10 bg-gradient-to-r from-[#8f5cff] to-[#30A0FF] text-black font-bold min-w-[180px] shadow-lg active:scale-95 transition-transform font-sora text-lg hover:shadow-[0_0_16px_0_rgba(144,97,255,0.5)] focus:shadow-[0_0_16px_0_rgba(144,97,255,0.7)] cursor-pointer"
            onClick={handleStartScaling}
            text={<span className="font-sora font-bold text-lg">Start Scaling</span>}
          />
          <div className="relative rounded-full p-[2px] bg-gradient-to-r from-[#30A0FF] to-[#B145FF]">
            <Button
              className="rounded-full h-[56px] px-10 bg-black min-w-[180px] font-bold font-sora text-lg active:scale-95 transition-transform group hover:shadow-[0_0_16px_0_rgba(144,97,255,0.5)] focus:shadow-[0_0_16px_0_rgba(144,97,255,0.7)] cursor-pointer"
              onClick={handleScrollToServices}
              text={
                <span className="font-sora font-bold text-lg bg-gradient-to-r from-[#30A0FF] to-[#B145FF] bg-clip-text text-transparent">Our Services</span>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
