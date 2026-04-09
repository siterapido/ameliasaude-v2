"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/motion";

/* Cards de especialidades — layout horizontal igual à Alice */
const specialties = [
  {
    name: "Cardiologista",
    cred: "Atendimento presencial e digital",
    color: "rgba(123,107,178,0.08)",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=480&fit=crop&crop=faces",
  },
  {
    name: "Ginecologista",
    cred: "Rede credenciada Rio de Janeiro",
    color: "rgba(94,73,133,0.06)",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=480&fit=crop&crop=faces",
  },
  {
    name: "Pediatra",
    cred: "Urgência e emergência 24h",
    color: "rgba(196,181,232,0.18)",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=480&fit=crop&crop=faces",
  },
  {
    name: "Dermatologista",
    cred: "Telemedicina disponível",
    color: "rgba(123,107,178,0.06)",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=480&fit=crop&crop=faces",
  },
  {
    name: "Ortopedista",
    cred: "Centros especializados RJ",
    color: "rgba(94,73,133,0.05)",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=480&fit=crop&crop=faces",
  },
  {
    name: "Psiquiatra",
    cred: "Suporte emocional completo",
    color: "rgba(196,181,232,0.14)",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=480&fit=crop&crop=faces",
  },
];

export function Specialists() {
  return (
    <section id="especialistas-grid" className="bg-white overflow-hidden"
      style={{ padding: "clamp(5rem,10vh,7rem) 0" }}>

      {/* Header — centered, exato como na Alice */}
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden" whileInView="visible" viewport={viewportConfig}
        className="text-center mb-12 px-6"
      >
        <motion.p variants={fadeUp}
          className="font-sans text-[11px] font-normal tracking-[0.24em] uppercase text-[#7b6bb2] mb-4">
          Especialistas
        </motion.p>
        <motion.h2 variants={fadeUp}
          className="font-display font-normal text-[#1a1a1a] mb-5"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.07, letterSpacing: "-0.02em", maxWidth: 680, margin: "0 auto 1.25rem" }}>
          Conecte-se aos melhores especialistas,{" "}
          <em className="italic font-light text-[#7b6bb2]">escolhidos com rigor.</em>
        </motion.h2>

        <motion.div variants={fadeUp}>
          <motion.a href="#contato"
            className="inline-flex items-center font-sans text-sm font-normal rounded-full"
            style={{ border: "1.5px solid #1a1a1a", color: "#1a1a1a", padding: "0.6rem 1.5rem" }}
            whileHover={{ borderColor: "#7b6bb2", color: "#7b6bb2", scale: 1.02 }}
            transition={{ duration: 0.2 }}>
            Conte com mais de 30 especialidades
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Cards horizontais — rolagem natural, sem scroll forced */}
      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden" whileInView="visible" viewport={viewportConfig}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0"
        style={{ paddingLeft: "clamp(1.5rem,5vw,5rem)", paddingRight: "clamp(1.5rem,5vw,5rem)" }}
      >
        {specialties.map((sp) => (
          <motion.article
            key={sp.name}
            variants={fadeUp}
            className="flex flex-col overflow-hidden rounded-3xl"
            style={{ background: sp.color, margin: "0 4px" }}
            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 25 } }}
          >
            <div className="relative overflow-hidden" style={{ borderRadius: "1.5rem 1.5rem 0 0", height: 200 }}>
              <Image
                src={sp.photo}
                alt={`Especialista em ${sp.name}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="font-sans font-normal text-[#1a1a1a] text-sm leading-tight mb-1">{sp.name}</h3>
              <p className="font-sans font-light text-[#9a9a9a] text-xs leading-relaxed">{sp.cred}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
