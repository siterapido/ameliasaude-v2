"use client";

import AnimatedSection from "./AnimatedSection";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--gold) 0px, var(--gold) 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left — portrait placeholder */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div
                className="w-full aspect-[4/5] relative overflow-hidden"
                style={{ background: "var(--surface-2)" }}
              >
                {/* Abstract portrait */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, transparent 60%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(10,10,15,0.8) 0%, transparent 100%)",
                  }}
                />

                {/* Decorative initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display text-[12rem] opacity-[0.06] select-none"
                    style={{ color: "var(--gold)" }}
                  >
                    A
                  </span>
                </div>

                {/* Gold corner ornament */}
                <div
                  className="absolute top-0 left-0 w-16 h-16"
                  style={{
                    borderTop: "2px solid var(--gold)",
                    borderLeft: "2px solid var(--gold)",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-16 h-16"
                  style={{
                    borderBottom: "2px solid var(--gold)",
                    borderRight: "2px solid var(--gold)",
                  }}
                />

                {/* Label */}
                <div className="absolute bottom-8 left-8">
                  <p
                    className="font-display text-2xl"
                    style={{ color: "var(--cream)" }}
                  >
                    Dra. Amélia Costa
                  </p>
                  <p
                    className="text-xs tracking-[0.25em] uppercase mt-1"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                  >
                    Medicina Integrativa
                  </p>
                </div>
              </div>

              {/* Floating credential card */}
              <div
                className="absolute -bottom-6 -right-6 md:-right-8 p-5 w-44"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="font-display text-3xl text-gold-gradient"
                >
                  CRM
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
                >
                  Registrada no
                  <br />
                  CFM Brasil
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — content */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8" style={{ background: "var(--gold)" }} />
              <span
                className="text-xs tracking-[0.4em] uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
              >
                Nossa História
              </span>
            </div>

            <h2
              className="font-display leading-[1.1] mb-8"
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                color: "var(--cream)",
              }}
            >
              Medicina com alma,
              <br />
              <span className="italic text-gold-gradient">ciência com coração.</span>
            </h2>

            <div
              className="space-y-5 text-lg leading-relaxed"
              style={{ color: "var(--muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              <p>
                A Amélia Saúde nasceu da crença de que cada paciente merece mais
                do que um diagnóstico — merece ser compreendido em sua totalidade,
                em corpo, mente e história de vida.
              </p>
              <p>
                Com mais de 15 anos de prática clínica e pós-graduação em medicina
                integrativa, a Dra. Amélia Costa construiu uma clínica onde a
                tecnologia de ponta encontra o cuidado verdadeiramente humano.
              </p>
            </div>

            <div
              className="mt-10 pt-10 grid grid-cols-2 gap-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { label: "Medicina Integrativa", desc: "Abordagem completa e personalizada" },
                { label: "Pós-Graduação", desc: "Hospital das Clínicas — USP" },
                { label: "Telemedicina", desc: "Consultas online disponíveis" },
                { label: "Equipe multidisciplinar", desc: "Mais de 8 especialistas" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "var(--cream)", fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
