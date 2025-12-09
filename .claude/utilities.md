# Utilities & Modules

## Overview

Utilities are organized by domain in `src/utils/`:

```
utils/
├── cards/           # Card domain utilities
├── cms/             # CMS integration
├── dates/           # Date utilities
├── routes/          # Routing utilities
├── styles/          # Style utilities
├── medias/          # Media handling
├── browser.ts       # Browser detection
├── number.ts        # Number utilities
├── object.ts        # Object utilities
├── storage.ts       # LocalStorage helpers
├── string.ts        # String manipulation
├── socials.constants.ts
└── url.constants.ts
```

## Constants Pattern

### Structure

Each domain has a `*.constants.ts` file defining:
1. Enums for type safety
2. Interfaces for data shapes
3. Static data arrays

```typescript
// pantheons.constants.ts

// Value enum (for URLs, database)
export enum PantheonValue {
  GREEK = "greek",
  EGYPTIAN = "egyptian",
  ROMAN = "roman",
  NORSE = "norse",
  CELTIC = "celtic",
  JAPANESE = "japanese",
  CHINESE = "chinese",
  HINDU = "hindu",
  AZTEC = "aztec",
  MESOPOTAMIAN = "mesopotamian",
  SLAVIC = "slavic",
}

// Label enum (for display)
export enum PantheonLabel {
  GREEK = "Grec",
  EGYPTIAN = "Égyptien",
  ROMAN = "Romain",
  NORSE = "Nordique",
  CELTIC = "Celte",
  JAPANESE = "Japonais",
  CHINESE = "Chinois",
  HINDU = "Hindou",
  AZTEC = "Aztèque",
  MESOPOTAMIAN = "Mésopotamien",
  SLAVIC = "Slave",
}

// Interface for select options
export interface PantheonSelectType {
  label: PantheonLabel;
  value: PantheonValue;
}

// Static data array
export const ALL_PANTHEONS: PantheonSelectType[] = [
  { label: PantheonLabel.GREEK, value: PantheonValue.GREEK },
  { label: PantheonLabel.EGYPTIAN, value: PantheonValue.EGYPTIAN },
  // ...
];
```

## Mapper Functions Pattern

### Purpose

Convert between database values and display labels:

```typescript
// pantheons.ts
import { PantheonLabel, PantheonValue, ALL_PANTHEONS } from "./pantheons.constants";

export const getPantheonLabelFromValue = (
  pantheon: PantheonValue
): PantheonLabel => {
  const found = ALL_PANTHEONS.find((p) => p.value === pantheon);
  return found?.label ?? PantheonLabel.GREEK; // Default fallback
};

export const getPantheonValueFromLabel = (
  pantheon: PantheonLabel
): PantheonValue => {
  const found = ALL_PANTHEONS.find((p) => p.label === pantheon);
  return found?.value ?? PantheonValue.GREEK;
};
```

### Usage

```typescript
// In component
const displayLabel = getPantheonLabelFromValue(card.pantheon);
// PantheonValue.GREEK → "Grec"

// For URL building
const urlValue = getPantheonValueFromLabel(selectedLabel);
// "Grec" → PantheonValue.GREEK → "greek"
```

## String Utilities

Location: `src/utils/string.ts`

```typescript
// Convert name to URL-safe slug
export const parseStringToSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-")     // Replace non-alphanumeric
    .replace(/^-+|-+$/g, "");        // Trim hyphens
};

// Check if string is empty or whitespace
export const isStringEmpty = (str: string | undefined | null): boolean => {
  return !str || str.trim().length === 0;
};

// Capitalize first letter
export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
```

## Route Utilities

Location: `src/utils/routes/routes.ts`

