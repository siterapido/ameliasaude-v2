"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function FamilyPlan() {
  return (
    <section
      id="beneficiarios"
      className="relative flex flex-col justify-center min-h-[100svh] items-center overflow-hidden bg-[var(--amelia-deep)]"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/familia-bg.webp')" }}
      />

      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--amelia-deep)]/50 via-[var(--amelia-deep)]/20 to-[var(--amelia-deep)]/85 md:hidden"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-0 hidden bg-gradient-to-l from-[var(--amelia-deep)] via-[var(--amelia-deep)]/90 to-transparent md:block"
        aria-hidden
      />

      <div
        className="relative z-10 w-full max-w-[1200px] mx-auto"
        style={{ padding: "clamp(3rem, 8vh, 6rem) clamp(1.5rem, 5vw, 5rem)" }}
      >
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto flex max-w-2xl flex-col items-center text-center md:ml-auto md:mr-0 md:items-end md:text-right"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 block font-sans text-[11px] font-normal tracking-[0.24em] uppercase text-white/70"
          >
            Na adesão, você e seus dependentes
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mb-6 font-display font-normal text-white"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Cuidado de verdade
            <br />
            <em className="font-light italic text-white/90">
              para quem você ama.
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-xl font-sans text-white/80 md:ml-auto"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
            }}
          >
            No coletivo por adesão, titulares e dependentes enxergam a mesma rede
            credenciada e o mesmo padrão de atendimento — consultas, exames e
            internação com a tranquilidade de um plano pensado para a vida real.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button variant="ghost-white" href="#contato">
              Falar sobre a adesão
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
