export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-plano-de-saude-ideal",
    category: "Bem-estar",
    title: "Como escolher o plano de saúde ideal para sua família",
    excerpt:
      "Descubra os fatores essenciais na hora de contratar um plano que atenda às necessidades de todos.",
    date: "15 Mar 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    content: [
      "Escolher um plano de saúde é uma das decisões mais importantes para quem quer cuidar da família com responsabilidade e tranquilidade. Com tantas opções disponíveis no mercado, é fácil se sentir perdido entre coberturas, valores e redes credenciadas.",
      "O primeiro passo é entender o perfil da sua família. Quantas pessoas precisam ser cobertas? Existem crianças, idosos ou pessoas com condições de saúde específicas? Essas perguntas ajudam a definir o nível de cobertura necessário.",
      "A rede credenciada é um dos pontos mais importantes. Verifique se os hospitais, clínicas e laboratórios mais próximos da sua casa fazem parte do plano. Não adiant...",
    ],
    tags: ["plano de saúde", "família", "prevenção"],
  },
  {
    slug: "consultas-online-telemedicina",
    category: "Telemedicina",
    title: "Consultas online: praticidade sem perder a qualidade",
    excerpt:
      "Entenda como a telemedicina está transformando o acesso à saúde no Brasil.",
    date: "12 Mar 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
    content: [
      "A telemedicina chegou para ficar. O que começou como uma alternativa emergencial se consolidou como um dos pilares do atendimento em saúde no Brasil. Hoje, milhões de brasileiros já...",
    ],
    tags: ["telemedicina", "consultas online", "tecnologia"],
  },
  {
    slug: "checkup-anual-prevencao",
    category: "Prevenção",
    title: "Check-up anual: por que você não deve adiar",
    excerpt:
      "A prevenção é o melhor caminho para uma vida saudável.Saiba quais exames são essenciais.",
    date: "08 Mar 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=600&fit=crop",
    content: [
      "Muitas pessoas só procuram um médico quando sentem algum sintoma. Essa abordagem reativa pode ser perigosa, pois diversas doenças graves se desenvolvem...",
    ],
    tags: ["prevenção", "check-up", "exames", "saúde"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}

export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.content.some((p) => p.toLowerCase().includes(lowerQuery))
  );
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tagsSet.add(tag)));
  return Array.from(tagsSet).sort();
}

export function getCategories(): { name: string; count: number }[] {
  const categories: Record<string, number> = {};
  blogPosts.forEach((post) => {
    categories[post.category] = (categories[post.category] || 0) + 1;
  });
  return Object.entries(categories).map(([name, count]) => ({ name, count }));
}