```typescript
import { ROUTE_URLS } from "./routes.constants";
import { parseStringToSlug } from "../string";

// Build card route: /cards/greek/zeus
export const setCardRouteParameters = (
  cardName: string,
  pantheon: string
): string => {
  return ROUTE_URLS.CARD
    .replace(":pantheon", pantheon)
    .replace(":card", parseStringToSlug(cardName));
};

// Build pantheon route: /pantheons/greek
export const setPantheonRouteParameters = (pantheon: string): string => {
  return ROUTE_URLS.PANTHEON.replace(":pantheon", pantheon);
};

// Build subject route: /subjects/gods
export const setSubjectRouteParameters = (subject: string): string => {
  return ROUTE_URLS.SUBJECT.replace(":subject", subject);
};

// Generate breadcrumb navigation
export const generateBreadcrumbLinks = (breadcrumbNodes: string[]) => {
  return breadcrumbNodes.map((node, index) => ({
    label: parseBreadcrumbNode(node),
    url: buildBreadcrumbUrl(breadcrumbNodes, index),
    isLast: index === breadcrumbNodes.length - 1,
  }));
};
```

## Color Utilities

Location: `src/utils/styles/colors.ts`

```typescript
import { PantheonValue } from "../cards/pantheons.constants";
import { PANTHEON_COLORS } from "./colors.constants";

// Get main color for pantheon
export const getPantheonMainColor = (pantheon: PantheonValue): string => {
  return PANTHEON_COLORS[pantheon]?.main ?? "gray-500";
};

// Get secondary color for pantheon
export const getPantheonSecondaryColor = (pantheon: PantheonValue): string => {
  return PANTHEON_COLORS[pantheon]?.secondary ?? "gray-300";
};
```

### Color Constants

Location: `src/utils/styles/colors.constants.ts`

```typescript
import { PantheonValue } from "../cards/pantheons.constants";

interface PantheonColorScheme {
  main: string;
  secondary: string;
  accent: string;
}

export const PANTHEON_COLORS: Record<PantheonValue, PantheonColorScheme> = {
  [PantheonValue.GREEK]: {
    main: "blue-600",
    secondary: "blue-400",
    accent: "blue-200",
  },
  [PantheonValue.EGYPTIAN]: {
    main: "amber-600",
    secondary: "amber-400",
    accent: "amber-200",
  },
  // ...
};
```

## Storage Utilities

Location: `src/utils/storage.ts`

```typescript
// Safe localStorage access (handles SSR)
export const getLocalStorageItem = (key: string): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};

export const setLocalStorageItem = (key: string, value: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value);
};

export const removeLocalStorageItem = (key: string): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
};
```

## Browser Utilities

Location: `src/utils/browser.ts`

```typescript
// Check if running in browser
export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

// Get current pathname
export const getCurrentPathname = (): string => {
  return isBrowser() ? window.location.pathname : "";
};

// Check if on home page
export const isHomePage = (): boolean => {
  return getCurrentPathname() === "/";
};
```

## Business Logic Module

### Search Engine

Location: `src/modules/searchEngine.ts`

```typescript
"use server";

import { fetchCardsFromCriterias } from "../utils/cms/cms.requests";
import { getPantheonLabelFromValue } from "../utils/cards/pantheons";
import { getSubjectLabelFromValue } from "../utils/cards/subjects";
import type {
  CardDetails,
  ResearchCriterias,
  TranslatedCardDetails,
} from "../utils/cards/card.constants";

// Main filter function
export const filterCards = async (
  currentPage: number,
  searchCriterias?: ResearchCriterias
): Promise<{ total: number; results: TranslatedCardDetails[] }> => {
  const cardStories = await fetchCardsFromCriterias(searchCriterias, currentPage);

  return {
    total: cardStories.total,
    results: cardStories.results
      .map((card: CardDetails) => {
        if (isACardFound(searchCriterias, card)) {
          return translateCard(card);
        }
        return undefined;
      })
      .filter((card): card is TranslatedCardDetails => card !== undefined),
  };
};

// Check if card matches criteria
const isACardFound = (
  searchCriterias: ResearchCriterias | undefined,
  card: CardDetails
): boolean => {
  if (!searchCriterias) return true;

  const matchesPantheon =
    !searchCriterias.pantheon || card.pantheon === searchCriterias.pantheon;
  const matchesSubject =
    !searchCriterias.subject || card.subject === searchCriterias.subject;

  return matchesPantheon && matchesSubject;
};

// Transform card data for display
const translateCard = (card: CardDetails): TranslatedCardDetails => ({
  ...card,
  pantheon: getPantheonLabelFromValue(card.pantheon),
  subject: getSubjectLabelFromValue(card.subject),
});
```

