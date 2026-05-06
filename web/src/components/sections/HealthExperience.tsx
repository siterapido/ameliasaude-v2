"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";

import Image from "next/image";

const items: {
  image: string;
  title: string;
  body: string;
}[] = [
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop&q=80",
    title: "Ampla cobertura",
    body: "Planos com cobertura total para consultas, exames, internações e cirurgias.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop&q=80",
    title: "Preços competitivos",
    body: "O melhor custo benefício do mercado, com preços que cabem no seu orçamento.",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop&q=80",
    title: "Atendimento ágil",
    body: "Eficiente, resolutivo e sem burocracias, com foco total na sua saúde.",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop&q=80",
    title: "Planos coletivo por adesão",
    body: "Planos para você e sua família através de sindicatos e entidades de classe com diversas categorias profissionais.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=400&h=250&fit=crop&q=80",
    title: "Plano empresarial",
    body: "Planos para micro e pequenas empresas a partir de 2 beneficiários.",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop&q=80",
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
      <div className="pointer-events-none absolute inset-0 bg-[#7B6BB1]" aria-hidden />

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
            className="w-full font-display font-normal tracking-tight text-white whitespace-normal"
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
          {items.map(({ image, title, body }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="flex flex-col overflow-hidden rounded-[1.35rem] border border-[var(--amelia-line)] bg-white shadow-[0_14px_40px_-20px_rgba(36,24,53,0.18)] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(94,73,133,0.22)] hover:shadow-[0_22px_48px_-18px_rgba(36,24,53,0.22)]"
            >
              <div className="relative h-44 w-full shrink-0 bg-gray-100">
                <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="flex flex-col p-8 flex-1 bg-white relative z-10">
                <h3 className="font-display text-[1.1rem] font-normal tracking-[0.02em] text-[var(--amelia-deep)]">
                  {title}
                </h3>
                <p className="mt-3 font-sans text-[0.95rem] font-light leading-relaxed tracking-normal text-[#5c5470]">
                  {body}
                </p>
              </div>
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
            Fazer orçamento
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
