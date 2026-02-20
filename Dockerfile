FROM node:20-alpine AS deps

RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.28.2 --activate && \
    apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG STORYBLOK_TOKEN
ARG STORYBLOK_BASE_URL

ENV STORYBLOK_TOKEN=$STORYBLOK_TOKEN \
    STORYBLOK_BASE_URL=$STORYBLOK_BASE_URL

RUN pnpm build

FROM node:20-alpine AS runner

RUN apk add --no-cache libc6-compat && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app

ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
