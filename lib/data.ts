export const techStack = [
  { name: "OpenAI", category: "IA" },
  { name: "Claude AI", category: "IA" },
  { name: "UiPath", category: "RPA" },
  { name: "Power Automate", category: "RPA" },
  { name: "Python", category: "Dev" },
  { name: "Power BI", category: "Analytics" },
  { name: "REST APIs", category: "Integração" },
  { name: "OCR Inteligente", category: "IA" },
  { name: "Machine Learning", category: "IA" },
  { name: "Integrações ERP", category: "Integração" },
  { name: "SAP", category: "Integração" },
  { name: "Microsoft 365", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "Infra" },
];

export const services = [
  {
    id: "ia",
    number: "01",
    title: "Inteligência Artificial",
    description:
      "Sistemas de IA aplicada que entendem contexto, respondem com precisão e operam em escala.",
    items: ["Chatbots Inteligentes", "Assistentes Virtuais", "IA Generativa", "Atendimento Automatizado"],
  },
  {
    id: "rpa",
    number: "02",
    title: "Automação de Processos",
    description:
      "Robôs de software que assumem tarefas repetitivas com precisão milimétrica, 24 horas por dia.",
    items: ["UiPath", "Power Automate", "Python", "BackOffice, Financeiro, RH, Compras e Logística"],
  },
  {
    id: "integracoes",
    number: "03",
    title: "Integrações",
    description:
      "Conectamos sistemas que nunca deveriam ter ficado isolados — dados fluindo em tempo real.",
    items: ["APIs", "ERP", "CRM", "SAP", "Bancos de Dados"],
  },
  {
    id: "dashboards",
    number: "04",
    title: "Dashboards & BI",
    description:
      "Visibilidade total sobre a operação, com decisões guiadas por dados e não por suposições.",
    items: ["Power BI", "Business Intelligence", "Analytics em tempo real"],
  },
  {
    id: "dev",
    number: "05",
    title: "Desenvolvimento",
    description:
      "Software corporativo construído sob medida, com arquitetura que aguenta o crescimento.",
    items: ["Sistemas Corporativos", "Portais", "Aplicações Web", "APIs"],
  },
  {
    id: "consultoria",
    number: "06",
    title: "Consultoria",
    description:
      "Mapeamos o processo real antes de automatizar — sem isso, você só acelera o problema.",
    items: ["Mapeamento AS-IS / TO-BE", "Discovery", "PDD & SDD", "Arquitetura"],
  },
];

export const stats = [
  { value: 200, suffix: "+", label: "Projetos Entregues" },
  { value: 99.9, suffix: "%", label: "Disponibilidade" },
  { value: 80, suffix: "%", label: "Redução de Tempo" },
  { value: 24, suffix: "/7", label: "IA Operando" },
];

export const journey = [
  { step: "Diagnóstico", detail: "Entendemos o processo real, não o processo no papel." },
  { step: "Mapeamento", detail: "Desenhamos o AS-IS e o TO-BE com precisão de engenharia." },
  { step: "Desenvolvimento", detail: "Construímos a solução com arquitetura escalável." },
  { step: "Automação", detail: "Robôs e IA assumem o trabalho repetitivo." },
  { step: "Implantação", detail: "Deploy controlado, com validação em cada etapa." },
  { step: "Suporte", detail: "Evolução contínua, com um time que responde." },
];

export const processFlow = ["Pessoa", "Planilha", "E-mail", "ERP", "Robô", "Automatizado"];

export const lowCode = [
  { name: "UiPath", desc: "Automação robótica de nível enterprise, orquestrada em escala." },
  { name: "Power Automate", desc: "Fluxos nativos ao ecossistema Microsoft, sem fricção." },
  { name: "Python", desc: "Onde o Low Code encontra o limite, o código assume o controle." },
  { name: "APIs", desc: "A cola invisível que conecta cada sistema da sua operação." },
];

export const cases = [
  {
    sector: "Financeiro",
    problem: "Conciliação manual de faturas consumindo 40h/mês da equipe.",
    solution: "Robô de leitura e conciliação automática com validação por IA.",
    result: "92% de redução no tempo de fechamento mensal.",
  },
  {
    sector: "Indústria",
    problem: "Ordens de produção lançadas manualmente em três sistemas distintos.",
    solution: "Integração via API entre MES, ERP e painel de controle em tempo real.",
    result: "Zero retrabalho e visibilidade instantânea do chão de fábrica.",
  },
  {
    sector: "Logística",
    problem: "Roteirização de entregas feita em planilhas, sem otimização de custo.",
    solution: "Motor de otimização com Machine Learning e dashboard de rotas.",
    result: "18% de economia em frete no primeiro trimestre.",
  },
  {
    sector: "Recursos Humanos",
    problem: "Onboarding de colaboradores levava até 12 dias entre sistemas.",
    solution: "Automação ponta a ponta do fluxo de admissão com assinatura digital.",
    result: "Onboarding completo em menos de 48 horas.",
  },
  {
    sector: "Saúde",
    problem: "Triagem de documentos de pacientes feita manualmente, com alto erro.",
    solution: "OCR inteligente com validação por IA e integração ao prontuário.",
    result: "99,3% de acurácia na leitura, erro humano eliminado.",
  },
  {
    sector: "Varejo",
    problem: "Reposição de estoque decidida por intuição, sem dado consolidado.",
    solution: "Dashboard preditivo de demanda integrado ao ERP de vendas.",
    result: "27% de redução em ruptura de estoque.",
  },
];

export const howItWorks = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos sua operação a fundo, sem achismos." },
  { n: "02", title: "Mapeamento", desc: "Documentamos o processo atual e o processo ideal." },
  { n: "03", title: "Desenvolvimento", desc: "Construímos a automação com padrão enterprise." },
  { n: "04", title: "Testes", desc: "Validação rigorosa antes de qualquer produção." },
  { n: "05", title: "Implantação", desc: "Deploy controlado, monitorado em tempo real." },
  { n: "06", title: "Suporte", desc: "Acompanhamento contínuo e evolução da solução." },
];

export const differentials = [
  { title: "Equipe Especializada", desc: "Engenheiros e arquitetos dedicados a automação e IA." },
  { title: "Arquitetura Escalável", desc: "Soluções construídas para crescer com sua operação." },
  { title: "Integração Total", desc: "Conectamos qualquer sistema, legado ou moderno." },
  { title: "Segurança", desc: "Padrões corporativos de segurança e governança de dados." },
  { title: "Alta Performance", desc: "Sistemas rápidos, estáveis e prontos para escala." },
  { title: "IA Personalizada", desc: "Modelos ajustados à realidade do seu negócio." },
];

export const faq = [
  {
    q: "Quanto tempo leva para implementar uma automação?",
    a: "Depende da complexidade, mas a maioria dos projetos vai do diagnóstico à produção entre 4 e 10 semanas.",
  },
  {
    q: "Vocês atendem empresas de qualquer porte?",
    a: "Trabalhamos principalmente com médias e grandes empresas que já possuem processos estruturados a automatizar.",
  },
  {
    q: "É preciso ter equipe técnica interna?",
    a: "Não. Cuidamos de todo o ciclo — diagnóstico, desenvolvimento, implantação e suporte contínuo.",
  },
  {
    q: "As automações funcionam com sistemas legados?",
    a: "Sim. Nossa especialidade é justamente integrar sistemas antigos com tecnologias modernas de IA e RPA.",
  },
  {
    q: "Como funciona o suporte após a entrega?",
    a: "Todo projeto inclui um período de acompanhamento e planos de suporte contínuo sob demanda.",
  },
];
