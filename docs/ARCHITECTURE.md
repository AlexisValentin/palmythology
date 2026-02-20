# Architecture Documentation

This document explains Palmythology's high-level architecture and design patterns.

## Architectural Philosophy

### Server-First Architecture

Palmythology prioritizes **server-side rendering** for performance and simplicity:

- **Server Components by default** - All components are server-rendered unless otherwise needed
- **Minimal JavaScript** - Only client-side interactivity is sent to browser
- **Fast page loads** - Content is pre-rendered and cached

**When to use Client Components:**

✅ **DO use "use client" when:**
- Component needs React hooks (`useState`, `useEffect`, etc.)
- Component has event handlers (clicks, form submissions)
- Component uses browser APIs (`localStorage`, `fetch`, etc.)
- Component needs animations or real-time updates

❌ **DON'T use "use client" for:**
- Simple content display
- Fetching data (use Server Components with `async/await`)
- Static pages without interactivity
- Rendering lists or cards

### Content-Driven Architecture

Content is the centerpiece of Palmythology:

- **CMS as source of truth** - All content lives in Storyblok
- **Code handles display** - Application focuses on presentation
- **Separation of concerns** - Content editors and developers have separate workflows
- **No content in code** - No hardcoded strings or static data

### ISR (Incremental Static Regeneration)

Pages are statically generated with automatic updates:

```typescript
// Card pages regenerate every 1 day
export const revalidate = 86400

// Pantheon pages regenerate every 7 days
export const revalidate = 604800
```

**Benefits:**
- ⚡ Instant page loads (served from cache)
- 🔄 Fresh content (automatically updates)
- 💰 Cost-effective (serverless)
- 🌍 Global CDN distribution

## Folder Structure

### Root Level

```
palmythology/
├── app/                 # Next.js 16 App Router (pages)
├── src/                 # Application code
├── public/              # Static assets (images, icons)
├── .claude/             # AI-assisted development documentation
├── docs/                # User-facing feature documentation
├── .github/             # GitHub configuration (workflows)
├── .husky/              # Git hooks
├── Dockerfile           # Container build
├── package.json         # Dependencies
└── next.config.js       # Next.js configuration
```

### app/ - Pages (Next.js App Router)

```
app/
├── layout.tsx           # Root layout (shared for all pages)
├── page.tsx             # Homepage (/)
├── robots.ts            # robots.txt generation
├── sitemap.ts           # Dynamic sitemap generation
├── about/               # Static pages
├── api/                 # API routes
│   ├── godle/          # Godle webhook
│   └── revalidate/     # Cache invalidation
├── cards/              # Card browsing
│   ├── page.tsx        # Cards hub (/cards)
│   └── [...card]/      # Dynamic card pages (/cards/[pantheon]/[name])
├── godle/              # Godle game
├── pantheons/          # Pantheon pages
│   ├── page.tsx        # Pantheons listing
│   └── [pantheon]/     # Dynamic pantheon pages
├── q2n/                # Q2N (What's New)
├── search/             # Search & filter
└── subjects/           # Subject pages
    ├── page.tsx        # Subjects listing
    └── [subject]/      # Dynamic subject pages
```

**Design Pattern:**
- One file per route
- Dynamic segments in `[brackets]`
- Layout files for shared UI
- Metadata exports for SEO

### src/ - Application Code

#### src/components/ - React Components

```
src/components/
├── domains/            # Feature-specific (one folder per feature)
│   ├── cards/         # Card display components
│   ├── godle/         # Godle game components (9 files)
│   ├── search/        # Search components (5 files)
│   ├── categories/    # Pantheon/Subject page components
│   ├── footer/        # Footer component
│   ├── navigation/    # Navigation menu
│   ├── social/        # Social media widgets
│   └── tracking/      # Analytics
├── generics/          # Reusable UI components (15 files)
│   ├── Button/
│   ├── Pagination/
│   ├── Modal/
│   └── ...
├── hooks/             # Custom React hooks
│   ├── useErrorHandler.ts
│   └── useModal.ts
└── StoryblokProvider.tsx  # Storyblok integration
```

**Design Pattern:**
- Domain-driven, not type-driven
- Each domain has its own folder
- Shared generics in separate folder
- Components are TypeScript files with React exports

#### src/modules/ - Business Logic

```
src/modules/
├── godle/             # Godle game engine
│   ├── godleEngine.ts   # Guess comparison logic
│   └── godleStorage.ts  # Game state management
└── searchEngine.ts    # Search & filter logic
```

