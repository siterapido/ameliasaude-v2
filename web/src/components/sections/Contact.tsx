"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";

const pillars = [
  {
    title: "Cobertura no Rio de Janeiro",
    description:
      "Rede credenciada em municípios de todo o estado, para consultas, exames e internações com tranquilidade.",
  },
  {
    title: "Telemedicina 24 horas",
    description:
      "Orientação médica por vídeo ou chat quando você precisar, sem filas nem deslocamento desnecessário.",
  },
  {
    title: "Rede de confiança",
    description:
      "Hospitais, clínicas e laboratórios selecionados para combinar qualidade assistencial e praticidade.",
  },
  {
    title: "Coletivo por adesão",
    description:
      "Contratação exclusiva por sindicatos, conselhos de classe e associações profissionais, com regras e canais definidos para filiados.",
  },
] as const;

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-white"
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
        <div
          role="region"
          aria-labelledby="why-amelia-heading"
          className="mb-[clamp(4rem,8vw,6rem)]"
        >
          <motion.div
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mx-auto max-w-[720px] text-center"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 font-sans text-[11px] font-normal uppercase tracking-[0.26em] text-[var(--amelia-purple)]"
            >
              Por que a Amélia
            </motion.p>
            <motion.h2
              id="why-amelia-heading"
              variants={fadeUp}
              className="font-display font-normal text-[var(--amelia-ink)]"
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Um plano pensado para{" "}
              <em className="font-light not-italic text-[var(--amelia-deep)]">
                viver com segurança
              </em>{" "}
              no dia a dia.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-[480px] font-sans font-light leading-relaxed text-[#6b6b6b]"
              style={{ fontSize: "clamp(0.9rem, 1.35vw, 1.05rem)" }}
            >
              Transparência, acesso à saúde e atendimento que respeita o seu tempo.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-14 grid gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14"
          >
            {pillars.map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="border-t border-[var(--amelia-line)] pt-8 transition-[border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--amelia-purple)] md:pt-10"
              >
                <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-[var(--amelia-muted)] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-sans text-lg font-normal tracking-tight text-[var(--amelia-ink)] md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md font-sans font-light leading-relaxed text-[#6b6b6b]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-20 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-sans text-[11px] font-normal uppercase tracking-[0.24em] text-[var(--amelia-purple)]"
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
