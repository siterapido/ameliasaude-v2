"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const all = [
  {
    id: "1",
    name: "Mariana Costa",
    handle: "marianacosta",
    role: "Adesão — sindicato",
    text: "Agendei consulta e exame no mesmo dia, sem fila. Entrei pelo sindicato e o plano tem sido exatamente o que precisava.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 48,
    reposts: 12,
  },
  {
    id: "2",
    name: "Ricardo Almeida",
    handle: "ricalmeida",
    role: "Coletivo por adesão",
    text: "Tirei dúvidas sobre filiação e dependentes com um atendimento direto. Sem confusão entre operadora e entidade.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 34,
    reposts: 7,
  },
  {
    id: "3",
    name: "Fernanda Duarte",
    handle: "ferduarte",
    role: "Telemedicina",
    text: "Usei a telemedicina de noite para minha mãe. Médico atencioso, receita digital na hora. Alívio imenso.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 91,
    reposts: 23,
  },
  {
    id: "4",
    name: "Paulo Mendes",
    handle: "paulomendes_rj",
    role: "Rede credenciada",
    text: "Hospital e laboratório perto de casa, sem surpresa na autorização. É exatamente o que prometeram.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 27,
    reposts: 5,
  },
  {
    id: "5",
    name: "Juliana Ribeiro",
    handle: "ju.ribeiro",
    role: "Adesão — entidade de classe",
    text: "Entrei pelo sindicato e o processo foi simples. Atendimento humano quando tirei dúvida sobre carência.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 53,
    reposts: 11,
  },
  {
    id: "6",
    name: "Carla Nunes",
    handle: "carlanunes",
    role: "Titular e dependentes",
    text: "Incluí meus dependentes na adesão e precisei de especialista com urgência: consegui em menos de 24h.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 62,
    reposts: 14,
  },
  {
    id: "7",
    name: "Thiago Fonseca",
    handle: "thiago_fonseca",
    role: "Associação profissional",
    text: "A associação negociou o benefício e a Amélia explicou as regras com clareza. Transparência faz diferença.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 39,
    reposts: 8,
  },
  {
    id: "8",
    name: "Beatriz Lima",
    handle: "beatrizlima",
    role: "Telemedicina",
    text: "Consulta em 15 minutos pelo celular, sem sair de casa. A praticidade faz toda diferença no dia a dia corrido.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 74,
    reposts: 19,
  },
  {
    id: "9",
    name: "André Souza",
    handle: "andresouza_rj",
    role: "Coletivo por adesão",
    text: "Titular e dependentes na mesma rede, com acesso a especialistas de qualidade. Renovamos sem hesitar no segundo ano.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 85,
    reposts: 21,
  },
  {
    id: "10",
    name: "Letícia Moura",
    handle: "leticiamoura",
    role: "Conselho regional",
    text: "Filiada ao conselho profissional, consegui aderir ao plano com condição clara. Recomendo para os colegas.",
    image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 44,
    reposts: 10,
  },
  {
    id: "11",
    name: "Gabriel Torres",
    handle: "gabrieltorres",
    role: "Rede credenciada",
    text: "Exame marcado em dois dias, resultado no app. Zero ligação, zero papel. Isso é evolução.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 58,
    reposts: 16,
  },
  {
    id: "12",
    name: "Patrícia Vaz",
    handle: "patriciaevaz",
    role: "Adesão",
    text: "Já troquei de operadora três vezes. Com a Amélia, parei de procurar. Atendimento e rede são diferenciados.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=96&h=96&fit=crop&crop=faces&q=80",
    likes: 101,
    reposts: 27,
  },
] as const;

/* 2 linhas com depoimentos distintos */
const ROW_1 = [all[0], all[1], all[2], all[3], all[4], all[5]];
const ROW_2 = [all[6], all[7], all[8], all[9], all[10], all[11]];

/* ─── Card individual ─── */
function TweetCard({ t }: { t: (typeof all)[number] }) {
  return (
    <article
      className="mx-3 flex w-[380px] shrink-0 flex-col rounded-2xl border border-[var(--amelia-line)] bg-white p-6 shadow-[0_1px_6px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(123,107,178,0.13)]"
    >
      {/* Header */}
      <header className="mb-3 flex items-start gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--amelia-line)]">
          <Image
            src={t.image}
            alt=""
            width={88}
            height={88}
            className="h-full w-full object-cover"
            sizes="44px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-[15px] font-normal leading-tight text-[#0f1419]">
            {t.name}
          </p>
          <p className="truncate font-sans text-[13px] text-[#536471]">
            @{t.handle}
          </p>
        </div>
        <span
          className="ml-1 mt-0.5 shrink-0 rounded-full px-2.5 py-1 font-sans text-[10px] font-normal uppercase tracking-widest"
          style={{ background: "rgba(123,107,178,0.08)", color: "var(--amelia-purple)" }}
        >
          Amélia
        </span>
      </header>

      {/* Role */}
      <p className="mb-2 font-sans text-[11px] font-normal uppercase tracking-wider text-[var(--amelia-purple)]">
        {t.role}
      </p>

      {/* Texto */}
      <p className="flex-1 font-sans text-[15px] leading-relaxed text-[#3d3d3d]">
        {t.text}
      </p>

      {/* Rodapé */}
      <div className="mt-4 flex items-center gap-5 border-t border-[var(--amelia-line)] pt-3.5">
        <span className="flex items-center gap-1.5 font-sans text-[13px] text-[#536471]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t.likes}
        </span>
        <span className="flex items-center gap-1.5 font-sans text-[13px] text-[#536471]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t.reposts}
        </span>
      </div>
    </article>
  );
}

/* ─── Linha infinita ─── */
function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: readonly (typeof all)[number][];
  direction: "left" | "right";
  duration: number;
}) {
  const [paused, setPaused] = useState(false);
  // triplicar para nunca ver a costura em telas ultra-wide
  const tripled = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Máscaras de fade nas bordas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-40"
        style={{
          background: "linear-gradient(to right, #ffffff 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-40"
        style={{
          background: "linear-gradient(to left, #ffffff 0%, transparent 100%)",
        }}
      />

      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {tripled.map((t, i) => (
          <TweetCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ─── Seção ─── */
export function Testimonials() {
  return (
    <SectionWrapper
      id="depoimentos"
      className="flex flex-col justify-center overflow-hidden bg-white"
      style={{ padding: "clamp(4.5rem, 9vh, 6.5rem) 0" }}
    >
      {/* Cabeçalho com padding lateral */}
      <motion.div
        variants={staggerContainer(0.08, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mb-10 px-[clamp(1.5rem,5vw,5rem)] text-center md:mb-12"
      >
        <motion.p
          variants={fadeUp}
          className="mb-3 font-sans text-[11px] font-normal uppercase tracking-[0.24em] text-[var(--amelia-muted)]"
        >
          Quem usa, recomenda
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-normal tracking-tight text-[var(--amelia-ink)]"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          Depoimentos reais
          <span className="text-[var(--amelia-purple)]">.</span>
        </motion.h2>
      </motion.div>

      {/* 3 linhas de marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <MarqueeRow items={ROW_1} direction="left"  duration={55} />
        <MarqueeRow items={ROW_2} direction="right" duration={65} />
      </motion.div>

      {/* Nota */}
      <p className="mt-8 px-[clamp(1.5rem,5vw,5rem)] text-center font-sans text-[12px] text-[var(--amelia-muted)]">
        Fotos e textos de exemplo. Substitua por depoimentos autorizados quando disponíveis.
      </p>
    </SectionWrapper>
  );
}
