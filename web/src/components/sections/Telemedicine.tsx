"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";
import telemedicinaPhone from "@/assets/telemedicina-1.png";

function Phone() {
  return (
    <div
      className="relative mx-auto w-full max-w-[min(100%,88vw)] lg:max-w-none
        [width:clamp(220px,68vw,400px)] lg:[width:clamp(240px,34vw,420px)]
        xl:[width:clamp(260px,30vw,460px)] lg:justify-self-center xl:justify-self-end
        lg:translate-x-[clamp(0px,2.5vw,2rem)] origin-center">
      <Image
        src={telemedicinaPhone}
        alt="Consulta de telemedicina com Dra. Ana Silva"
        className="w-full h-auto
          drop-shadow-[0_32px_64px_rgba(26,26,26,0.18)]
          lg:drop-shadow-[0_48px_96px_rgba(26,26,26,0.22)]"
        sizes="(max-width: 1024px) 68vw, (max-width: 1280px) 34vw, 460px"
        priority
      />

      {/* Floating chips — posição proporcional ao mockup maior */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-0.35rem] sm:right-[-0.75rem] top-[14%] font-sans text-xs sm:text-[13px] font-normal px-3 py-1.5 rounded-full z-10"
        style={{ background: "white", color: "#5e4985", border: "1px solid rgba(123,107,178,0.15)", boxShadow: "0 6px 20px rgba(94,73,133,0.12)", whiteSpace: "nowrap" }}>
        Disponível 24h
      </motion.div>
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[-0.25rem] sm:left-[-0.65rem] bottom-[22%] font-sans text-xs sm:text-[13px] font-normal px-3 py-1.5 rounded-full z-10"
        style={{ background: "#7b6bb2", color: "white", boxShadow: "0 6px 20px rgba(123,107,178,0.3)", whiteSpace: "nowrap" }}>
        +30 especialidades
      </motion.div>
    </div>
  );
}

const bullets = [
  { title: "Protocolos clínicos por especialidade", desc: "Cada atendimento segue protocolos validados clinicamente." },
  { title: "Prescrição eletrônica completa", desc: "Medicamentos, exames e atestados emitidos digitalmente." },
  { title: "80% resolutividade na 1ª consulta", desc: "A maioria dos casos resolvidos já no primeiro atendimento." },
];

export function Telemedicine() {
  return (
    <section id="telemedicina" className="bg-white overflow-x-clip overflow-y-visible"
      style={{ padding: "clamp(5rem,12vh,8rem) clamp(1.25rem,4vw,4rem)" }}>
      <div className="max-w-[min(100%,1380px)] mx-auto w-full">
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.88fr)]
            gap-12 lg:gap-8 xl:gap-14 items-center lg:items-center
            lg:min-h-[min(56vh,600px)]">

          {/* Mockup — coluna mais larga, sensação imersiva */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="flex justify-center lg:grid lg:place-items-center
              lg:-ml-[clamp(0px,4vw,2.5rem)]">
            <Phone />
          </motion.div>

          {/* Texto — direita, como na Alice */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <motion.p variants={fadeUp}
              className="font-sans text-[11px] font-normal tracking-[0.24em] uppercase text-[#7b6bb2] mb-5">
              Telemedicina
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display font-normal text-[#1a1a1a] mb-4"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.25rem)", lineHeight: 1.07, letterSpacing: "-0.02em" }}>
              Tenha um especialista Amélia disponível{" "}
              <em className="italic font-light text-[#7b6bb2]">a qualquer momento.</em>
            </motion.h2>
            <motion.p variants={fadeUp}
              className="font-sans font-light text-[#6b6b6b] leading-relaxed mb-8"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}>
              Mais de 30 especialidades disponíveis por telemedicina, com praticidade
              e comodidade sem sair de casa.
            </motion.p>

            {/* Bullets com check — igual à Alice */}
            <motion.ul className="flex flex-col gap-5">
              {bullets.map((b, i) => (
                <motion.li key={b.title} variants={fadeUp}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#7b6bb2" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-normal text-[#1a1a1a] text-sm">{b.title}</p>
                    <p className="font-sans font-light text-[#8a8a8a] text-sm leading-relaxed mt-0.5">{b.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
