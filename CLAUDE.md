# Palmythology - Project Context

## What is Palmythology?

Palmythology is a **French-language mythology encyclopedia web application** that provides comprehensive information about myths, legends, and deities from 11 major world pantheons:

- Greek (Grec)
- Roman (Romain)
- Norse (Nordique)
- Egyptian (Égyptien)
- Celtic (Celte)
- Japanese (Japonais)
- Chinese (Chinois)
- Hindu (Hindou)
- Aztec (Aztèque)
- Mesopotamian (Mésopotamien)
- Mayan (Maya)

**Purpose**: Educational platform for students, mythology enthusiasts, researchers, and anyone curious about world mythologies.

**URL**: https://palmythology.com

## Key Features

### 1. Cards System
The core content model is **card-based**, where each card represents:
- **Gods and Deities**: Zeus, Odin, Ra, etc.
- **Mythological Creatures**: Dragons, phoenixes, chimeras
- **Sacred Places**: Olympus, Valhalla, etc.

Each card includes detailed information, imagery, and cross-references.

### 2. Pantheons & Subjects
Content is organized by:
- **Pantheon**: Cultural origin (Greek, Norse, etc.)
- **Subject**: Type of entity (god, creature, place)

### 3. Q2N (Quoi 2 Neuf - "What's New")
Highlights recently added cards and content updates to keep users informed of new mythology entries.

### 4. Godle Game
A daily mythology guessing game (like Wordle, but for mythology):
- Users guess a mythological entity from clues
- Feedback shows pantheon, subject, and attribute matches
- Discord webhook integration for notifications
- Daily challenges with statistics tracking
- API endpoint for GitHub Actions CRON integration

### 5. Search & Filter
Advanced search functionality with:
- Autocomplete for card names
- Multi-criteria filtering (pantheon, subject, genre)
- Paginated results
- Real-time search engine

### 6. SEO Optimization
- Structured data (Organization, WebSite schemas)
- Dynamic metadata generation
- Sitemaps and robots.txt
- Server-side rendering for search engines

## Technology Stack

**Framework**: Next.js 16 (App Router) with React 19
**Language**: TypeScript 5.9 (strict mode)
**Styling**: Tailwind CSS 4
**CMS**: Storyblok (headless CMS)
**Testing**: Vitest 4 + Testing Library
**Code Quality**: Biome 2 (linter/formatter)
**Package Manager**: pnpm 10
**Deployment**: Docker + Vercel
**Analytics**: Rybbit (self-hosted, privacy-focused)
**URL State**: nuqs (URL-based state management)
**Carousel**: Swiper
**Markdown**: react-markdown
**CSS Preprocessor**: Sass

## Architecture Philosophy

### Server-First Architecture
- **Server Components by default**: All components are server-rendered unless they need client interactivity
- **`"use client"` directive**: Only used when React hooks, browser APIs, or event handlers are needed
- **ISR (Incremental Static Regeneration)**: Pages are statically generated and revalidated on-demand

### Domain-Driven Organization
Components are organized by **feature/domain**, not by type:
```
src/components/
├── domains/          # Feature-specific (cards, search, godle, navigation)
├── generics/         # Reusable UI components (Button, Pagination, etc.)
└── hooks/            # Custom React hooks
```

### Type-Safe Development
- **Strict TypeScript** with no implicit any
- **Enums for categorical data**: `PantheonValue`, `SubjectValue`
- **Type definitions** organized in `src/types/` and colocated `*.constants.ts`
- **Props interfaces** for all components

### Content-Driven
- All content stored in **Storyblok CMS**
- Cache strategy: ISR with tag-based revalidation
- Webhook endpoint for cache invalidation

## Content Management

### Storyblok CMS
All mythology content is managed through Storyblok:
- **Content Types**: Card, Pantheon, Subject, Q2N
- **Structured Content**: Rich text, images, attributes, relationships
- **Real-time Editing**: Content updates reflected after cache revalidation

### Caching Strategy
- **ISR**: Pages regenerated incrementally
- **Cache Tags**: Tag-based invalidation (e.g., `cards`, `pantheons`)
- **Cache Durations**: 1 hour to 7 days depending on content type
- **Revalidation**: Webhook-triggered cache clearing

