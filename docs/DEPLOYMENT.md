# Deployment Documentation

Palmythology supports multiple deployment platforms with automated pipelines for different environments.

## Deployment Platforms

### Vercel (Primary)

**Vercel** is the primary deployment platform for Palmythology:

- **Free tier** suitable for public projects
- **Automatic deployments** from GitHub
- **Preview deployments** for all branches
- **Global CDN** for fast content delivery
- **Serverless functions** for API routes
- **Built-in monitoring** and analytics

**Website:** https://vercel.com/

#### Production Deployment

**Branch:** `master`

**Deployment Trigger:**
- Merge pull request to `master`
- Vercel automatically builds and deploys
- No manual steps required

**Production URL:** https://palmythology.com

**Process:**
1. Create PR from `develop` → `master`
2. Team reviews and approves PR
3. Merge to `master`
4. Vercel automatically builds and deploys
5. Monitor at https://vercel.com/dashboard

#### Preview Deployments

**Branches:** All non-master branches (`develop`, feature branches, etc.)

**Deployment Trigger:**
- Push to any non-master branch
- Vercel automatically builds and deploys

**Preview URL Pattern:**
```
https://<branch-name>-palmythology.vercel.app
```

**Examples:**
```
feat/godle-improvement  → https://feat-godle-improvement-palmythology.vercel.app
develop                 → https://develop-palmythology.vercel.app
bugfix/cache-issue      → https://bugfix-cache-issue-palmythology.vercel.app
```

**Benefits:**
- Test changes before merging to production
- Share preview links with team/clients
- Automatic cleanup when branch is deleted

#### Environment Variables

Set environment variables in Vercel dashboard:

**Settings → Environment Variables**

Required variables:
```
ENV                    = production
STORYBLOK_BASE_URL     = https://api.storyblok.com/v2/cdn/stories/
STORYBLOK_TOKEN        = <your-token>
REVALIDATION_SECRET    = <your-secret>
DISCORD_WEBHOOK_URL    = <discord-webhook>
CRON_SECRET            = <cron-secret>
```

**For different environments:**
- **Production:** Set values for `master` branch
- **Preview:** Set values for all other branches
- **Override:** Can override per-branch if needed

## Docker Deployment

### Docker Image

Palmythology includes a `Dockerfile` for containerized deployment:

**File:** [Dockerfile](../Dockerfile)

### Multi-Stage Build

The Dockerfile uses a three-stage build process:

#### Stage 1: Dependencies

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
```

**Purpose:** Install and cache dependencies

#### Stage 2: Builder

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ARG STORYBLOK_TOKEN
ARG STORYBLOK_BASE_URL
ENV STORYBLOK_TOKEN=$STORYBLOK_TOKEN
ENV STORYBLOK_BASE_URL=$STORYBLOK_BASE_URL
RUN pnpm build
```

**Purpose:** Build Next.js application

**Arguments:**
- `STORYBLOK_TOKEN` - CMS API token
- `STORYBLOK_BASE_URL` - CMS API endpoint

#### Stage 3: Runner

```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY server.js .
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
```

**Purpose:** Minimal production image

**Features:**
- Non-root user (`nextjs:1001`) for security
- Exposes port 3000
- Runs custom server (`server.js`)

### Building Docker Image

```bash
# Build with environment variables
docker build \
  --build-arg STORYBLOK_TOKEN=<token> \
  --build-arg STORYBLOK_BASE_URL=https://api.storyblok.com/v2/cdn/stories/ \
  -t palmythology:latest .

# Run container
docker run \
  -p 3000:3000 \
  -e ENV=production \
  -e STORYBLOK_TOKEN=<token> \
  -e STORYBLOK_BASE_URL=https://api.storyblok.com/v2/cdn/stories/ \
  -e DISCORD_WEBHOOK_URL=<webhook> \
  palmythology:latest
```

### Docker Compose (Optional)

For local development with Docker:

```yaml
version: "3.8"

services:
  palmythology:
    build:
      context: .
      args:
        STORYBLOK_TOKEN: ${STORYBLOK_TOKEN}
        STORYBLOK_BASE_URL: ${STORYBLOK_BASE_URL}
    ports:
      - "3000:3000"
    environment:
      ENV: dev
      STORYBLOK_TOKEN: ${STORYBLOK_TOKEN}
      STORYBLOK_BASE_URL: ${STORYBLOK_BASE_URL}
```

Run with:
```bash
docker-compose up
```

### Deployment Platforms Using Docker

Popular Docker-based platforms:

- **Dokploy** - Simple Docker deployments
- **Railway** - Deploy from GitHub
- **Render** - Container hosting
- **Heroku** - (deprecated but still works)
- **AWS ECS** - Container orchestration
- **Google Cloud Run** - Serverless containers
- **DigitalOcean App Platform** - Simple deployments

## Custom Server

### server.js

Palmythology uses a custom Next.js server:

**File:** [server.js](../server.js)

**Purpose:**
- Handle production server
- Apply security headers
- Configure HTTP/2 push
- Customize request handling

**Features:**
- Port 3000 (customizable)
- Gzip compression
- Cache headers
- Security headers

Run with:
```bash
node server.js
```

## Environment Configuration

### Development Environment

