FROM oven/bun:1.1.13-debian AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .
RUN bun run build

FROM oven/bun:1.1.13-debian
WORKDIR /app
COPY --from=build /app/.output /app/.output
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
