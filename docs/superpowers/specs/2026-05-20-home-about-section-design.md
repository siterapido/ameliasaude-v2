# Design Spec — Seção Sobre na home (substitui `/quem-somos`)

**Data:** 2026-05-20  
**Escopo:** Inserir seção concisa “Sobre” na home logo após a Hero; remover a página `/quem-somos`; atualizar navegação e redirect.

**Arquivos principais:** `web/src/components/sections/About.tsx` (novo), `web/src/app/page.tsx`, `web/src/components/Navigation.tsx`, `web/next.config.ts`

---

## 1. Objetivo

1. Substituir a página dedicada **Quem Somos** por uma seção na landing (`#sobre`), posicionada **imediatamente após** `<Hero />`.
2. Manter o conteúdo institucional da página atual, **adaptado e resumido**: intro + três pilares (apenas título e frase curta por pilar).
3. Fundo **branco**, sem imagem, layout editorial centralizado.
4. Link do menu **“Sobre Nós”** aponta para `/#sobre`.
5. Rota antiga `/quem-somos` redireciona permanentemente para `/#sobre`.

---

## 2. Decisões de produto (validadas)

| Tópico | Decisão |
|--------|---------|
| Página `/quem-somos` | Remover |
| Profundidade do conteúdo | Intro + 3 pilares resumidos (sem parágrafos longos dos cards) |
| Imagem | Nenhuma |
| Layout | Bloco editorial centralizado (opção 1) |
| Fundo | `#FFFFFF` / `bg-white` |

---

## 3. Conteúdo

Fonte: `web/src/app/quem-somos/page.tsx`. Textos finais abaixo; parágrafo intro pode ser enxugado em implementação se ultrapassar ~3 linhas em desktop.

### 3.1 Intro (centralizada)

| Campo | Texto |
|-------|--------|
| Eyebrow | Conheça a Amélia |
| Título (`h2`) | Saúde completa com tecnologia inteligente e cuidado humanizado |
| Parágrafo | A Amélia Saúde nasce para transformar o cuidado com a saúde no Rio de Janeiro. Um projeto construído por profissionais com anos de experiência, unidos pelo propósito de criar uma operadora moderna, transparente e centrada nas pessoas. |

### 3.2 Pilares (grid 3 colunas em `lg+`, empilhado em mobile)

Cada item: **título** (`h3`) + **hook** (uma linha). Sem ícones decorativos grandes nem numeração `01/02/03` (YAGNI para versão concisa).

| Pilar | Hook |
|-------|------|
| Missão | Cuidado com propósito, gestão responsável. |
| Visão | Referência no RJ até 2030. |
| Valores | O que norteia cada decisão. |

**Não incluir** na home: corpo longo de cada pilar, hero fullscreen da página antiga, cards roxos com gradiente, logo decorativo no rodapé da seção antiga.

### 3.3 Dados

Constante local no componente (array `pillars`) ou arquivo `web/src/data/about.ts` se preferir reuso futuro. Para este escopo, **array no próprio `About.tsx`** é suficiente.

---

## 4. Layout e estilo

### 4.1 Estrutura

```
<section id="sobre" className="bg-white" padding clamp>
  <div max-w-[1200px] mx-auto>
    [intro: eyebrow + h2 + p] — text-center, max-w-3xl mx-auto
    [grid pilares] — mt-12/16, gap-8, 1 col → 3 cols lg
      cada pilar: borda-top ou divisor sutil, título display, hook sans muted
  </div>
</section>
```

### 4.2 Tokens e tipografia (alinhar a `Blog.tsx` / design guide)

| Elemento | Estilo |
|----------|--------|
| Eyebrow | `text-[11px] uppercase tracking-[0.16em] text-[var(--amelia-purple)] font-semibold` + pill opcional leve (`border border-[var(--amelia-purple)]/25 bg-[var(--amelia-purple)]/[0.07]`) |
| `h2` | `font-display`, `text-[var(--amelia-ink)]`, `clamp(2rem, 4.5vw, 3.25rem)` |
| Parágrafo | `font-sans font-light text-[var(--amelia-muted)]` ou `#5c5470` |
| `h3` pilar | `font-display text-[var(--amelia-purple)]` ~`1.5–1.75rem` |
| Hook | `font-sans text-sm text-[var(--amelia-muted)]` |

### 4.3 Pilares — tratamento visual leve

- Separador: `border-t border-[#e4dcf5]` ou `border-[var(--amelia-line)]` no topo de cada coluna (em mobile, entre itens).
- Sem fundo roxo nos cards; contraste vem da tipografia.
- Opcional: linha horizontal fina entre intro e grid (`max-w-xs mx-auto`).

