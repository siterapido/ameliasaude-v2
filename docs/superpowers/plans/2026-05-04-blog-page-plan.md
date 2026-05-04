# Página de Blog Completa - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar página de blog completa com sidebar, pesquisa, paginação e filtragem

**Architecture:** Componentes React reutilizáveis para search, categorias, arquivo, tags e paginação. Cliente Next.js com estado para filtragem. Dados estáticos com tags adicionadas.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

---

## Task 1: Adicionar tags aos dados do blog

**Files:**
- Modify: `web/src/data/blog.ts`

- [ ] **Step 1: Adicionar campo tags ao interface BlogPost**

Modificar a interface BlogPost para incluir array de tags:

```typescript
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
```

- [ ] **Step 2: Adicionar tags a cada post**

```typescript
export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-plano-de-saude-ideal",
    category: "Bem-estar",
    title: "Como escolher o plano de saúde ideal para sua família",
    excerpt: "Descubra os fatores essenciais na hora de contratar um plano que atenda às necessidades de todos.",
    date: "15 Mar 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    content: [...],
    tags: ["plano de saúde", "família", "prevenção"],
  },
  // ... adicionar tags aos outros posts
];
```

Tags sugeridas por post:
- Post 1 (plano de saúde): ["plano de saúde", "família", "prevenção"]
- Post 2 (telemedicina): ["telemedicina", "consultas online", "tecnologia"]
- Post 3 (check-up): ["prevenção", "check-up", "exames", "saúde"]

- [ ] **Step 3: Criar funções utilitárias para blog**

Adicionar ao final do arquivo blog.ts:

```typescript
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

export function getArchive(): { month: string; year: number; count: number }[] {
  const archive: Record<string, number> = {};
  blogPosts.forEach((post) => {
    const key = post.date; // formato "15 Mar 2026"
    archive[key] = (archive[key] || 0) + 1;
  });
  //simplificado: agrupar por mês/ano do date string
  return [];
}
```

- [ ] **Step 4: Commit**

```bash
git add web/src/data/blog.ts
git commit -m "feat(blog): add tags to blog posts and utility functions"
```

---

## Task 2: Criar componente SearchBar

**Files:**
- Create: `web/src/components/blog/SearchBar.tsx`

- [ ] **Step 1: Criar componente SearchBar**

```tsx
"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function SearchBar({ onSearch, initialValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar artigos..."
        className="flex-1 rounded-full border border-[#e4dcf5] px-5 py-3 font-sans text-[0.95rem] text-[#1a1a1a] placeholder-[#8a8a8a] focus:border-[#7b6bb2] focus:outline-none focus:ring-2 focus:ring-[#7b6bb2]/20"
      />
      <button
        type="submit"
        className="rounded-full bg-[#7b6bb2] px-6 py-3 font-sans text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6a5a9e]"
      >
        Buscar
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/components/blog/SearchBar.tsx
git commit -m "feat(blog): add SearchBar component"
```

---

## Task 3: criar componente CategoryList

**Files:**
- Create: `web/src/components/blog/CategoryList.tsx`

- [ ] **Step 1: Criar componente CategoryList**

```tsx
"use client";

import Link from "next/link";

interface Category {
  name: string;
  count: number;
}

interface CategoryListProps {
  categories: Category[];
  activeCategory?: string;
}

export function CategoryList({ categories, activeCategory }: CategoryListProps) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
        Categorias
      </h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="/blog"
            className={`block font-sans text-[0.95rem] transition-colors duration-200 hover:text-[#7b6bb2] ${
              !activeCategory ? "font-medium text-[#7b6bb2]" : "text-[#5c5470]"
            }`}
          >
            Todas
          </Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link
              href={`/blog?category=${encodeURIComponent(cat.name)}`}
              className={`block font-sans text-[0.95rem] transition-colors duration-200 hover:text-[#7b6bb2] ${
                activeCategory === cat.name
                  ? "font-medium text-[#7b6bb2]"
                  : "text-[#5c5470]"
              }`}
            >
              {cat.name} ({cat.count})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/components/blog/CategoryList.tsx
git commit -m "feat(blog): add CategoryList component"
```

