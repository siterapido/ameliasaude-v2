"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CROSS_MARKERS = [
  { x: "11%", y: "22%", delay: 0.5, size: 12 },
  { x: "84%", y: "28%", delay: 1.2, size: 10 },
  { x: "6%",  y: "67%", delay: 0.8, size: 9  },
  { x: "91%", y: "71%", delay: 1.6, size: 11 },
];

const AMBIENT_DOTS = [
  { x: "22%", y: "13%", delay: 0.0, r: 4 },
  { x: "76%", y: "19%", delay: 0.7, r: 5 },
  { x: "9%",  y: "54%", delay: 1.1, r: 3 },
  { x: "89%", y: "58%", delay: 0.4, r: 4 },
  { x: "52%", y: "88%", delay: 0.9, r: 3 },
];

const HEADLINE_LINES: ReactNode[] = [
  <>Planos que cuidam de</>,
  <>você de verdade</>,
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const blobY    = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const ringTopY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const ringBotY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-white"
      style={{ minHeight: "100svh", padding: "9rem 2rem 5rem" }}
    >

      {/* ── Grain / noise texture — purple tint ── */}
      <svg aria-hidden className="absolute inset-0 pointer-events-none w-full h-full" style={{ opacity: 0.09 }}>
        <filter id="hero-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.48
                    0 0 0 0 0.42
                    0 0 0 0 0.70
                    0.33 0.33 0.33 0 -0.1"
            in="noise"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* ── Dot grid ── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.6 }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(123,107,178,0.18) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, black 0%, transparent 100%)",
        }}
      />

      {/* ── Primary gradient blob ── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ y: blobY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div style={{
          position: "absolute",
          width: "min(1100px, 110vw)", height: "min(900px, 90vw)",
          top: "-25%", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at 50% 35%, rgba(123,107,178,0.13) 0%, rgba(94,73,133,0.07) 32%, transparent 64%)",
        }} />
        <div style={{
          position: "absolute",
          width: "min(480px, 52vw)", height: "min(480px, 52vw)",
          top: "5%", left: "58%",
          background: "radial-gradient(circle, rgba(170,155,215,0.08) 0%, transparent 65%)",
          borderRadius: "50%",
        }} />
      </motion.div>

      {/* ── Top-right orbital rings ── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ y: ringTopY, top: 0, right: 0, width: "100%", height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.4 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: -160, right: -160,
            width: "min(540px, 58vw)", height: "min(540px, 58vw)",
            borderRadius: "50%",
            border: "1px solid rgba(123,107,178,0.11)",
          }}
        >
          <div style={{
            position: "absolute", bottom: "22%", right: "7%",
            width: 5, height: 5, borderRadius: "50%",
            background: "rgba(123,107,178,0.55)",
          }} />
          <div style={{
            position: "absolute", top: "25%", left: "10%",
            width: 3, height: 3, borderRadius: "50%",
            background: "rgba(123,107,178,0.35)",
          }} />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: -70, right: -70,
            width: "min(320px, 34vw)", height: "min(320px, 34vw)",
            borderRadius: "50%",
            border: "1px solid rgba(123,107,178,0.07)",
          }}
        >
          <div style={{
            position: "absolute", top: "18%", left: "12%",
            width: 4, height: 4, borderRadius: "50%",
            background: "rgba(123,107,178,0.42)",
          }} />
        </motion.div>
      </motion.div>

      {/* ── Bottom-left ring ── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ y: ringBotY, bottom: -120, left: -120 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          style={{
            width: "min(400px, 42vw)", height: "min(400px, 42vw)",
            borderRadius: "50%",
            border: "1px solid rgba(123,107,178,0.09)",
          }}
        >
          <div style={{
            position: "absolute", top: "15%", right: "20%",
            width: 4, height: 4, borderRadius: "50%",
            background: "rgba(123,107,178,0.4)",
          }} />
        </motion.div>
      </motion.div>

      {/* ── Floating cross markers ── */}
      {CROSS_MARKERS.map(({ x, y, delay, size }, i) => (
        <motion.div
          key={`cross-${i}`}
          aria-hidden
          style={{ position: "absolute", left: x, top: y, pointerEvents: "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.15, 0.1, 0.15, 0], y: [0, -10, 0] }}
          transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
            <rect x="4.5" y="0"   width="3"  height="12" rx="1.5" fill="#7b6bb2" />
            <rect x="0"   y="4.5" width="12" height="3"  rx="1.5" fill="#7b6bb2" />
          </svg>
        </motion.div>
      ))}

      {/* ── Pulsing ambient dots ── */}
      {AMBIENT_DOTS.map(({ x, y, delay, r }, i) => (
        <motion.div
          key={`dot-${i}`}
          aria-hidden
          style={{
            position: "absolute", left: x, top: y,
            width: r, height: r, borderRadius: "50%",
            background: "rgba(123,107,178,0.38)",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.9, 1], opacity: [0.28, 0.55, 0.28] }}
          transition={{ duration: 3.5 + i * 0.4, delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-[860px]">

        {/* Eyebrow with animated side lines */}
        <div className="flex items-center gap-3">
          <motion.div
            className="h-px bg-[rgba(123,107,178,0.45)]"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 28, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.p
            className="font-sans text-[11px] font-normal tracking-[0.26em] uppercase text-[#7b6bb2]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            Rio de Janeiro · Operadora · Adesão
          </motion.p>
          <motion.div
            className="h-px bg-[rgba(123,107,178,0.45)]"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 28, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Headline — line-by-line blur reveal */}
        <h1
          className="font-display font-normal italic text-[#7b6bb2]"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)", lineHeight: 1.02, letterSpacing: "-0.025em" }}
        >
          {HEADLINE_LINES.map((line, i) => (
            <motion.div
              key={i}
              className="block"
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.0, delay: 0.35 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.div>
          ))}
        </h1>

        {/* Body copy */}
        <motion.p
          className="font-sans font-light text-[#6b6b6b] max-w-[520px] leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          Coletivo por adesão: contratação via sindicatos, conselhos e associações profissionais, com
          rede credenciada no Rio de Janeiro e atendimento sem burocracia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-2 flex items-center gap-5 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center justify-center font-sans font-normal text-white"
            style={{
              background: "#7b6bb2",
              borderRadius: "9999px",
              padding: "0.9rem 2.4rem",
              fontSize: "0.9375rem",
              letterSpacing: "0.005em",
            }}
            whileHover={{ backgroundColor: "#5e4985", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Fale conosco
          </motion.a>

          <motion.a
            href="#adesao"
            className="inline-flex items-center gap-1.5 font-sans font-normal text-[#7b6bb2]"
            style={{ fontSize: "0.9375rem" }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Como aderir
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="relative z-10 mt-20 flex flex-wrap justify-center gap-10 sm:gap-16 border-t border-[rgba(123,107,178,0.12)] pt-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {[
          { v: "30+", l: "Especialidades" },
          { v: "80%", l: "Resolutividade" },
          { v: "24h", l: "Disponível" },
          { v: "8+",  l: "Municípios" },
        ].map(({ v, l }, i) => (
          <motion.div
            key={l}
            className="flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="font-display font-normal text-[#1a1a1a]"
              style={{ fontSize: "clamp(1.95rem, 4.2vw, 3.1rem)", lineHeight: 1 }}
            >
              {v}
            </span>
            <span className="font-sans text-[11px] font-normal tracking-[0.18em] uppercase text-[#9a9a9a]">
              {l}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[rgba(123,107,178,0.4)] to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
