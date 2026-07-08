"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/config";
import { ChainLink } from "./ChainMotif";

export default function Contact() {
  return (
    <section id="contato" className="section-pad py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong relative mx-auto max-w-3xl overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chain-blue/20 blur-[120px]" />

        <div className="relative">
          <ChainLink size={30} className="mx-auto text-chain-blue" />

          <span className="eyebrow mt-6 block">Contato</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Quero automatizar minha empresa.
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-[15px] leading-relaxed text-muted">
            Nossa equipe está pronta para entender o seu processo e apresentar
            a melhor solução em Inteligência Artificial e Automação.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-9 w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Conversar pelo WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <p className="mt-5 font-mono text-[12px] text-muted-2">
            {siteConfig.contact.whatsappDisplay}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
