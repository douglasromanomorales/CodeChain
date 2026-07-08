"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { processFlow } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function ProcessFlow() {
  return (
    <section className="section-pad py-28">
      <SectionHeader
        eyebrow="A transformação"
        title="Do trabalho manual à operação automatizada."
        description="É esse o trajeto que reconstruímos em cada processo: da planilha isolada até o robô que fala com o seu ERP sozinho."
        align="center"
      />

      <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-3">
        {processFlow.map((stepName, i) => {
          const isLast = i === processFlow.length - 1;
          return (
            <motion.div
              key={stepName}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className={`rounded-xl border px-5 py-3.5 font-body text-[13.5px] font-medium ${
                  isLast
                    ? "border-chain-blue/50 bg-chain-blue/10 text-ink shadow-glow"
                    : "border-line-soft bg-surface/60 text-muted"
                }`}
              >
                {stepName}
              </div>
              {!isLast && (
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-2" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
