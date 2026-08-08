"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SecondSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pin the section when it reaches the top of the viewport
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500", // How long the pin lasts in px of scroll
        pin: true,
        animation: gsap.to(contentRef.current, {
          y: -100, // Move content up slightly
          opacity: 0.1, 
          scale: 0.95,
          ease: "none"
        }),
        scrub: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative z-[20] w-full h-screen bg-[#F4F4F1] dark:bg-stone-950 flex flex-col items-center justify-center overflow-hidden isolation-isolate rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <div ref={contentRef} className="flex flex-col items-center justify-center">
        <h2 
          className="text-5xl md:text-8xl text-stone-800 dark:text-stone-100 text-center max-w-4xl px-4 tracking-tight transition-colors" 
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Discover Balance.
        </h2>
        <p className="mt-8 text-stone-600 dark:text-stone-300 max-w-2xl text-center text-lg md:text-xl px-4 font-light leading-relaxed tracking-wide transition-colors" style={{ fontFamily: "var(--font-montserrat)" }}>
          Step into a realm of peace and discovery. Our sanctuary welcomes you to unwind, reflect, and deeply reconnect with nature.
        </p>
      </div>
    </section>
  );
}
