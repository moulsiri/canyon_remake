"use client"
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Heavy global overlay to ensure crisp crisp white text legibility */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 z-10 mix-blend-multiply" />
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/assets/HeroImage.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/Hero_section.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-[90%] md:max-w-4xl pt-[15vh]">
        <FadeIn delay={0.6} yOffset={15}>
          <p className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-6 text-white drop-shadow-md">
            The Well Way Of Life
          </p>
        </FadeIn>
        
        <FadeIn delay={0.9} yOffset={25}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[80px] leading-[0.9] text-white mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
            Come Back To Yourself.
          </h1>
        </FadeIn>
        
        <FadeIn delay={1.2} yOffset={15}>
          <p className="text-lg md:text-xl font-light text-white/90 mb-12 max-w-2xl drop-shadow-lg leading-relaxed">
            A Place To Pause, Restore, And Discover A Deeper Way Of Living Well.
          </p>
        </FadeIn>
        
        <FadeIn delay={1.5} className=" flex flex-col items-center justify-center">
          <button className="bg-[#b35930] hover:bg-[#942721] transition-all duration-300 cursor-pointer text-white px-10 md:px-14 py-4 md:py-5 text-xs md:text-sm tracking-[0.15em] uppercase font-semibold shadow-2xl hover:shadow-none translate-y-0 hover:translate-y-[2px]">
            Begin Your Journey
          </button>
        </FadeIn>
      </div>

      <FadeIn delay={2.0} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 cursor-pointer group"
        >
          <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/80 group-hover:text-white transition-colors">
            Scroll To Explore
          </p>
          <div className="w-[1px] h-10 bg-white/40 group-hover:bg-white transition-colors" />
        </motion.div>
      </FadeIn>
    </section>
  );
}
