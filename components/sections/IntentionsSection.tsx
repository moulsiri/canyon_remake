"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StateOfMind from "../ui/StateOfMind";

const IntentionsSection = () => {
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
  });
  return (
    <section
      ref={containerRef}
      className="relative z-[20] w-full min-h-screen bg-[#F4F4F1] dark:bg-stone-950 flex flex-col pt-16 md:pt-24 pb-16"
    >
      {/* Content for the third section goes here */}
      <div
        ref={contentRef}
        className="flex flex-col items-center w-full px-6 md:px-12 max-w-7xl mx-auto"
      >
        <p
          ref={eyebrowRef}
          className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-6 text-stone-800 dark:text-stone-100  drop-shadow-md"
        >
          What brought you here?
        </p>
        <h2
          ref={titleRef}
          className="text-5xl md:text-5xl text-stone-800 dark:text-stone-100 text-center max-w-4xl px-4 tracking-tight transition-colors"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Every journey begins with a reason.
        </h2>
      </div>

      <StateOfMind />
    </section>
  );
};

export default IntentionsSection;
