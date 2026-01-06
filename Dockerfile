FROM node:22-alpine AS build
WORKDIR /app
RUN npm install -g bun
RUN apk add --no-cache git netcat-openbsd
COPY package*.json bun.lock* ./
RUN bun i
COPY . .
RUN bun run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/.output /app/.output
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]