"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function BrandOrigin() {
  return (
    <section
      id="origem"
      aria-labelledby="origem-heading"
      className="flex flex-col justify-center bg-[var(--amelia-surface)]"
      style={{ padding: "clamp(4.5rem, 9vh, 7rem) clamp(1.5rem, 5vw, 5rem)" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)] lg:gap-16 xl:gap-20"
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            variants={fadeUp}
            className="flex w-full justify-center lg:justify-start"
          >
            <div
              className="relative w-full max-w-[min(100%,22.5rem)] overflow-hidden rounded-[1.35rem] bg-[var(--amelia-purple-faint)]"
              style={{
                aspectRatio: "9 / 16",
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

          <motion.div variants={fadeUp} className="flex flex-col justify-center lg:py-4">
            <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--amelia-purple)]">
              Nossa história
            </p>
            <h2
              id="origem-heading"
              className="font-display font-normal text-[var(--amelia-deep)]"
              style={{
                fontSize: "clamp(2.1rem, 4.5vw, 3.6rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                maxWidth: "22ch",
              }}
            >
              A Amélia Saúde nasceu para transformar o cuidado com a saúde no{" "}
              <em className="font-light italic text-[var(--amelia-purple)]">Rio de Janeiro</em>
            </h2>
            <p
              className="mt-7 max-w-md font-sans font-light leading-relaxed text-[var(--amelia-body)]"
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
