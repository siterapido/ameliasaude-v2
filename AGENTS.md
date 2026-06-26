<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Agentes (obrigatório)

- Regras: `.cursor/rules/mandatory-agent-skills.mdc`, `context-mode-repo.mdc`
- Toda sessão: skills **context-mode** + **caveman** (`Read` nos `SKILL.md`); terminal/build/git read → MCP `ctx_*`
- App: `web/`

## Gotchas & Convenções

- **Vídeos / Mídia**: Arquivos de vídeo adicionados a `web/public/` devem ser comprimidos (ex: via `ffmpeg`) para ficarem abaixo do limite de 100MB do GitHub e otimizar o carregamento no site.
  - Exemplo de compressão: `ffmpeg -i input.mp4 -vcodec libx264 -crf 24 -preset medium -acodec aac -b:a 128k output.mp4`
