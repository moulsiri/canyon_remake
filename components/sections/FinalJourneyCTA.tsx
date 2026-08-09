"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Play, Copy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FinalJourneyCTA = () => {
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
      className="relative w-full z-[20] bg-white dark:bg-stone-950 py-24 flex flex-col items-center"
    >
      {/* FINAL CTA BLOCK */}
      <div
        ref={contentRef}
        className="w-full flex flex-col items-center text-center px-6 md:px-12 max-w-4xl mx-auto mb-32"
      >
        <p
          ref={eyebrowRef}
          className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-6 text-stone-800 dark:text-stone-400 drop-shadow-sm"
        >
          YOUR JOURNEY STARTS HERE
        </p>
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 mb-8 tracking-tight transition-colors"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Where will you begin?
        </h2>
        <p
          ref={descriptionRef}
          className="text-stone-600 dark:text-stone-300 text-base md:text-lg font-medium leading-relaxed tracking-wide mb-12 max-w-2xl"
        >
          Find the place, experience, and path that feels right for you.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#b35930] hover:bg-[#9a4b27] text-white text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">
            Find Your Journey
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-800 dark:border-stone-200 text-stone-800 dark:text-stone-200 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">
            Explore Destinations
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-800 dark:border-stone-200 text-stone-800 dark:text-stone-200 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-200 dark:hover:text-stone-900 text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">
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
                <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  Canyon Ranch
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />
              </div>
              <span className="text-xs text-stone-500 font-medium">
                @canyonranch
              </span>
            </div>
          </div>
        </div>

        {/* Instagram Infinite Marquee Grid */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="w-full overflow-hidden flex font-sans">
          <div className="flex w-max animate-marquee gap-1 md:gap-2 px-0.5 md:px-1">
            {[
              ...[
                {
                  id: 1,
                  type: "carousel",
                  img: "https://images.unsplash.com/photo-1544843776-7c98a52e08a4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video: null,
                },
                {
                  id: 2,
                  type: "video",
                  img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video:
                    "/assets/video/1497-147827936.mp4",
                },
                {
                  id: 3,
                  type: "video",
                  img: "https://images.unsplash.com/photo-1660597055848-3bfee1eeed6a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video:
                    "/assets/video/168352-841391725.mp4",
                },
                {
                  id: 4,
                  type: "carousel",
                  img: "https://images.unsplash.com/photo-1687436874174-977fdd9e2cb8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video: null,
                },
                {
                  id: 5,
                  type: "video",
                  img: "https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video:
                    "/assets/video/22601-328624863.mp4", // Using same video as fallback placeholder
                },
                {
                  id: 6,
                  type: "carousel",
                  img: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video: null,
                },
              ],
              ...[
                {
                  id: 7,
                  type: "carousel",
                  img: "https://images.unsplash.com/photo-1544843776-7c98a52e08a4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video: null,
                },
                {
                  id: 8,
                  type: "video",
                  img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video:
                    "/assets/video/1497-147827936.mp4",
                },
                {
                  id: 9,
                  type: "video",
                  img: "https://images.unsplash.com/photo-1660597055848-3bfee1eeed6a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video:
                    "/assets/video/168352-841391725.mp4",
                },
                {
                  id: 10,
                  type: "carousel",
                  img: "https://images.unsplash.com/photo-1687436874174-977fdd9e2cb8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video: null,
                },
                {
                  id: 11,
                  type: "video",
                  img: "https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video:
                    "/assets/video/1497-147827936.mp4",
                },
                {
                  id: 12,
                  type: "carousel",
                  img: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  video: null,
                },
              ],
            ].map((post) => (
              <div
                key={post.id}
                className="relative w-[50vw] md:w-[25vw] lg:w-[20vw] aspect-square flex-shrink-0 group cursor-pointer overflow-hidden bg-stone-200 dark:bg-stone-800"
              >
                {post.type === "video" && post.video ? (
                  <video
                    src={post.video}
                    poster={post.img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={post.img}
                    alt="Instagram post"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                {/* Overlay Icon (top right) */}
                <div className="absolute top-2 right-2 md:top-3 md:right-3 opacity-90 drop-shadow-md z-10">
                  {post.type === "video" ? (
                    <Play className="w-5 h-5 text-white fill-white drop-shadow" />
                  ) : (
                    <Copy className="w-4 h-4 text-white drop-shadow" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalJourneyCTA;
