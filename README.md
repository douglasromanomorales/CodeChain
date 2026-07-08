# CodeChain Automações — Website Institucional

Site premium em Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion,
construído para transmitir inovação, confiança e excelência técnica para clientes enterprise.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba este repositório no GitHub/GitLab/Bitbucket.
2. Importe o projeto em [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (detectado automaticamente). Nenhuma variável de ambiente é necessária.
4. Deploy.

## Estrutura

```
app/                 App Router: layout, page, SEO (robots, sitemap), estilos globais
components/          Todos os componentes de seção (Hero, Services, Cases, FAQ, etc.)
lib/data.ts          Todo o conteúdo mockado (serviços, stack, cases, FAQ...)
lib/config.ts        WhatsApp — único canal de contato do site (número e
                      mensagem padrão). Edite só este arquivo para atualizar
                      o número em todo o site (botão flutuante, CTAs, rodapé
                      e SEO/JSON-LD).
public/              Favicon e imagem Open Graph (SVG)
```

## Sistema de design

- **Cores**: fundo `#05070D` (void), superfícies `#0A0E18` / `#0F1524`, azul `#2E6BFF`,
  ciano `#22D3EE`, violeta `#7C5CFF`.
- **Tipografia**: Space Grotesk (display), Inter (corpo), JetBrains Mono (rótulos/dados).
- **Elemento de assinatura**: o motivo de "elo de corrente" (`ChainLink` / `ChainDivider`),
  literal ao nome CodeChain, usado no logo, na navegação e como divisor entre seções.

## Conteúdo

Todas as informações (cases, números, depoimentos) são mockadas para fins de demonstração,
conforme especificado no briefing. Substitua o conteúdo de `lib/data.ts` pelos dados reais
da empresa antes de publicar em produção.
