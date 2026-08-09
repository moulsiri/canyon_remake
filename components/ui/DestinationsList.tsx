"use client";
import React, { useState } from "react";

const DestinationsList = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const destinations = [
    {
      id: 1,
      city: "LENOX, MA",
      desc: "Two MICHELIN Keys -\nAn exceptional stay",
      img: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=464&auto=format&fit=crop",
    },
    {
      id: 2,
      city: "TUCSON, AZ",
      desc: "Three MICHELIN Keys -\nAn extraordinary stay",
      img: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?q=80&w=435&auto=format&fit=crop",
    },
    {
      id: 3,
      city: "AUSTIN, TX",
      desc: "Our New Hill Country Resort Opens\nOctober 15",
      img: "https://images.unsplash.com/photo-1778826372073-1d8e77d4162c?q=80&w=435&auto=format&fit=crop",
    },
    {
      id: 4,
      city: "LAS VEGAS, NV",
      desc: "Forbes Four-Star Award: Finest\nProperties in the World",
      img: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=327&auto=format&fit=crop",
    },
    {
      id: 5,
      city: "FORT WORTH, TX",
      desc: "Best Day Spa & Gym/Fitness\nCenter by 76107 Magazine",
      img: "https://images.unsplash.com/photo-1657757989675-a6cd679cebaf?q=80&w=435&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full mt-12 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 pb-12">
        {destinations.map((dest) => {
          const isHovered = hoveredId === dest.id;
          const isOtherHovered = hoveredId !== null && hoveredId !== dest.id;

          return (
            <div
              key={dest.id}
              className={`w-full flex-col cursor-pointer transition-opacity duration-500 ${
                isOtherHovered ? "opacity-30" : "opacity-100"
              }`}
              onMouseEnter={() => setHoveredId(dest.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container with Text Overlay */}
              <div className="relative w-full aspect-[4/9] overflow-hidden shadow-md bg-stone-900 border border-stone-200 dark:border-stone-800">
                <img
                  src={dest.img}
                  alt={dest.city}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />

                {/* Absolute Text Overlay */}
                <div
                  className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 md:p-6 text-center transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3
                    className="text-2xl md:text-3xl text-white mb-3 font-normal tracking-wide drop-shadow-md transition-transform duration-500 translate-y-0"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {dest.city}
                  </h3>
                  <div className="w-8 h-px bg-[#b35930] mb-4"></div>
                  <p className="text-xs md:text-sm font-medium text-stone-100 leading-relaxed whitespace-pre-line drop-shadow-md">
                    {dest.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DestinationsList;
