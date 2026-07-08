"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Journey() {
  return (
    <section className="section-pad py-28">
      <SectionHeader
        eyebrow="Por que a CodeChain"
        title="Um caminho claro, do diagnóstico ao suporte."
        description="Sem fórmulas genéricas. Cada elo dessa cadeia existe para reduzir risco antes de acelerar."
      />

      <div className="relative mx-auto mt-16 max-w-2xl">
        <div className="absolute left-4 top-2 h-[calc(100%-16px)] w-px bg-line" />

        <div className="flex flex-col gap-10">
          {journey.map((j, i) => (
            <motion.div
              key={j.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative flex items-start gap-6"
            >
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-chain-blue/50 bg-void font-mono text-[11px] text-chain-cyan">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="pt-0.5">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {j.step}
                </h3>
                <p className="mt-1.5 font-body text-[14px] leading-relaxed text-muted">
                  {j.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
