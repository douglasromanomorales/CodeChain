"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChainLink } from "./ChainMotif";

export default function IntroSequence() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const t = setTimeout(() => setVisible(false), prefersReduced ? 0 : 1900);
    document.body.style.overflow = "hidden";
    const t2 = setTimeout(() => {
      document.body.style.overflow = "";
    }, prefersReduced ? 0 : 2100);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <ChainLink size={40} className="text-chain-blue" />
            <span className="font-display text-xl font-semibold tracking-tight text-ink">
              CodeChain
            </span>
          </motion.div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 220, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 h-px bg-gradient-to-r from-transparent via-chain-blue to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-2"
          >
            inicializando automação
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
