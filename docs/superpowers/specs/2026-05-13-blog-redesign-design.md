# Design Spec — Redesign do Blog Amélia Saúde

**Data:** 2026-05-13
**Escopo:** Redesign visual do blog mantendo todas as funcionalidades atuais (filtro, busca, paginação, categorias, tags)

---

## 1. Objetivo

Tornar o blog da Amélia Saúde mais chamativo e moderno, com foco principal na **disposição e destaque dos títulos** dos artigos. Manter 100% das funcionalidades existentes.

## 2. Estrutura de Layout

### 2.1 Header do Blog (Hero Text)
- **Fundo:** gradiente sutil `bg-gradient-to-b from-[#f8f6ff] to-white`
- **Badge "Blog Amélia Saúde":** pill roxa (`bg-[#7b6bb2] text-white rounded-full px-4 py-1.5`) em vez de texto uppercase simples
- **Título principal:** "Conteúdos para cuidar de você" em `clamp(2.5rem, 7vw, 5rem)`, `font-bold`, `tracking-[-0.02em]`, cor `#1a1a1a`, com underline decorativo roxo sob a palavra "cuidar"
- **Subtítulo:** descrição atual com mais espaçamento (`mt-6`), cor `#5c5470`, `font-light`

### 2.2 Hero Post (Destaque)
- **Posição:** primeira seção após o header, ocupa toda a largura do container
- **Layout desktop:** horizontal — imagem à esquerda (~55% largura), conteúdo textual à direita (~45%)
- **Layout mobile:** vertical — imagem em cima, texto abaixo
- **Imagem:** `aspect-[16/10]`, `rounded-2xl`, object-cover, hover com zoom sutil `scale-[1.02]`
- **Conteúdo textual:**
  - Badge categoria: pill com `bg-[#7b6bb2]/10 text-[#7b6bb2]`
  - Título: `clamp(1.75rem, 4vw, 3rem)`, `font-bold`, `leading-[1.1]`, cor `#1a1a1a`
  - Excerpt: `text-lg`, `font-light`, cor `#5c5470`, `line-clamp-3`
  - Meta: data + tempo de leitura com ícones (Calendar e Clock do lucide-react)
  - CTA: botão "Ler artigo →" com fundo roxo e texto branco, `rounded-full`
- **Comportamento:** sempre exibe o post mais recente do array `blogPosts`

### 2.3 Grade de Cards
- **Layout:** 3 colunas em desktop (`lg:grid-cols-3`), 2 em tablet (`md:grid-cols-2`), 1 em mobile
- **Gap:** `gap-8`
- **Exclui:** o primeiro post (já exibido no hero)

### 2.4 Sidebar
- **Posição:** direita, sticky (`top-24`)
- **Seções:**
  1. SearchBar (redesenhada)
  2. Categorias (com ícones)
  3. Tags

## 3. Componentes Redesenhados

### 3.1 BlogCard
```
┌─────────────────────────────┐
│  [imagem 16/10, rounded-t]  │
├─────────────────────────────┤
│  [badge categoria]          │
│  [TÍTULO GRANDE E NEGRITO]  │
│  [excerpt line-clamp-2]     │
│  [📅 data • ⏱️ tempo]       │
└─────────────────────────────┘
```

- **Imagem:** `aspect-[16/10]`, `rounded-t-2xl`, overflow-hidden, hover `scale-[1.04]` transition 500ms
- **Container:** `bg-white`, `rounded-2xl`, `border border-[#e4dcf5]`, `shadow-sm`, hover `shadow-lg` + `translate-y-[-2px]`
- **Padding interno:** `p-6`
- **Badge categoria:** `bg-[#7b6bb2]/10`, `text-[#7b6bb2]`, `rounded-full`, `px-3 py-1`, `text-[11px]`, `uppercase`, `tracking-[0.14em]`
- **Título:** `font-sans`, `font-semibold`, `text-[clamp(1.35rem,2.5vw,1.65rem)]`, `leading-[1.15]`, `tracking-[-0.01em]`, `text-[#1a1a1a]`, hover `text-[#5e4985]`
- **Excerpt:** `font-light`, `text-[0.95rem]`, `text-[#5c5470]`, `line-clamp-2`
- **Footer:** ícones `Calendar` e `Clock` (lucide-react), `text-xs`, `text-[#8a8a8a]`, separados por `•`

