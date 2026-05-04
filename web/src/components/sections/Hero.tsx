"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const HEADLINE_LINES: ReactNode[] = [
  <>sua saúde em</>,
  <>nossos planos</>,
];

/** Retratos genéricos para stack social — substitua por fotos reais da marca quando houver. */
const SOCIAL_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces",
] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex flex-col justify-between overflow-hidden bg-white"
      style={{ minHeight: "100svh", padding: "9rem 2rem 3rem" }}
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
          src="/hero-nova.png"
          alt="Família feliz à direita"
          fill
          priority
          className="object-cover object-[75%_center] max-md:object-[75%_center] sm:object-[70%_center] md:object-[85%_center] lg:object-right"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Glassmorphism Overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 max-md:bg-white/75 md:bg-gradient-to-r md:from-white md:from-20% md:via-white/60 md:via-45% md:to-transparent md:to-65%"
        aria-hidden
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1200px] md:mx-auto flex flex-col justify-between" style={{ minHeight: "100%" }}>

        {/* Headline */}
        <h1
          className="font-display font-normal lowercase italic text-[#7b6bb2]"
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
          className="font-sans font-light text-[#333333] max-w-[320px] md:max-w-[560px] leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          Melhor plano de saúde para você, sua família e sua empresa, com um time sempre pronto para lhe
          atender com agilidade, transparência e segurança.
        </motion.p>

        {/* Bottom section with CTAs and social proof */}
        <div className="mt-auto">
          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href="https://ameliasaude.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans font-medium text-[#7b6bb2] shadow-sm"
              style={{
                border: "1.5px solid rgba(123,107,178,0.35)",
                borderRadius: "9999px",
                padding: "0.625rem 1.25rem",
                fontSize: "0.75rem",
                letterSpacing: "0.005em",
                background: "rgba(255,255,255,0.9)",
              }}
              whileHover={{ borderColor: "#7b6bb2", scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Já sou cliente
            </motion.a>

            <motion.a
              href="#contato"
              className="inline-flex items-center justify-center font-sans font-medium text-white shadow-lg shadow-[#7b6bb2]/20"
              style={{
                background: "#7b6bb2",
                borderRadius: "9999px",
                padding: "0.625rem 1.25rem",
                fontSize: "0.75rem",
                letterSpacing: "0.005em",
              }}
              whileHover={{ backgroundColor: "#5e4985", scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Fazer orçamento
            </motion.a>
          </motion.div>

          {/* Prova social — avatares */}
          <motion.div
            className="mt-3 flex flex-wrap items-center gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center pl-1">
              {SOCIAL_AVATARS.map((src, i) => (
                <div
                  key={src}
                  className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-[0_1px_6px_rgba(0,0,0,0.08)] md:h-12 md:w-12"
                  style={{ marginLeft: i === 0 ? 0 : -8 }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ))}
            </div>
            <p className="font-sans text-[0.8125rem] font-normal leading-snug text-[#1a1a1a]">
              <span className="font-semibold text-[#7b6bb2]">+2.500</span> famílias protegidas
            </p>
          </motion.div>
        </div>
      </div>

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
