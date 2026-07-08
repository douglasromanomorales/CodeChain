"use client";

import { motion } from "framer-motion";
import { cases } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Cases() {
  return (
    <section id="cases" className="section-pad py-28">
      <SectionHeader
        eyebrow="Cases"
        title="Seis setores. O mesmo padrão de execução."
        description="Exemplos representativos do tipo de transformação que entregamos — do problema real ao resultado mensurável."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={c.sector}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="card-surface flex flex-col p-7 hover:border-chain-blue/40 hover:shadow-glow"
          >
            <span className="eyebrow">{c.sector}</span>

            <div className="mt-5 flex flex-col gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-2">
                  Problema
                </span>
                <p className="mt-1 font-body text-[13.5px] leading-relaxed text-muted">
                  {c.problem}
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-2">
                  Solução
                </span>
                <p className="mt-1 font-body text-[13.5px] leading-relaxed text-muted">
                  {c.solution}
                </p>
              </div>
              <div className="border-t border-line-soft pt-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-chain-cyan/80">
                  Resultado
                </span>
                <p className="mt-1 font-display text-[15px] font-medium text-ink">
                  {c.result}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
