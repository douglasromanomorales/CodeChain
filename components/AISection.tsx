"use client";

import { motion } from "framer-motion";

const floatCards = [
  { label: "Processamento de Linguagem", pos: "left-[2%] top-[10%]", delay: 0 },
  { label: "Visão Computacional (OCR)", pos: "right-[0%] top-[6%]", delay: 0.6 },
  { label: "Modelos Preditivos", pos: "left-[0%] bottom-[8%]", delay: 1.1 },
  { label: "IA Generativa", pos: "right-[4%] bottom-[4%]", delay: 1.6 },
];

export default function AISection() {
  return (
    <section id="ia" className="section-pad relative overflow-hidden py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chain-violet/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="eyebrow">Inteligência Artificial</span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          O cérebro digital por trás de cada automação.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-[15px] leading-relaxed text-muted">
          Não usamos IA como enfeite. Ela lê documentos, entende contexto,
          toma decisões e aprende com cada execução.
        </p>
      </div>

      <div className="relative mx-auto mt-20 flex h-[380px] max-w-3xl items-center justify-center sm:h-[440px]">
        {/* Digital brain SVG */}
        <motion.svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <circle cx="110" cy="110" r="86" stroke="#1D2740" strokeWidth="1" />
          <circle
            cx="110"
            cy="110"
            r="60"
            stroke="url(#brainGrad)"
            strokeWidth="1.4"
            strokeDasharray="4 6"
            className="animate-spin-slow origin-center"
          />
          {[...Array(10)].map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;
            const x = 110 + Math.cos(angle) * 86;
            const y = 110 + Math.sin(angle) * 86;
            const x2 = 110 + Math.cos(angle) * 40;
            const y2 = 110 + Math.sin(angle) * 40;
            return (
              <g key={i}>
                <line x1={x2} y1={y2} x2={x} y2={y} stroke="#2E6BFF" strokeOpacity="0.25" strokeWidth="1" />
                <circle cx={x} cy={y} r="2.5" fill="#22D3EE" className="animate-pulse-slow" />
              </g>
            );
          })}
          <circle cx="110" cy="110" r="34" fill="url(#coreGrad)" />
          <defs>
            <radialGradient id="coreGrad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0.1" />
            </radialGradient>
            <linearGradient id="brainGrad" x1="0" y1="0" x2="220" y2="220">
              <stop offset="0%" stopColor="#2E6BFF" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </motion.svg>

        {floatCards.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: c.delay }}
            className={`glass absolute hidden animate-float rounded-xl px-4 py-3 shadow-glow sm:block ${c.pos}`}
            style={{ animationDelay: `${c.delay}s` }}
          >
            <span className="font-mono text-[11px] text-ink/90">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