## CMS Utilities

Location: `src/utils/cms/cms.ts`

```typescript
// Environment getters
export const getStoryblokToken = (): string => {
  return process.env.STORYBLOK_TOKEN ?? "";
};

export const getStoryblokBaseUrl = (): string => {
  return process.env.STORYBLOK_BASE_URL ?? "";
};

// Build Storyblok URL with params
export const buildStoryblokUrl = (
  path: string,
  params: Record<string, string | number>
): string => {
  const url = new URL(`${getStoryblokBaseUrl()}${path}`);
  url.searchParams.set("token", getStoryblokToken());

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }

  return url.toString();
};
```

## Cache Utilities

Location: `src/utils/cms/cache.ts`

```typescript
export const cacheTags = {
  ALL: {
    TAG: "all",
    DURATION: 86400, // 1 day
  },
  CARDS: {
    TAG: "cards",
    DURATION: 86400, // 1 day
  },
  PANTHEONS: {
    TAG: "pantheons",
    DURATION: 604800, // 7 days
  },
  SUBJECTS: {
    TAG: "subjects",
    DURATION: 604800, // 7 days
  },
  SEARCH: {
    TAG: "search",
    DURATION: 3600, // 1 hour
  },
  Q2N: {
    TAG: "q2n",
    DURATION: 43200, // 12 hours
  },
};
```

## Testing Utilities

### Test Setup

Location: `src/setupTests.js`

```javascript
import "@testing-library/jest-dom";
```

### Test Patterns

```typescript
// utils/cards/pantheons.test.ts
import { describe, it, expect } from "vitest";
import { getPantheonLabelFromValue, getPantheonValueFromLabel } from "./pantheons";
import { PantheonLabel, PantheonValue } from "./pantheons.constants";

describe("Pantheon utilities", () => {
  describe("getPantheonLabelFromValue", () => {
    it("returns correct label for Greek", () => {
      expect(getPantheonLabelFromValue(PantheonValue.GREEK)).toBe(
        PantheonLabel.GREEK
      );
    });

    it("returns default for unknown value", () => {
      expect(getPantheonLabelFromValue("unknown" as PantheonValue)).toBe(
        PantheonLabel.GREEK
      );
    });
  });

  describe("getPantheonValueFromLabel", () => {
    it("returns correct value for Grec", () => {
      expect(getPantheonValueFromLabel(PantheonLabel.GREEK)).toBe(
        PantheonValue.GREEK
      );
    });
  });
});
```

## Utility Organization Rules

1. **Constants in `*.constants.ts`** - Enums, interfaces, static data
2. **Functions in `*.ts`** - Logic using constants
3. **Tests in `*.test.ts`** - Colocated with source

### Adding New Utilities

```typescript
// 1. Create constants file
// src/utils/newfeature/newfeature.constants.ts
export enum NewFeatureType { ... }
export interface NewFeatureData { ... }
export const ALL_FEATURES: NewFeatureData[] = [...];

// 2. Create utility functions
// src/utils/newfeature/newfeature.ts
import { NewFeatureType, ALL_FEATURES } from "./newfeature.constants";

export const getFeatureById = (id: string) => { ... };

// 3. Create tests
// src/utils/newfeature/newfeature.test.ts
import { getFeatureById } from "./newfeature";

describe("New Feature utilities", () => { ... });
```
