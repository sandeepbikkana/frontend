"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TwitterIcon from "../../Assets/X.png";
import LinkedInIcon from "../../Assets/linkedin.png";

export default function TeamCard({
  name,
  role,
  twitter,
  linkedin,
  image,
  index = 0,
}) {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-64 h-80 rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 hover:scale-105 my-10 transition-all"
      onClick={() => setShowInfo((prev) => !prev)}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-blue-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
    
      <div className="relative z-10 h-full flex flex-col items-center pt-8">
        {/* Circular image container */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/20">
          <Image
            src={image}
            alt={`${name} photo`}
            fill
            sizes="96px"
            className="object-cover"
            priority={index < 2}
          />
        </div>
        
        {/* Info section - always visible, fixed height */}
        <div className="mt-6 px-4 text-center flex-1 flex flex-col justify-center">
          <div className="h-16 flex flex-col justify-center">
            <h4 className="font-semibold text-white text-lg mb-1 leading-tight truncate max-w-full">
              {name}
            </h4>
            <p className="text-sm text-gray-300 leading-tight line-clamp-2 h-10 flex items-center justify-center">
              {role}
            </p>
          </div>
          
          {/* Social links */}
          <div className="mt-4 flex justify-center gap-4">
            {twitter && (
              <a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/60 hover:border-cyan-400/40 transition-all duration-300"
              >
                <Image
                  src={TwitterIcon}
                  alt="Twitter"
                  width={16}
                  height={16}
                  className="opacity-80"
                />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:border-cyan-400/40 transition-all duration-300"
              >
                <Image
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  width={27}
                  height={27}
                  className="opacity-80"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}