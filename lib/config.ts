/**
 * Configuração central do site.
 * O WhatsApp é o ÚNICO canal de contato da CodeChain — altere o número
 * aqui e a mudança se propaga para todo o site (botão flutuante, CTAs,
 * rodapé e SEO/JSON-LD).
 */

export const siteConfig = {
  company: {
    name: "CodeChain Automações",
    cnpj: "41.159.087/0001-21",
    tagline: "Automação Inteligente. Resultados Reais.",
    closingMessage:
      "Transformando processos em inteligência através da automação.",
  },

  contact: {
    // Apenas dígitos, com DDI+DDD (usado no link do WhatsApp: wa.me/<numero>)
    whatsappNumber: "5513988257142",
    whatsappDisplay: "+55 (13) 98825-7142",
  },
} as const;

/** Mensagem pré-preenchida enviada em todos os CTAs do site. */
const WHATSAPP_MESSAGE =
  "Olá! Visitei o site da CodeChain e gostaria de conhecer melhor as soluções de Inteligência Artificial e Automação para minha empresa.";

/** Gera o link oficial do WhatsApp, sempre com a mensagem pré-preenchida. */
export function whatsappLink() {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
}
