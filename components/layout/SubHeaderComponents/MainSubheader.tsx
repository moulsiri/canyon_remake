"use client";

import { motion } from "framer-motion";
import { heightNav } from "@/config/anime";
import { useGlobalContext } from "@/context/GlobalContext";

const MainSubheader = () => {
  const { isActive, setIsActive } = useGlobalContext();
  return (
    <motion.div
      variants={heightNav}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden absolute w-full top-0 bg-[var(--background)]"
    >
      <div className="h-[60vh]"></div>
    </motion.div>
  );
};

export default MainSubheader;
