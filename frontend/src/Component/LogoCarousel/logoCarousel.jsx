import React from 'react';

const LogoCarousel = ({ logos, speed = 'normal', direction = 'left' }) => {
  // Animation speeds
  const speeds = {
    slow: '60s',
    normal: '30s',
    fast: '15s'
  };

  // Direction classes
  const directionClass = direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient masks for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Container for the moving logos */}
      <div 
        className={`flex ${directionClass} whitespace-nowrap will-change-transform`}
        style={{ 
          animationDuration: speeds[speed],
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationFillMode: 'forwards'
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={`logo-1-${index}`} className="mx-4 sm:mx-6 md:mx-8 flex-shrink-0 flex items-center justify-center">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none" 
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
        
        {/* Second set of logos for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`logo-2-${index}`} className="mx-4 sm:mx-6 md:mx-8 flex-shrink-0 flex items-center justify-center">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none" 
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
        
        {/* Third set for extra smoothness on mobile */}
        {logos.map((logo, index) => (
          <div key={`logo-3-${index}`} className="mx-4 sm:mx-6 md:mx-8 flex-shrink-0 flex items-center justify-center sm:hidden">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none" 
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { 
            transform: translateX(0%); 
          }
          100% { 
            transform: translateX(-50%); 
          }
        }
        
        @keyframes marquee-reverse {
          0% { 
            transform: translateX(-50%); 
          }
          100% { 
            transform: translateX(0%); 
          }
        }
        
        .animate-marquee {
          animation: marquee var(--duration, 30s) linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse var(--duration, 30s) linear infinite;
        }
        
        /* Ensure smooth animation on all devices */
        .animate-marquee,
        .animate-marquee-reverse {
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation-duration: 20s !important;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation-duration: 25s !important;
          }
        }
        
        /* Pause animation on hover for better UX */
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation-duration: 120s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;