# Palmythology

> A French-language encyclopedia of world mythologies with daily games, interactive content, and comprehensive mythology information.

**Live Site:** https://palmythology.com

Palmythology is a modern, production-ready Next.js application that brings mythology to life through detailed cards, interactive games, and curated content from 11 world pantheons.

## ✨ Key Features

- **📚 Cards System** - Detailed information about gods, creatures, places, and more across 11 pantheons
- **🎮 Godle Game** - Daily mythology guessing game (like Wordle, but for myths!)
- **📰 Q2N** - "Quoi 2 Neuf" (What's New) - Highlights of upcoming and recent mythology content
- **🔍 Search & Filter** - Multi-criteria search with autocomplete and advanced filtering
- **🌐 SEO Optimized** - Full structured data, sitemaps, and dynamic metadata
- **⚡ High Performance** - ISR caching, optimized images, CDN delivery via Vercel

👉 **For detailed feature documentation, see [docs/](docs/) folder**

## Quick Start

### Prerequisites

- **Node.js** 20.x LTS (minimum 18.17.0)
- **pnpm** 10.x (we use pnpm instead of npm for faster installs and stricter dependency management)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LePalmypede/palmythology.git
   cd palmythology
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.exemple .env.local
   ```

   Configure these required variables:
   - `ENV` - Set to `dev` or `production`
   - `STORYBLOK_BASE_URL` - Storyblok API endpoint
   - `STORYBLOK_TOKEN` - Storyblok API token
   - `REVALIDATION_SECRET` - Secret for cache revalidation webhook
   - `DISCORD_WEBHOOK_URL` - Discord webhook for Godle notifications
   - `CRON_SECRET` - Secret for GitHub Actions workflow

4. **Run development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run tests**
   ```bash
   pnpm test
   ```

## Technology Stack

| Category | Tools |
|----------|-------|
| **Framework** | Next.js 16 (App Router) + React 19 |
| **Language** | TypeScript 5.9 (strict mode) |
| **Styling** | Tailwind CSS 4 + Sass |
| **CMS** | Storyblok (headless) |
| **Testing** | Vitest 4 + Testing Library |
| **Code Quality** | Biome 2 (formatting & linting) |
| **Package Manager** | pnpm 10 |
| **Deployment** | Vercel + Docker |
| **Analytics** | Plausible.io (privacy-focused) |

## Project Structure

```
palmythology/
├── app/                     # Next.js App Router pages
│   ├── api/                # API routes (webhooks, cache invalidation)
│   ├── cards/              # Cards browsing
│   ├── godle/              # Godle daily game
│   ├── pantheons/          # Pantheon landing pages
│   ├── search/             # Search & filter
│   ├── q2n/                # Q2N (What's New)
│   └── subjects/           # Subject category pages
├── src/
│   ├── components/
│   │   ├── domains/        # Feature-specific components
│   │   ├── generics/       # Reusable UI components
│   │   └── hooks/          # Custom React hooks
│   ├── modules/            # Business logic (Godle engine, search)
│   ├── types/              # Type definitions
│   ├── utils/
│   │   ├── cards/          # Card utilities
│   │   ├── cms/            # Storyblok integration
│   │   ├── dates/          # Date utilities
│   │   └── ...             # Other utilities
│   └── global.css          # Global styles
├── public/                 # Static assets
├── .claude/                # AI-assisted development docs (70KB)
├── docs/                   # Feature documentation
├── Dockerfile              # Docker build configuration
└── package.json
```

## Available Scripts

### Development

```bash
# Start development server (hot reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Testing & Quality

```bash
# Run all tests
pnpm test

# Watch mode (rerun on changes)
pnpm watch

# Test coverage report
pnpm coverage

# Format & lint code
pnpm biome
```

### Maintenance

```bash
# Prepare git hooks
pnpm prepare

# Check for outdated packages
npx npm-check-updates
```

## Development Workflow

### Branching Strategy

- **`master`** - Production branch (only merge via PRs)
- **`develop`** - Main development branch
- **Feature branches** - For new features/fixes (e.g., `feat/godle-improvement`)

### Code Quality Gates

All code must pass:

1. **Biome** - Automatic code formatting & linting
   ```bash
   pnpm biome
   ```

2. **TypeScript** - Strict type checking (no implicit any)

3. **Vitest** - Unit tests
   ```bash
   pnpm test
   ```

4. **Husky** - Pre-commit hooks (automatic)

5. **CommitLint** - Enforce conventional commits
   - ✅ `feat: add Godle share button`
   - ✅ `fix: correct cache invalidation logic`
   - ✅ `docs: update README`
   - ❌ `updated code` (too vague)

### Making Changes

1. **Create feature branch** from `develop`
   ```bash
   git checkout -b feat/your-feature
   ```

2. **Make changes** - Code will auto-format on save

3. **Commit with conventional messages**
   ```bash
   git commit -m "feat: add new feature"
   ```

4. **Push and create Pull Request**
   ```bash
   git push origin feat/your-feature
   ```

5. **Wait for checks to pass** - CI/CD runs automatically

6. **Code review** - Team reviews your PR

7. **Merge to develop** - Then prepare PR to master for production

## Deployment

### Preview Deployment (Automatic)

Every branch gets a preview deployment on Vercel:
- **Trigger:** Push to any non-master branch
- **URL Pattern:** `https://<branch-name>-palmythology.vercel.app`
- **Useful for:** Testing before merging to master

### Production Deployment (Manual)

Production is deployed from the `master` branch:
- **Trigger:** Merge to master via pull request
- **URL:** https://palmythology.com
- **Process:** Create PR from develop → master, get approval, merge

📖 **See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions including Docker.**

## Content Management

All mythology content is managed through **Storyblok CMS**:

- **Content types:** Cards, Pantheons, Subjects, Q2N
- **No code deployment needed** when adding/updating content
- **Webhooks** automatically invalidate cache when content changes

### Cache Invalidation

When Storyblok content is updated, it automatically triggers our webhook:

```
POST https://palmythology.com/api/revalidate?secret=<SECRET>&type=cards
```

This invalidates specific cache tags and regenerates pages.

📖 **See [docs/CMS.md](docs/CMS.md) for detailed CMS integration info.**

## Features Documentation

Detailed documentation for each feature:

| Feature | Documentation |
|---------|---------------|
| Cards System | [docs/CARDS.md](docs/CARDS.md) |
| Godle Game | [docs/GODLE.md](docs/GODLE.md) |
| Q2N (What's New) | [docs/Q2N.md](docs/Q2N.md) |
| Search & Filter | [docs/SEARCH.md](docs/SEARCH.md) |
| CMS Integration | [docs/CMS.md](docs/CMS.md) |
| Deployment | [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) |
| Architecture | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Testing | [docs/TESTING.md](docs/TESTING.md) |

## Additional Documentation

### Technical Documentation

The `.claude/` folder contains 70KB+ of detailed technical documentation for AI-assisted development:

- **architecture.md** - Folder structure and design patterns
- **components.md** - React component conventions
- **api-and-data.md** - Data fetching and CMS integration
- **routing.md** - Next.js routing and SEO
- **code-quality.md** - Code standards (Biome, TypeScript, testing)
- **naming-conventions.md** - File and function naming
- **utilities.md** - Utility functions and patterns

### Project Context

- **[CLAUDE.md](CLAUDE.md)** - High-level project context and feature overview
- **[AGENTS.md](AGENTS.md)** - Agent-specific instructions

## Contributing

### Before You Start

1. Read [CLAUDE.md](CLAUDE.md) for project overview
2. Check `.claude/` for technical conventions
3. Review [docs/](docs/) for feature-specific details

### Code Standards

- Use **TypeScript strict mode** - No `any` types
- Follow **Biome** formatting (automatic)
- Write **meaningful commit messages** (conventional commits)
- Test your changes with `pnpm test`
- Update relevant documentation

### Testing Requirements

- Add tests for new utility functions
- Update tests when changing behavior
- Aim for >80% coverage in critical paths
- Run `pnpm coverage` to check coverage

See [docs/TESTING.md](docs/TESTING.md) for testing guidelines.

## Architecture Overview

Palmythology follows a **server-first, content-driven architecture**:

- **Server Components** by default for better performance
- **"use client"** only when browser APIs or interactivity needed
- **ISR (Incremental Static Regeneration)** for fast, cached responses
- **Domain-driven organization** - Components organized by feature, not type
- **Type-safe throughout** - Strict TypeScript, enums for categorical data
- **CMS as source of truth** - Content stored in Storyblok, code handles display

📖 **See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed architecture info.**

## Pantheons

Palmythology covers these 11 world pantheons:

🇬🇷 Greek | 🇮🇹 Roman | ⚔️ Norse | 🇪🇬 Egyptian | 🍀 Celtic | 🇯🇵 Japanese | 🇨🇳 Chinese | 🇮🇳 Hindu | 🇲🇽 Aztec | 🏺 Mesopotamian | 🇷🇺 Slavic

## Analytics

We use **Plausible Analytics** for privacy-focused analytics:
- No cookies
- No tracking scripts on Vercel preview deployments
- Privacy-respecting user tracking

## License

[See LICENSE file](LICENSE)

## Contact & Social Media

- **Instagram:** [@palmythology](https://instagram.com/palmythology)
- **Threads:** [@palmythology](https://threads.net/@palmythology)
- **Bluesky:** [palmythology.com](https://bsky.app/profile/palmythology.com)

---

**Version:** 2.18.0
**Last Updated:** 2026-02-13

For support or questions, reach out to the [LePalmypede](https://github.com/LePalmypede) organization.
