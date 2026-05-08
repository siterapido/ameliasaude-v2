"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface HeroContextType {
  currentSlide: number;
  setCurrentSlide: (slide: number | ((prev: number) => number)) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export function HeroProvider({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <HeroContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  const context = useContext(HeroContext);
  if (context === undefined) {
    // Return default values when not inside a HeroProvider (e.g., blog pages)
    return { currentSlide: 0, setCurrentSlide: () => {} };
  }
  return context;
}
