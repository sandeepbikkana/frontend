"use client";

import React from "react";

const TestimonialCard = ({ name, title, quote }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/30 backdrop-blur-xl 
                    px-6 py-8 sm:px-8 sm:py-10 
                    mx-4 md:mx-6 lg:mx-8 my-8 
                    rounded-xl  
                    transition-all duration-400 ease-out 
                    transform hover:scale-105 
                    h-[340px] flex flex-col justify-between 
                    font-sora z-10">
      <p className="text-gray-200 text-base sm:text-lg italic leading-relaxed mb-6 line-clamp-5">
        {quote}
      </p>
      <div className="border-t border-gray-700 pt-4">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-sm text-purple-400 mt-1">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
