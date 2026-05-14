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

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ─── Stats Counter Component ─── */

function StatItem({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center"
    >
      <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-normal text-white leading-none">
        {number}
      </span>
      <span className="mt-2 font-sans text-sm text-white/60 tracking-wide">
        {label}
      </span>
    </motion.div>
  );
}

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
            className="top-[15%] left-[10%] w-32 h-32 rounded-full bg-[rgba(123,107,178,0.15)] blur-xl" 
            delay={0} 
          />
          <FloatingShape 
            className="top-[25%] right-[15%] w-48 h-48 rounded-full bg-[rgba(201,188,240,0.08)] blur-2xl" 
            delay={2} 
          />
          <FloatingShape 
            className="bottom-[20%] left-[20%] w-24 h-24 rounded-full bg-[rgba(123,107,178,0.12)] blur-xl" 
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
                Saúde Completa
                <br />
                <span className="text-[#c9bcf0]">com Tecnologia</span>
                <br />
                <em className="font-light italic text-white/80">e Cuidado Humano</em>
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

              {/* ANS Badge */}
              <motion.div variants={fadeUp} className="mt-10">
                <div className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(123,107,178,0.3)]">
                    <IconShield className="h-4 w-4 text-[#c9bcf0]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                      Regulamentada pela
                    </span>
                    <span className="font-sans text-sm font-medium text-white">
                      ANS nº 424277
                    </span>
                  </div>
                </div>
              </motion.div>

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
            SECTION 2 — Who We Are (Fullscreen)
        ════════════════════════════════════════ */}
        <section 
          id="quem-somos" 
          className="relative min-h-svh flex items-center overflow-hidden bg-white"
        >
          
          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            {/* Large gradient blob */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
              style={{ background: "radial-gradient(circle, var(--amelia-purple) 0%, transparent 70%)" }}
            />
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `linear-gradient(var(--amelia-purple) 1px, transparent 1px), linear-gradient(90deg, var(--amelia-purple) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)] py-[clamp(4rem,10vh,8rem)] w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Content */}
              <motion.div
                variants={staggerContainer(0.12, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="flex flex-col gap-8"
              >
                {/* Section Label */}
                <motion.div variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--amelia-purple)]">
                    <span className="h-px w-8 bg-[var(--amelia-purple)]" />
                    Sobre nós
                  </span>
                </motion.div>

                {/* Title */}
                <motion.div variants={fadeUp}>
                  <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.05] tracking-wide text-[var(--amelia-ink)]">
                    Quem
                    <br />
                    <span className="text-[var(--amelia-purple)]">Somos</span>
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={fadeUp}
                  className="font-sans text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-gray-600 max-w-lg"
                >
                  Somos uma operadora que une tecnologia inteligente e atendimento humanizado. 
                  Acreditamos que cuidar vai além de tratar: é acompanhar, orientar e estar 
                  presente em cada momento da vida dos nossos beneficiários.
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-3 gap-6 pt-4"
                >
                  <div className="flex flex-col">
                    <span className="font-display text-3xl text-[var(--amelia-purple)]">24h</span>
                    <span className="mt-1 font-sans text-xs text-gray-500">Atendimento</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-3xl text-[var(--amelia-purple)]">100%</span>
                    <span className="mt-1 font-sans text-xs text-gray-500">Digital</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-3xl text-[var(--amelia-purple)]">RJ</span>
                    <span className="mt-1 font-sans text-xs text-gray-500">Cobertura</span>
                  </div>
                </motion.div>

                {/* Feature Pills */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                  {[
                    { icon: IconHeart, label: "Cuidado humanizado" },
                    { icon: IconShield, label: "Segurança garantida" },
                    { icon: IconUsers, label: "Foco no beneficiário" },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[rgba(123,107,178,0.15)] bg-[rgba(123,107,178,0.04)] px-4 py-2"
                    >
                      <Icon className="h-3.5 w-3.5 text-[var(--amelia-purple)]" />
                      <span className="font-sans text-xs font-medium text-gray-600">{label}</span>
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right — Image with floating cards */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[var(--amelia-purple)]/10">
                  <Image
                    src="/familia-pexels.jpg"
                    alt="Família feliz com plano de saúde Amélia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--amelia-deep)]/30 via-transparent to-transparent" />
                </div>

                {/* Floating Card 1 — Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -top-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl shadow-black/8 p-5 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(123,107,178,0.1)]">
                      <IconHeart className="h-5 w-5 text-[var(--amelia-purple)]" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-gray-800">Humanização</p>
                      <p className="font-sans text-xs text-gray-500">Em primeiro lugar</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 2 — Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl shadow-black/8 p-5 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(123,107,178,0.1)]">
                      <IconShield className="h-5 w-5 text-[var(--amelia-purple)]" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-gray-800">ANS Regulada</p>
                      <p className="font-sans text-xs text-gray-500">Nº 424277</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative element behind image */}
                <div 
                  className="absolute -z-10 top-8 -right-8 w-full h-full rounded-3xl border-2 border-[var(--amelia-purple)]/10"
                  aria-hidden
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 3 — Mission, Vision, Values
        ════════════════════════════════════════ */}
        <section className="relative bg-[var(--amelia-deep)] overflow-hidden">
          
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div
              className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)] py-[clamp(4rem,10vh,8rem)]">
            
            {/* Section Header */}
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-16"
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c9bcf0] mb-4">
                <span className="h-px w-8 bg-[#c9bcf0]" />
                Nossos pilares
                <span className="h-px w-8 bg-[#c9bcf0]" />
              </motion.span>
              <motion.h2 
                variants={fadeUp}
                className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-wide text-white"
              >
                Missão, Visão <span className="text-[#c9bcf0]">&</span> Valores
              </motion.h2>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
              variants={staggerContainer(0.15, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {/* Missão */}
              <motion.div
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center rounded-3xl bg-white p-8 lg:p-10 shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-black/20"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-20 bg-[var(--amelia-purple)] rounded-full opacity-50 group-hover:w-32 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(123,107,178,0.08)] text-[var(--amelia-purple)] transition-all duration-500 group-hover:bg-[var(--amelia-purple)] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                  <IconMissao className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-normal tracking-wide text-[var(--amelia-purple)] mb-4">
                  Missão
                </h3>
                <p className="font-sans text-sm leading-relaxed text-gray-600">
                  Oferecer assistência médico-hospitalar de excelência, combinando inovação 
                  tecnológica, atendimento humanizado e gestão responsável para promover saúde 
                  e qualidade de vida a cada beneficiário.
                </p>
              </motion.div>

              {/* Visão */}
              <motion.div
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center rounded-3xl bg-white p-8 lg:p-10 shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-black/20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-20 bg-[var(--amelia-purple)] rounded-full opacity-50 group-hover:w-32 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(123,107,178,0.08)] text-[var(--amelia-purple)] transition-all duration-500 group-hover:bg-[var(--amelia-purple)] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                  <IconVisao className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-normal tracking-wide text-[var(--amelia-purple)] mb-4">
                  Visão
                </h3>
                <p className="font-sans text-sm leading-relaxed text-gray-600">
                  Ser referência em saúde suplementar no Rio de Janeiro até 2030, reconhecida 
                  pela eficiência operacional, cuidado humanizado e uso inteligente de dados 
                  para transformar o modo como as pessoas cuidam da própria saúde.
                </p>
              </motion.div>

              {/* Valores */}
              <motion.div
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center rounded-3xl bg-white p-8 lg:p-10 shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-black/20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-20 bg-[var(--amelia-purple)] rounded-full opacity-50 group-hover:w-32 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(123,107,178,0.08)] text-[var(--amelia-purple)] transition-all duration-500 group-hover:bg-[var(--amelia-purple)] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                  <IconValores className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-normal tracking-wide text-[var(--amelia-purple)] mb-4">
                  Valores
                </h3>
                <p className="font-sans text-sm leading-relaxed text-gray-600">
                  A Amélia Saúde é guiada pela empatia, pela inovação com propósito e pela 
                  transparência em cada relação. Valorizamos o cuidado humano aliado à tecnologia, 
                  a excelência em cada atendimento e a sustentabilidade como compromisso com o 
                  futuro da saúde.
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom Stats Bar */}
            <motion.div
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
            >
              <StatItem number="2024" label="Fundação" delay={0} />
              <StatItem number="RJ" label="Estado de atuação" delay={0.1} />
              <StatItem number="100%" label="Foco no beneficiário" delay={0.2} />
              <StatItem number="24h" label="Atendimento" delay={0.3} />
            </motion.div>

            {/* Bottom Logo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mt-16 flex justify-center"
            >
              <Image
                src="/logo-amelia-site-branca.png"
                alt="Amélia Saúde"
                width={160}
                height={45}
                className="h-10 w-auto object-contain opacity-30"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
