"use client";

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/motion";

function AnsBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[rgba(123,107,178,0.2)] bg-[rgba(123,107,178,0.06)] px-3 py-1.5 backdrop-blur-sm">
      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--amelia-purple)]">
        ANS nº 424277
      </span>
    </div>
  );
}

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

export default function QuemSomosPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      <Navigation />

      <main id="main-content" className="min-h-0 flex-1">
        {/* ─── Hero / Intro ─── */}
        <section className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)]">
            <motion.div
              variants={staggerContainer(0.08, 0)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              {/* Logo */}
              <motion.div variants={fadeUp} className="mb-8">
                <Image
                  src="/logo-amelia-site.png"
                  alt="Amélia Saúde"
                  width={200}
                  height={56}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-wide text-[var(--amelia-purple)] max-w-3xl"
              >
                Saúde Completa com Tecnologia e Cuidado Humano
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl font-sans text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-gray-600"
              >
                A Amélia Saúde nasce para transformar o cuidado com a saúde no Rio de Janeiro. 
                Um projeto construído por profissionais com anos de experiência no mercado de 
                planos de saúde, unidos pelo propósito de criar uma operadora moderna, 
                transparente e centrada nas pessoas.
              </motion.p>

              {/* ANS Badge */}
              <motion.div variants={fadeUp} className="mt-10">
                <AnsBadge />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── Quem Somos (purple with diagonal) ─── */}
        <section className="relative overflow-hidden bg-[var(--amelia-deep)]">
          {/* Diagonal background shape */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
          >
            <div
              className="absolute top-0 right-0 w-full h-full"
              style={{
                background: "linear-gradient(135deg, transparent 50%, rgba(123,107,178,0.25) 50%)",
              }}
            />
          </div>

          {/* Decorative radial glows */}
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

          <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)] py-[clamp(3rem,8vh,6rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text content */}
              <motion.div
                variants={staggerContainer(0.1, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="flex flex-col gap-6"
              >
                <motion.div variants={fadeUp}>
                  <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c9bcf0] mb-3">
                    Sobre nós
                  </span>
                  <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-wide text-white">
                    Quem Somos
                  </h2>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="font-sans text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-white/85 max-w-lg"
                >
                  Somos uma operadora que une tecnologia inteligente e atendimento humanizado. 
                  Acreditamos que cuidar vai além de tratar: é acompanhar, orientar e estar 
                  presente em cada momento da vida dos nossos beneficiários.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-2">
                  <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/8 px-3 py-1.5 backdrop-blur-sm">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                      ANS nº 424277
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="relative"
              >
                <div className="relative aspect-[4/3] lg:aspect-[4/3] overflow-hidden rounded-2xl">
                  {/* Diagonal clip for the image container */}
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <Image
                      src="/hero-nova-2.png"
                      alt="Mulher sorrindo representando o cuidado humanizado da Amélia Saúde"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Purple overlay for cohesion */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(94,73,133,0.3) 0%, transparent 60%)",
                      }}
                    />
                  </div>
                </div>

                {/* Logo watermark */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                  <Image
                    src="/logo-amelia-site-branca.png"
                    alt=""
                    width={120}
                    height={34}
                    className="h-8 w-auto object-contain opacity-60"
                    aria-hidden
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Missão, Visão, Valores ─── */}
        <section className="relative bg-[var(--amelia-deep)] pb-[clamp(3rem,8vh,6rem)]">
          {/* Top divider line */}
          <div className="mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)]">
            <div className="border-t border-white/10 mb-[clamp(3rem,8vh,6rem)]" />
          </div>

          <div className="mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)]">
            <motion.div
              variants={staggerContainer(0.12, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {/* Missão */}
              <motion.div
                variants={fadeUp}
                className="group flex flex-col items-center text-center rounded-2xl bg-white p-8 lg:p-10 shadow-xl shadow-black/5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(123,107,178,0.08)] text-[var(--amelia-purple)] transition-colors duration-300 group-hover:bg-[var(--amelia-purple)] group-hover:text-white">
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
                className="group flex flex-col items-center text-center rounded-2xl bg-white p-8 lg:p-10 shadow-xl shadow-black/5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(123,107,178,0.08)] text-[var(--amelia-purple)] transition-colors duration-300 group-hover:bg-[var(--amelia-purple)] group-hover:text-white">
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
                className="group flex flex-col items-center text-center rounded-2xl bg-white p-8 lg:p-10 shadow-xl shadow-black/5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(123,107,178,0.08)] text-[var(--amelia-purple)] transition-colors duration-300 group-hover:bg-[var(--amelia-purple)] group-hover:text-white">
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
          </div>

          {/* Bottom logo */}
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
              className="h-10 w-auto object-contain opacity-40"
            />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
