"use client";

import { motion } from "framer-motion";
import { lowCode } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function LowCode() {
  return (
    <section className="section-pad py-28">
      <SectionHeader
        eyebrow="Low Code"
        title="Velocidade sem abrir mão de solidez."
        description="Usamos Low Code para acelerar o que pode ser acelerado — e código puro onde a robustez exige."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {lowCode.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:border-chain-blue/40 hover:bg-white/[0.05]"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-chain-blue/10 blur-3xl transition-all duration-500 group-hover:bg-chain-blue/25" />
            <h3 className="font-display text-2xl font-semibold text-ink">
              {l.name}
            </h3>
            <p className="mt-3 max-w-sm font-body text-[14px] leading-relaxed text-muted">
              {l.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
