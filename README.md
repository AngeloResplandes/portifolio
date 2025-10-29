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
