"use client";

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";

/* ─── Decorative Elements ─── */

function FloatingShape({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function CirclePattern({ className }: { className?: string }) {
  return (
    <svg className={`absolute pointer-events-none opacity-[0.03] ${className}`} viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

/* ─── Icons ─── */

function IconMissao({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 14v10l6 6" />
      <path d="M14 24h4" />
      <path d="M30 24h4" />
      <circle cx="24" cy="24" r="3" />
    </svg>
  );
}

function IconVisao({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 24s8-14 20-14 20 14 20 14-8 14-20 14S4 24 4 24z" />
      <circle cx="24" cy="24" r="7" />
      <path d="M24 20v4l2 2" />
    </svg>
  );
}

function IconValores({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4l4.5 9.5L39 15l-7.5 7.5L33 36l-9-5.5-9 5.5 1.5-13.5L9 15l10.5-1.5L24 4z" />
    </svg>
  );
}

type PillarIcon = typeof IconMissao;

const pillars: Array<{
  Icon: PillarIcon;
  num: string;
  title: string;
  hook: string;
  body: string;
}> = [
  {
    Icon: IconMissao,
    num: "01",
    title: "Missão",
    hook: "Cuidado com propósito, gestão responsável.",
    body: "Oferecer assistência médico-hospitalar de excelência, combinando inovação tecnológica, atendimento humanizado e gestão responsável para promover saúde e qualidade de vida a cada beneficiário.",
  },
  {
    Icon: IconVisao,
    num: "02",
    title: "Visão",
    hook: "Referência no RJ até 2030.",
    body: "Ser referência em saúde suplementar no Rio de Janeiro até 2030, reconhecida pela eficiência operacional, cuidado humanizado e uso inteligente de dados para transformar o modo como as pessoas cuidam da própria saúde.",
  },
  {
    Icon: IconValores,
    num: "03",
    title: "Valores",
    hook: "O que norteia cada decisão.",
    body: "A Amélia Saúde é guiada pela empatia, pela inovação com propósito e pela transparência em cada relação. Valorizamos o cuidado humano aliado à tecnologia, a excelência em cada atendimento e a sustentabilidade como compromisso com o futuro da saúde.",
  },
];

export default function QuemSomosPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      <Navigation />

      <main id="main-content" className="min-h-0 flex-1">
        
        {/* ════════════════════════════════════════
            HERO — Fullscreen Immersive
        ════════════════════════════════════════ */}
        <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-[var(--amelia-deep)]">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/familia-pexels.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--amelia-deep)]/80 via-[var(--amelia-deep)]/90 to-[var(--amelia-deep)]" />
          </div>

          {/* Animated Background Elements */}
          <FloatingShape 
            className="top-[15%] left-[10%] w-32 h-32 rounded-full bg-[rgba(123,109,178,0.15)] blur-xl" 
            delay={0} 
          />
          <FloatingShape 
            className="top-[25%] right-[15%] w-48 h-48 rounded-full bg-[rgba(201,188,240,0.08)] blur-2xl" 
            delay={2} 
          />
          <FloatingShape 
            className="bottom-[20%] left-[20%] w-24 h-24 rounded-full bg-[rgba(123,109,178,0.12)] blur-xl" 
            delay={4} 
          />

          {/* Large Decorative Circles */}
          <CirclePattern className="top-[-10%] right-[-10%] w-[500px] h-[500px] text-white" />
          <CirclePattern className="bottom-[-15%] left-[-15%] w-[400px] h-[400px] text-white" />

          {/* Diagonal Lines Decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent transform -skew-x-12" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent transform -skew-x-12" />
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent transform -skew-x-12" />
          </div>

          {/* Center Content */}
          <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)] py-32">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              {/* Top Label */}
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9bcf0] animate-pulse" />
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c9bcf0]">
                    Conheça a Amélia
                  </span>
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                variants={fadeUp}
                className="font-display text-[clamp(3rem,10vw,7rem)] font-normal leading-[0.95] tracking-wide text-white max-w-5xl"
              >
                saúde completa com tecnologia inteligente e cuidado humanizado
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-2xl font-sans text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-white/70"
              >
                A Amélia Saúde nasce para transformar o cuidado com a saúde no Rio de Janeiro. 
                Um projeto construído por profissionais com anos de experiência, unidos pelo 
                propósito de criar uma operadora moderna, transparente e centrada nas pessoas.
              </motion.p>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Role para explorar
                  </span>
                  <div className="h-10 w-6 rounded-full border border-white/20 p-1">
                    <motion.div
                      animate={{ y: [0, 16, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="h-2 w-full rounded-full bg-white/40"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 2 — Mission, Vision, Values
        ════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <CirclePattern className="-top-28 right-[-8%] h-[420px] w-[420px] text-[var(--amelia-purple)]" />
            <div
              className="absolute -left-40 top-1/2 h-[min(480px,50vh)] w-[min(480px,50vh)] -translate-y-1/2 rounded-full bg-[var(--amelia-purple)]/[0.07] blur-3xl"
            />
            <div
              className="absolute bottom-[-20%] right-[-15%] h-[min(420px,45vh)] w-[min(420px,45vh)] rounded-full bg-[var(--amelia-deep)]/[0.06] blur-3xl"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)] py-[clamp(4rem,10vh,8rem)]">
            {/* Section Header */}
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
            >
              <motion.span
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--amelia-purple)]/25 bg-[var(--amelia-purple)]/[0.07] px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--amelia-purple)]"
              >
                <span className="size-2 rounded-full bg-[var(--amelia-purple)]" />
                Nossos pilares
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal leading-[1.02] tracking-wide text-[var(--amelia-ink)]"
              >
                Missão,{" "}
                <span
                  className="font-display bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundImage:
                      "linear-gradient(108deg, var(--amelia-purple) 0%, var(--amelia-deep) 48%, var(--amelia-lilac) 92%)",
                  }}
                >
                  Visão &
                </span>{" "}
                Valores
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 font-sans text-[clamp(0.95rem,1.35vw,1.1rem)] leading-relaxed text-[var(--amelia-muted)]"
              >
                O que nos define como operadora: propósito claro para hoje, horizonte de longo prazo e princípios que guiam cada
                atendimento.
              </motion.p>
            </motion.div>

            <motion.ul
              variants={staggerContainer(0.12, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
              role="list"
            >
              {pillars.map(({ Icon, num, title, hook, body }) => (
                <motion.li key={title} variants={fadeUp} className="relative min-h-0">
                  <article
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/20 bg-[var(--amelia-purple)] p-8 text-white shadow-[0_24px_50px_-30px_rgba(62,45,103,0.45)] outline outline-1 outline-white/15 transition-[transform,box-shadow,border-color] duration-300 lg:p-10 motion-safe:md:hover:-translate-y-1 motion-safe:md:hover:border-white/35 motion-safe:md:hover:shadow-[0_32px_58px_-28px_rgba(62,45,103,0.5)]"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[inherit]"
                      style={{
                        background:
                          "linear-gradient(165deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 40%, rgba(15,10,35,.12) 100%)",
                      }}
                    />

                    <div className="relative z-[1] flex flex-1 flex-col">
                      <div className="mb-8 flex items-start justify-between gap-6">
                        <div
                          aria-hidden
                          className="flex size-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-[2px]"
                        >
                          <Icon className="size-7 shrink-0 stroke-[1.6]" />
                        </div>
                        <span className="font-display text-[3.75rem] font-light leading-none text-white/25 transition-colors duration-300 group-hover:text-white/40 md:text-[4.25rem]">
                          {num}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="font-display text-[clamp(1.75rem,3.2vw,2.125rem)] font-normal tracking-wide text-white">
                          {title}
                        </h3>
                        <p className="font-sans text-sm font-semibold leading-snug text-white/95">{hook}</p>
                      </div>

                      <div
                        className="mt-8 h-px w-full shrink-0 bg-white/22"
                        style={{
                          maskImage:
                            "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
                          WebkitMaskImage:
                            "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
                        }}
                        aria-hidden
                      />

                      <p className="mt-6 font-sans text-[15px] leading-relaxed text-white/90">{body}</p>
                    </div>
                  </article>
                </motion.li>
              ))}
            </motion.ul>

            {/* Bottom Logo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mt-16 flex justify-center"
            >
              <Image
                src="/logo-amelia-site.png"
                alt="Amélia Saúde"
                width={160}
                height={45}
                className="h-10 w-auto object-contain opacity-[0.32]"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
