"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";

/* Seção escura #5E4985 com 2 cards brancos — CÓPIA EXATA do layout da Alice */
const features = [
  {
    eyebrow: "Atendimento 24h",
    title: "Ponto de contato único para sua saúde",
    desc: "Atuamos como canal centralizado para auxiliá-lo em casos de urgência e emergência, com atendimento ágil e personalizado.",
    cta: "Fale com um especialista agora",
    visual: (
      <div className="relative rounded-2xl overflow-hidden" style={{ background: "#f8f7ff", minHeight: 200, marginTop: 24 }}>
        {/* Mock de chat UI */}
        <div className="p-5 flex flex-col gap-3">
          {[
            { msg: "Olá! Como posso ajudá-la?", me: false },
            { msg: "Preciso de orientação médica urgente.", me: true },
            { msg: "Entendido. Vou conectá-la agora com um especialista.", me: false },
          ].map((m, i) => (
            <motion.div key={i}
              className={`flex ${m.me ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, x: m.me ? 10 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.15 }}>
              <div className="max-w-[75%] rounded-2xl px-3.5 py-2.5 text-xs font-sans leading-relaxed"
                style={{
                  background: m.me ? "#7b6bb2" : "white",
                  color: m.me ? "white" : "#1a1a1a",
                  border: m.me ? "none" : "1px solid rgba(123,107,178,0.12)",
                  borderRadius: m.me ? "1rem 1rem 0.25rem 1rem" : "1rem 1rem 1rem 0.25rem",
                }}>
                {m.msg}
              </div>
            </motion.div>
          ))}
          {/* Typing indicator */}
          <div className="flex items-center gap-1 pl-1">
            {[0, 0.15, 0.3].map(d => (
              <motion.div key={d}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: d }}
                className="w-1.5 h-1.5 rounded-full" style={{ background: "#7b6bb2" }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Coletivo por adesão",
    title: "Contratação via entidades de classe",
    desc: "A adesão é feita por sindicatos, conselhos regionais e associações profissionais — canais oficiais que reúnem a categoria e viabilizam o benefício para filiados.",
    cta: "Quero informações sobre adesão",
    visual: (
      <div className="relative rounded-2xl overflow-hidden" style={{ background: "#f8f7ff", minHeight: 200, marginTop: 24 }}>
        <div className="p-5 flex flex-col gap-4">
          {[
            { label: "Sindicatos", range: "Categoria profissional", filled: true },
            { label: "Conselhos de classe", range: "Registro profissional", filled: true },
            { label: "Associações", range: "Representação da classe", filled: true },
          ].map((r, i) => (
            <motion.div key={r.label}
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{
                background: r.filled ? "rgba(123,107,178,0.1)" : "white",
                border: `1px solid ${r.filled ? "rgba(123,107,178,0.25)" : "rgba(123,107,178,0.08)"}`,
              }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12 }}>
              <div>
                <p className="font-sans text-xs font-medium text-[#1a1a1a]">{r.label}</p>
                <p className="font-sans text-[10px] text-[#9a9a9a]">{r.range}</p>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center`}
                style={{ background: r.filled ? "#7b6bb2" : "rgba(123,107,178,0.1)" }}>
                {r.filled && (
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5l2 2L7 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
];

export function Collective() {
  return (
    <section id="adesao"
      className="relative overflow-hidden"
      style={{ background: "#5e4985", padding: "clamp(5rem,10vh,7rem) clamp(1.5rem,5vw,5rem)" }}>

      {/* Background rings — como a Alice tem elementos decorativos */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{
          width: "clamp(400px,60vw,800px)", height: "clamp(400px,60vw,800px)",
          top: "-30%", right: "-15%",
          border: "1px solid rgba(255,255,255,0.05)",
        }} />
        <div className="absolute rounded-full" style={{
          width: "clamp(250px,35vw,500px)", height: "clamp(250px,35vw,500px)",
          bottom: "-20%", left: "-10%",
          border: "1px solid rgba(255,255,255,0.05)",
        }} />
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div variants={staggerContainer(0.1, 0)} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="text-center mb-12">
          <motion.p variants={fadeUp}
            className="font-sans text-[11px] font-medium tracking-[0.24em] uppercase text-white/50 mb-4">
            Operadora de planos por adesão
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-display font-semibold text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.07, letterSpacing: "-0.02em" }}>
            Acesso ao plano pela
            <br />
            <em className="italic font-light" style={{ color: "rgba(255,255,255,0.6)" }}>
              sua entidade.
            </em>
          </motion.h2>
        </motion.div>

        {/* 2 cards brancos — exato como Alice */}
        <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f) => (
            <motion.div key={f.eyebrow} variants={fadeUp}
              className="rounded-3xl p-8 flex flex-col"
              style={{ background: "rgba(255,255,255,0.94)", backdropFilter: "blur(12px)" }}>
              <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7b6bb2] mb-3">
                {f.eyebrow}
              </span>
              <h3 className="font-display font-semibold text-[#1a1a1a] mb-2"
                style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                {f.title}
              </h3>
              <p className="font-sans font-light text-[#6b6b6b] text-sm leading-relaxed">{f.desc}</p>
              {f.visual}
              <motion.a href="#contato"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#7b6bb2] mt-6"
                whileHover={{ gap: "10px" }}
                transition={{ duration: 0.2 }}>
                {f.cta}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
