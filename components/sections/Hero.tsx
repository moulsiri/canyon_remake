import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Slightly darker at the top for nav, and bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
          alt="Woman meditating by the ocean at sunset"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-[90%] md:max-w-4xl pt-[15vh]">
        <FadeIn delay={0.6} yOffset={15}>
          <p className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-6 text-white drop-shadow-md">
            The Well Way Of Life
          </p>
        </FadeIn>
        
        <FadeIn delay={0.9} yOffset={25}>
          <h1 className="text-6xl md:text-8xl lg:text-[80px] leading-[0.9] text-white mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
            Come Back To Yourself.
          </h1>
        </FadeIn>
        
        <FadeIn delay={1.2} yOffset={15}>
          <p className="text-lg md:text-xl font-light text-white/90 mb-16 max-w-2xl drop-shadow-lg leading-relaxed">
            A Place To Pause, Restore, And Discover A Deeper Way Of Living Well.
          </p>
        </FadeIn>
        
        <FadeIn delay={1.5} className="mt-8 flex flex-col items-center gap-4 group">
          <p className="text-sm font-light text-white/90 cursor-pointer group-hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-white/50 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            Begin Your Journey
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={2.0} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 hover:text-white cursor-pointer transition-colors">
          Scroll To Explore
        </p>
      </FadeIn>
    </section>
  );
}
