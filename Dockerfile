FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/.output /app/.output
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]