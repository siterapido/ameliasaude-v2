# Blog Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesignar o blog da Amélia Saúde com hero post em destaque, títulos grandes nos cards, sidebar melhorada e header redesenhado, mantendo todas as funcionalidades existentes.

**Architecture:** Layout em duas colunas (conteúdo 70% + sidebar 30%) com hero post horizontal no topo, grade de cards redesenhada abaixo. Componentes reutilizáveis com props bem definidas. Animações via Tailwind transitions.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, lucide-react

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `web/src/components/blog/HeroPost.tsx` | Create | Componente do post em destaque (layout horizontal, título grande, CTA) |
| `web/src/components/blog/BlogCard.tsx` | Modify | Card redesenhado com badge, título em destaque, ícones no footer |
| `web/src/components/blog/SearchBar.tsx` | Modify | Input com ícone de lupa interno, sem botão externo, rounded-xl |
| `web/src/components/blog/CategoryList.tsx` | Modify | Lista com ícones emoji, estilo ativo em pill preenchida |
| `web/src/components/blog/TagCloud.tsx` | Modify | Pills com hover mais pronunciado, tamanhos variáveis |
| `web/src/components/blog/BlogSidebar.tsx` | Modify | Reorganiza seções, adiciona espaçamentos |
| `web/src/app/blog/page.tsx` | Modify | Header com gradiente e badge, hero post, grid ajustado |

---

### Task 1: Create HeroPost Component

**Files:**
- Create: `web/src/components/blog/HeroPost.tsx`

- [ ] **Step 1: Create the HeroPost component**

Create `web/src/components/blog/HeroPost.tsx`:

```tsx
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface HeroPostProps {
  post: BlogPost;
}

export function HeroPost({ post }: HeroPostProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12"
    >
      {/* Imagem */}
      <div className="w-full lg:w-[55%] overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-center lg:w-[45%]">
        <span className="inline-flex self-start bg-[#7b6bb2]/10 text-[#7b6bb2] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">
          {post.category}
        </span>

        <h2 className="font-sans font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
          {post.title}
        </h2>

        <p className="mt-4 font-sans font-light text-lg leading-relaxed text-[#5c5470] line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-4 text-sm text-[#8a8a8a]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime} de leitura
          </span>
        </div>

        <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[#7b6bb2] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6a5a9e]">
          Ler artigo
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify file was created**

Run: `ls -la /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web/src/components/blog/HeroPost.tsx`
Expected: File exists

- [ ] **Step 3: Commit**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2 && git add web/src/components/blog/HeroPost.tsx && git commit -m "feat(blog): add HeroPost component"
```

---

### Task 2: Redesign BlogCard

**Files:**
- Modify: `web/src/components/blog/BlogCard.tsx`

- [ ] **Step 1: Replace BlogCard content**

Replace the entire content of `web/src/components/blog/BlogCard.tsx`:

```tsx
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#e4dcf5] bg-white shadow-sm transition-all duration-300 hover:border-[#c8bde6] hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex self-start bg-[#7b6bb2]/10 text-[#7b6bb2] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
          {post.category}
        </span>

        <h3 className="mt-3 font-sans font-semibold text-[clamp(1.35rem,2.5vw,1.65rem)] leading-[1.15] tracking-[-0.01em] text-[#1a1a1a] group-hover:text-[#5e4985] transition-colors duration-200">
          {post.title}
        </h3>

        <p className="mt-3 font-sans font-light leading-relaxed text-[#5c5470] text-[0.95rem] line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-3 text-xs text-[#8a8a8a]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#8a8a8a]" />
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime} de leitura
          </span>
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify no syntax errors**

Run: `cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web && npx tsc --noEmit --jsx react-jsx src/components/blog/BlogCard.tsx 2>&1 | head -20`
Expected: No errors (or only unrelated import path errors)

- [ ] **Step 3: Commit**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2 && git add web/src/components/blog/BlogCard.tsx && git commit -m "feat(blog): redesign BlogCard with larger titles, badges and icons"
```

---

### Task 3: Redesign SearchBar

**Files:**
- Modify: `web/src/components/blog/SearchBar.tsx`

- [ ] **Step 1: Replace SearchBar content**

Replace the entire content of `web/src/components/blog/SearchBar.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a8a8a]" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar artigos..."
        className="w-full rounded-xl border border-[#e4dcf5] bg-white py-3 pl-11 pr-4 font-sans text-[0.95rem] text-[#1a1a1a] placeholder-[#8a8a8a] transition-colors duration-200 focus:border-[#7b6bb2] focus:outline-none focus:ring-2 focus:ring-[#7b6bb2]/20"
      />
    </form>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2 && git add web/src/components/blog/SearchBar.tsx && git commit -m "feat(blog): redesign SearchBar with inline icon and rounded-xl"
```

---

### Task 4: Redesign CategoryList

**Files:**
- Modify: `web/src/components/blog/CategoryList.tsx`

- [ ] **Step 1: Replace CategoryList content**

Replace the entire content of `web/src/components/blog/CategoryList.tsx`:

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

