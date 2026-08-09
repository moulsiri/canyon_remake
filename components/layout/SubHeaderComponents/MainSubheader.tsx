"use client";

import { motion } from "framer-motion";
import { heightNav } from "@/config/anime";
import { useGlobalContext } from "@/context/GlobalContext";


import DestinationContent from "./DestinationContent";
import ExperienceContent from "./ExperienceContent";
import ShopContent from "./ShopContent";

const MainSubheader = () => {
  const { activeSubHeader } = useGlobalContext();
  return (
    <motion.div
      variants={heightNav}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden absolute w-full top-0 bg-[var(--background)]"
    >
      <div className="h-[80vh] pt-32 px-12 flex gap-12">
        {activeSubHeader === "Destinations" && (
          <DestinationContent/>
        )}

        {activeSubHeader === "Experience" && (
          <ExperienceContent/>
        )}

        {activeSubHeader === "Shop" && (
          <ShopContent/>
        )}
      </div>
    </motion.div>
  );
};

export default MainSubheader;
