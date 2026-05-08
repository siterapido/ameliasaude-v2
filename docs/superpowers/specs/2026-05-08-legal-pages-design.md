# Design — Páginas Legais (Privacidade, Termos, Cookies, LGPD)

**Data:** 2026-05-08
**Status:** Aprovado pelo usuário
**Escopo:** Criação de 4 páginas legais estáticas para o site institucional da Amélia Saúde.

---

## 1. Contexto

O site da Amélia Saúde (Next.js + React + Tailwind) possui links para páginas legais no rodapé (`Footer.tsx`), mas atualmente eles apontam para o domínio principal sem rotas específicas. Este projeto cria as 4 páginas reais com conteúdo legal robusto e formato híbrido (resumo acessível + texto legal completo).

---

## 2. Requisitos

### 2.1 Páginas
1. **Política de Privacidade** (`/privacidade`)
2. **Termos de Uso** (`/termos`)
3. **Política de Cookies** (`/cookies`)
4. **LGPD** (`/lgpd`)

### 2.2 Formato de conteúdo
- **Híbrido:** cada página inicia com um "Resumo para você" (linguagem simples, caixa de destaque) seguido do texto legal completo.
- O resumo não substitui o texto legal; serve como ponte de compreensão.

### 2.3 Integração
- Usar `Navigation` e `Footer` existentes.
- Atualizar `legalLinks` em `Footer.tsx` para apontar para as novas rotas internas.
- Manter identidade visual do site (fontes Instrument Serif / DM Sans, cores Amélia).

---

## 3. Abordagem escolhida

**B — Layout compartilhado + conteúdo estruturado em dados.**

Um componente `LegalPageLayout` reutilizável recebe metadados e seções via props. O conteúdo de cada página fica em `data/legal-content.ts`. Isso separa conteúdo de apresentação, garante consistência visual e facilita manutenção futura pelo time jurídico/marketing.

---

## 4. Arquitetura de arquivos

```
web/src/
  app/
    privacidade/
      page.tsx          # importa conteúdo + layout
    termos/
      page.tsx
    cookies/
      page.tsx
    lgpd/
      page.tsx
  components/
    legal/
      LegalPageLayout.tsx   # shell visual compartilhado
  data/
    legal-content.ts        # objetos com conteúdo das 4 páginas
```

---

## 5. Componente LegalPageLayout

### Props
```ts
interface LegalPageLayoutProps {
  title: string;                 // ex: "Política de Privacidade"
  subtitle?: string;             // descrição curta abaixo do título
  summary: string[];             // bullets do resumo simplificado
  sections: LegalSection[];      // corpo legal
  lastUpdated: string;           // "08 de maio de 2026"
  alternateLinks?: { label: string; href: string }[];
}

interface LegalSection {
  heading: string;
  content: React.ReactNode;      // permite listas, parágrafos, links
}
```

### Estrutura visual
1. **Navigation** (fixa, fundo branco)
2. **Hero interno**
   - Título `font-display` em tom roxo (`#7b6bb2`)
   - Subtítulo leve
   - Caixa de resumo com:
     - Fundo `rgba(123, 107, 178, 0.06)`
     - Borda esquerda 3px `#7b6bb2`
     - Título "Resumo para você"
     - Lista de bullets em linguagem simples
3. **Navegação entre políticas**
   - Barra horizontal com links para as outras 3 páginas
   - Indicador visual na página atual
4. **Conteúdo legal**
   - Container centralizado, `max-w-[780px]` para leitura confortável
   - `h2` para seções principais, `h3` para subseções
   - Tipografia: `font-sans` 16-17px, line-height 1.7
   - Separação entre seções via `border-top` sutil (`--amelia-line`)
5. **Footer** padrão

---

## 6. Estilo e tokens

| Elemento | Valor |
|----------|-------|
| Fundo da página | `bg-white` |
| Texto principal | `--amelia-ink` (`#1a1a1a`) |
| Títulos | `font-display`, `#7b6bb2` ou `#1a1a1a` |
| Corpo | `font-sans`, `16px`, `line-height: 1.7` |
| Largura máxima do texto | `780px` |
| Espaçamento entre seções | `padding: 2.5rem 0` |
| Borda de separação | `1px solid var(--amelia-line)` |
| Caixa de resumo | `bg-[rgba(123,107,178,0.06)]`, `border-l-[3px] border-[#7b6bb2]`, `rounded-r-lg` |
| Meta info (atualização) | `text-sm text-[#8a8a8a]` |

