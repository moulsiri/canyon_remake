"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Play, Copy } from "lucide-react";

const FinalJourneyCTA = () => {
  return (
    <section className="relative w-full z-[20] bg-white dark:bg-stone-950 py-24 flex flex-col items-center">
      
      {/* FINAL CTA BLOCK */}
      <div className="w-full flex flex-col items-center text-center px-6 md:px-12 max-w-4xl mx-auto mb-32">
        <p className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-6 text-stone-800 dark:text-stone-400 drop-shadow-sm">
          YOUR JOURNEY STARTS HERE
        </p>
        <h2
          className="text-5xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 mb-8 tracking-tight transition-colors"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Where will you begin?
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-base md:text-lg font-medium leading-relaxed tracking-wide mb-12 max-w-2xl">
          Find the place, experience, and path that feels right for you.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#b35930] hover:bg-[#9a4b27] text-white text-xs font-semibold tracking-widest uppercase transition-colors">
            Find Your Journey
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-800 dark:border-stone-200 text-stone-800 dark:text-stone-200 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 text-xs font-semibold tracking-widest uppercase transition-colors">
            Explore Destinations
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-800 dark:border-stone-200 text-stone-800 dark:text-stone-200 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 text-xs font-semibold tracking-widest uppercase transition-colors">
            Plan Your Stay
          </button>
        </div>
      </div>


      {/* INSTAGRAM GRID BLOCK */}
      <div className="w-full flex flex-col items-center">
        {/* Instagram Header */}
        <div className="flex flex-col items-center mb-10">
          <h3 
            className="text-4xl md:text-5xl text-stone-500 font-light tracking-wide mb-6 text-center"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            #WELLNESSMOMENTS
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#b35930] flex items-center justify-center text-[#b35930] font-serif text-lg">
              CR
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-stone-900 dark:text-stone-100">Canyon Ranch</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />
              </div>
              <span className="text-xs text-stone-500 font-medium">@canyonranch</span>
            </div>
          </div>
        </div>

        {/* Instagram 5-Image Grid */}
        <div className="w-full max-w-[2000px] grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2 px-1 md:px-2">
          {[
            {
              id: 1,
              type: 'carousel',
              img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&auto=format&fit=crop'
            },
            {
              id: 2,
              type: 'video',
              img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&auto=format&fit=crop'
            },
            {
              id: 3,
              type: 'video',
              img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&auto=format&fit=crop'
            },
            {
              id: 4,
              type: 'video',
              img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&auto=format&fit=crop'
            },
            {
              id: 5,
              type: 'carousel',
              img: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&auto=format&fit=crop'
            },
          ].map((post) => (
            <div key={post.id} className="relative w-full aspect-square group cursor-pointer overflow-hidden bg-stone-200 dark:bg-stone-800">
              <Image
                src={post.img}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              
              {/* Overlay Icon (top right) */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 opacity-90 drop-shadow-md">
                {post.type === 'video' ? (
                  <Play className="w-5 h-5 text-white fill-white" />
                ) : (
                  <Copy className="w-4 h-4 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FinalJourneyCTA;
