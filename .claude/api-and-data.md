# API & Data Management

## Overview

- **CMS**: Storyblok (Headless CMS)
- **HTTP Client**: Native `fetch` API (no axios/etc.)
- **Data Fetching**: Server-side with "use server" directive
- **Caching**: Next.js `unstable_cache` with tag-based revalidation
- **State Management**: React hooks only (no Redux/Zustand)

## Storyblok CMS Integration

### Configuration

Location: `src/utils/cms/cms.ts`

```typescript
export const getStoryblokToken = () => process.env.STORYBLOK_TOKEN;
export const getStoryblokBaseUrl = () => process.env.STORYBLOK_BASE_URL;
```

### Provider Setup

Location: `src/components/StoryblokProvider.tsx`

```typescript
"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

const StoryblokProvider = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default StoryblokProvider;
```

### CMS Constants

Location: `src/utils/cms/cms.constants.ts`

```typescript
export const STORYBLOK_RESULTS_PER_PAGE = 12;
export const STORYBLOK_MAX_ITEMS_PER_REQUEST = 20;

export enum STORYBLOK_VERSIONS {
  DRAFT = "draft",
  PUBLISHED = "published",
}

export enum CardRelatedType {
  CARD = "card",
  PANTHEON = "pantheon",
  SUBJECT = "subject",
}
```

## API Request Patterns

### Basic Fetch Pattern

Location: `src/utils/cms/cms.requests.ts`

```typescript
"use server";

const fetchCardsFromString = async (startingString: string) => {
  const response = await fetch(
    `${getStoryblokBaseUrl()}?starts_with=${startingString}&token=${getStoryblokToken()}&version=${STORYBLOK_VERSIONS.PUBLISHED}&per_page=${STORYBLOK_MAX_ITEMS_PER_REQUEST}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
```

### Cached Request Pattern

```typescript
"use server";

import { unstable_cache } from "next/cache";
import { cacheTags } from "./cache";

export const fetchSpecificCard = async (title: string, pantheon: string) => {
  return unstable_cache(
    async () => requestSpecificCard(title, pantheon),
    ["card-story", pantheon, title],  // Cache key parts
    {
      tags: [cacheTags.CARDS.TAG, cacheTags.ALL.TAG],
      revalidate: cacheTags.CARDS.DURATION,
    }
  )();
};

