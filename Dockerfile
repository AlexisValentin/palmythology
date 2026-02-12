FROM node:20-alpine AS deps

RUN corepack enable && corepack prepare pnpm@10.28.2 --activate
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG STORYBLOK_TOKEN
ARG STORYBLOK_BASE_URL

ENV STORYBLOK_TOKEN=$STORYBLOK_TOKEN
ENV STORYBLOK_BASE_URL=$STORYBLOK_BASE_URL

RUN pnpm build

FROM node:20-alpine AS runner

RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/next.config.js ./

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
