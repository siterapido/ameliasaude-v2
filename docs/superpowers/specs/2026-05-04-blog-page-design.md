# Design: Página de Blog Completa

## Visão Geral

Melhorar a página de blog do site Amélia Saúde com sidebar, pesquisa, paginação e estrutura completa.

## Estrutura do Layout

### Layout Geral
- **Desktop (>1024px):** 2 colunas - conteúdo principal (70%) + sidebar (30%)
- **Tablet (768px-1024px):** 2 colunas com proporções ajustadas (65% / 35%)
- **Mobile (<768px):** 1 coluna - conteúdo principal sopra sidebar

### Header da Página
- Título "Blog Amélia Saúde" com subtítulo descritivo
- Barra de pesquisa com input de texto + botão "Buscar"

### Área Principal (Lista de Posts)
- Grid responsivo:
  - Desktop: 3 colunas
  - Tablet: 2 colunas
  - Mobile: 1 coluna
- Cards com: imagem, categoria, título, excerpt (2 linhas), data + tempo de leitura
- Espaçamento: gap-8 entre cards

### Paginação
- Númeração de páginas (1, 2, 3...)
- 9 posts por página
- Estilo: botões numerados com highlighted na página atual

### Sidebar (Desktop)
Posição: direita, após conteúdo principal

**1. Categorias**
- Lista de categorias clicáveis
- Cada categoria exibe contador de posts entre parênteses
- Categoria ativa com destaque visual

**2. Arquivo**
- Posts agrupados por mês/ano
- Formato: "Março 2026 (2)"
- Ordenado do mais recente para o mais antigo

**3. Tags**
- Nuvem de tags
- Tags clicáveis que filtram posts
- Estilo: pills/tags menores

### Mobile
- Sidebar aparece como acordeão sopo dos posts ou como menu colapsável
- Barra de pesquisa sopra a lista de posts
- Navegação de categorias via select ou tabs

## Funcionalidades

### Pesquisa
- Busca por título e conteúdo do post
- Ao clicar em "Buscar": filtra posts que correspondem à query
- Exibe mensagem "Nenhum resultado encontrado" se não houver matches
- Mantém termo de busca visível quando há resultados

### Filtragem por Categoria
- Clicar na categoria na sidebar filtra posts
- Atualiza URL com query param (?category=...)
-.Remove filtro ao clicar novamente ou em "Todos"

### Filtragem por Tag
- Clicar em tag filtra posts com aquela tag
- Multiple tags: operador OR (mostra posts com qualquer uma das tags)

### Paginação
- URLs com page param (?page=2)
- Botões Anterior/Próximo quando aplicável
- Scroll to top ao trocar de página

## Componentes a Criar/Modificar

1. **SearchBar** - componente de pesquisa reutilizável
2. **CategoryList** - lista de categorias com contadores
3. **ArchiveList** - arquivo por mês/ano
4. **TagCloud** - nuvem de tags
5. **Pagination** - componente de paginação
6. **BlogCard** - card de post individual (já existe parcialmente)

## Dados

### Categorias do Blog
- Bem-estar
- Telemedicina
- Prevenção
- (adicionar mais conforme posts forem adicionados)

### Arquivo (baseado nos posts atuais)
- Março 2026: 3 posts

### Tags (extraídas dos posts)
- plano de saúde
- família
- telemedicina
- consultas online
- prevenção
- check-up
- exames

## Estilo Visual

- Seguir paleta de cores existente: roxo (#7b6bb2), tons de roxo claros
- Tipografia: font-sans para títulos e font-light para textos
- Espaçamento consistente com o resto do site
- Hover effects nos cards e links
- Transições suaves (300ms)

## Acceptance Criteria

1. Página exibe 9 posts por página com paginação
2. Pesquisa filtra posts por título e conteúdo
3. Sidebar exibe categorias com contadores
4. Sidebar exibe arquivo por mês/ano
5. Sidebar exibe nuvem de tags
6. Layout é responsivo (desktop/tablet/mobile)
7. Categorias/tags são clicáveis e filtram posts
8. URL atualiza com parâmetros de filtro/paginação
9. Mobile: sidebar acessível via acordeão ou menu
10. Nenhum resultado mostra mensagem apropriada