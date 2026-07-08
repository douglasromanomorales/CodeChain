import { techStack } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function TechStack() {
  const row = [...techStack, ...techStack];

  return (
    <section className="section-pad py-24">
      <SectionHeader
        eyebrow="Stack"
        title="Tecnologia de ponta, aplicada com critério."
        description="Não usamos ferramenta pelo hype. Cada tecnologia entra no projeto porque resolve um problema real da sua operação."
        align="center"
      />

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />

        <div className="flex w-max animate-marquee gap-4 [animation-play-state:running] hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="card-surface flex min-w-[190px] flex-col gap-3 px-6 py-5 hover:border-chain-blue/40 hover:shadow-glow"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-chain-cyan/70">
                {t.category}
              </span>
              <span className="font-display text-[15px] font-medium text-ink">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