### Data Flow
```
Page (app/*/page.tsx)
  ↓
CMS Request (src/utils/cms/cms.requests.ts)
  ↓
Storyblok API (with unstable_cache)
  ↓
Data Transformation
  ↓
Component Rendering
```

## Deployment & Environments

### Production
- **Platform**: Vercel
- **Branch**: `master`
- **URL**: https://palmythology.com
- **Trigger**: Merges to master via pull requests

### Preview
- **Platform**: Vercel
- **Branches**: All non-master branches (e.g., `develop`)
- **Purpose**: Test changes before merging to master

### Docker
- **Base Image**: Node 20 Alpine
- **Build**: Multi-stage (deps → builder → runner)
- **Port**: 3000
- **Server**: Next.js standalone output

## Development Workflow

### Package Management
- **Manager**: pnpm 10 (strict mode)
- **Scripts**:
  - `pnpm dev` - Development server
  - `pnpm build` - Production build
  - `pnpm test` - Run Vitest tests
  - `pnpm biome` - Format and lint code

### Scripts
- **`scripts/content-report.ts`** - Content report generation script

### Quality Gates
- **Husky Git Hooks**: Pre-commit validation
- **CommitLint**: Conventional commit messages (e.g., `feat:`, `fix:`)
- **Pre-commit Checks**: Biome linting + TypeScript + Build + Tests
- **Branch Protection**: Never commit directly to `master`, use PRs only

### Branching Strategy
- `master` - Production branch
- `develop` - Main development branch
- Feature branches - For new features/fixes

## User Personas

1. **Students**: Learning mythology for school or personal interest
2. **Mythology Enthusiasts**: Deep dives into specific pantheons
3. **Researchers**: Quick reference for mythological entities
4. **Gamers**: Daily Godle challenge participants

## Documentation Structure

### User-Facing Documentation (docs/)

Feature-specific and subsystem documentation for developers:

- **[docs/CARDS.md](docs/CARDS.md)** - Cards system, pantheons, subjects, routing
- **[docs/GODLE.md](docs/GODLE.md)** - Godle daily game mechanics, Discord integration
- **[docs/Q2N.md](docs/Q2N.md)** - Q2N (What's New) feature, content teasing
- **[docs/SEARCH.md](docs/SEARCH.md)** - Search & filter system, multi-criteria queries
- **[docs/CMS.md](docs/CMS.md)** - Storyblok integration, ISR caching, webhook revalidation
- **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Vercel and Docker deployment processes
- **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** - High-level architecture, design patterns
- **[docs/TESTING.md](docs/TESTING.md)** - Testing approach with Vitest, coverage goals

### Technical Documentation (.claude/)

Detailed coding conventions and patterns for AI-assisted development:

👉 **See [.claude/README.md](.claude/README.md)** for comprehensive technical documentation including:
- Architecture and folder structure
- Component conventions (server/client, props, testing)
- API and data fetching patterns
- Code quality standards (Biome, TypeScript, testing)
- Naming conventions (files, functions, variables)
- Routing patterns (dynamic routes, SEO, metadata)
- Utility patterns (constants, mappers, helpers)

The `.claude/` folder contains ~70KB of detailed technical guides designed for AI-assisted development.

## Quick Reference

| Aspect | Details |
|--------|---------|
| **Primary Language** | French (content and UI) |
| **Content Source** | Storyblok CMS |
| **Main Branch** | `master` (production) |
| **Node Version** | 18.17.0+ (recommended: 20.x LTS) |
| **Package Manager** | pnpm 10 |
| **Deployment** | Vercel (production + preview) |
| **Environment Files** | `.env` (see `.env.example`) |

## Environment Variables

Required environment variables (see [.env.example](.env.example)):
- `ENV` - Environment flag (`dev`/`production`)
- `STORYBLOK_BASE_URL` - CMS API endpoint
- `STORYBLOK_TOKEN` - CMS authentication token
- `REVALIDATION_SECRET` - Cache revalidation secret
- `DISCORD_WEBHOOK_URL` - Godle Discord notifications
- `NEXT_PUBLIC_STORYBLOK_TOKEN` - Public CMS token for client-side access
- `GODLE_SECRET` - Godle API authentication secret

---

**Last Updated**: 2026-02-18
**Version**: 2.18.0
