# Portifolio - Frontend

![React](https://img.shields.io/badge/-React-45b8d8?style=plastic&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=plastic&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=plastic&logo=docker&logoColor=white)

Um repositório do meu portfólio pessoal, desenvolvido para apresentar 
minhas habilidades, objetivos e trajetória como desenvolvedor.

## Início Rápido

Execute o projeto com o npm (é necessário ter o [Node.js 22v](https://nodejs.org/) instalado):
```bash
npm install       # Instale as dependências
npm run build     # Faça o build do projeto
npm run preview   # Execute o projeto
```
* Depois, acesse `http://localhost:4173/`

Ou execute com o [Docker](https://www.docker.com/):
```bash
docker build -t portifolio:local .                            # Build da imagem
docker run --rm -e PORT=8080 -p 8080:8080 portifolio:local    # Rodar a imagem (expondo a porta 8080)
```

* Depois, acesse `http://localhost:8080`
