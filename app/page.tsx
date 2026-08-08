import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SecondSection from "@/components/sections/SecondSection";
import GlobalHeader from "@/components/layout/GlobalHeader";
import ThirdSection from "@/components/sections/ThirdSection";
import FourthSection from "@/components/sections/FourthSection";
import FifthSection from "@/components/sections/FifthSection";
import SixthSection from "@/components/sections/SixthSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="relative bg-black w-full z-[10] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <GlobalHeader />
        
        {/* Sticky container for the hero to stay in place while being overlapped */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Header />
          <Hero />
        </div>
        
        <SecondSection />
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
      </main>
      
      {/* Global Reveal Footer outside of the bg-black main wrapper */}
      <Footer />
    </>
  );
}
