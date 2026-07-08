"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-pad py-28">
      <SectionHeader
        eyebrow="Como funciona"
        title="Seis etapas. Nenhum atalho."
        align="center"
      />

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-6 md:gap-x-4">
          {howItWorks.map((h, i) => (
            <motion.div
              key={h.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-chain-blue/40 bg-void font-mono text-xs text-chain-cyan">
                {h.n}
              </div>
              <h3 className="mt-4 font-display text-[15px] font-semibold text-ink">
                {h.title}
              </h3>
              <p className="mt-1.5 font-body text-[13px] leading-relaxed text-muted">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
