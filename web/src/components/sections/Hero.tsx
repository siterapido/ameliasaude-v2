"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const HEADLINE_LINES: ReactNode[] = [
  <>Planos que cuidam</>,
  <>de você de verdade</>,
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex flex-col justify-center overflow-hidden bg-white"
      style={{ minHeight: "100svh", padding: "9rem 2rem 5rem" }}
    >
      {/* ── Background Image ── */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: imageY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/hero-family.png"
          alt="Família feliz à direita"
          fill
          priority
          className="object-cover object-[62%_42%] sm:object-[70%_center] md:object-[85%_center] lg:object-right"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Gradient Overlay ── */}
      {/* 
        This white gradient starts fully opaque on the left, 
        and gradually fades to transparent on the right to reveal the family.
      */}
      <div
        className="pointer-events-none absolute inset-0 max-md:bg-[linear-gradient(90deg,#fff_0%,#fff_12%,rgba(255,255,255,0.9)_34%,rgba(255,255,255,0.38)_52%,transparent_70%)] md:bg-gradient-to-r md:from-white md:from-20% md:via-white/60 md:via-45% md:to-transparent md:to-65%"
        aria-hidden
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-start gap-5">

        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <motion.p
            className="font-sans text-[11px] font-medium tracking-[0.26em] uppercase text-[#7b6bb2]"
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            Rio de Janeiro · Operadora · Adesão
          </motion.p>
          <motion.div
            className="h-px bg-[rgba(123,107,178,0.45)]"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-display font-normal italic text-[#7b6bb2]"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)", lineHeight: 1.02, letterSpacing: "-0.025em" }}
        >
          {HEADLINE_LINES.map((line, i) => (
            <motion.div
              key={i}
              className="block"
              initial={{ y: 48, filter: "blur(8px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.0, delay: 0.35 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.div>
          ))}
        </h1>

        {/* Body copy */}
        <motion.p
          className="font-sans font-light text-[#4a4a4a] max-w-[480px] leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          Coletivo por adesão: contratação via sindicatos, conselhos e associações profissionais, com
          rede credenciada no Rio de Janeiro e atendimento sem burocracia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-4 flex items-center gap-5 flex-wrap justify-start"
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center justify-center font-sans font-medium text-white shadow-lg shadow-[#7b6bb2]/20"
            style={{
              background: "#7b6bb2",
              borderRadius: "9999px",
              padding: "1rem 2.4rem",
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
            className="inline-flex items-center gap-1.5 font-sans font-medium text-[#7b6bb2] hover:text-[#5e4985] transition-colors"
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

      {/* Stats strip - Aligned Left now */}
      <motion.div
        className="relative z-10 mt-20 flex flex-wrap justify-start gap-10 sm:gap-16 border-t border-[rgba(123,107,178,0.15)] pt-8 w-full max-w-[1200px] mx-auto"
        initial={{ y: 16 }}
        animate={{ y: 0 }}
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
            className="flex flex-col items-start gap-1"
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="font-display font-normal text-[#1a1a1a]"
              style={{ fontSize: "clamp(1.95rem, 4.2vw, 3.1rem)", lineHeight: 1 }}
            >
              {v}
            </span>
            <span className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-[#7b6bb2]">
              {l}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator (Optional, we can align it to the left or keep it centered at the bottom of the section) */}
      <motion.div
        initial={{ y: 6 }}
        animate={{ y: 0 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-[max(2rem,calc(50%-600px))] md:translate-x-0"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[rgba(123,107,178,0.4)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
