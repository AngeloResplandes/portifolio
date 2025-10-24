FROM node:22 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:22-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/public ./public
EXPOSE 4173
CMD ["sh", "-c", "npm run preview"]