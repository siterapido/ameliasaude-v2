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
      className="flex flex-col justify-center bg-[linear-gradient(180deg,#faf8fc_0%,#f3f0f8_50%,#faf8fc_100%)]"
      style={{ padding: "clamp(4.5rem, 9vh, 6.5rem) clamp(1.5rem, 5vw, 5rem)" }}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <motion.div
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-5 inline-flex rounded-full border border-[var(--amelia-line)] bg-white/80 px-4 py-2 font-sans text-[11px] font-normal uppercase tracking-[0.22em] text-[var(--amelia-purple)] shadow-sm backdrop-blur-sm"
          >
            Planos de saúde feitos para você
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-[22ch] font-display font-normal tracking-tight text-[var(--amelia-ink)]"
            style={{
              fontSize: "clamp(2.15rem, 4.8vw, 3.15rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Saúde de verdade, sem complicação
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-12 max-w-2xl font-sans font-light uppercase leading-relaxed tracking-[0.12em] text-[var(--amelia-deep)]"
            style={{ fontSize: "clamp(0.78rem, 1.15vw, 0.9rem)" }}
          >
            A melhor experiência em planos de saúde.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.07, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-14 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {items.map(({ Icon, title, body }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-[var(--amelia-line)] bg-white p-7 shadow-[0_1px_0_rgba(123,107,178,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-24px_rgba(94,73,133,0.35)]"
            >
              <div className="mb-5 text-[var(--amelia-ink)]">
                <Icon className="shrink-0" />
              </div>
              <h3 className="font-display text-base font-normal uppercase tracking-[0.08em] text-[var(--amelia-ink)]">
                {title}
              </h3>
              <p className="mt-3 font-sans text-sm font-light uppercase leading-relaxed tracking-[0.06em] text-[#5c5c5c]">
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
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center justify-center rounded-2xl bg-[var(--amelia-ink)] px-10 py-4 font-sans text-sm font-normal uppercase tracking-[0.18em] text-white shadow-md transition-colors hover:bg-[var(--amelia-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--amelia-purple)]"
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
