import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import Image from "next/image";

function EventCard({ 
  img,
  title,
  date,
  location,
  description,
  link,
  category
}) {
  return (
    <div className="h-[450px] bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900/20 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group max-w-sm w-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 rounded-2xl"></div>
      <div className="relative overflow-hidden h-48">
        <Image 
          src={img} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-purple-500/30">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 relative z-10 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <div className="space-y-1 mb-2">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
          {description}
        </p>
        <a 
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors group/link mt-auto"
        >
          <span>Get More Details</span>
          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default EventCard;
