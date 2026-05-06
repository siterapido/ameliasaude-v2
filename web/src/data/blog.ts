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
    slug: "5-dicas-nutricao-dia-a-dia",
    category: "Nutrição",
    title: "5 dicas práticas de nutrição para o dia a dia",
    excerpt:
      "Alimentar-se bem não precisa ser complicado. Veja como incluir hábitos saudáveis na sua rotina.",
    date: "15 Mar 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop&q=80",
    content: [
      "Ter uma alimentação balanceada é o pilar fundamental para uma vida longa e saudável...",
    ],
    tags: ["nutrição", "hábitos", "saúde"],
  },
  {
    slug: "importancia-exercicio-fisico",
    category: "Exercícios",
    title: "A importância do exercício físico para a saúde mental",
    excerpt:
      "Descubra como movimentar o corpo pode reduzir o estresse e melhorar sua qualidade de vida.",
    date: "12 Mar 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop&q=80",
    content: [
      "A prática regular de exercícios vai muito além da estética. Ela é essencial para...",
    ],
    tags: ["exercícios", "saúde mental", "bem-estar"],
  },
  {
    slug: "sono-e-bem-estar",
    category: "Bem-estar",
    title: "Como uma boa noite de sono transforma o seu corpo",
    excerpt:
      "Dormir bem é tão importante quanto uma boa alimentação e a prática de exercícios físicos.",
    date: "08 Mar 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=1200&h=600&fit=crop&q=80",
    content: [
      "O sono de qualidade é essencial para a reparação celular e o equilíbrio hormonal...",
    ],
    tags: ["sono", "bem-estar", "saúde"],
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
