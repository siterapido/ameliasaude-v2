"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeUp,
  fadeUpFast,
  scaleUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/motion";

const footerLinks = [
  { label: "Planos", href: "#planos" },
  { label: "Rede", href: "#rede" },
  { label: "Especialistas", href: "#especialistas-grid" },
  { label: "Telemedicina", href: "#telemedicina" },
  { label: "Adesão", href: "#adesao" },
  { label: "Contato", href: "#contato" },
];

const linkClass =
  "font-sans text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5e4985] rounded-sm";

export function Footer() {
  return (
    <footer
      className="relative mt-auto overflow-hidden bg-[#5e4985]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Rodapé — Amélia Saúde
      </h2>

      <div
        className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,5rem)] pt-[clamp(2.5rem,6vh,4rem)] pb-[clamp(1.75rem,3vh,2.75rem)]"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <motion.nav
            variants={staggerContainer(0.06, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col items-start gap-3 sm:gap-3.5"
            aria-label="Links do site"
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={fadeUpFast}
                className={linkClass}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="w-full shrink-0 lg:w-auto lg:max-w-[min(26vw,240px)]"
          >
            <a
              href="#hero"
              className="group ml-auto block w-[min(44vw,210px)] max-w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5e4985] lg:ml-0 lg:w-full"
              aria-label="Amélia Saúde — voltar ao início"
            >
              <Image
                src="/logo-amelia-site-branca.png"
                alt=""
                width={1840}
                height={515}
                sizes="(max-width: 1024px) 44vw, 240px"
                className="h-auto w-full object-contain opacity-[0.98] transition-[opacity,transform] duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
                priority={false}
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 border-t border-white/15 pt-8"
        >
          <div className="flex max-w-3xl flex-col gap-2 text-left font-sans text-xs leading-relaxed tracking-wide text-white/55">
            <p>Copyright © 2026 - Todos os direitos reservados.</p>
            <p>
              Amelia Operadora de Planos de Saude S.a. CNPJ: 57.395.677/0001-93
            </p>
            <p>ANS Número 424277</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
