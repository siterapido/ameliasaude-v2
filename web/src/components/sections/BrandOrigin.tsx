"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function BrandOrigin() {
  return (
    <section
      id="origem"
      aria-labelledby="origem-heading"
      className="overflow-x-clip bg-[var(--amelia-surface)]"
      style={{
        minHeight: "auto",
        padding: "clamp(3.5rem, 7vh, 5.5rem) clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      <div className="mx-auto w-full max-w-[1140px]">
        <motion.div
          className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,17.5rem)_minmax(0,1fr)] lg:gap-14 xl:gap-16"
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            variants={fadeUp}
            className="flex min-w-0 justify-center lg:justify-start"
          >
            <div
              className="relative aspect-[9/16] h-[min(62svh,30rem)] w-auto max-w-[min(100%,17.5rem)] shrink-0 overflow-hidden rounded-[1.35rem] bg-[var(--amelia-purple-faint)]"
              style={{
                boxShadow:
                  "0 28px 72px -36px color-mix(in srgb, var(--amelia-deep) 42%, transparent)",
              }}
            >
              <video
                className="h-full w-full object-cover"
                src="/video1.mp4"
                playsInline
                preload="metadata"
                controls
                aria-label="Vídeo institucional da Amélia Saúde"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex min-w-0 flex-col justify-center lg:py-2"
          >
            <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--amelia-purple)]">
              Nossa história
            </p>
            <h2
              id="origem-heading"
              className="max-w-xl font-display font-normal text-[var(--amelia-deep)]"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
              }}
            >
              A Amélia Saúde nasceu para transformar o cuidado com a saúde no{" "}
              <em className="font-light italic text-[var(--amelia-purple)]">Rio de Janeiro</em>
            </h2>
            <p
              className="mt-6 max-w-lg font-sans font-light leading-relaxed text-[var(--amelia-body)]"
              style={{ fontSize: "clamp(1rem, 1.35vw, 1.125rem)", lineHeight: 1.65 }}
            >
              Operadora carioca com gestão moderna, rede perto de você e um time dedicado a cuidar de
              pessoas, não de processos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
