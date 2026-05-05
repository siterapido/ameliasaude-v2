"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function FamilyPlan() {
  return (
    <section
      id="beneficiarios"
      className="relative flex flex-col justify-end min-h-[100svh] items-center overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/familia-bg.webp')", transform: "scaleX(-1)", backgroundPosition: "center 20%" }}
      />
      <div
        className="absolute inset-0 z-0 hidden bg-cover bg-no-repeat md:block"
        style={{ backgroundImage: "url('/familia-bg.webp')", backgroundPosition: "center 20%" }}
      />

      <div
        className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/95 to-transparent"
        aria-hidden
      />

      <div
        className="relative z-10 w-full max-w-[1200px] mx-auto"
        style={{ padding: "clamp(2rem, 5vh, 4rem) clamp(1.5rem, 5vw, 5rem)" }}
      >
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-3 block font-sans text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--amelia-deep)]/60"
          >
            Plano Carioca 10
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mb-4 font-display font-normal text-[var(--amelia-deep)]"
            style={{
              fontSize: "clamp(2.2rem, 7vw, 4.2rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Cuidado de verdade
            <br />
            <em className="font-light italic text-[var(--amelia-deep)]/80">
              para os cariocas.
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-2xl font-sans text-[var(--amelia-deep)]/70"
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
              lineHeight: 1.5,
            }}
          >
            Para o carioca que cuida de si e de quem ama — com a mesma leveza de
            uma tarde na orla.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button variant="outline" href="#contato" className="border-[var(--amelia-deep)] text-[var(--amelia-deep)] hover:bg-[var(--amelia-deep)] hover:text-white">
              Saiba mais
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
