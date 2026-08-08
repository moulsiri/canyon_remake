"use client";
import { useGlobalContext } from "@/context/GlobalContext";

const OpenSubHeaderButton = ({ name,isGlobal }: { name: string,isGlobal:boolean }) => {
  const { isActive, setIsActive } = useGlobalContext();
  return (
    <button
      className={` hover:opacity-70 transition-opacity cursor-pointer`}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
     <span className={`${isGlobal?"text-[var(--foreground)]":""}`}>{name}</span> 
    </button>
  );
};

export default OpenSubHeaderButton;
