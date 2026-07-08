import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, whatsappLink } from "@/lib/config";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://codechain-automacoes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CodeChain Automações | Automação Inteligente. Resultados Reais.",
    template: "%s | CodeChain Automações",
  },
  description:
    "Especialistas em Inteligência Artificial, RPA, integrações corporativas e desenvolvimento sob medida. Transformamos processos manuais em operações inteligentes.",
  keywords: [
    "automação de processos",
    "RPA",
    "inteligência artificial",
    "UiPath",
    "Power Automate",
    "integração ERP",
    "Power BI",
    "consultoria em automação",
  ],
  authors: [{ name: "CodeChain Automações" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "CodeChain Automações",
    title: "CodeChain Automações | Automação Inteligente. Resultados Reais.",
    description:
      "Transformamos processos manuais em inteligência digital com IA, RPA e Low Code.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CodeChain Automações",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeChain Automações",
    description:
      "Automação inteligente com IA, RPA e Low Code para empresas que exigem excelência.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodeChain Automações",
  legalName: siteConfig.company.name,
  taxID: siteConfig.company.cnpj,
  url: siteUrl,
  slogan: "Automação Inteligente. Resultados Reais.",
  description:
    "Especialistas em Inteligência Artificial, Automação de Processos (RPA), Integrações Corporativas e Desenvolvimento de Soluções sob medida.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: whatsappLink(),
      availableLanguage: ["Portuguese"],
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inteligência Artificial" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automação de Processos (RPA)" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integrações Corporativas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dashboards e Business Intelligence" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-void text-ink">{children}</body>
    </html>
  );
}
