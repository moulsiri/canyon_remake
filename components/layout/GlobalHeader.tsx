"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Header from "./Header";

export default function GlobalHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window !== "undefined") {
      // When scroll reaches 80% of the viewport (approaching the top of SecondSection)
      if (latest > window.innerHeight * 0.8) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    }
  });

  if (!hasMounted) return null;

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[60]"
    >
      <Header
        containerClass="relative backdrop-blur-md shadow-xl bg-stone-50/90 dark:bg-stone-900/90 border-b border-stone-200 dark:border-stone-800"
        logoClass="text-[#b35930]"
        isGlobal={true}
      />
    </motion.div>
  );
}
