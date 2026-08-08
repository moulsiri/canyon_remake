import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-[200vh]">
      <Header />
      <Hero />
      {/* Scrollable content to test Lenis smooth scrolling */}
      <section className="h-screen bg-stone-50 flex items-center justify-center">
        <h2 className="text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>More Content Exploring Life</h2>
      </section>
    </main>
  );
}