const requestSpecificCard = async (title: string, pantheon: string) => {
  const response = await fetch(/* ... */);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
```

### Available CMS Request Functions

| Function | Purpose | Cache Duration |
|----------|---------|----------------|
| `fetchCardsFromString(prefix)` | Cards starting with string | - |
| `fetchLatestCards(count)` | Most recent cards | - |
| `fetchFilteredCards(pantheon, subject, page)` | Filtered card list | - |
| `fetchSpecificCard(title, pantheon)` | Single card details | 1 day |
| `fetchSpecificPantheon(pantheon)` | Pantheon details | 7 days |
| `fetchSpecificSubject(subject)` | Subject details | 7 days |
| `fetchCardsFromCriterias(criteria, page)` | Search results | 1 hour |
| `fetchPlaceholderCards()` | Default display cards | - |
| `fetchQ2NContent()` | "Quoi2Neuf" content | 12 hours |
| `fetchAvailableCards()` | All cards (sitemap) | - |

## Caching Strategy

### Cache Configuration

Location: `src/utils/cms/cache.ts`

```typescript
export const cacheTags = {
  ALL: { TAG: "all", DURATION: 86400 },           // 1 day
  CARDS: { TAG: "cards", DURATION: 86400 },       // 1 day
  PANTHEONS: { TAG: "pantheons", DURATION: 604800 }, // 7 days
  SUBJECTS: { TAG: "subjects", DURATION: 604800 },   // 7 days
  SEARCH: { TAG: "search", DURATION: 3600 },      // 1 hour
  Q2N: { TAG: "q2n", DURATION: 43200 },           // 12 hours
};
```

### ISR (Incremental Static Regeneration)

In page files:

```typescript
// app/pantheons/[pantheon]/page.tsx
export const revalidate = 604800; // Revalidate every 7 days
export const dynamicParams = true;

const PantheonPage = async ({ params }) => {
  const data = await fetchSpecificPantheon(params.pantheon);
  return /* ... */;
};
```

### Cache Revalidation Webhook

Location: `app/api/revalidate/route.ts`

```typescript
import { revalidateTag } from "next/cache";

const revalidateCache = async (request: NextRequest) => {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  const tag = request.nextUrl.searchParams.get("tag") || "all";
  revalidateTag(tag);

  return Response.json({ revalidated: true, tag });
};

export const GET = revalidateCache;
export const POST = revalidateCache;
```

## State Management

### Client-Side State (React Hooks)

```typescript
"use client";

const SearchResults: React.FC<Props> = ({ pantheon, subject }) => {
  // Local state
  const [searchCriterias, setSearchCriterias] = useState<ResearchCriterias>({
    pantheon: "",
    subject: "",
  });
  const [searchResults, setSearchResults] = useState<TranslatedCardDetails[]>([]);
  const [totalResult, setTotalResult] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Sync props to state
  useEffect(() => {
    setSearchCriterias({ pantheon, subject });
    setCurrentPage(1);
  }, [pantheon, subject]);

  // Fetch on criteria change
  useEffect(() => {
    const updateResults = async () => {
      const { results, total } = await filterCards(currentPage, searchCriterias);
      setSearchResults(results);
      setTotalResult(total);
    };
    updateResults();
  }, [searchCriterias, currentPage]);

  return /* ... */;
};
```

### Server-Side Data (Direct Fetching)

```typescript
// app/cards/[...card]/page.tsx (Server Component)
const CardPage = async ({ params }) => {
  const pageParams = await params;
  const story = await fetchSpecificCard(pageParams.card[1], pageParams.card[0]);

  // Data available directly, no state needed
  return <CardPageSections story={story} />;
};
```

## Data Transformation

### Search Engine Module

Location: `src/modules/searchEngine.ts`

```typescript
"use server";

export const filterCards = async (
  currentPage: number,
  searchCriterias?: ResearchCriterias
) => {
  const cardStories = await fetchCardsFromCriterias(searchCriterias, currentPage);

  return {
    total: cardStories.total,
    results: cardStories.results
      .map((card: CardDetails) => {
        if (isACardFound(searchCriterias, card)) {
          return {
            ...card,
            pantheon: getPantheonLabelFromValue(card.pantheon),
            subject: getSubjectLabelFromValue(card.subject),
          };
        }
      })
      .filter((card) => card !== undefined),
  };
};

const isACardFound = (
  searchCriterias: ResearchCriterias | undefined,
  card: CardDetails
): boolean => {
  if (!searchCriterias) return true;

  const matchesPantheon = !searchCriterias.pantheon ||
    card.pantheon === searchCriterias.pantheon;
  const matchesSubject = !searchCriterias.subject ||
    card.subject === searchCriterias.subject;

  return matchesPantheon && matchesSubject;
};
```

## Type Definitions

### Card Types

Location: `src/utils/cards/card.constants.ts`

```typescript
// Raw data from CMS
export interface CardDetails {
  name: string;
  subtitle: string;
  icon: StoryblokImageType;
  pantheon: PantheonValue;   // Database value
  subject: SubjectValue;     // Database value
  available: boolean;
  isFolder: boolean;
}

// Transformed for display
export interface TranslatedCardDetails {
  name: string;
  subtitle: string;
  icon: StoryblokImageType;
  pantheon: PantheonLabel;   // Display label
  subject: SubjectLabel;     // Display label
  available: boolean;
  isFolder: boolean;
}

// Search criteria
export interface ResearchCriterias {
  pantheon: string;
  subject: string;
}
```

## Environment Variables

Required in `.env`:

```env
STORYBLOK_TOKEN=your_storyblok_token
STORYBLOK_BASE_URL=https://api.storyblok.com/v2/cdn/stories
REVALIDATION_SECRET=your_webhook_secret
```

## Error Handling

```typescript
const fetchData = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Error boundaries in page folders
// app/cards/[...card]/error.tsx
"use client";

const ErrorPage = ({ error }: { error: Error & { digest?: string } }) => {
  const { title, subtitle, httpCode } = useErrorHandler(error);
  return /* error UI */;
};
```
