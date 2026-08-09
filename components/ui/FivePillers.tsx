"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { Droplet, Activity, Dumbbell, Sparkles, Carrot } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const pillars = [
  {
    title: "SPA & BEAUTY",
    description: "Promote relaxation and energy with healing bodywork and therapeutic treatments.",
    icon: <Droplet className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
    image: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "HEALTH & PERFORMANCE",
    description: "Go beyond symptoms with personalized plans for prevention from physicians and experts.",
    icon: <Activity className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1740&auto=format&fit=crop"
  },
  {
    title: "FITNESS & MOVEMENT",
    description: "Enhance everyday mobility and athletic performance, guided by exercise experts.",
    icon: <Dumbbell className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1740&auto=format&fit=crop"
  },
  {
    title: "MIND & SPIRIT",
    description: "Pursue balance and purpose with behavioral therapy, coaching, and spiritual guidance.",
    icon: <Sparkles className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
    image: "https://images.unsplash.com/photo-1518708909080-704599b19972?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "NUTRITION & FOOD",
    description: "Pinpoint strategies for optimal weight and holistic health informed by nutritionists and chefs.",
    icon: <Carrot className="w-5 h-5 text-[#b35930] stroke-[1.5]" />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1753&auto=format&fit=crop"
  },
];

const FivePillers = () => {
  const [activeImage, setActiveImage] = useState(pillars[0].image);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".pillar-img-container", {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power3.out"
      })
      .from(".pillar-header", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".pillar-item", {
        opacity: 0,
        x: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
    {/* Left Side - Image */}
    <div className="pillar-img-container w-full lg:w-[45%] h-[500px] lg:h-[800px] relative rounded-3xl overflow-hidden shadow-xl">
      {pillars.map((pillar, index) => (
         <Image
           key={index}
           src={pillar.image}
           alt={pillar.title}
           fill
           className={`object-cover transition-opacity duration-700 ease-in-out ${activeImage === pillar.image ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
           priority={index === 0}
         />
      ))}
    </div>

    {/* Right Side - Wellness Pillars */}
    <div className="w-full lg:w-[55%] flex flex-col pt-8">
      <h2 
        className="pillar-header text-3xl md:text-4xl lg:text-[42px] text-stone-800 dark:text-stone-100 mb-12 tracking-tight"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Five Wellness Pillars. One You.
      </h2>

      <div className="flex flex-col gap-10">
        {pillars.map((pillar, index) => (
          <div 
            key={index} 
            className="pillar-item flex gap-6 items-start group cursor-pointer"
            onMouseEnter={() => setActiveImage(pillar.image)}
          >
            <div className={`mt-1 transition-opacity ${activeImage === pillar.image ? 'opacity-100' : 'opacity-40 group-hover:opacity-80'}`}>
              {pillar.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className={`text-sm md:text-base font-medium tracking-[0.1em] uppercase transition-colors ${activeImage === pillar.image ? 'text-[#b35930]' : 'text-stone-800 dark:text-stone-200'}`}>
                {pillar.title}
              </h3>
              <p className={`text-sm md:text-sm font-light leading-relaxed tracking-wide transition-colors max-w-lg ${activeImage === pillar.image ? 'text-stone-900 dark:text-stone-100' : 'text-stone-600 dark:text-stone-400'}`}>
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom decorative line */}
      <div className="pillar-item mt-16 w-full max-w-sm h-px bg-stone-300 dark:bg-stone-700 relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#b35930]"></div>
      </div>
      
    </div>

  </div>
  )
}

export default FivePillers