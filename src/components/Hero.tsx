"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AVATAR_SRC = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=face",
];

function scrollToId(id: string) {
  document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 70%), linear-gradient(180deg, #0a0a0f 0%, #0d0d14 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--gold) 0px, var(--gold) 1px, transparent 1px, transparent 80px)",
          }}
        />

        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-16"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Planos de saúde
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-[1.02] mb-8"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.25rem)",
              color: "var(--cream)",
            }}
          >
            SUA SAÚDE EM{" "}
            <span className="text-gold-gradient italic">NOSSOS PLANOS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
            style={{ color: "var(--muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Melhor plano de saúde para você, sua família e sua empresa, com um time
            sempre pronto para lhe atender com agilidade, transparência e segurança.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#area-do-cliente"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("area-do-cliente");
              }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-sm tracking-[0.2em] uppercase border transition-all duration-300"
              style={{
                borderColor: "rgba(245, 240, 232, 0.2)",
                color: "var(--muted)",
                fontFamily: "var(--font-body)",
              }}
              whileHover={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Já sou cliente
            </motion.a>

            <motion.a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contato");
              }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300"
              style={{
                background: "var(--gold)",
                color: "#0a0a0f",
                fontFamily: "var(--font-body)",
              }}
              whileHover={{ scale: 1.02, backgroundColor: "var(--gold-light)" }}
              whileTap={{ scale: 0.98 }}
            >
              Fazer orçamento
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6"
            aria-label="Mais de 2.500 famílias protegidas"
          >
            <div className="flex -space-x-3" aria-hidden="true">
              {AVATAR_SRC.map((src, i) => (
                <div
                  key={src}
                  className="relative h-12 w-12 shrink-0 rounded-full border-2 border-[#0a0a0f] overflow-hidden bg-[var(--surface-2)]"
                  style={{ zIndex: AVATAR_SRC.length - i }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <p
              className="text-sm md:text-base tracking-wide"
              style={{ color: "var(--cream)", fontFamily: "var(--font-body)" }}
            >
              <span className="text-gold-gradient font-display text-lg md:text-xl font-medium not-italic">
                +2.500
              </span>{" "}
              famílias protegidas
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="text-[10px] tracking-[0.35em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          Role
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
