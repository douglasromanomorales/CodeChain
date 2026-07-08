"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";
import { ChainLink } from "./ChainMotif";

export default function CTABanner() {
  return (
    <section className="section-pad py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 via-surface to-void px-8 py-16 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-[size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chain-blue/20 blur-[130px]" />

        <div className="relative">
          <ChainLink size={32} className="mx-auto text-chain-blue" />

          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Pronto para transformar sua empresa com Inteligência Artificial?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-balance font-body text-[15px] leading-relaxed text-muted sm:text-base">
            Automatize processos, reduza custos operacionais, elimine tarefas
            repetitivas e aumente a produtividade com soluções inteligentes
            desenvolvidas pela CodeChain.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar com a CodeChain
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
