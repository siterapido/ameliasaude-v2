"use client";

import { HeroProvider } from "@/components/HeroContext";
import { ReactNode } from "react";

export function HomeWrapper({ children }: { children: ReactNode }) {
  return <HeroProvider>{children}</HeroProvider>;
}
