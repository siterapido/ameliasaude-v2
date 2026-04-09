"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "purple" | "outline" | "ghost-white" | "ghost-purple";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center gap-2 font-sans text-sm font-normal tracking-widest uppercase cursor-pointer transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 rounded-full";

const variants: Record<ButtonVariant, string> = {
  purple:
    "bg-[#7b6bb2] text-white border border-[#7b6bb2] px-8 py-3.5 hover:bg-[#5e4985] hover:border-[#5e4985]",
  outline:
    "bg-transparent text-[#1a1a1a] border border-[#7b6bb2] px-8 py-3.5 hover:bg-[#7b6bb2] hover:text-white",
  "ghost-white":
    "bg-transparent text-white border border-white/40 px-8 py-3.5 hover:bg-white hover:text-[#5e4985] hover:border-white",
  "ghost-purple":
    "bg-transparent text-[#7b6bb2] border-0 px-0 py-2 hover:text-[#5e4985] underline-offset-4 hover:underline",
};

export function Button({
  children,
  variant = "outline",
  href,
  onClick,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
