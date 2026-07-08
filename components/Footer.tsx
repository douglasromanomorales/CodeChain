import { MessageCircle } from "lucide-react";
import { ChainLink, ChainDivider } from "./ChainMotif";
import { siteConfig, whatsappLink } from "@/lib/config";

const linkColumns = [
  {
    title: "Serviços",
    links: [
      { label: "Inteligência Artificial", href: "#servicos" },
      { label: "Automação de Processos", href: "#servicos" },
      { label: "Integrações", href: "#servicos" },
      { label: "Dashboards & BI", href: "#servicos" },
    ],
  },
  {
    title: "Tecnologias",
    links: [
      { label: "OpenAI & Claude AI", href: "#servicos" },
      { label: "UiPath", href: "#servicos" },
      { label: "Power Automate", href: "#servicos" },
      { label: "Power BI", href: "#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Cases", href: "#cases" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="section-pad border-t border-line-soft py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <ChainLink size={24} className="text-chain-blue" />
              <span className="font-display text-[15px] font-semibold text-ink">
                CodeChain
              </span>
            </a>
            <p className="mt-4 max-w-xs font-body text-[13px] leading-relaxed text-muted">
              {siteConfig.company.tagline} Especialistas em Inteligência
              Artificial, RPA e integrações corporativas.
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-body text-[13px] text-muted transition-colors hover:border-chain-blue/50 hover:text-chain-cyan"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.whatsappDisplay}
            </a>
          </div>

          {linkColumns.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-1">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-body text-[13.5px] text-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ChainDivider />
        </div>

        <p className="mt-8 text-center font-display text-[15px] font-medium text-ink">
          {siteConfig.company.closingMessage}
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line-soft pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-muted-2">
            © {new Date().getFullYear()} {siteConfig.company.name}. Todos os
            direitos reservados.
          </p>
          <p className="font-mono text-[11px] text-muted-2">
            CNPJ {siteConfig.company.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
