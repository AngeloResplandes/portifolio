# Portifolio - Frontend

- Ajustar readme.md

## Deploy no Railway

Este projeto usa Vite + React. O `Dockerfile` já está preparado para o Railway: ele compila o app e serve os arquivos estáticos com `serve`, ouvindo a porta definida pela variável de ambiente `PORT` (que o Railway fornece automaticamente).

Passos para publicar:

1. Faça push deste repositório para o GitHub (ou GitLab/Bitbucket).
2. Acesse o Railway e crie um novo projeto.
3. Escolha "Deploy from Repo" e selecione este repositório.
4. O Railway detectará o `Dockerfile` automaticamente. Confirme o deploy.
5. Sem variáveis extras: o `Dockerfile` usa `PORT` e já faz o bind em `0.0.0.0`.

Após o build, o serviço ficará disponível na URL do Railway.

## Rodar localmente com Docker (opcional)

Opcionalmente, você pode testar a imagem localmente:

```bash
# Build da imagem
docker build -t portifolio:local .

# Rodar a imagem (expondo a porta 8080)
docker run --rm -e PORT=8080 -p 8080:8080 portifolio:local
```

Depois, acesse http://localhost:8080.
