"use client";
import { useGlobalContext } from "@/context/GlobalContext";

const OpenSubHeaderButton = ({ name,isGlobal }: { name: string,isGlobal:boolean }) => {
  const { isActive, setIsActive, activeSubHeader, setActiveSubHeader } = useGlobalContext();
  return (
    <button
      className={` hover:opacity-70 transition-opacity cursor-pointer`}
      onClick={() => {
        if (isActive && activeSubHeader === name) {
          setIsActive(false);
          setActiveSubHeader(null);
        } else {
          setIsActive(true);
          setActiveSubHeader(name);
        }
      }}
    >
     <span className={`${isGlobal?"text-[var(--foreground)]":""}`}>{name}</span> 
    </button>
  );
};

export default OpenSubHeaderButton;
