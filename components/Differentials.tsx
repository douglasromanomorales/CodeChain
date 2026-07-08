"use client";

import { motion } from "framer-motion";
import {
  Users,
  Layers,
  Plug,
  ShieldCheck,
  Zap,
  BrainCircuit,
} from "lucide-react";
import { differentials } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const icons = [Users, Layers, Plug, ShieldCheck, Zap, BrainCircuit];

export default function Differentials() {
  return (
    <section className="section-pad py-28">
      <SectionHeader
        eyebrow="Diferenciais"
        title="O que separa uma automação frágil de uma que dura."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((d, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-transparent p-5 transition-colors hover:border-line-soft"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2/60 text-chain-blue">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-[15px] font-semibold text-ink">
                  {d.title}
                </h3>
                <p className="mt-1 font-body text-[13.5px] leading-relaxed text-muted">
                  {d.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
