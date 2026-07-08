"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { ChainLink } from "./ChainMotif";
import { whatsappLink } from "@/lib/config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 2.0 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Tech grid background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-chain-blue/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[5%] top-[30%] h-[380px] w-[380px] rounded-full bg-chain-violet/15 blur-[120px]" />

      {/* Digital lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[18, 42, 68, 84].map((top, i) => (
          <motion.div
            key={top}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-chain-blue/40 to-transparent"
            style={{ top: `${top}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 2.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-pad relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5"
        >
          <ChainLink size={14} className="text-chain-cyan" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            IA · RPA · Low Code
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          Transformamos processos manuais em{" "}
          <span className="bg-gradient-to-r from-chain-blue via-chain-cyan to-chain-violet bg-clip-text text-transparent">
            inteligência digital
          </span>
          .
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-balance font-body text-base leading-relaxed text-muted sm:text-lg"
        >
          Automações inteligentes utilizando IA, RPA e tecnologias Low Code
          para acelerar empresas que não podem se dar ao luxo de operar devagar.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            Solicitar Diagnóstico
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#servicos" className="btn-secondary w-full sm:w-auto">
            <Compass className="h-4 w-4" aria-hidden="true" />
            Conhecer Soluções
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-9 w-5 rounded-full border border-line-soft p-1">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-chain-blue"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
