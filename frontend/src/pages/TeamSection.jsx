"use client";

import React from "react";
import TeamCard from "../Component/imagecard/TeamCard";
import Girlimage from "../Assets/Girlimage.jpg";
import HimanshuRaj_CEO from "../Assets/HimanshuRaj_CEO.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function TeamSection() {
  const teamData = [
    {
      name: "Himanshu Raj",
      role: "CEO",
      image: HimanshuRaj_CEO,
      twitter: "https://x.com/himanstwt",
      linkedin: "http://linkedin.com/in/himanshu-link",
    },
  ];

  return (
    <section className="py-20 text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold mb-16 tracking-tight">
          Meet Our Team
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex items-center justify-center">
                <TeamCard {...member} index={index} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}




// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import TeamCard from "../Component/imagecard/TeamCard";
// import Girlimage from "../Assets/Girlimage.jpg";
// import HimanshuRaj_CEO from "../Assets/HimanshuRaj_CEO.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";

// export default function TeamSection() {
//   const teamData = [
//     {
//       name: "Himanshu Raj",
//       role: "CEO",
//       image: HimanshuRaj_CEO,
//       twitter: "https://x.com/himanstwt",
//       linkedin: "http://linkedin.com/in/himanshu-link",
//     },
//     {
//       name: "Jane Smith",
//       role: "CTO",
//       image: Girlimage,
//       twitter: "https://twitter.com/janesmith",
//       linkedin: "https://linkedin.com/in/janesmith",
//     },
//     {
//       name: "Alice Johnson",
//       role: "Design Head",
//       image: Girlimage,
//       twitter: "https://twitter.com/alicejohnson",
//       linkedin: "https://linkedin.com/in/alicejohnson",
//     },
//     {
//       name: "Robert Brown",
//       role: "Marketing Lead",
//       image: Girlimage,
//       twitter: "https://twitter.com/robertbrown",
//       linkedin: "https://linkedin.com/in/robertbrown",
//     },
//   ];

//   const [screenSize, setScreenSize] = useState('desktop');
  
//   useEffect(() => {
//     const updateScreenSize = () => {
//       if (window.innerWidth < 768) {
//         setScreenSize('mobile');
//       } else if (window.innerWidth < 1024) {
//         setScreenSize('tablet');
//       } else {
//         setScreenSize('desktop');
//       }
//     };

//     updateScreenSize();
//     window.addEventListener('resize', updateScreenSize);
//     return () => window.removeEventListener('resize', updateScreenSize);
//   }, []);

//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef(null);

//   const startCarousel = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrent((i) => {
//         if (screenSize === 'tablet') {
//           return ((i + 1) % teamData.length);
//         } else {
//           return ((i + 1) % teamData.length);
//         }
//       });
//     }, 2800);
//   };

//   const stopCarousel = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   useEffect(() => {
//     if (screenSize === 'mobile' || screenSize === 'tablet') {
//       startCarousel();
//     } else {
//       stopCarousel();
//       setCurrent(0);
//     }
//     return stopCarousel;
//   }, [screenSize]);

//   const mobileVariants = {
//     enter: { x: "100%", opacity: 1 },
//     center: {
//       x: "0%",
//       opacity: 1,
//       transition: { 
//         duration: 0.7, 
//         ease: [0.25, 0.46, 0.45, 0.94],
//         type: "tween"
//       },
//     },
//     exit: {
//       x: "-100%",
//       opacity: 1,
//       transition: { 
//         duration: 0.7, 
//         ease: [0.25, 0.46, 0.45, 0.94],
//         type: "tween"
//       },
//     },
//   };

//   const tabletVariants = {
//     enter: { x: "100%", opacity: 1 },
//     center: {
//       x: "0%",
//       opacity: 1,
//       transition: { 
//         duration: 0.8, 
//         ease: [0.25, 0.46, 0.45, 0.94],
//         type: "tween"
//       },
//     },
//     exit: {
//       x: "-100%",
//       opacity: 1,
//       transition: { 
//         duration: 0.8, 
//         ease: [0.25, 0.46, 0.45, 0.94],
//         type: "tween"
//       },
//     },
//   };

//   const renderCards = () => {
//     if (screenSize === 'desktop') {
//       return (
//         <div className="flex justify-center items-center gap-6 px-4">
//           {teamData.map((member, index) => (
//             <div key={index} className="transform hover:scale-105 transition-transform duration-300">
//               <TeamCard {...member} index={index} />
//             </div>
//           ))}
//         </div>
//       );
//     }

//     if (screenSize === 'tablet') {
//       return (
//         <div className="relative w-full h-[420px] flex items-center justify-center px-4 overflow-hidden">
//           <AnimatePresence initial={false} mode="popLayout">
//             <motion.div
//               key={`tablet-${current}`}
//               variants={tabletVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="flex gap-6 justify-center items-center w-full"
//               onTouchStart={stopCarousel}
//               onTouchEnd={startCarousel}
//             >
//               {/* Show 2 cards at a time */}
//               <div className="flex-shrink-0">
//                 <TeamCard {...teamData[current]} index={current} />
//               </div>
//               <div className="flex-shrink-0">
//                 <TeamCard {...teamData[(current + 1) % teamData.length]} index={(current + 1) % teamData.length} />
//               </div>
//             </motion.div>
//           </AnimatePresence>
          
//           <div className="absolute bottom-4 flex space-x-2">
//             {teamData.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === current || index === (current + 1) % teamData.length 
//                     ? 'bg-white scale-125' : 'bg-gray-500 hover:bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       );
//     }

//     // Mobile layout
//     return (
//       <div className="relative w-full h-[380px] flex items-center justify-center px-4">
//         <AnimatePresence initial={false} mode="popLayout">
//           <motion.div
//             key={`mobile-${current}`}
//             variants={mobileVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             className="flex items-center justify-center"
//             onTouchStart={stopCarousel}
//             onTouchEnd={startCarousel}
//           >
//             <div className="w-full max-w-sm mx-auto">
//               <TeamCard {...teamData[current]} index={current} />
//             </div>
//           </motion.div>
//         </AnimatePresence>
        
//         {/* Dots indicator for mobile */}
//         <div className="absolute bottom-4 flex space-x-2">
//           {teamData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === current ? 'bg-white scale-125' : 'bg-gray-500 hover:bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="bg-black py-20 text-white overflow-hidden">
//       <div className="container mx-auto max-w-7xl">
//         <h2 className="text-center text-4xl font-bold mb-16 tracking-tight">
//           Meet Our Team
//         </h2>
//         {renderCards()}
//       </div>
//     </section>
//   );
// }