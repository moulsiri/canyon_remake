import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import GlobalHeader from "@/components/layout/GlobalHeader";
import IntentionsSection from "@/components/sections/IntentionsSection";
import ExperienceGallery from "@/components/sections/ExperienceGallery";
import DestinationsGrid from "@/components/sections/DestinationsGrid";
import FinalJourneyCTA from "@/components/sections/FinalJourneyCTA";
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
        
        <BrandPhilosophy />
        <IntentionsSection />
        <ExperienceGallery />
        <DestinationsGrid />
        <FinalJourneyCTA />
      </main>
      
      {/* Global Reveal Footer outside of the bg-black main wrapper */}
      <Footer />
    </>
  );
}
