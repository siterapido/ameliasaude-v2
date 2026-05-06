"use client";

import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HEADLINE_LINES: ReactNode[] = [
  <>sua saúde em</>,
  <>nossos planos</>,
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex flex-col overflow-hidden bg-white"
      style={{ minHeight: "clamp(750px, calc(125svh - 20px), calc(125svh - 20px))" }}
    >
      <AnimatePresence initial={false}>
        {currentSlide === 0 ? (
          <motion.div
            key="slide1"
            className="absolute inset-0 z-0 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
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

            {/* ── Mobile Overlay Gradient ── */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-1 h-[48%] md:hidden"
              style={{
                background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%)"
              }}
              aria-hidden
            />

            {/* ── Desktop Gradient ── */}
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
                  className="font-sans font-light text-[#4a4a4a] max-w-[320px] md:max-w-[480px] leading-relaxed text-[0.875rem] md:text-[1.125rem]"
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
                      padding: "1.125rem 2.5rem",
                      fontSize: "1.05rem",
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
                      padding: "1.125rem 2.5rem",
                      fontSize: "1.05rem",
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
          </motion.div>
        ) : (
          <motion.div
            key="slide2"
            className="absolute inset-0 z-0 flex flex-col justify-end items-start md:justify-center md:items-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background image — optimized with next/image */}
            <div className="absolute inset-0 z-0" style={{ transform: "translateZ(0)" }}>
              <Image
                src="/familia-bg.webp"
                alt="Família feliz"
                fill
                priority
                quality={100}
                className="object-cover object-[32%_20%] md:scale-x-100 md:object-[center_20%]"
                style={{ 
                  imageRendering: "auto",
                  filter: "contrast(1.04) brightness(1.02)"
                }}
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 z-0 bg-[linear-gradient(to_top,#5e4985_0%,rgba(123,107,178,0.85)_50%,rgba(0,0,0,0.3)_100%)] md:bg-[linear-gradient(to_top,#5e4985_0%,rgba(123,107,178,0.8)_50%,rgba(0,0,0,0.25)_100%)]"
              aria-hidden
            />

            <div
              className="relative z-10 w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,2rem)] pb-[clamp(2.5rem,5vh,5rem)] pt-[clamp(3rem,10vh,6rem)]"
            >
              <div className="flex max-w-3xl flex-col items-start text-left md:items-center md:text-center md:mx-auto">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-3 block font-sans text-[12px] font-medium tracking-[0.15em] uppercase text-white/70"
                >
                  Plano Carioca 10
                </motion.span>

                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-4 font-display font-normal text-white"
                  style={{
                    fontSize: "clamp(2.8rem, 8vw, 4.2rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Cuidado de verdade
                  <br />
                  <em className="font-light italic text-white/85">
                    para os cariocas.
                  </em>
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-8 max-w-2xl font-sans text-white/80"
                  style={{
                    fontSize: "clamp(1.05rem, 2vw, 1.15rem)",
                    lineHeight: 1.5,
                    marginTop: "0.5rem"
                  }}
                >
                  Para o carioca que cuida de si e de quem ama — com a mesma leveza de
                  uma tarde na orla.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center font-sans font-medium transition-colors"
                    style={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "9999px",
                      padding: "1rem 2rem",
                      fontSize: "1.05rem",
                    }}
                  >
                    Saiba mais
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + 2) % 2)}
        className={`absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 ${
          currentSlide === 0 ? "bg-[#7b6bb2]/10 text-[#7b6bb2] hover:bg-[#7b6bb2]/20" : "bg-white/10 text-white hover:bg-white/25"
        }`}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % 2)}
        className={`absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 ${
          currentSlide === 0 ? "bg-[#7b6bb2]/10 text-[#7b6bb2] hover:bg-[#7b6bb2]/20" : "bg-white/10 text-white hover:bg-white/25"
        }`}
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        <button 
          onClick={() => setCurrentSlide(0)}
          className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === 0 ? "w-6 bg-[#7b6bb2]" : "w-2 bg-[#7b6bb2]/40"}`}
          aria-label="Slide 1"
        />
        <button 
          onClick={() => setCurrentSlide(1)}
          className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === 1 ? "w-6 bg-white" : "w-2 bg-white/40"}`}
          aria-label="Slide 2"
        />
      </div>
    </section>
  );
}
