"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Handshake, Heart, ArrowRight } from "lucide-react";
import {
  staggerContainer,
  fadeUp,
  fadeUpFast,
  revealLine,
  viewportConfig,
} from "@/lib/motion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: <Smartphone className="w-3.5 h-3.5 stroke-[1.5]" />,
      text: "Tecnologia inteligente",
    },
    {
      icon: <Handshake className="w-3.5 h-3.5 stroke-[1.5]" />,
      text: "Cuidado humanizado",
    },
    {
      icon: <Heart className="w-3.5 h-3.5 stroke-[1.5]" />,
      text: "Planos completos",
    },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-svh lg:min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(152deg, var(--amelia-white) 0%, var(--amelia-surface) 38%, var(--amelia-purple-mist) 100%)",
      }}
    >
      {/* Ambient glow — top-right */}
      <div
        className="absolute top-0 right-0 w-[58%] h-[70%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 78% 12%, color-mix(in srgb, var(--amelia-purple) 22%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      {/* Textura premium — trama + grain */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        aria-hidden
      >
        {/* Trama linho — tecido sutil */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 5px,
                color-mix(in srgb, var(--amelia-purple) 6%, transparent) 5px,
                color-mix(in srgb, var(--amelia-purple) 6%, transparent) 6px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 5px,
                color-mix(in srgb, var(--amelia-purple) 6%, transparent) 5px,
                color-mix(in srgb, var(--amelia-purple) 6%, transparent) 6px
              )
            `,
            opacity: 0.45,
            mixBlendMode: "multiply",
          }}
        />

        {/* Grain orgânico */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="hero-grain"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.72"
                numOctaves="4"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.482
                        0 0 0 0 0.427
                        0 0 0 0 0.698
                        0 0 0 0.12 0"
                in="noise"
              />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#hero-grain)" />
        </svg>

        {/* Fade — textura mais presente à esquerda, suave à direita */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, transparent 0%, transparent 42%, color-mix(in srgb, var(--amelia-white) 55%, transparent) 100%)",
          }}
        />
      </div>

      {/* Decorative circles — behind photo, desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute inset-0 hidden lg:block pointer-events-none z-[3]"
        aria-hidden
      >
        {/* Outer circle — glass body */}
        <div
          className="absolute rounded-full"
          style={{
            width: 620,
            height: 620,
            right: "-6%",
            bottom: "11%",
            background: "color-mix(in srgb, var(--amelia-purple) 6%, transparent)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid color-mix(in srgb, var(--amelia-purple) 14%, transparent)",
          }}
        />
        {/* Mid circle — glass body, lighter */}
        <div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            right: "4%",
            bottom: "19%",
            background: "color-mix(in srgb, var(--amelia-white) 9%, transparent)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid color-mix(in srgb, var(--amelia-purple) 10%, transparent)",
          }}
        />
        {/* Small circle — glass accent */}
        <div
          className="absolute rounded-full"
          style={{
            width: 120,
            height: 120,
            right: "29%",
            bottom: "59%",
            background: "color-mix(in srgb, var(--amelia-purple) 8%, transparent)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid color-mix(in srgb, var(--amelia-deep) 14%, transparent)",
          }}
        />
        {/* Dot punctuation */}
        <div
          className="absolute rounded-full"
          style={{
            width: 8,
            height: 8,
            right: "27.2%",
            bottom: "63.6%",
            background: "color-mix(in srgb, var(--amelia-purple) 55%, transparent)",
          }}
        />
      </motion.div>

      {/* Person image — desktop: absolute grounded right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute bottom-0 right-0 hidden lg:flex items-end pointer-events-none z-10"
        style={{ height: "91%" }}
        aria-hidden
      >
        <Image
          src="/amelia-hero-1.png"
          alt=""
          width={540}
          height={680}
          priority
          quality={100}
          className="h-full w-auto object-contain object-bottom select-none"
          sizes="(max-width: 1024px) 0px, 600px"
          draggable={false}
        />
      </motion.div>

      {/* Person image — mobile: oversized to compensate for transparent PNG canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute bottom-0 right-[-50vw] block lg:hidden pointer-events-none z-10"
        style={{ width: "148vw", height: "70vh" }}
        aria-hidden
      >
        <Image
          src="/amelia-hero-1.png"
          fill
          alt=""
          priority
          quality={90}
          className="object-contain object-bottom select-none"
          sizes="148vw"
          draggable={false}
        />
      </motion.div>

      {/* Bottom fade — integra foto e próxima seção */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--amelia-white) 88%, transparent))",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-30 flex flex-col flex-1 w-full max-w-[1440px] mx-auto px-[clamp(1.5rem,6vw,7rem)] pt-24 sm:pt-28 lg:pt-36 pb-6 lg:pb-28">
        <motion.div
          variants={staggerContainer(0.13, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-1 flex-col lg:my-auto lg:flex-none w-full lg:max-w-[48%]"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUpFast} className="mb-5 lg:mb-8">
            <span className="inline-flex items-center gap-3 text-[var(--amelia-deep)]/55 text-[0.68rem] font-normal tracking-[0.14em] uppercase">
              <span
                className="block w-8 h-px shrink-0"
                style={{
                  background:
                    "linear-gradient(90deg, var(--amelia-purple), transparent)",
                }}
              />
              Planos de Saúde · Rio de Janeiro
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="mb-5 lg:mb-7 tracking-tight">
            <span
              className="inline font-sans font-normal text-[var(--amelia-deep)] leading-[1.04]"
              style={{ fontSize: "clamp(2.75rem, 5.4vw, 4.75rem)" }}
            >
              Qualidade de vida{" "}
            </span>
            <span
              className="inline font-display font-normal text-[var(--amelia-purple)] leading-[1.04] italic"
              style={{ fontSize: "clamp(2.85rem, 5.6vw, 4.9rem)" }}
            >
              ao seu alcance.
            </span>
          </motion.h1>

          {/* Accent rule */}
          <motion.div
            variants={revealLine}
            className="mb-5 lg:mb-8 h-px w-16 origin-left"
            style={{ background: "var(--amelia-purple)" }}
          />

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="w-[229px] font-sans font-light text-[var(--amelia-body)] leading-relaxed mb-[106px] lg:w-auto lg:mb-10"
            style={{
              fontSize: "clamp(0.9rem, 1.35vw, 1.05rem)",
              maxWidth: "430px",
            }}
          >
            Tecnologia, humanidade e propósito em planos que cuidam de verdade para você e sua família.
          </motion.p>

          {/* Feature chips */}
          <motion.div
            variants={staggerContainer(0.08, 0)}
            className="flex flex-col gap-3 mb-8 lg:mb-12 max-w-[68%] lg:max-w-none lg:flex-row lg:flex-wrap lg:gap-2.5"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUpFast}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[var(--amelia-deep)] text-xs font-normal tracking-wide border border-white/40 bg-white/40 backdrop-blur-md lg:bg-[var(--amelia-soft)] lg:border-[var(--amelia-line)]"
              >
                {f.icon}
                {f.text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-auto flex flex-col items-start gap-3 pb-6 lg:mt-0 lg:pb-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-5"
          >
            <motion.a
              href="#experiencia-planos"
              className="inline-flex items-center gap-2 whitespace-nowrap text-[var(--amelia-purple)] font-semibold text-sm tracking-wide lg:gap-3 lg:bg-[var(--amelia-deep)] lg:text-white lg:px-7 lg:py-3.5 lg:rounded-full lg:shadow-lg"
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 48px color-mix(in srgb, var(--amelia-deep) 35%, transparent)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Quero meu plano
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </motion.a>

            <motion.a
              href="#origem"
              className="hidden lg:inline-flex items-center gap-1.5 text-[var(--amelia-deep)]/60 hover:text-[var(--amelia-deep)] text-sm font-normal tracking-wide transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Conheça a Amélia
              <ArrowRight className="w-3.5 h-3.5 stroke-[1.75]" />
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