### 4.4 Espaçamento

- Padding vertical: `clamp(5rem, 10vh, 7rem)` — mesmo padrão de `Blog`.
- Padding horizontal: `clamp(1.5rem, 5vw, 5rem)`.

### 4.5 Motion

- `staggerContainer` + `fadeUp` + `viewportConfig` de `@/lib/motion` (padrão das outras seções).
- Sem animações decorativas (floating shapes, círculos) da página antiga.

---

## 5. Arquitetura e integração

### 5.1 Novo componente

`web/src/components/sections/About.tsx`

- `"use client"` (Framer Motion).
- Export: `export function About()`.
- `id="sobre"` no `<section>`.

### 5.2 Home

`web/src/app/page.tsx`:

```tsx
<Hero />
<About />
<Network />
...
```

### 5.3 Navegação

`web/src/components/Navigation.tsx`:

- `{ label: "Sobre Nós", href: "#sobre" }`.
- Remover `isQuemSomos` e qualquer branch que force texto branco no header por estar em `/quem-somos`.
- Em páginas internas (blog, legal), `#sobre` deve resolver para `/#sobre` (href absoluto da home: usar `/#sobre` em vez de `#sobre` quando `pathname !== "/"` **ou** sempre `href="/#sobre"` para funcionar de qualquer rota).

**Decisão:** `href="/#sobre"` em todos os contextos — funciona na home e em subpáginas.

### 5.4 Remoção da página

- Deletar `web/src/app/quem-somos/page.tsx` (e pasta se vazia).

### 5.5 Redirect

`web/next.config.ts`:

```ts
async redirects() {
  return [
    {
      source: "/quem-somos",
      destination: "/#sobre",
      permanent: true,
    },
  ];
},
```

### 5.6 Outras referências

- Buscar no repo `quem-somos` e atualizar links (Footer, sitemap, testes) se existirem.
- `web/src/components/Footer.tsx`: atualizar link “Sobre” se apontar para `/quem-somos`.

---

## 6. Acessibilidade

- `section` com `aria-labelledby` apontando para o `h2` da intro.
- Hierarquia: um `h2` na seção, `h3` por pilar.
- Contraste texto `#1A1A1A` / muted sobre `#FFFFFF` (WCAG AA, conforme `DESIGN-GUIDE.md`).
- Âncora `#sobre`: garantir `scroll-margin-top` (~80px) no `section` para não ficar sob o header fixo.

---

## 7. Tratamento de erros e edge cases

| Caso | Comportamento |
|------|----------------|
| Visitante em `/quem-somos` | 308/301 → `/#sobre` |
| Menu em subpágina | `/#sobre` leva à home e rola até a seção |
| Hero com header transparente | Seção branca abaixo mantém legibilidade do nav ao rolar (sem mudança especial) |
| JS desabilitado | Conteúdo estático visível; redirect server-side ainda funciona |

---

## 8. Critérios de aceite

1. Home exibe seção branca “Sobre” entre Hero e Rede.
2. Texto intro + 3 pilares (só hooks) visíveis em mobile e desktop.
3. Clique em “Sobre Nós” no menu rola para `#sobre` (ou navega para home + âncora).
4. `/quem-somos` não renderiza página própria; redireciona para `/#sobre`.
5. Nenhuma imagem na seção.
6. Altura da seção perceptivelmente menor que a antiga página Quem Somos.
7. `npm run build` no pacote `web` sem erros.

---

## 9. Testes manuais

1. Abrir `/` — verificar ordem Hero → Sobre → Rede.
2. Clicar “Sobre Nós” no header (desktop e mobile).
3. Acessar `/quem-somos` — confirmar redirect.
4. Abrir `/blog` e clicar “Sobre Nós” — deve ir à home na âncora correta.
5. Redimensionar viewport: pilares em coluna única no mobile.
6. Verificar que o título da seção não fica oculto sob o header fixo ao navegar por âncora.

---

## 10. Fora de escopo

- Página expandida de Quem Somos.
- Ícones SVG dos pilares da página antiga.
- Imagem `familia-pexels.jpg` nesta seção.
- Alteração de copy das outras seções da home.
- SEO metadata dedicada para “quem somos” (pode ser tarefa futura na metadata da home).

---

## 11. Estimativa de mudança

~5 arquivos: 1 novo componente, 1 página alterada, 1 nav, 1 config redirect, 1 delete + possíveis links no Footer.
