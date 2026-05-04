"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 10, 15, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201, 168, 76, 0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className="font-display text-2xl text-gold-gradient tracking-widest uppercase"
              style={{ letterSpacing: "0.18em" }}
            >
              Amélia
            </span>
            <span
              className="text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              Saúde
            </span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm tracking-[0.12em] uppercase transition-colors duration-300 cursor-pointer"
                  style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <motion.button
            onClick={() => handleNavClick("#contato")}
            className="hidden md:flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--font-body)",
            }}
            whileHover={{
              backgroundColor: "var(--gold)",
              color: "#0a0a0f",
            }}
          >
            Agendar Consulta
          </motion.button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-px"
              style={{ background: "var(--gold)" }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-px"
              style={{ background: "var(--gold)" }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-px"
              style={{ background: "var(--gold)" }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(10, 10, 15, 0.98)", backdropFilter: "blur(30px)" }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-display text-3xl"
                    style={{ color: "var(--cream)" }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}
              >
                <button
                  onClick={() => handleNavClick("#contato")}
                  className="mt-4 text-sm tracking-[0.2em] uppercase px-8 py-4 border"
                  style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                >
                  Agendar Consulta
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
