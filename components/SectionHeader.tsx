"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-body text-[15px] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
