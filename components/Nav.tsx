"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ChainLink } from "./ChainMotif";
import { whatsappLink } from "@/lib/config";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#ia", label: "IA" },
  { href: "#cases", label: "Cases" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`section-pad mx-auto flex max-w-7xl items-center justify-between rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong mx-4 md:mx-10 lg:mx-16 xl:mx-24 !px-5 py-2.5" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <ChainLink size={26} className="text-chain-blue" />
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            CodeChain
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[13.5px] text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-5 !py-2.5 text-[13px] sm:inline-flex"
          >
            Solicitar Diagnóstico
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegação móvel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 font-body text-[15px] text-ink transition-colors hover:bg-white/[0.05]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Solicitar Diagnóstico
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
