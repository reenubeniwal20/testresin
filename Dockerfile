FROM node:16-alpine AS builder-frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm build
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
ENTRYPOINT ["nginx", "-g", "daemon off;"]