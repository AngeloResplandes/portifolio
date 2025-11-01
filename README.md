# Portifolio - Frontend

- Ajustar readme.md

## Dockerfile

```bash
# Build da imagem
docker build -t portifolio:local .

# Rodar a imagem (expondo a porta 8080)
docker run --rm -e PORT=8080 -p 8080:8080 portifolio:local
```

Depois, acesse http://localhost:8080.

## Responsividade (Mobile)

Este projeto foi atualizado para um layout mobile-first com as seguintes melhorias:

- Header fixo com altura consistente e rótulos ocultos em telas pequenas (ícones permanecem visíveis).
- Espaçamento superior global para evitar sobreposição do conteúdo com o header.
- Tipografia responsiva nas seções principais e limites de largura seguros com padding lateral em mobile.
- Imagens tornam-se fluidas automaticamente e escalam conforme o tamanho da tela.
- Seções "Sobre mim" e "Experiências" usam colunas em desktop e empilham em dispositivos móveis.

Breakpoints usados (Tailwind):

- sm: ≥ 640px
- md: ≥ 768px

Caso precise ajustar tamanhos/paddings, procure pelas classes responsivas em:

- `src/components/Header.tsx`
- `src/components/Main.tsx`
- `src/components/AboutMe.tsx`
- `src/components/Experience.tsx`
- `src/components/Footer.tsx`

### Desenvolvimento

Para rodar em desenvolvimento:

```bash
npm install
npm run dev
```

Para gerar build de produção e validar tipos:

```bash
npm run build
```
