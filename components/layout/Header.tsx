"use client"
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import FadeIn from "@/components/animations/FadeIn";
import SubHeader from "./SubHeader";
import OpenSubHeaderButton from "./OpenSubHeaderButton";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Header({ 
  containerClass = "absolute",
  logoClass = "",
  isGlobal = false
}: { 
  containerClass?: string;
  logoClass?: string;
  isGlobal?: boolean;
}) {
  const { setIsBookingModalOpen } = useGlobalContext();

  return (
    <>
      <header className={`${containerClass} top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 w-full transition-all duration-300 ${
        isGlobal
          ? "bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl mt-4 max-w-[calc(100%-2rem)] md:max-w-7xl mx-auto py-4 text-[var(--foreground)]"
          : "text-white py-8"
      }`}>
        <FadeIn
          delay={0.1}
          className="hidden md:flex gap-8 text-[13px] tracking-wide font-light"
        >
          <OpenSubHeaderButton name={"Destinations"} isGlobal={!!isGlobal} />
          <OpenSubHeaderButton name={"Experience"} isGlobal={!!isGlobal} />

          <Link href="#" className="hover:opacity-70 transition-opacity">
            Offers
          </Link>
          <OpenSubHeaderButton name={"Shop"} isGlobal={!!isGlobal} />
        </FadeIn>

        <FadeIn delay={0.2} className="absolute left-1/2 -translate-x-1/2">
          <Link href="#">
            <Logo 
              className={`w-[120px] md:w-[180px] h-auto object-contain ${logoClass}`}
            />
          </Link>
        </FadeIn>

        <FadeIn delay={0.3} className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a
              href="tel:8664949279"
              className={`text-[11px] tracking-[0.2em] transition-opacity uppercase font-semibold ${isGlobal ? 'text-stone-500 hover:text-black' : 'text-white/80 hover:text-white'}`}
            >
              (866) 494-9279
            </a>
            
            <button className={`cursor-pointer text-[11px] tracking-[0.2em] transition-opacity uppercase font-semibold flex items-center gap-2 ${isGlobal ? 'text-stone-500 hover:text-black' : 'text-white/80 hover:text-white'}`}>
              <span className="w-4 h-4 rounded-full border border-current opacity-80 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </span>
              Sign In / Join
            </button>
            
            {isGlobal && (
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-[#b35930] hover:bg-[#964a27] transition-colors text-white px-7 py-3 text-[11px] tracking-widest uppercase font-bold cursor-pointer"
              >
                Book Now
              </button>
            )}
          </div>
          
          {/* Mobile Menu Icon */}
          <button className={`md:hidden flex items-center justify-center p-2 rounded-full cursor-pointer transition-colors ${isGlobal ? 'text-stone-800 bg-black/5 hover:bg-black/10' : 'text-white bg-white/10 hover:bg-white/20'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </FadeIn>

      </header>
    </>
  );
}