---

## 7. SEO e Metadados

Cada página exporta `metadata` do Next.js:
- `title`: "Política de Privacidade — Amélia Saúde"
- `description`: resumo de ~150 caracteres
- `robots`: `index, follow` (páginas legais devem ser indexadas)
- `alternates`: canonical URL

---

## 8. Conteúdo das páginas (estrutura)

### 8.1 Política de Privacidade
**Resumo:** Coletamos dados para operar seu plano de saúde, protegemos com criptografia, não vendemos dados e você pode solicitar acesso ou exclusão.

**Seções legais:**
1. Introdução
2. Dados coletados (identificação, contato, saúde, financeiros, navegação)
3. Base legal (execução de contrato, obrigação legal, consentimento, legítimo interesse)
4. Finalidades (cadastro, atendimento, comunicação, cumprimento legal, melhorias)
5. Compartilhamento (prestadores, ANS, operadoras de saúde, autoridades)
6. Retenção e exclusão
7. Direitos do titular (acesso, correção, exclusão, portabilidade, revogação)
8. Segurança (criptografia, controles de acesso, logs)
9. Cookies e tecnologias de rastreamento
10. Alterações desta política
11. Contato do Encarregado (DPO)

### 8.2 Termos de Uso
**Resumo:** Ao usar nosso site, você concorda em fornecer informações verdadeiras, não usar para fins ilícitos e entender que o conteúdo é informativo, não substituindo orientação médica.

**Seções legais:**
1. Aceitação dos termos
2. Objeto (uso do site e serviços digitais)
3. Cadastro e responsabilidade pelas informações
4. Propriedade intelectual
5. Limitação de responsabilidade
6. Links externos
7. Modificações dos termos
8. Lei aplicável e foro

### 8.3 Política de Cookies
**Resumo:** Usamos cookies para o site funcionar, entender como você navega e oferecer uma experiência melhor. Você pode aceitar, recusar ou gerenciar a qualquer momento.

**Seções legais:**
1. O que são cookies
2. Tipos de cookies utilizados (necessários, analíticos, marketing, funcionalidade)
3. Como e por que usamos cookies
4. Cookies de terceiros
5. Gerenciamento de preferências (como desativar no navegador)
6. Alterações na política

### 8.4 LGPD (Lei Geral de Proteção de Dados)
**Resumo:** A LGPD protege seus dados pessoais no Brasil. Explicamos como ela se aplica aos nossos serviços e como exercer seus direitos.

**Seções legais:**
1. O que é a LGPD e nosso compromisso
2. Dados pessoais sensíveis (saúde) e tratamento especial
3. Bases legais aplicáveis
4. Direitos do titular detalhados (art. 18)
5. Como exercer seus direitos
6. Encarregado de dados (DPO)
7. Segurança e boas práticas
8. Transferência internacional (se aplicável)
9. Canais de atendimento específicos para LGPD

---

## 9. Acessibilidade

- Hierarquia de headings semântica (`h1` no título da página, `h2` para seções, `h3` para subseções)
- Links com texto descritivo
- Contraste mínimo 4.5:1 para texto corrido
- Focus rings visíveis em todos os links interativos
- Skip-link opcional para ir direto ao conteúdo

---

## 10. Checklist de implementação

- [ ] Criar `LegalPageLayout.tsx`
- [ ] Criar `data/legal-content.ts` com conteúdo das 4 páginas
- [ ] Criar `app/privacidade/page.tsx`
- [ ] Criar `app/termos/page.tsx`
- [ ] Criar `app/cookies/page.tsx`
- [ ] Criar `app/lgpd/page.tsx`
- [ ] Atualizar `Footer.tsx` — rotas dos `legalLinks`
- [ ] Verificar se `globals.css` não quebra o layout (páginas legais não devem ter `min-height: 100svh`)
- [ ] Testar responsivo (mobile / tablet / desktop)
- [ ] Testar links de navegação entre páginas legais
- [ ] Verificar metadados SEO de cada página
