"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";
import { CoverageOrbital } from "@/components/sections/CoverageOrbital";

export function Network() {
  return (
    <section id="rede" className="flex flex-col justify-center overflow-x-clip overflow-y-visible bg-[#7B6BB2]"
      style={{ padding: "clamp(5rem,10vh,7rem) clamp(1.5rem,5vw,5rem)" }}>
      <div className="max-w-[min(100%,1400px)] mx-auto w-full">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-16 lg:gap-6 xl:gap-10 items-start lg:items-center"
          style={{ minHeight: "min(72vh,900px)" }}
        >

          {/* Esquerda — título e subtítulo sempre legíveis (acima do CTA) */}
          <div className="relative z-10 flex min-h-0 flex-col justify-center lg:min-h-[min(72vh,900px)] lg:max-w-xl lg:py-4">
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.2 }}
            >
              <motion.p
                variants={fadeUp}
                className="mb-5 font-sans text-[11px] font-normal uppercase tracking-[0.24em] text-white/85"
              >
                Cobertura
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mb-5 font-display font-normal text-white"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Acesso à rede mais eficiente do{" "}
                <em className="font-light italic text-white/95">Rio de Janeiro.</em>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mb-8 max-w-md font-sans font-light leading-relaxed text-white/80"
                style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
              >
                Presença em mais de 8 municípios, com hospitais, clínicas, centros médicos e
                laboratórios no Rio e Grande Rio.
              </motion.p>
              <motion.div variants={fadeUp}>
                <motion.a
                  href="#contato"
                  className="inline-flex items-center rounded-full font-sans text-sm font-normal"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.85)",
                    color: "#fff",
                    padding: "0.75rem 1.75rem",
                  }}
                  whileHover={{ background: "#fff", color: "#7B6BB2", scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Conheça nossa rede credenciada
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Direita — espiral orbital com cidades */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-[min(88vw,640px)] items-center justify-center lg:min-h-[min(62vh,680px)]"
          >
            <CoverageOrbital />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
