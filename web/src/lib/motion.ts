import type { Variants, Transition } from "framer-motion";

/* ─── Base Transitions ─── */

export const easeOut: Transition = {
  ease: [0.16, 1, 0.3, 1],
  duration: 0.8,
};

export const easeOutFast: Transition = {
  ease: [0.16, 1, 0.3, 1],
  duration: 0.5,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

/* ─── Fade Up ───
 * Sem opacity:0 no hidden — evita títulos “sumidos” se o viewport não reativar a animação ao rolar. */

export const fadeUp: Variants = {
  hidden: { opacity: 1, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOut,
  },
};

export const fadeUpFast: Variants = {
  hidden: { opacity: 1, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutFast,
  },
};

/* ─── Fade In ─── */

export const fadeIn: Variants = {
  hidden: { opacity: 1, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ─── Stagger Container ─── */

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/* ─── Slide from Left ─── */

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOut,
  },
};

/* ─── Slide from Right ─── */

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeOut,
  },
};

/* ─── Scale Up ─── */

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: easeOut,
  },
};

/* ─── Reveal Line (width 0→100%) ─── */

export const revealLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
};

/* ─── Viewport config ─── */

export const viewportConfig = {
  once: true,
  /** Margem menos agressiva que -80px — dispara “in view” com mais folga ao rolar de volta. */
  margin: "-40px 0px",
} as const;
