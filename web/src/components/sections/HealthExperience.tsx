"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";

function IconCover({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l7 4v5c0 5-3 9-7 10-4-1-7-5-7-10V7l7-4z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M12 8v5M9.5 11.5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconPrice({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 7h12M9 17h12M14 21h-4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="7" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="17" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function IconSpeed({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.35" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconAdhesion({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 21v-2a4 4 0 014-4h1a5 5 0 015-5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="9" cy="7.5" r="3.2" stroke="currentColor" strokeWidth="1.35" />
      <path d="M19 21v-3M17 19.5h4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconSme({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 21V9h8v12M6 21h12M11 21v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 9h16M6 9V7h3v2M13 9V6h5v3" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    </svg>
  );
}

function IconCorporate({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 21V8h9v13M13 21V11h7v10M9 21v-4h2M17 21v-3"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 11h2M7 14h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const items: {
  Icon: (p: { className?: string }) => ReactNode;
  title: string;
  body: string;
}[] = [
  {
    Icon: IconCover,
    title: "Ampla cobertura",
    body: "Planos com cobertura total para consultas, exames, internações e cirurgias.",
  },
  {
    Icon: IconPrice,
    title: "Preços competitivos",
    body: "O melhor custo benefício do mercado, com preços que cabem no seu orçamento.",
  },
  {
    Icon: IconSpeed,
    title: "Atendimento ágil",
    body: "Eficiente, resolutivo e sem burocracias, com foco total na sua saúde.",
  },
  {
    Icon: IconAdhesion,
    title: "Coletivo por adesão",
    body: "A filiação a sindicatos e entidades de classe viabiliza planos completos para você e sua família.",
  },
  {
    Icon: IconSme,
    title: "Plano empresarial",
    body: "Proteja sua equipe com os melhores planos a partir de 2 beneficiários.",
  },
  {
    Icon: IconCorporate,
    title: "Planos corporativos",
    body: "Planos para empresas de médio e grande porte em condições diferenciadas a partir de 100 beneficiários.",
  },
];

export function HealthExperience() {
  return (
    <section
      id="experiencia-planos"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ padding: "clamp(5.25rem, 11vh, 8.5rem) clamp(1.5rem, 5vw, 5rem)" }}
    >
      {/* Fundo premium — profundidade na paleta ameixa */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(168deg,#241835_0%,#3d2d58_32%,var(--amelia-deep)_58%,#5c4a82_88%,#6b5a92_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_55%_at_50%_-8%,rgba(183,162,236,0.38),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_100%_100%,rgba(123,107,178,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[30%] top-[40%] h-[min(90vw,640px)] w-[min(90vw,640px)] rounded-full bg-[var(--amelia-purple)]/20 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[25%] bottom-[-10%] h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-[#8f7fce]/18 blur-[110px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1140px]">
        <motion.div
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex rounded-full border border-white/18 bg-white/[0.07] px-5 py-2.5 font-sans text-[11px] font-normal tracking-[0.1em] text-white/92 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          >
            Planos de saúde feitos para você
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-[20ch] font-display font-normal tracking-tight text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.35rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
            }}
          >
            Saúde de verdade, sem complicação
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl font-sans font-light leading-relaxed tracking-[0.06em] text-[#e4dcf5]"
            style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.9375rem)" }}
          >
            A melhor experiência em planos de saúde.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.07, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {items.map(({ Icon, title, body }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="flex flex-col rounded-[1.35rem] border border-white/[0.13] bg-white/[0.06] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_14px_48px_-18px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-white/[0.22] hover:bg-white/[0.1] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_22px_56px_-20px_rgba(0,0,0,0.45)]"
            >
              <div className="mb-6 text-[#d8cef0]">
                <Icon className="shrink-0 opacity-95" />
              </div>
              <h3 className="font-display text-base font-normal tracking-[0.02em] text-white">
                {title}
              </h3>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed tracking-normal text-white/68">
                {body}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center justify-center rounded-2xl border border-white/[0.22] bg-white px-11 py-4 font-sans text-sm font-medium tracking-[0.05em] text-[var(--amelia-deep)] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] transition-[background-color,box-shadow,color] hover:bg-[#f7f5fc] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Fazer orçamento.
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