```bash
ENV=dev
STORYBLOK_BASE_URL=https://api.storyblok.com/v2/cdn/stories/
STORYBLOK_TOKEN=<dev-token>
REVALIDATION_SECRET=dev-secret
DISCORD_WEBHOOK_URL=<test-webhook>
CRON_SECRET=dev-cron-secret
```

### Production Environment

```bash
ENV=production
STORYBLOK_BASE_URL=https://api.storyblok.com/v2/cdn/stories/
STORYBLOK_TOKEN=<prod-token>
REVALIDATION_SECRET=<secure-random-string>
DISCORD_WEBHOOK_URL=<production-webhook>
CRON_SECRET=<secure-random-string>
```

### Environment File Template

See [.env.exemple](../.env.exemple) for the template:

```bash
cp .env.exemple .env.local
# Edit .env.local with your values
```

**Never commit `.env.local`** - Add to `.gitignore`

## Cache Invalidation

### Webhook Endpoint

**URL:** `https://palmythology.com/api/revalidate`

**Authentication:** `secret=<REVALIDATION_SECRET>`

### Storyblok Integration

1. **In Storyblok dashboard:**
   - Settings → Webhooks
   - Create webhook

2. **Webhook URL:**
   ```
   https://palmythology.com/api/revalidate?secret=<REVALIDATION_SECRET>&type=cards
   ```

3. **Triggers:**
   - Story published
   - Story unpublished
   - Story deleted

4. **Delivery:**
   - Automatic on content changes
   - Clears cached content immediately

## Continuous Integration

### GitHub Actions

**.github/workflows/** - CI/CD pipelines

#### Godle Discord Workflow

**File:** [.github/workflows/godle-discord.yml](.github/workflows/godle-discord.yml)

**Purpose:** Send daily Discord notification at midnight Paris time

**Schedule:** Runs at 22:00 and 23:00 UTC daily

**Configuration:**
- Check if current Paris time is midnight
- Send webhook to Discord
- Reveals yesterday's Godle entity

**Secrets Required:**
- `CRON_SECRET` - Webhook authentication
- `DISCORD_WEBHOOK_URL` - Discord webhook endpoint

### Manual Deployments

To deploy manually from GitHub Actions:

1. Go to **Actions** tab
2. Select workflow
3. Click "Run workflow"
4. Choose branch and configure (if needed)
5. Click "Run workflow"

## Monitoring

### Vercel Dashboard

Monitor production at https://vercel.com/dashboard:

- **Deployments:** See all deployments with status
- **Function Logs:** View serverless function logs
- **Analytics:** Performance metrics
- **Alerts:** Set up notifications for errors

### Application Monitoring

Consider adding:

- **Sentry** - Error tracking
- **Datadog** - Performance monitoring
- **New Relic** - Application performance
- **Plausible** - Web analytics (already integrated)

### Health Checks

Check application health:

```bash
curl https://palmythology.com/
# Should return 200 OK with HTML content
```

## Performance Optimization

### Image Optimization

Next.js automatically optimizes images via Vercel:

- **WebP conversion** - Modern format
- **Responsive images** - Multiple sizes
- **Lazy loading** - Load on demand

### Caching

Configure caching in [next.config.js](../next.config.js):

```javascript
// ISR revalidation times
export const revalidate = 86400  // cards: 1 day
export const revalidate = 604800 // pantheons: 7 days
```

### CDN

Vercel's global CDN automatically:

- Caches static assets
- Serves from nearest location
- Updates when content changes

## Rollback Strategy

If deployment has issues:

### On Vercel

1. Go to **Deployments** tab
2. Find previous working deployment
3. Click **"Promote to Production"**
4. Verify changes are reverted

### Automatic Rollback

Vercel can automatically rollback if health check fails:

1. **Configure health check URL:**
   - Settings → Production Deployments
   - Set health check endpoint

2. **Enable automatic rollback:**
   - Vercel monitors endpoint
   - Automatic rollback on failure

## Deployment Checklist

Before deploying to production:

- [ ] All tests passing (`pnpm test`)
- [ ] Code formatted (`pnpm biome`)
- [ ] TypeScript checks pass (`pnpm build`)
- [ ] No console errors or warnings
- [ ] Environment variables configured
- [ ] Cache secrets set correctly
- [ ] PR reviewed and approved
- [ ] Merge to `master` branch
- [ ] Monitor Vercel deployment dashboard
- [ ] Verify production site works
- [ ] Check Plausible analytics for traffic

## Disaster Recovery

### Backup Strategy

- **GitHub:** Source code backed up automatically
- **Storyblok:** Content backed up by Storyblok
- **Database:** No database (static content only)

### Recovery Procedures

**If production is down:**

1. Check Vercel status dashboard
2. Review recent deployments
3. Check for errors in Vercel logs
4. Rollback to previous deployment if needed
5. Notify team and check Storyblok webhook configuration

**If content is wrong:**

1. Check Storyblok for content changes
2. Verify cache cleared properly
3. Manually trigger revalidation webhook
4. Check cache.ts for correct tags and durations

## Related Documentation

- [CMS.md](CMS.md) - Cache invalidation webhooks
- [ARCHITECTURE.md](ARCHITECTURE.md) - Application structure
- [README.md](../README.md) - Quick start
- [TESTING.md](TESTING.md) - Quality assurance

## External Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Docker Docs:** https://docs.docker.com/
- **GitHub Actions:** https://docs.github.com/en/actions
