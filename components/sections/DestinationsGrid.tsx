"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DestinationsList from "../ui/DestinationsList";

const DestinationsGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

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
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-[20] w-full min-h-screen bg-[#F4F4F1] dark:bg-stone-950 py-16 md:py-24"
    >
      {/* Restored Header Block */}
      <div
        ref={contentRef}
        className="flex flex-col items-center w-full px-6 md:px-12 max-w-7xl mx-auto text-center mb-20 md:mb-32"
      >
        <p
          ref={eyebrowRef}
          className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-12 text-stone-800 dark:text-stone-100 drop-shadow-md"
        >
          PLACES TO BEGIN
        </p>
        <h2
          ref={titleRef}
          className="text-5xl md:text-5xl text-stone-800 dark:text-stone-100 max-w-4xl px-4 tracking-tight transition-colors mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Different places. One purpose.
        </h2>

        <DestinationsList />
        <p
          ref={descriptionRef}
          className="text-stone-800 dark:text-stone-200 text-sm md:text-base font-medium leading-relaxed tracking-wide max-w-3xl"
        >
          Each Canyon Ranch destination has its own rhythm, landscape, and
          character. What connects them is a commitment to helping you live
          well.
        </p>
      </div>
    </section>
  );
};

export default DestinationsGrid;
