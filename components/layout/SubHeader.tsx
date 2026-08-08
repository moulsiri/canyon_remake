"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { motion, AnimatePresence } from "framer-motion";
import { backgroundShad, nameSpecialReveal, opacity } from "@/config/anime";
import MainSubheader from "./SubHeaderComponents/MainSubheader";

const SubHeader = () => {
  const { isActive, setIsActive } = useGlobalContext();
  return (
    <>
      <div
        style={{ transition: "all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s" }}
        className={`w-full fixed top-0 left-0 h-screen z-[100] ${isActive ? "" : "pointer-events-none"}`}
      >
        <div className="flex justify-between relative items-center py-4 px-8 z-[45]">
          <div></div>
          <div>
              <button
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={`flex items-center justify-center w-[30px] h-[30px] gap-[12px] cursor-pointer border-0 transition-opacity duration-300 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="relative w-[30px] h-[20px] z-[100]">
                  <span
                    className={`absolute left-0 block h-[2px] w-full
                      transition-all duration-1000 bg-[var(--background)] top-[9px]
                      ease-[cubic-bezier(0.76,0,0.24,1)]
                      ${
                        isActive
                          ? "rotate-45"
                          : "-rotate-90"
                      }
                      `}
                  />

                  <span
                    className={`absolute left-0 block h-[2px] w-full
                      transition-all duration-1000 bg-[var(--background)] top-[9px]
                      ease-[cubic-bezier(0.76,0,0.24,1)]
                      ${
                        isActive
                          ? "-rotate-45"
                          : "rotate-90"
                      }
                      `}
                  />
                </div>
              </button>
          </div>
        </div>

        <motion.div
          variants={backgroundShad}
          initial="initial"
          animate={isActive ? "enter" : "exit"}
          className="h-full w-full absolute left-0 top-0 backdrop-invert-20"
        ></motion.div>
        <AnimatePresence mode="wait">
          {isActive && <MainSubheader/>}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SubHeader;