---

## Task 4: Criar componente TagCloud

**Files:**
- Create: `web/src/components/blog/TagCloud.tsx`

- [ ] **Step 1: Criar componente TagCloud**

```tsx
"use client";

import Link from "next/link";

interface TagCloudProps {
  tags: string[];
}

export function TagCloud({ tags }: TagCloudProps) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
        Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className="rounded-full border border-[#e4dcf5] px-3 py-1.5 font-sans text-xs text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:bg-[#7b6bb2]/5 hover:text-[#7b6bb2]"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/components/blog/TagCloud.tsx
git commit -m "feat(blog): add TagCloud component"
```

---

## Task 5: Criar componente Pagination

**Files:**
- Create: `web/src/components/blog/Pagination.tsx`

- [ ] **Step 1: Criar componente Pagination**

```tsx
"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export function Pagination({ currentPage, totalPages, baseUrl = "/blog" }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      pages.push(
        <Link
          key={1}
          href={getPageUrl(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4dcf5] font-sans text-sm text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
        >
          1
        </Link>
      );
      if (start > 2) {
        pages.push(<span key="ellipsis1" className="px-2">...</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <Link
          key={i}
          href={getPageUrl(i)}
          className={`flex h-10 w-10 items-center justify-center rounded-full font-sans text-sm transition-colors duration-200 ${
            i === currentPage
              ? "bg-[#7b6bb2] text-white"
              : "border border-[#e4dcf5] text-[#5c5470] hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
          }`}
        >
          {i}
        </Link>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(<span key="ellipsis2" className="px-2">...</span>);
      }
      pages.push(
        <Link
          key={totalPages}
          href={getPageUrl(totalPages)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4dcf5] font-sans text-sm text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
        >
          {totalPages}
        </Link>
      );
    }

    return pages;
  };

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center gap-2 rounded-full border border-[#e4dcf5] px-4 py-2 font-sans text-sm text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </Link>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center gap-2 rounded-full border border-[#e4dcf5] px-4 py-2 font-sans text-sm text-[#5c5470] transition-colors duration-200 hover:border-[#7b6bb2] hover:text-[#7b6bb2]"
        >
          Próxima
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/components/blog/Pagination.tsx
git commit -m "feat(blog): add Pagination component"
```

---

## Task 6: Criar componente BlogCard

**Files:**
- Create: `web/src/components/blog/BlogCard.tsx`

- [ ] **Step 1: Criar componente BlogCard**

```tsx
import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-[#e4dcf5] bg-white shadow-sm transition-all duration-300 hover:border-[#c8bde6] hover:shadow-md"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-7">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7b6bb2]">
          {post.category}
        </span>
        <h3 className="mt-3 font-sans font-medium text-[clamp(1.1rem, 2vw, 1.25rem)] leading-[1.15] tracking-[-0.01em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
          {post.title}
        </h3>
        <p className="mt-4 font-sans font-light leading-relaxed text-[#5c5470] text-[0.95rem] line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 border-t border-[#e4dcf5] pt-4 font-sans text-[11px] text-[#8a8a8a]">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-[#8a8a8a]" />
          <span>{post.readTime} de leitura</span>
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/components/blog/BlogCard.tsx
git commit -m "feat(blog): add BlogCard component"
```

---

## Task 7: Criar componente BlogSidebar

**Files:**
- Create: `web/src/components/blog/BlogSidebar.tsx`

- [ ] **Step 1: Criar componente BlogSidebar**

```tsx
import { getCategories, getAllTags } from "@/data/blog";
import { CategoryList } from "./CategoryList";
import { TagCloud } from "./TagCloud";

interface BlogSidebarProps {
  activeCategory?: string;
}

export function BlogSidebar({ activeCategory }: BlogSidebarProps) {
  const categories = getCategories();
  const tags = getAllTags();

  return (
    <aside className="space-y-10">
      <CategoryList categories={categories} activeCategory={activeCategory} />
      <TagCloud tags={tags} />
    </aside>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/components/blog/BlogSidebar.tsx
git commit -m "feat(blog): add BlogSidebar component"
```

