"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroImageGallery from "../ui/IntroImageGallery";

export default function BrandPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
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
        <p
          ref={eyebrowRef}
          className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-6 text-stone-800 dark:text-stone-100  drop-shadow-md opacity-0"
        >
          MORE THAN A RETREAT
        </p>
        <h2
          ref={titleRef}
          className="text-5xl md:text-5xl text-stone-800 dark:text-stone-100 text-center max-w-4xl px-4 tracking-tight transition-colors opacity-0"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Wellness is not a destination. It's a way of life.
        </h2>
     
        <IntroImageGallery/>
        {/* Spacer to stretch section height for absolutely positioned desktop images */}
        <div className="hidden lg:block w-full h-80"></div>
      </div>
    </section>
  );
}
