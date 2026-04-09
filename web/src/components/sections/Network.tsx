"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";
import { CoverageOrbital } from "@/components/sections/CoverageOrbital";

export function Network() {
  return (
    <section id="rede" className="bg-white overflow-hidden"
      style={{ padding: "clamp(5rem,10vh,7rem) clamp(1.5rem,5vw,5rem)" }}>
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center" style={{ minHeight: "65vh" }}>

          {/* Esquerda */}
          <motion.div variants={staggerContainer(0.1, 0)} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.p variants={fadeUp}
              className="font-sans text-[11px] font-normal tracking-[0.24em] uppercase text-[#7b6bb2] mb-5">
              Cobertura
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display font-normal text-[#1a1a1a] mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Acesso à rede mais eficiente do{" "}
              <em className="italic font-light text-[#7b6bb2]">Rio de Janeiro.</em>
            </motion.h2>
            <motion.p variants={fadeUp}
              className="font-sans font-light text-[#6b6b6b] leading-relaxed max-w-md mb-8"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}>
              Presença em mais de 8 municípios, com hospitais, clínicas,
              centros médicos e laboratórios no Rio e Grande Rio.
            </motion.p>
            <motion.div variants={fadeUp}>
              <motion.a href="#contato"
                className="inline-flex items-center font-sans text-sm font-normal rounded-full"
                style={{ border: "1.5px solid #7b6bb2", color: "#7b6bb2", padding: "0.75rem 1.75rem" }}
                whileHover={{ background: "#7b6bb2", color: "#fff", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}>
                Conheça nossa rede credenciada
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Direita — espiral orbital com cidades */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-[min(92vw,560px)] items-center justify-center lg:min-h-[480px]"
          >
            <CoverageOrbital />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
