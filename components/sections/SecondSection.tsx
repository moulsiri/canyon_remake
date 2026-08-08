"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroImageGallery from "../ui/IntroImageGallery";

export default function SecondSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const ctx = gsap.context(() => {
    //   // Pin the section when it reaches the top of the viewport
    //   ScrollTrigger.create({
    //     trigger: containerRef.current,
    //     start: "top top",
    //     end: "+=1500", // How long the pin lasts in px of scroll
    //     pin: true,
    //     animation: gsap.to(contentRef.current, {
    //       y: -100, // Move content up slightly
    //       opacity: 0.1,
    //       scale: 0.95,
    //       ease: "none",
    //     }),
    //     scrub: 1,
    //   });
    // }, containerRef);

    // return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-[20] w-full min-h-screen bg-[#F4F4F1] dark:bg-stone-950 flex flex-col items-center isolation-isolate rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pt-40 pb-2"
    >
      <div
        ref={contentRef}
        className="flex flex-col items-center w-full px-6 md:px-12 max-w-7xl mx-auto"
      >
        <p className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-6 text-stone-800 dark:text-stone-100  drop-shadow-md">
          MORE THAN A RETREAT
        </p>
        <h2
          className="text-5xl md:text-5xl text-stone-800 dark:text-stone-100 text-center max-w-4xl px-4 tracking-tight transition-colors"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Wellness is not a destination. It's a way of life.
        </h2>
     
        <IntroImageGallery/>
        {/* Spacer to stretch SecondSection's height so it properly contains the absolutely positioned images dangling out of the gallery */}
        <div className="w-full h-48 md:h-80"></div>
      </div>
    </section>
  );
}
