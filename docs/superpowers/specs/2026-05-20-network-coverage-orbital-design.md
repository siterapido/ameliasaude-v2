# Design Spec — Seção Rede: mapa orbital e fundo branco

**Data:** 2026-05-20  
**Escopo:** Reposicionar três cidades no mapa orbital (sem mover as demais), inverter a seção `#rede` para fundo branco com contraste via paleta Amélia.

**Arquivos principais:** `web/src/components/sections/Network.tsx`, `web/src/components/sections/CoverageOrbital.tsx`

---

## 1. Objetivo

1. **Niterói** ocupa o arco hoje calculado para **Nilópolis** (entre Magé e Mesquita).
2. **Nilópolis** fica ao lado de **Belford Roxo** (mesmo ângulo do anel interno, raio do anel externo).
3. **Mesquita** recebe micro-ajuste em direção ao meio do arco entre **Duque de Caxias** e **Nova Iguaçu** (leve, ~2–3°).
4. **Todas as outras cidades** mantêm posição atual (ordem do array, `buildDoubleOrbit`, tweaks de Magé, etc.).
5. Seção **Rede** com fundo `#FFFFFF` e textos/elementos orbitais recoloridos com tokens `--amelia-*`.

---

## 2. Restrições (não negociáveis)

- Não alterar a ordem do array `cities` nem os raios dos anéis (28% interno / 43% externo).
- Não reordenar cidades para “forçar” posição (evita deslocar as outras nove).
- Não alterar `left`/`top` de cidades fora Niterói, Nilópolis e Mesquita.

---

## 3. Posicionamento das cidades

### 3.1 Abordagem técnica (aprovada)

Reaproveitar funções de posicionamento em coordenadas polares (padrão existente em `CoverageOrbital.tsx`).

| Cidade | Função / mecanismo | Comportamento |
|--------|-------------------|---------------|
| Niterói | Renomear lógica de `placeNilopolisBetweenMageAndMesquita` → `placeNiteroiBetweenMageAndMesquita` | Ângulo médio no arco curto entre Magé e Mesquita (após `applyOrbitPolarTweaks`); raio médio entre os dois |
| Nilópolis | Nova `placeNilopolisBesideBelfordRoxo` | Ler ângulo de Belford Roxo (anel interno); aplicar no raio do anel externo de Nilópolis; offset angular opcional de 6–10° se houver sobreposição com marcador vizinho |
| Mesquita | Atualizar `ORBIT_POLAR_TWEAKS["Mesquita"]` + opcional `placeMesquitaTowardCaxiasAndNovaIguacu` | Substituir tweak atual (`dAngleDeg: 4`) por deslocamento ~2–3° em direção ao ângulo médio entre Duque de Caxias e Nova Iguaçu (anel interno como referência); manter `dRadius` mínimo ou igual ao atual (0.4) |
| Demais | — | Sem mudança |

### 3.2 Pipeline de posicionamento (inalterado exceto alvos)

```
buildDoubleOrbit(28, 43)
  → applyOrbitPolarTweaks
  → placeNiteroiBetweenMageAndMesquita
  → placeNilopolisBesideBelfordRoxo
  → (opcional) placeMesquitaTowardCaxiasAndNovaIguacu se tweak isolado não bastar
```

### 3.3 Critérios de aceite visual

- Niterói aparece no arco entre Magé e Mesquita (onde Nilópolis estava).
- Nilópolis aparece visualmente “ao lado” de Belford Roxo no mapa.
- Mesquita desloca-se levemente em direção ao setor Caxias ↔ Nova Iguaçu; mudança perceptível só em comparação lado a lado.
- Rio, Belford, Caxias, Nova Iguaçu, São Gonçalo, São João, Magé e Rio de Janeiro permanecem nas mesmas coordenadas % que antes desta mudança.

---

## 4. Fundo branco e contraste (paleta Amélia)

Fundo da seção: **`#FFFFFF`** (`--amelia-white`), conforme escolha do produto.

### 4.1 `Network.tsx`

| Elemento | Antes | Depois |
|----------|-------|--------|
| `section#rede` background | `#7B6BB2` | `bg-white` |
| Eyebrow “Cobertura” | `text-white/85` | `text-[var(--amelia-purple)]` |
| `h2` | `text-white` | `text-[var(--amelia-ink)]` |
| Parágrafo | `text-white/80` | `text-[var(--amelia-body)]` ou `text-[var(--amelia-muted)]` |
| Botão CTA | outline branco, hover branco | outline `var(--amelia-purple)`, texto roxo, hover preenchido roxo + texto branco (padrão `Blog.tsx`) |

### 4.2 `CoverageOrbital.tsx` (tema claro)

Introduzir constantes ou props de tema **light** (default nesta seção):

| Elemento | Antes (sobre lilás) | Depois (sobre branco) |
|----------|---------------------|----------------------|
| Anéis concêntricos | `rgba(255,255,255,0.35/0.2)` | `rgba(123,107,178,0.22)` e `0.12` (ou `var(--amelia-line)` reforçado) |
| Espiral sonar (`ON_PURPLE_STROKE`) | `#ffffff` | `var(--amelia-purple)` com `strokeOpacity` ~0.4–0.5 |
| Glow do anel interno | branco semitransparente | roxo muito suave `rgba(123,107,178,0.06)` |
| Labels das cidades | `text-white/90` | `text-[var(--amelia-deep)]` |
| Borda avatares | `border-white` | `border-[var(--amelia-line)]` ou `border-[rgba(123,107,178,0.25)]` |
| Sombra avatares | roxa existente | manter ou levemente intensificar para legibilidade no branco |
| Hub central (logo) | branco | manter (já contrasta) |

Nenhuma cor nova fora de `globals.css` / `DESIGN-GUIDE.md`.

### 4.3 Acessibilidade

- Texto `#1A1A1A` / `#3A3A3A` sobre `#FFFFFF`: WCAG AA (design guide).
- Contraste dos traços orbitais: opacidade mínima ~0.22 nos anéis para visibilidade sem poluir.

---

## 5. Fora de escopo

- Troca de imagens das cidades (Unsplash vs assets locais).
- Lista de hospitais no CTA (“em breve”).
- Alteração de copy ou animações Framer além do necessário para o tema claro.
- Mudança de layout grid (texto esquerda / orbital direita).

---

## 6. Verificação manual

1. Abrir home → seção **Rede** (`#rede`).
2. Confirmar fundo branco e textos legíveis (título, subtítulo, CTA).
3. Confirmar Niterói entre Magé e Mesquita; Nilópolis junto a Belford Roxo; Mesquita levemente entre Caxias e Nova Iguaçu.
4. Comparar posições das outras 7 cidades com screenshot/commit anterior (sem drift).
5. `prefers-reduced-motion`: animações continuam respeitando `useReducedMotion`.

---

## 7. Decisões registradas

| Decisão | Escolha |
|---------|---------|
| Fundo da seção | `#FFFFFF` (branco puro) |
| Abordagem de posição | Funções polares (A), não array reorder nem coords fixas |
| Paleta | Tokens `--amelia-*` existentes |
