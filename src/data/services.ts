// Dados de Serviços — Full Estratégias Digitais (FullED)

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  color: 'primary' | 'secondary';
  order: number;
}

// ============================================
// SERVIÇOS — 6 Serviços Principais FullED
// ============================================

export const services: Service[] = [
  {
    id: 'seo-local',
    name: 'SEO Local',
    slug: 'seo-local',
    description: 'Otimização para buscas locais no Google. Apareça na frente dos seus concorrentes quando clientes próximos buscam pelos seus serviços.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    features: [
      'Google Meu Negócio otimizado',
      'Palavras-chave locais estratégicas',
      'Citações e backlinks locais',
      'Relatórios mensais de posicionamento',
    ],
    color: 'primary',
    order: 1,
  },
  {
    id: 'geracao-leads',
    name: 'Geração de Leads',
    slug: 'geracao-leads',
    description: 'Landing pages de alta conversão que transformam visitantes em clientes. Design orientado a dados, copy persuasivo e testes A/B contínuos.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    features: [
      'Landing pages otimizadas',
      'Formulários de captação inteligentes',
      'Testes A/B contínuos',
      'Integração com CRM',
    ],
    color: 'primary',
    order: 2,
  },
  {
    id: 'analise-dados',
    name: 'Análise de Dados',
    slug: 'analise-dados',
    description: 'Monitoramento em tempo real e relatórios claros. Tome decisões baseadas em dados, não em achismo. Dashboards personalizados para o seu negócio.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    features: [
      'Google Analytics 4 configurado',
      'Dashboards personalizados',
      'Relatórios mensais executivos',
      'Rastreamento de conversões',
    ],
    color: 'primary',
    order: 3,
  },
  {
    id: 'marketing-conteudo',
    name: 'Marketing de Conteúdo',
    slug: 'marketing-conteudo',
    description: 'Estratégia SILO de conteúdo para autoridade de domínio. Artigos, páginas e estrutura que o Google ama — e que convertem seus leitores em clientes.',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    features: [
      'Estratégia SILO de conteúdo',
      'Artigos otimizados para SEO',
      'Calendário editorial mensal',
      'Produção de conteúdo local',
    ],
    color: 'secondary',
    order: 4,
  },
  {
    id: 'desenvolvimento-web',
    name: 'Desenvolvimento Web',
    slug: 'desenvolvimento-web',
    description: 'Sites rápidos, seguros e otimizados para SEO. Desenvolvidos com tecnologias modernas, hospedagem em edge network e performance Core Web Vitals.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    features: [
      'Performance Core Web Vitals',
      'Design responsivo mobile-first',
      'Hospedagem Cloudflare Pages',
      'SSL e segurança avançada',
    ],
    color: 'secondary',
    order: 5,
  },
  {
    id: 'consultoria-digital',
    name: 'Consultoria Digital',
    slug: 'consultoria-digital',
    description: 'Plano estratégico personalizado para o seu negócio. Diagnóstico completo da presença digital, mapa de oportunidades e roadmap de crescimento.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: [
      'Diagnóstico digital completo',
      'Mapa de oportunidades locais',
      'Roadmap de crescimento 90 dias',
      'Sessões de acompanhamento mensais',
    ],
    color: 'secondary',
    order: 6,
  },
];

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
