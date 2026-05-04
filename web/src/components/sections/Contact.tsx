"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative flex flex-col justify-center overflow-hidden bg-white"
      style={{ padding: "clamp(5rem, 10vh, 7rem) clamp(1.5rem, 5vw, 5rem) 0" }}
    >
      {/* Faixa sutil — profundidade sem “card grid” genérico */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(52vh,520px)]"
        style={{
          background:
            "linear-gradient(180deg, var(--amelia-surface) 0%, rgba(250,250,250,0.65) 45%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px]">
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-20 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-sans text-[11px] font-normal tracking-[0.1em] text-[var(--amelia-purple)]"
          >
            Contato
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-4 font-display font-normal text-[#1a1a1a]"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Pronta para cuidar
            <br />
            <em className="font-light italic text-[#7b6bb2]">de você de verdade.</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mb-8 max-w-md font-sans font-light leading-relaxed text-[#6b6b6b]"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
          >
            Fale com a Amélia Saúde. Nossos especialistas estão prontos para atendê-la.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+5521999999999"
              className="inline-flex items-center rounded-full font-sans font-normal text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--amelia-purple)]"
              style={{
                background: "#7b6bb2",
                padding: "0.9rem 2.4rem",
                fontSize: "0.9375rem",
              }}
              whileHover={{ backgroundColor: "#5e4985", scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Fale conosco
            </motion.a>
            <motion.a
              href="tel:08000000000"
              className="inline-flex items-center rounded-full font-sans font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--amelia-purple)]"
              style={{
                border: "1.5px solid rgba(123,107,178,0.3)",
                color: "#5e4985",
                padding: "0.9rem 2rem",
                fontSize: "0.9375rem",
              }}
              whileHover={{ borderColor: "#7b6bb2", scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              0800 000 000
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
