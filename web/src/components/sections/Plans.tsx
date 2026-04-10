"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";

const bars = [
  { label: "Consultas", pct: 100 },
  { label: "Exames", pct: 100 },
  { label: "Internações", pct: 100 },
  { label: "Cirurgias", pct: 100 },
];

const tiers = [
  {
    id: "adesao",
    title: "Coletivo por adesão",
    label: "Contato — coletivo por adesão",
  },
] as const;

const stats = [
  { v: "30+", l: "Especialidades" },
  { v: "80%", l: "Resolutividade" },
  { v: "8+", l: "Municípios" },
  { v: "24h", l: "Disponível" },
];

export function Plans() {
  return (
    <section
      id="planos"
      className="flex flex-col justify-center bg-white"
      style={{ padding: "clamp(4.5rem, 9vh, 6.5rem) clamp(1.5rem, 5vw, 5rem)" }}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-normal tracking-tight text-[var(--amelia-ink)]"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Planos por adesão
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md font-sans font-light leading-relaxed text-[#6b6b6b]"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
            >
              Somos uma operadora de planos de saúde com contratação exclusiva em{" "}
              <strong className="font-normal text-[var(--amelia-ink)]">coletivo por adesão</strong>
              — ou seja, a filiação a sindicatos, conselhos de classe e associações profissionais é
              quem viabiliza o acesso ao plano.
            </motion.p>

            <nav className="mt-10 border-t border-[var(--amelia-line)] pt-2" aria-label="Contratação">
              <motion.ul variants={staggerContainer(0.07, 0)} className="flex flex-col">
                {tiers.map((t) => (
                  <motion.li
                    key={t.id}
                    variants={fadeUp}
                    className="border-b border-[var(--amelia-line)] last:border-b-0"
                  >
                    <motion.a
                      href="#contato"
                      aria-label={t.label}
                      className="group flex items-center justify-between gap-4 py-4 text-[var(--amelia-ink)] transition-colors hover:text-[var(--amelia-purple)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--amelia-purple)] rounded-sm"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span
                        className="font-display font-normal tracking-tight"
                        style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.35rem)" }}
                      >
                        {t.title}
                      </span>
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--amelia-purple)] text-white transition-transform group-hover:scale-105"
                        aria-hidden
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M1 6h10M7 2l4 4-4 4"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:border-l lg:border-[var(--amelia-line)] lg:pl-14"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                {bars.map((b, i) => (
                  <motion.div key={b.label} variants={fadeUp} transition={{ delay: 0.04 * i }}>
                    <p className="mb-1.5 font-sans text-sm text-[var(--amelia-ink)]">{b.label}</p>
                    <div
                      className="h-1 overflow-hidden rounded-full"
                      style={{ background: "rgba(123,107,178,0.1)" }}
                    >
                      <motion.div
                        className="h-full rounded-full bg-[var(--amelia-purple)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.pct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.85,
                          delay: 0.2 + i * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-x-10 gap-y-3 border-t border-[var(--amelia-line)] pt-8"
              >
                {stats.map(({ v, l }) => (
                  <div key={l} className="min-w-[5rem]">
                    <span
                      className="font-display font-normal text-[var(--amelia-deep)]"
                      style={{ fontSize: "clamp(1.65rem, 3.2vw, 2.25rem)", lineHeight: 1 }}
                    >
                      {v}
                    </span>
                    <p className="mt-0.5 font-sans text-[11px] uppercase tracking-[0.12em] text-[var(--amelia-muted)]">
                      {l}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
