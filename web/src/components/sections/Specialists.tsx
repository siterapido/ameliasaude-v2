"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";

type SpecialtyVariant = "hero" | "compact";

const specialties: {
  name: string;
  cred: string;
  photo: string;
  variant: SpecialtyVariant;
}[] = [
  {
    name: "Cardiologista",
    cred: "Atendimento presencial e digital",
    variant: "hero",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=560&fit=crop&crop=faces",
  },
  {
    name: "Ginecologista",
    cred: "Rede credenciada Rio de Janeiro",
    variant: "compact",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=480&fit=crop&crop=faces",
  },
  {
    name: "Pediatra",
    cred: "Urgência e emergência 24h",
    variant: "compact",
    photo:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=480&fit=crop&crop=faces",
  },
  {
    name: "Dermatologista",
    cred: "Telemedicina disponível",
    variant: "compact",
    photo:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=480&fit=crop&crop=faces",
  },
  {
    name: "Ortopedista",
    cred: "Centros especializados RJ",
    variant: "hero",
    photo:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=560&fit=crop&crop=faces",
  },
  {
    name: "Psiquiatra",
    cred: "Suporte emocional completo",
    variant: "compact",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=480&fit=crop&crop=faces",
  },
];

const glassCard =
  "rounded-[1.75rem] border border-white/55 bg-white/20 shadow-[0_8px_40px_rgba(94,73,133,0.07)] backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 supports-[backdrop-filter]:bg-white/18";

export function Specialists() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="especialistas-grid"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ padding: "clamp(5rem, 12vh, 8rem) 0" }}
    >
      {/* Camadas de profundidade — gradiente + orbes suaves (marca) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf8fc] via-white to-[#f3f0fa]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-[20%] top-[8%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-[var(--amelia-purple)]/[0.12] blur-[100px]"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0.5, scale: 0.92 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute -right-[15%] bottom-[5%] h-[min(60vw,480px)] w-[min(60vw,480px)] rounded-full bg-[var(--amelia-deep)]/[0.1] blur-[120px]"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0.45, scale: 0.9 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_45%,rgba(250,248,252,0.85)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6">
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-14 flex flex-col gap-8 md:mb-16 lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
        >
          <div className="max-w-xl text-left">
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-normal uppercase tracking-[0.24em] text-[var(--amelia-purple)]"
            >
              Especialistas
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display mt-4 font-normal text-[var(--amelia-ink)]"
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.35rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Conecte-se aos melhores especialistas,{" "}
              <em className="font-light italic text-[var(--amelia-purple)]">
                escolhidos com rigor.
              </em>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="shrink-0">
            <motion.a
              href="#contato"
              className="inline-flex items-center rounded-full border border-[var(--amelia-ink)]/15 bg-white/35 px-6 py-3 font-sans text-sm font-normal text-[var(--amelia-ink)] shadow-[0_4px_24px_rgba(94,73,133,0.06)] backdrop-blur-md transition-colors duration-200 hover:border-[rgba(123,107,178,0.45)] hover:bg-white/55 hover:text-[var(--amelia-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--amelia-purple)]"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ duration: 0.22 }}
            >
              Conte com mais de 30 especialidades
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bento: 12 colunas — destaques em faixa dupla */}
        <motion.div
          variants={staggerContainer(0.09, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5"
        >
          {specialties.map((sp) => {
            const isHero = sp.variant === "hero";
            const colClass = isHero ? "lg:col-span-6" : "lg:col-span-3";

            return (
              <motion.article
                key={sp.name}
                variants={fadeUp}
                className={`group relative flex min-h-0 ${colClass} ${
                  isHero
                    ? "flex-col overflow-hidden lg:min-h-[280px] lg:flex-row"
                    : "flex-col overflow-hidden lg:min-h-[320px]"
                } ${glassCard} hover:border-white/75 hover:bg-white/30 hover:shadow-[0_16px_56px_rgba(123,107,178,0.12)]`}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { type: "spring", stiffness: 380, damping: 26 },
                      }
                }
              >
                <div
                  className={`relative shrink-0 overflow-hidden bg-[var(--amelia-surface)] ${
                    isHero
                      ? "h-52 sm:h-60 lg:h-auto lg:w-1/2 lg:min-h-[240px]"
                      : "h-52 sm:h-56"
                  }`}
                >
                  <Image
                    src={sp.photo}
                    alt={`Especialista em ${sp.name}`}
                    fill
                    sizes={
                      isHero
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.35)] via-transparent to-transparent opacity-80 lg:opacity-100 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[rgba(255,255,255,0.08)]"
                    aria-hidden
                  />
                </div>

                <div
                  className={`flex flex-1 flex-col justify-end border-t border-white/35 bg-gradient-to-br from-white/35 to-white/5 p-5 backdrop-blur-md sm:p-6 ${
                    isHero ? "lg:justify-center lg:border-l lg:border-t-0 lg:from-white/25 lg:to-white/[0.07]" : ""
                  }`}
                >
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--amelia-purple)]/90">
                    Especialidade
                  </p>
                  <h3 className="font-display mt-1 text-xl font-normal tracking-tight text-[var(--amelia-ink)] sm:text-[1.35rem]">
                    {sp.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm font-light leading-relaxed text-[var(--amelia-muted)]">
                    {sp.cred}
                  </p>
                  <div
                    className="mt-4 h-px w-12 bg-gradient-to-r from-[var(--amelia-purple)]/50 to-transparent"
                    aria-hidden
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
