"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const HEADLINE_LINES: ReactNode[] = [
  <>sua saúde em</>,
  <>nossos planos</>,
];

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
      className="relative flex flex-col overflow-hidden bg-white"
      style={{ minHeight: "clamp(750px, 125svh, 125svh)" }}
    >
      {/* ── Background Image Container ── */}
      <div
        className="absolute inset-x-0 top-0 z-0 overflow-hidden h-[48%] md:h-full"
        style={{ transform: "translateZ(0)" }}
      >
        <motion.div
          className="relative w-full h-[120%] md:h-full will-change-transform"
          style={{ y: imageY }}
        >
          <Image
            src="/hero-nova.webp"
            alt="Família feliz à direita"
            fill
            priority
            quality={100}
            className="object-cover object-[85%_10%] md:object-right"
            style={{ 
              imageRendering: "auto",
              filter: "contrast(1.02) brightness(1.03)"
            }}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </motion.div>
      </div>

      {/* ── Mobile Overlay Gradient — suave transição para o branco ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-1 h-[48%] md:hidden"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%)"
        }}
        aria-hidden
      />

      {/* ── Desktop Gradient — left fade ── */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-white md:from-20% md:via-white/60 md:via-45% md:to-transparent md:to-65%"
        aria-hidden
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 flex flex-1 flex-col w-full
                   justify-end items-start
                   md:justify-center md:items-start"
        style={{ padding: "clamp(2rem, 10vh, 8rem) clamp(1.5rem, 5vw, 2rem) clamp(6rem, 15vh, 10rem)" }}
      >
        <div className="flex flex-col gap-6 w-full max-w-[1200px] md:mx-auto md:items-start md:text-left">

          {/* Headline */}
          <h1
            className="font-display font-normal lowercase italic text-[#7b6bb2]"
            style={{ fontSize: "clamp(3.2rem, 12vw, 8rem)", lineHeight: 0.82, letterSpacing: "-0.03em" }}
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
            className="font-sans font-light text-[#4a4a4a] max-w-[280px] md:max-w-[440px] leading-relaxed text-[0.875rem] md:text-[1.125rem]"
            style={{ lineHeight: 1.6 }}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Melhor plano de saúde para você, sua família e sua empresa, com um time sempre pronto para lhe
            atender com agilidade, transparência e segurança.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-4 mt-2"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href="https://ameliasaude.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans font-medium text-[#7b6bb2] shadow-sm"
              style={{
                border: "2px solid rgba(123,107,178,0.45)",
                borderRadius: "9999px",
                padding: "1rem 2.25rem",
                fontSize: "0.9375rem",
                letterSpacing: "0.01em",
                background: "rgba(255,255,255,0.9)",
              }}
              whileHover={{ borderColor: "#7b6bb2", scale: 1.03, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Já sou cliente
            </motion.a>

            <motion.a
              href="#contato"
              className="inline-flex items-center justify-center font-sans font-medium text-white shadow-xl shadow-[#7b6bb2]/25"
              style={{
                background: "#7b6bb2",
                borderRadius: "9999px",
                padding: "1rem 2.25rem",
                fontSize: "0.9375rem",
                letterSpacing: "0.01em",
              }}
              whileHover={{ backgroundColor: "#5e4985", scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Fazer orçamento
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
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
