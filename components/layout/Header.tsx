import Link from "next/link";
import Logo from "@/components/ui/Logo";
import FadeIn from "@/components/animations/FadeIn";
import SubHeader from "./SubHeader";
import OpenSubHeaderButton from "./OpenSubHeaderButton";

export default function Header({ 
  containerClass = "absolute",
  logoClass = "",
  isGlobal = false
}: { 
  containerClass?: string;
  logoClass?: string;
  isGlobal?: boolean;
}) {
  return (
    <>
      <header className={`${containerClass} top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 w-full ${isGlobal ? "text-[var(--foreground)]" : "text-white"}`}>
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
              className={`w-[200px] md:w-[280px] h-auto object-contain ${logoClass}`}
            />
          </Link>
        </FadeIn>

        <FadeIn delay={0.3} className="hidden md:flex items-center gap-8">
          <a
            href="tel:8664949279"
            className="text-[13px] tracking-wide hover:opacity-70 transition-opacity"
          >
            (866)494-9279
          </a>
          <Link
            href="#"
            className="bg-[#b35930] hover:bg-[#964a27] transition-colors text-white px-8 py-3.5 text-xs tracking-widest uppercase font-medium"
          >
            Book Now
          </Link>
        </FadeIn>
      </header>
    </>
  );
}
