"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// 1. Define the context type
type GlobalContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadedCount: number;
  handleContentLoad: () => void;
  totalContent: number;
  isMobile: boolean;

  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

// 2. Create context with undefined default
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// 3. Custom hook for easier usage
export function useGlobalContext(): GlobalContextType {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
}

// 4. Context Provider
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const totalContent = 7 + 9;
  const handleContentLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };


  // ✅ Safe mobile screen detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);

      const handleResize = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      return () => mediaQuery.removeEventListener("change", handleResize);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loadedCount,
        handleContentLoad,
        totalContent,
        isMobile,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