---

## Task 8: Modificar página de blog com layout completo

**Files:**
- Modify: `web/src/app/blog/page.tsx`

- [ ] **Step 1: Reescrever página de blog com layout completo**

```tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts, BlogPost } from "@/data/blog";
import { SearchBar } from "@/components/blog/SearchBar";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Pagination } from "@/components/blog/Pagination";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  
  const page = parseInt(searchParams.get("page") || "1", 10);
  const categoryParam = searchParams.get("category");
  const tagParam = searchParams.get("tag");

  const filteredPosts = useMemo(() => {
    let posts: BlogPost[] = [...blogPosts];

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery) ||
          post.content.some((p) => p.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by category
    if (categoryParam) {
      posts = posts.filter((post) => post.category === categoryParam);
    }

    // Filter by tag
    if (tagParam) {
      posts = posts.filter((post) => post.tags.includes(tagParam));
    }

    return posts;
  }, [searchQuery, categoryParam, tagParam]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (categoryParam) params.set("category", categoryParam);
    if (tagParam) params.set("tag", tagParam);
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ""}`);
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== searchQuery) {
      setSearchQuery(q || "");
    }
  }, [searchParams, searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <main className="flex-1">
        <section
          className="bg-white"
          style={{ padding: "clamp(3rem, 8vh, 5rem) clamp(1.5rem, 5vw, 5rem)" }}
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 text-center">
              <span className="mb-5 block font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
                Blog Amélia Saúde
              </span>
              <h2 className="mx-auto max-w-[700px] font-sans font-semibold text-[clamp(2.5rem, 6vw, 4.5rem)] tracking-[-0.02em] leading-[1.05] text-[#7b6bb2]">
                Conteúdos para cuidar de você
              </h2>
              <p className="mx-auto mt-4 max-w-[560px] font-sans font-light leading-relaxed text-[#5c5470] text-[clamp(1rem, 1.5vw, 1.15rem)]">
                Dicas, novidades e orientações para você fazer as melhores escolhas em saúde.
              </p>
            </div>

            <div className="mx-auto max-w-[600px] mb-12">
              <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 lg:max-w-[70%]">
                {paginatedPosts.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="font-sans text-lg text-[#5c5470]">
                      Nenhum resultado encontrado para "{searchQuery || categoryParam || tagParam}".
                    </p>
                    <button
                      onClick={() => handleSearch("")}
                      className="mt-4 font-sans text-[#7b6bb2] hover:underline"
                    >
                      Limpar filtros
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {paginatedPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>
                    <Pagination currentPage={page} totalPages={totalPages} />
                  </>
                )}
              </div>
              
              <div className="lg:w-[30%]">
                <div className="sticky top-24">
                  <BlogSidebar activeCategory={categoryParam || undefined} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/app/blog/page.tsx
git commit -m "feat(blog): update blog page with complete layout"
```

---

## Task 9: Verificar e ajustar responsividade

- [ ] **Step 1: Testar layout em diferentes tamanhos**

Verificar se:
- Sidebar aparece sopo dos posts no mobile
- Grid de cards ajusta corretamente (3 cols desktop, 2 tablet, 1 mobile)
- SearchBar responsivo

- [ ] **Step 2: Ajustar CSS se necessário**

Adicionar classes responsive à sidebar no blog page:

```tsx
// No componente BlogSidebar, envolver em div com classes responsivas
<div className="lg:hidden mb-8">
  {/* versão mobile da sidebar como acordeão ou colapsável */}
</div>
```

- [ ] **Step 3: Commit**

```bash
git commit -m "fix(blog): adjust responsive layout"
```

---

**Plan complete and saved to `docs/superpowers/plans/2026-05-04-blog-page-plan.md`.**

Duas opções de execução:

1. **Subagent-Driven (recommended)** - Um subagent por tarefa, revisão entre tarefas
2. **Inline Execution** - Executar tarefas nesta sessão usando executing-plans

Qual abordagem prefere?