### 3.2 HeroPost (novo componente)
- Props: `post: BlogPost`
- Layout flex row (desktop) / flex col (mobile)
- Link envolve toda a seção

### 3.3 SearchBar
- Remove botão "Buscar" externo
- Adiciona ícone `Search` do lucide-react dentro do input (à esquerda)
- Input com `pl-10` para acomodar o ícone
- Busca acontece no `Enter` (onSubmit do form)
- `rounded-xl` em vez de `rounded-full`
- Placeholder: "Buscar artigos..."

### 3.4 CategoryList
- Cada categoria ganha um ícone emoji à esquerda:
  - Todas: `🏠`
  - Nutrição: `🥗`
  - Exercícios: `🏃`
  - Bem-estar: `😴`
  - Fallback: `•`
- Categoria ativa: `bg-[#7b6bb2] text-white rounded-lg px-3 py-1.5` (pill preenchida)
- Inativa: `text-[#5c5470] hover:text-[#7b6bb2] hover:bg-[#7b6bb2]/5 rounded-lg px-3 py-1.5`
- Transição suave entre estados

### 3.5 TagCloud
- Mantém estilo de pills
- Tamanhos de fonte variam levemente: tags mais usadas ficam `text-sm`, menos usadas `text-xs`
- Hover: `bg-[#7b6bb2] text-white border-[#7b6bb2]`

## 4. Animações

- **Card hover:** `transition-all duration-300` — sombra aumenta, card sobe 2px, imagem dá zoom
- **Hero image hover:** `scale-[1.02]` transition 700ms
- **Scroll reveal (opcional/fase 2):** cards animam entrada com fade + translateY ao entrar no viewport

## 5. Cores

| Token | Valor | Uso |
|---|---|---|
| Primary | `#7b6bb2` | badges, botões, links, acentos |
| Primary Light | `#f8f6ff` | fundos de seção |
| Primary 10% | `#7b6bb2]/10` | badges de categoria, hover states |
| Text Primary | `#1a1a1a` | títulos |
| Text Secondary | `#5c5470` | corpo, excerpts |
| Text Muted | `#8a8a8a` | metadados |
| Border | `#e4dcf5` | bordas de cards, inputs |
| White | `#ffffff` | fundo principal |

## 6. Tipografia

- **Títulos grandes (hero):** `clamp(2.5rem, 7vw, 5rem)`, `font-bold`, `tracking-[-0.02em]`
- **Títulos hero post:** `clamp(1.75rem, 4vw, 3rem)`, `font-bold`, `leading-[1.1]`
- **Títulos cards:** `clamp(1.35rem, 2.5vw, 1.65rem)`, `font-semibold`, `leading-[1.15]`
- **Corpo:** `text-[0.95rem]` a `text-lg`, `font-light`, `leading-relaxed`
- **Badges/labels:** `text-[11px]`, `uppercase`, `tracking-[0.14em]`

## 7. Responsividade

| Breakpoint | Layout |
|---|---|
| `< 768px` (mobile) | Hero vertical, cards 1 coluna, sidebar oculta |
| `768px - 1024px` (tablet) | Hero horizontal, cards 2 colunas, sidebar oculta |
| `> 1024px` (desktop) | Hero horizontal, cards 3 colunas, sidebar visível (30%) |

## 8. Funcionalidades Preservadas

- Busca por texto (título, excerpt, conteúdo)
- Filtro por categoria
- Filtro por tag
- Paginação (9 posts por página)
- Limpar filtros
- URL params sincronizados (`?q=`, `?category=`, `?tag=`, `?page=`)
- Sticky sidebar

## 9. Arquivos a Modificar

1. `web/src/app/blog/page.tsx` — Adiciona HeroPost, redesign header, ajusta grid
2. `web/src/components/blog/BlogCard.tsx` — Redesign completo
3. `web/src/components/blog/HeroPost.tsx` — Novo componente
4. `web/src/components/blog/SearchBar.tsx` — Redesign com ícone
5. `web/src/components/blog/CategoryList.tsx` — Ícones + estilo ativo
6. `web/src/components/blog/TagCloud.tsx` — Tamanhos variáveis
7. `web/src/components/blog/BlogSidebar.tsx` — Reorganização

## 10. Dependências

- `lucide-react` (já instalado — ícones Search, Calendar, Clock)
