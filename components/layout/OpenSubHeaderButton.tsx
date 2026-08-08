"use client";
import { useGlobalContext } from "@/context/GlobalContext";

const OpenSubHeaderButton = ({ name }: { name: string }) => {
  const { isActive, setIsActive } = useGlobalContext();
  return (
    <button
      className="hover:opacity-70 transition-opacity cursor-pointer"
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      {name}
    </button>
  );
};

export default OpenSubHeaderButton;