**Design Pattern:**
- Pure business logic (no UI)
- Reusable across components
- Heavily tested

#### src/utils/ - Utility Functions

```
src/utils/
├── cms/               # Storyblok CMS integration (5 files)
│   ├── cache.ts       # Cache configuration
│   ├── cms.ts         # Config getters
│   ├── cms.constants.ts # Type definitions
│   └── cms.requests.ts # Data fetching
├── cards/             # Card utilities (11 files)
│   ├── pantheons.ts
│   ├── subjects.ts
│   ├── genres.ts
│   ├── attributes.ts
│   └── ...
├── dates/             # Date/time utilities
├── godle/             # Godle utilities
├── medias/            # Image/media utilities
├── routes/            # Route constants
├── styles/            # CSS utilities
├── array.ts           # Array helpers
├── browser.ts         # Browser API helpers
├── form.constants.ts  # Form helpers
├── image.constants.ts # Image config
├── number.ts          # Number utilities
├── object.ts          # Object utilities
├── string.ts          # String utilities
└── url.constants.ts   # URL constants
```

**Design Pattern:**
- Domain-specific utilities in subfolders
- Generic utilities at root
- Pure functions
- Well-tested

#### src/types/ - Type Definitions

```
src/types/
└── images.d.ts        # Image type declarations
```

**Design Pattern:**
- Ambient type declarations
- Domain-specific types colocated with utilities
- Exported from constants files

### public/ - Static Assets

```
public/
├── favicon.svg
├── manifest.json      # PWA manifest
├── robots.txt         # Robots configuration
├── icon-*.png         # App icons
├── fonts/             # Custom fonts
└── images/            # Static images
```

## Design Patterns

### 1. Server Components for Data Fetching

```typescript
// ✅ DO: Server component fetches data directly
const CardPage = async () => {
  const card = await fetchSpecificCard(title, pantheon)
  return <CardDetail card={card} />  // Pass to client component if needed
}
```

```typescript
// ❌ DON'T: Client component fetching data (slower, more code)
"use client"
const CardPage = () => {
  const [card, setCard] = useState(null)
  useEffect(() => {
    fetchCard().then(setCard)
  }, [])
  return <CardDetail card={card} />
}
```

**Benefits:**
- Faster data access (no network round-trip to client)
- Secrets stay on server
- Better for SEO
- Less JavaScript sent to browser

### 2. Client Components for Interactivity

```typescript
// ✅ DO: Client component for interactive features
"use client"
export const GodleGame = () => {
  const [guess, setGuess] = useState("")
  const [guesses, setGuesses] = useState([])

  const handleSubmitGuess = (entity: string) => {
    // Interactive logic
    setGuesses([...guesses, entity])
  }

  return (
    <div>
      <input value={guess} onChange={(e) => setGuess(e.target.value)} />
      <button onClick={() => handleSubmitGuess(guess)}>Submit</button>
    </div>
  )
}
```

### 3. Domain-Driven Organization

```
src/components/domains/godle/
├── GodleGame.tsx            # Main component
├── GodleInput.tsx           # Search input
├── GodleGuessHistory.tsx    # Guess display
└── GodleResultModal.tsx     # Results screen
```

**Benefits:**
- Easy to find related code
- Clear feature boundaries
- Easier to move/remove features
- Self-contained domains

### 4. Utility Functions for Pure Logic

```typescript
// src/modules/searchEngine.ts
export const filterCards = (
  cards: CardDetails[],
  criteria: SearchCriteria
): CardDetails[] => {
  return cards
    .filter((card) => matchQuery(card, criteria.query))
    .filter((card) => matchPantheon(card, criteria.pantheon))
    .filter((card) => matchSubject(card, criteria.subject))
}
```

**Benefits:**
- Easy to test
- Reusable in multiple components
- No side effects
- Predictable behavior

### 5. Type-Safe Development

```typescript
// ✅ DO: Use enums for categorical data
interface Card {
  pantheon: PantheonValue  // Enum, not string
  subject: SubjectValue    // Enum, not string
  genre: GenreValue        // Enum, not string
}

// ❌ DON'T: Use strings for categorical data
interface Card {
  pantheon: string  // Could be anything
  subject: string   // Prone to typos
}
```

### 6. Constants and Mappers

