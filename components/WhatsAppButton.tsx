"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // Entra depois da sequência de abertura, com uma leve folga.
    const t = setTimeout(() => setVisible(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hover && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
                className="glass-strong absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-2 font-body text-[13px] text-ink shadow-glow sm:block"
              >
                Fale com um Especialista
              </motion.span>
            )}
          </AnimatePresence>

          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 opacity-70 animate-pulse-slow" />

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale com um especialista pelo WhatsApp"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            className="glass relative flex h-14 w-14 items-center justify-center rounded-full border-white/[0.12] bg-[#25D366]/15 text-[#25D366] shadow-glow transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366]/25 hover:shadow-[0_0_50px_rgba(37,211,102,0.35)] sm:h-16 sm:w-16"
          >
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
