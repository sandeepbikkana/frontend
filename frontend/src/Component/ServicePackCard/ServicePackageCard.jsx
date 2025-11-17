import React from "react";
import { useState } from "react";

function ServicePackageCard({ packages, indexId }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div
      key={packages.id}
      onMouseEnter={() => setHoveredCard(packages.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`relative group transition-all px-2 my-12 md:my-22 duration-500 transform hover:scale-100 
  ${
    indexId === 2
      ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full"
      : "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full"
  }`}
    >
      <div className="relative bg-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">
        {packages.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
              Popular
            </span>
          </div>
        )}

        {/* Card Content */}
        <div className="text-center relative z-10">
          <h3 className="text-2xl font-light text-white mb-4 font-sora">
            {packages.title}
          </h3>

          <div className="mb-6 md:mb-8">
            <span className="text-2xl md:text-3xl lg:text-3xl font-bold text-white font-sora">
              {packages.price}
            </span>
          </div>

          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {packages.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center text-gray-300"
              >
                <svg
                  className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm  text-center">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://calendly.com/gtmlabsxyz/consult"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 mt-4 relative z-10 font-sora"
            tabIndex={0}
          >
            Schedule a call
          </a>
        </div>

        {/* Glow background on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl transition-opacity duration-300 ${
            hoveredCard === packages.id ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default ServicePackageCard;