const categoryIcons: Record<string, string> = {
  "Nutrição": "🥗",
  "Exercícios": "🏃",
  "Bem-estar": "😴",
};

function getIcon(name: string): string {
  return categoryIcons[name] || "•";
}

export function CategoryList({ categories, activeCategory }: CategoryListProps) {
  return (
    <div>
      <h3 className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
        Categorias
      </h3>
      <ul className="space-y-1">
        <li>
          <Link
            href="/blog"
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 font-sans text-[0.95rem] transition-all duration-200 ${
              !activeCategory
                ? "bg-[#7b6bb2] font-medium text-white"
                : "text-[#5c5470] hover:bg-[#7b6bb2]/5 hover:text-[#7b6bb2]"
            }`}
          >
            <span>🏠</span>
            Todas
          </Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link
              href={`/blog?category=${encodeURIComponent(cat.name)}`}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 font-sans text-[0.95rem] transition-all duration-200 ${
                activeCategory === cat.name
                  ? "bg-[#7b6bb2] font-medium text-white"
                  : "text-[#5c5470] hover:bg-[#7b6bb2]/5 hover:text-[#7b6bb2]"
              }`}
            >
              <span>{getIcon(cat.name)}</span>
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
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2 && git add web/src/components/blog/CategoryList.tsx && git commit -m "feat(blog): redesign CategoryList with icons and filled active state"
```

---

### Task 5: Redesign TagCloud

**Files:**
- Modify: `web/src/components/blog/TagCloud.tsx`

- [ ] **Step 1: Replace TagCloud content**

Replace the entire content of `web/src/components/blog/TagCloud.tsx`:

```tsx
"use client";

import Link from "next/link";

interface TagCloudProps {
  tags: string[];
}

export function TagCloud({ tags }: TagCloudProps) {
  return (
    <div>
      <h3 className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7b6bb2]">
        Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className="rounded-full border border-[#e4dcf5] px-3.5 py-1.5 font-sans text-xs text-[#5c5470] transition-all duration-200 hover:border-[#7b6bb2] hover:bg-[#7b6bb2] hover:text-white"
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
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2 && git add web/src/components/blog/TagCloud.tsx && git commit -m "feat(blog): redesign TagCloud with stronger hover effect"
```

---

### Task 6: Adjust BlogSidebar

**Files:**
- Modify: `web/src/components/blog/BlogSidebar.tsx`

- [ ] **Step 1: Replace BlogSidebar content**

Replace the entire content of `web/src/components/blog/BlogSidebar.tsx`:

```tsx
import { getCategories, getAllTags } from "@/data/blog";
import { CategoryList } from "./CategoryList";
import { TagCloud } from "./TagCloud";
import { SearchBar } from "./SearchBar";

interface BlogSidebarProps {
  activeCategory?: string;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function BlogSidebar({ activeCategory, onSearch, searchQuery }: BlogSidebarProps) {
  const categories = getCategories();
  const tags = getAllTags();

  return (
    <aside className="space-y-8">
      <SearchBar onSearch={onSearch} initialValue={searchQuery} />
      <div className="h-px bg-[#e4dcf5]" />
      <CategoryList categories={categories} activeCategory={activeCategory} />
      <div className="h-px bg-[#e4dcf5]" />
      <TagCloud tags={tags} />
    </aside>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2 && git add web/src/components/blog/BlogSidebar.tsx && git commit -m "feat(blog): add dividers and spacing to BlogSidebar"
```

---

### Task 7: Redesign Blog Page (Header + Hero + Grid)

**Files:**
- Modify: `web/src/app/blog/page.tsx`

- [ ] **Step 1: Read current page.tsx to understand imports**

The current file already imports: Navigation, Footer, blogPosts, SearchBar, BlogCard, BlogSidebar, Pagination.
We need to add: HeroPost

- [ ] **Step 2: Replace the full page.tsx content**

Replace the entire content of `web/src/app/blog/page.tsx`:

```tsx
"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts, BlogPost } from "@/data/blog";
import { SearchBar } from "@/components/blog/SearchBar";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Pagination } from "@/components/blog/Pagination";
import { HeroPost } from "@/components/blog/HeroPost";

const POSTS_PER_PAGE = 9;

function BlogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const page = parseInt(searchParams.get("page") || "1", 10);
  const categoryParam = searchParams.get("category");
  const tagParam = searchParams.get("tag");

  const filteredPosts = useMemo(() => {
    let posts: BlogPost[] = [...blogPosts];

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery) ||
          post.content.some((p) => p.toLowerCase().includes(lowerQuery))
      );
    }

    if (categoryParam) {
      posts = posts.filter((post) => post.category === categoryParam);
    }

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

  // Hero post: o mais recente, mas apenas se não houver filtro ativo e estiver na página 1
  const hasActiveFilter = searchQuery || categoryParam || tagParam || page > 1;
  const heroPost = !hasActiveFilter && blogPosts.length > 0 ? blogPosts[0] : null;
  const postsForGrid = hasActiveFilter ? paginatedPosts : paginatedPosts.filter((p) => p.slug !== heroPost?.slug);

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
        {/* Header com gradiente */}
        <section className="bg-gradient-to-b from-[#f8f6ff] to-white">
          <div
            style={{ padding: "clamp(3rem, 8vh, 5rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 4vh, 3rem)" }}
          >
            <div className="mx-auto max-w-[1400px] text-center">
              <span className="inline-block mb-5 rounded-full bg-[#7b6bb2] px-4 py-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-white">
                Blog Amélia Saúde
              </span>
              <h1 className="mx-auto max-w-[800px] font-sans font-bold text-[clamp(2.5rem,7vw,5rem)] tracking-[-0.02em] leading-[1.05] text-[#1a1a1a]">
                Conteúdos para{" "}
                <span className="relative inline-block">
                  cuidar
                  <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#7b6bb2]" />
                </span>{" "}
                de você
              </h1>
              <p className="mx-auto mt-6 max-w-[560px] font-sans font-light leading-relaxed text-[#5c5470] text-[clamp(1rem,1.5vw,1.15rem)]">
                Dicas, novidades e orientações para você fazer as melhores escolhas em saúde.
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section
          className="bg-white"
          style={{ padding: "clamp(2rem, 4vh, 3rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 8vh, 5rem)" }}
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 lg:max-w-[70%]">
                {paginatedPosts.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="font-sans text-lg text-[#5c5470]">
                      Nenhum resultado encontrado para &quot;{searchQuery || categoryParam || tagParam}&quot;.
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
                    {/* Hero Post */}
                    {heroPost && <HeroPost post={heroPost} />}

                    {/* Divider quando há hero */}
                    {heroPost && (
                      <div className="mb-10 h-px bg-[#e4dcf5]" />
                    )}

                    {/* Grid de cards */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {postsForGrid.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>
                    <Pagination currentPage={page} totalPages={totalPages} />
                  </>
                )}
              </div>

              <div className="hidden lg:block lg:w-[30%]">
                <div className="sticky top-24">
                  <BlogSidebar
                    activeCategory={categoryParam || undefined}
                    onSearch={handleSearch}
                    searchQuery={searchQuery}
                  />
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

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <BlogContent />
    </Suspense>
  );
}
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web && npx tsc --noEmit 2>&1 | grep -E "(error TS|blog/)" | head -30`
Expected: No blog-related errors

- [ ] **Step 4: Start dev server and verify visually**

Run: `cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web && npm run dev &`
Then open `http://localhost:3000/blog` in browser and verify:
1. Header tem gradiente, badge roxa, título grande com underline em "cuidar"
2. Hero post aparece com imagem à esquerda e texto à direita
3. Cards têm badge, título grande, ícones no footer
4. Sidebar tem search com ícone, categorias com ícones e pills ativas, tags com hover forte
5. Funcionalidades de busca/filtro/paginação ainda funcionam

- [ ] **Step 5: Commit**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2 && git add web/src/app/blog/page.tsx && git commit -m "feat(blog): redesign page with gradient header, hero post and improved grid"
```

---

### Task 8: Final Verification

- [ ] **Step 1: Full build check**

Run: `cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web && npm run build 2>&1 | tail -20`
Expected: Build succeeds with no errors

- [ ] **Step 2: Visual regression check**

Open the blog page and verify:
- [ ] Header com gradiente `from-[#f8f6ff] to-white`
- [ ] Badge "Blog Amélia Saúde" é pill roxa com texto branco
- [ ] Título tem underline roxo sob "cuidar"
- [ ] Hero post mostra o post mais recente
- [ ] Hero post: imagem esquerda, texto direita (desktop)
- [ ] Hero post: badge categoria, título grande, excerpt, meta com ícones, botão CTA
- [ ] Cards: imagem 16/10, badge roxo claro, título semibold grande, excerpt, footer com Calendar/Clock
- [ ] Card hover: sobe levemente, sombra aumenta, imagem dá zoom
- [ ] Sidebar search: ícone de lupa interno, rounded-xl, sem botão
- [ ] Categorias: ícones emoji, ativa em pill roxa preenchida
- [ ] Tags: hover preenche fundo roxo e texto branco
- [ ] Paginação funciona
- [ ] Busca funciona (Enter no input)
- [ ] Filtro por categoria funciona
- [ ] Filtro por tag funciona
- [ ] Limpar filtros funciona
- [ ] Mobile: hero vira vertical, cards 1 coluna, sidebar some

- [ ] **Step 3: Final commit**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2 && git log --oneline -5
```

---

## Self-Review Checklist

- [ ] **Spec coverage:** Hero post ✓, header redesign ✓, cards redesenhados ✓, sidebar melhorada ✓, animações ✓, responsividade ✓, funcionalidades preservadas ✓
- [ ] **Placeholder scan:** Nenhum TBD, TODO, ou "implement later" encontrado
- [ ] **Type consistency:** Props `BlogPost`, `Category`, interfaces consistentes em todos os arquivos
- [ ] **File paths:** Todos os caminhos estão absolutos e corretos
- [ ] **Import paths:** `@/components/blog/HeroPost`, `@/data/blog`, `lucide-react` — todos válidos

---

**Plan complete and saved to `docs/superpowers/plans/2026-05-13-blog-redesign.md`.**

Two execution options:

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
