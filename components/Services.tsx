"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section id="servicos" className="section-pad py-28">
      <SectionHeader
        eyebrow="Soluções"
        title="Seis frentes. Um único objetivo: eliminar trabalho manual."
        description="Cada serviço nasce de um diagnóstico real — não vendemos tecnologia, resolvemos gargalos."
      />

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="group relative flex flex-col justify-between bg-void p-8 transition-colors duration-500 hover:bg-surface-2/60"
          >
            <div>
              <span className="font-mono text-xs text-muted-2">{s.number}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-relaxed text-muted">
                {s.description}
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-line-soft px-3 py-1 font-mono text-[10.5px] text-muted-2 transition-colors group-hover:border-chain-blue/30 group-hover:text-chain-cyan/80"
                >
                  {it}
                </li>
              ))}
            </ul>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-chain-blue via-chain-cyan to-chain-violet transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
