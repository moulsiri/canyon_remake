"use client";
import React, { useState, useEffect, useRef } from "react";
import StateOfMindCard from "./StateOfMindCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mindStates = [
  { id: 1, title: 'Reset', src: "/assets/state_of_mind/REset.png", alt: "Reset Pathway", text: "Slow down. Breathe deeply. Begin again." },
  { id: 2, title: 'Reconnect', src: "/assets/state_of_mind/REconnect.png", alt: "Reconnect Pathway", text: "Make space for what matters." },
  { id: 6, title: 'Restore', src: "/assets/state_of_mind/Restore.png", alt: "Restore Pathway", text: "Give your body and mind what they've been asking for." },
  { id: 4, title: 'Strengthen', src: "/assets/state_of_mind/strength.png", alt: "Strengthen Pathway", text: "Build energy, resilience, and confidence." },
  { id: 3, title: 'Discover', src: "/assets/state_of_mind/Discover.png", alt: "Discover Pathway", text: "Learn something new about yourself." },
  { id: 5, title: 'Transform', src: "/assets/state_of_mind/transform.png", alt: "Transform Pathway", text: "Leave with more than you arrived with." },
];

const StateOfMind = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(".state-card-wrapper", 
        { opacity: 0, y: 60 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full px-6 md:px-12 max-w-5xl mx-auto mt-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 md:gap-10">
        {mindStates.map((state) => (
          <div key={state.id} className="state-card-wrapper">
            <StateOfMindCard
              {...state}
              isHovered={hoveredId === state.id}
              isOtherHovered={hoveredId !== null && hoveredId !== state.id}
              onHover={() => setHoveredId(state.id)}
              onLeave={() => setHoveredId(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateOfMind;
