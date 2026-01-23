# Architecture & Folder Structure

## Project Root Structure

```
palmythology/
├── app/                     # Next.js 16 App Router (pages & API routes)
├── src/
│   ├── assets/              # Static assets (fonts, icons, images)
│   ├── components/          # React components
│   │   ├── domains/         # Feature/domain-specific components
│   │   ├── generics/        # Reusable UI components
│   │   └── hooks/           # Custom React hooks
│   ├── modules/             # Business logic (algorithms, engines)
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions & constants
├── public/                  # Static files served as-is
├── scripts/                 # Build & deployment scripts
└── [config files]           # biome.json, tsconfig.json, etc.
```

## Detailed Folder Breakdown

### `/app` - Next.js App Router

```
app/
├── layout.tsx               # Root layout (providers, fonts, analytics)
├── page.tsx                 # Home page (/)
├── robots.ts                # Robots.txt generation
├── sitemap.ts               # Sitemap generation
├── about/page.tsx           # /about
├── cards/
│   ├── page.tsx             # /cards (hub page)
│   └── [...card]/           # /cards/:pantheon/:card (catch-all)
│       ├── page.tsx
│       ├── CardPageSections.tsx
│       └── error.tsx
├── pantheons/
│   ├── page.tsx             # /pantheons
│   └── [pantheon]/          # /pantheons/:pantheon
│       ├── page.tsx
│       └── error.tsx
├── subjects/
│   ├── page.tsx             # /subjects
│   └── [subject]/           # /subjects/:subject
│       ├── page.tsx
│       └── error.tsx
├── search/page.tsx          # /search
├── q2n/page.tsx             # /q2n ("Quoi 2 Neuf")
├── godle/page.tsx           # /godle (mythology guessing game)
└── api/
    └── revalidate/route.ts  # Cache revalidation webhook
```

### `/src/components` - Component Hierarchy

```
components/
├── domains/                 # Domain-specific (feature) components
│   ├── cards/               # Card display components
│   │   ├── LPCardList.tsx
│   │   ├── PantheonList.tsx
│   │   ├── Quoi2NeufCardList.tsx
│   │   └── SubjectList.tsx
│   ├── footer/
│   │   └── Footer.tsx
│   ├── navigation/
│   │   └── MainMenu.tsx
│   ├── search/
│   │   ├── Filter.tsx
│   │   ├── SearchResults.tsx
│   │   └── SelectFilter.tsx
│   ├── social/
│   │   └── SocialsIncentivePopin.tsx
│   ├── tracking/
│   │   └── TrackingNotice.tsx
│   └── godle/               # Godle game components
│       ├── GodleGame.tsx
│       ├── GodleInput.tsx
│       ├── GodleGuessHistory.tsx
│       ├── GodleGuessRow.tsx
│       ├── GodleGuessCell.tsx
│       ├── GodleResultModal.tsx
│       ├── GodleStatistics.tsx
│       ├── GodleFAQ.tsx
│       └── GodleFAQContent.tsx
├── generics/                # Reusable, domain-agnostic components
│   ├── Breadcrumbs.tsx
│   ├── Button.tsx
│   ├── Carousel.tsx
│   ├── Faq.tsx
│   ├── PageHeader.tsx
│   ├── PageSection.tsx
│   ├── PageSquare.tsx       # Core card/tile component
│   ├── Pagination.tsx
│   ├── Quotation.tsx
│   ├── SocialNetworks.tsx
│   ├── Summary.tsx
│   ├── TextBlock.tsx
│   └── UpPageButton.tsx
├── hooks/
│   ├── useErrorHandler.ts
│   └── useModal.ts
└── StoryblokProvider.tsx    # CMS context provider
```

### `/src/utils` - Utilities Organization

```
utils/
├── cards/                   # Card domain utilities
│   ├── card.constants.ts    # Card interfaces & types
│   ├── pantheons.constants.ts
│   ├── pantheons.ts         # Pantheon mappers
│   ├── subjects.constants.ts
│   └── subjects.ts          # Subject mappers
├── cms/                     # Storyblok CMS integration
│   ├── cache.ts             # Cache tags & durations
│   ├── cms.constants.ts     # CMS types & config
│   ├── cms.requests.ts      # API request functions
│   └── cms.ts               # CMS helpers
├── dates/                   # Date utilities
├── routes/                  # Routing utilities
│   ├── routes.constants.ts  # Route definitions
│   └── routes.ts            # Route builders
├── styles/                  # Style utilities
│   ├── colors.constants.ts  # Pantheon color mappings
│   ├── colors.ts            # Color getters
│   └── sizes.constants.ts   # Tailwind sizes
├── medias/                  # Media handling
├── browser.ts               # Browser detection
├── number.ts                # Number utilities
├── object.ts                # Object utilities
├── storage.ts               # LocalStorage helpers
├── string.ts                # String manipulation
├── socials.constants.ts     # Social media links
└── url.constants.ts         # URL constants
```

## Design Patterns

### 1. Domain-Driven Design (DDD)

Components are organized by domain/feature, not by type:

```
src/components/domains/
├── cards/          # Everything related to card display
├── search/         # Everything related to search feature
├── navigation/     # Everything related to navigation
└── social/         # Everything related to social features
```

### 2. Atomic Design (Two-Tier)

**Generics** = Atoms/Molecules (reusable, stateless UI blocks)
**Domains** = Organisms/Templates (feature-specific, composed from generics)

```
Generic: PageSquare.tsx (reusable card/tile)
         ↓ used by
Domain:  PantheonList.tsx (pantheon-specific card list)
```

### 3. Separation of Concerns

```
Presentation Layer    → src/components/
Business Logic Layer  → src/modules/
Data Access Layer     → src/utils/cms/
Type Definitions      → src/utils/*/constants.ts
```

### 4. Constants as Single Source of Truth

All categorical data defined in `*.constants.ts` files:

```typescript
// pantheons.constants.ts
enum PantheonValue { GREEK = "greek", EGYPTIAN = "egyptian", ... }
enum PantheonLabel { GREEK = "Grec", EGYPTIAN = "Égyptien", ... }

// routes.constants.ts
const ROUTE_URLS = { HOME: "/", PANTHEON: "/pantheons/:pantheon", ... }
```

### 5. Provider Pattern

Global state/context via providers in root layout:

```typescript
// app/layout.tsx
<StoryblokProvider>
  <html>...</html>
</StoryblokProvider>
```

## Data Flow Pattern

```
Page (app/*/page.tsx)
  ↓ renders
Domain Component (src/components/domains/)
  ↓ uses
Generic Component (src/components/generics/)
  ↓ calls
Business Logic (src/modules/)
  ↓ calls
CMS Requests (src/utils/cms/)
  ↓ queries
Storyblok API
```

## Import Patterns

```typescript
// From pages (app/)
import Component from "../../src/components/generics/Component";
import { util } from "../../../src/utils/folder/util";

// Within src/
import PageSquare from "../../generics/PageSquare";
import { CONSTANT } from "../../../utils/folder/constants";
```

## Key Files Reference

| Purpose | File Location |
|---------|---------------|
| Root layout | `app/layout.tsx` |
| CMS config | `src/utils/cms/cms.constants.ts` |
| CMS requests | `src/utils/cms/cms.requests.ts` |
| Route definitions | `src/utils/routes/routes.constants.ts` |
| Color mappings | `src/utils/styles/colors.constants.ts` |
| Search algorithm | `src/modules/searchEngine.ts` |
| Tailwind config | `tailwind.config.js` |
| TypeScript config | `tsconfig.json` |
| Biome config | `biome.json` |