```typescript
// src/utils/cards/pantheons.constants.ts
export enum PantheonValue {
  GREEK = "GREEK",
  ROMAN = "ROMAN",
  NORSE = "NORSE",
  // ... etc
}

export enum PantheonLabel {
  GREEK = "Grec",
  ROMAN = "Romain",
  NORSE = "Nordique",
  // ... etc
}

// Mapper function
export const getPantheonLabelFromValue = (value: PantheonValue): string => {
  return PantheonLabel[value]
}
```

## Data Flow

### Page Render Flow

```
Browser Request
  ↓
Next.js Router matches route
  ↓
Page component (Server) executes
  ↓
Page calls CMS request function
  ↓
unstable_cache checks cache
  ├─ Cache HIT → Return cached data
  └─ Cache MISS → Fetch from Storyblok API
  ↓
Data transformed to application types
  ↓
Data passed to components
  ↓
JSX rendered to HTML
  ↓
Client hydrates (minimal JavaScript)
  ↓
Browser displays page
```

### Interactive Flow

```
User interacts (clicks, types)
  ↓
Client component event handler executes
  ↓
State updates
  ↓
Component re-renders
  ↓
Browser displays updated UI
```

**Key:** Server components handle data fetching, client components handle interactivity.

## Performance Optimizations

### 1. Image Optimization

```typescript
// Next.js Image component optimizes images
import Image from "next/image"

export const CardIcon = ({ icon }: { icon: CardIconType }) => {
  return (
    <Image
      src={icon.filename}
      alt={icon.alt}
      width={200}
      height={200}
      quality={80}
    />
  )
}
```

**Benefits:**
- WebP conversion
- Responsive sizes
- Lazy loading
- Automatic CDN delivery

### 2. Code Splitting

```typescript
// Lazy-load heavy components
const HeavyComponent = dynamic(() => import("./Heavy"), {
  loading: () => <Skeleton />,
})

export const Page = () => {
  return <HeavyComponent />
}
```

### 3. Caching Strategy

**Multiple layers:**
1. Browser cache (HTTP cache headers)
2. CDN cache (Vercel global CDN)
3. Next.js cache (unstable_cache)
4. ISR (page-level caching with revalidation)

### 4. Compression

```javascript
// next.config.js
export default {
  compress: true,  // Gzip compression
}
```

## Type Safety

### Strict TypeScript

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    // ...
  }
}
```

**Enforces:**
- No `any` types
- All function parameters typed
- All variables typed
- Null/undefined handling required

### Enum Usage

Instead of magic strings:

```typescript
// ✅ Type-safe enums
const handleCardClick = (pantheon: PantheonValue) => {
  switch (pantheon) {
    case PantheonValue.GREEK:
      // ...
  }
}

// ❌ Fragile string comparison
const handleCardClick = (pantheon: string) => {
  if (pantheon === "greek") {  // Prone to typos
    // ...
  }
}
```

## Error Handling

### Server-Side Errors

```typescript
// app/cards/[...card]/page.tsx
const CardPage = async ({ params }: { params: CardPageParams }) => {
  try {
    const card = await fetchSpecificCard(params.title, params.pantheon)
    if (!card) {
      return notFound()  // 404 page
    }
    return <CardDetail card={card} />
  } catch (error) {
    return <ErrorBoundary error={error as Error} />
  }
}
```

### Client-Side Errors

```typescript
// src/components/hooks/useErrorHandler.ts
export const useErrorHandler = () => {
  const handleError = (error: Error) => {
    console.error(error)
    // Show user-friendly message
  }
  return { handleError }
}
```

## Testing Architecture

### Unit Tests

```typescript
// src/utils/pantheons.test.ts
describe("Pantheon utilities", () => {
  it("converts enum to label", () => {
    const label = getPantheonLabelFromValue(PantheonValue.GREEK)
    expect(label).toBe("Grec")
  })
})
```

**Run tests:**
```bash
pnpm test
pnpm watch
pnpm coverage
```

### Test Files Location

Tests are colocated with source:
```
src/
├── utils/
│   ├── pantheons.ts         # Source
│   └── pantheons.test.ts    # Test
└── modules/
    ├── godle/
    │   └── godleEngine.ts
    └── godleEngine.test.ts  # Test
```

## Related Documentation

- [README.md](../README.md) - Quick start
- [CARDS.md](CARDS.md) - Card system
- [GODLE.md](GODLE.md) - Godle game
- [CMS.md](CMS.md) - Storyblok integration
- [TESTING.md](TESTING.md) - Testing approach
- [.claude/README.md](../.claude/README.md) - Detailed technical docs

## External Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev/
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **App Router Guide:** https://nextjs.org/docs/app
