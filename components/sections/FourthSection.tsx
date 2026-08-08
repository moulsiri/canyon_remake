"use client";

import React from "react";
import Image from "next/image";
import { Droplet, Activity, Dumbbell, Sparkles, Carrot } from "lucide-react";

const pillars = [
  {
    title: "SPA & BEAUTY",
    description: "Promote relaxation and energy with healing bodywork and therapeutic treatments.",
    icon: <Droplet className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
  },
  {
    title: "HEALTH & PERFORMANCE",
    description: "Go beyond symptoms with personalized plans for prevention from physicians and experts.",
    icon: <Activity className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
  },
  {
    title: "FITNESS & MOVEMENT",
    description: "Enhance everyday mobility and athletic performance, guided by exercise experts.",
    icon: <Dumbbell className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
  },
  {
    title: "MIND & SPIRIT",
    description: "Pursue balance and purpose with behavioral therapy, coaching, and spiritual guidance.",
    icon: <Sparkles className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
  },
  {
    title: "NUTRITION & FOOD",
    description: "Pinpoint strategies for optimal weight and holistic health informed by nutritionists and chefs.",
    icon: <Carrot className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
  },
];

const FourthSection = () => {
  return (
    <section className="relative z-[20] w-full min-h-screen bg-[#F4F4F1] dark:bg-stone-950 py-16 md:py-24">
      {/* Restored Header Block */}
      <div className="flex flex-col items-center w-full px-6 md:px-12 max-w-7xl mx-auto text-center mb-20 md:mb-32">
        <p className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-12 text-stone-800 dark:text-stone-100 drop-shadow-md">
          THE CANYON RANCH APPROACH
        </p>
        <h2
          className="text-5xl md:text-5xl text-stone-800 dark:text-stone-100 max-w-4xl px-4 tracking-tight transition-colors mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Wellness, from every angle.
        </h2>
        <p className="text-stone-800 dark:text-stone-200 text-sm md:text-base font-medium leading-relaxed tracking-wide max-w-3xl">
          True wellbeing is never just one thing. At Canyon Ranch, mind, body,
          spirit, movement, and nourishment come together to create a more
          complete approach to living well.
        </p>
      </div>

      <div className="w-full px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Side - Image */}
        <div className="w-full lg:w-[45%] h-[500px] lg:h-[800px] relative rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1753&auto=format&fit=crop"
            alt="Healthy holistic nutrition"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Wellness Pillars */}
        <div className="w-full lg:w-[55%] flex flex-col pt-8">
          <h2 
            className="text-3xl md:text-4xl lg:text-[42px] text-stone-800 dark:text-stone-100 mb-12 tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Five Wellness Pillars. One You.
          </h2>

          <div className="flex flex-col gap-10">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex gap-6 items-start group cursor-default">
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  {pillar.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm md:text-base font-medium tracking-[0.1em] text-stone-800 dark:text-stone-200 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-sm font-light leading-relaxed tracking-wide text-stone-600 dark:text-stone-400 max-w-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom decorative line */}
          <div className="mt-16 w-full max-w-sm h-px bg-stone-300 dark:bg-stone-700 relative">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-[#b35930]"></div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default FourthSection;
