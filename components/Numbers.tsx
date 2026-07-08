"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        setDisplay(Number.isInteger(value) ? Math.round(v).toString() : v.toFixed(1));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Numbers() {
  return (
    <section className="section-pad relative border-y border-line-soft py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
