# Routing Conventions

## Overview

- **Router**: Next.js 16 App Router (file-based routing)
- **Dynamic Routes**: Bracket notation `[param]` and catch-all `[...param]`
- **ISR**: Incremental Static Regeneration for performance

## Route Structure

### App Directory Layout

```
app/
├── layout.tsx              # Root layout (wraps all pages)
├── page.tsx                # Home page (/)
├── about/page.tsx          # Static page (/about)
├── cards/
│   ├── page.tsx            # /cards (hub page)
│   └── [...card]/          # Catch-all for /cards/:pantheon/:card
│       └── page.tsx
├── pantheons/
│   ├── page.tsx            # /pantheons (list)
│   └── [pantheon]/         # Dynamic /pantheons/:pantheon
│       └── page.tsx
├── subjects/
│   ├── page.tsx            # /subjects (list)
│   └── [subject]/          # Dynamic /subjects/:subject
│       └── page.tsx
├── search/page.tsx         # /search
├── q2n/page.tsx            # /q2n
└── api/
    └── revalidate/route.ts # API route
```

### Route URL Definitions

Location: `src/utils/routes/routes.constants.ts`

```typescript
export const ROUTE_URLS = {
  HOME: "/",
  ABOUT: "/about",
  CARDS: "/cards",
  CARD: "/cards/:pantheon/:card",
  PANTHEONS: "/pantheons",
  PANTHEON: "/pantheons/:pantheon",
  SUBJECTS: "/subjects",
  SUBJECT: "/subjects/:subject",
  SEARCH: "/search",
  Q2N: "/q2n",
};

export const ROUTES = [
  { name: "Accueil", url: ROUTE_URLS.HOME },
  { name: "Panthéons", url: ROUTE_URLS.PANTHEONS },
  { name: "Sujets", url: ROUTE_URLS.SUBJECTS },
  { name: "Recherche", url: ROUTE_URLS.SEARCH },
  { name: "À propos", url: ROUTE_URLS.ABOUT },
];
```

## Dynamic Routes

### Single Parameter Route

```typescript
// app/pantheons/[pantheon]/page.tsx
interface PantheonPageProps {
  params: Promise<{ pantheon: string }>;
}

export const revalidate = 604800; // 7 days

const PantheonPage = async ({ params }: PantheonPageProps) => {
  const { pantheon } = await params;  // Async params in Next.js 16
  const story = await fetchSpecificPantheon(pantheon);

  return /* ... */;
};

export default PantheonPage;
```

### Catch-All Route

```typescript
// app/cards/[...card]/page.tsx
interface CardPageProps {
  params: Promise<{ card: string[] }>;  // Array for catch-all
}

export const revalidate = 86400; // 1 day
export const dynamicParams = true;

const CardPage = async ({ params }: CardPageProps) => {
  const pageParams = await params;
  const pantheon = pageParams.card[0];  // First segment
  const title = pageParams.card[1];     // Second segment

  const story = await fetchSpecificCard(title, pantheon);
  return /* ... */;
};
```

## Route Builders

Location: `src/utils/routes/routes.ts`

```typescript
import { ROUTE_URLS } from "./routes.constants";
import { parseStringToSlug } from "../string";

// Build card route: /cards/greek/zeus
export const setCardRouteParameters = (cardName: string, pantheon: string) =>
  ROUTE_URLS.CARD
    .replace(":pantheon", pantheon)
    .replace(":card", parseStringToSlug(cardName));

// Build pantheon route: /pantheons/greek
export const setPantheonRouteParameters = (pantheon: string) =>
  ROUTE_URLS.PANTHEON.replace(":pantheon", pantheon);

// Build subject route: /subjects/gods
export const setSubjectRouteParameters = (subject: string) =>
  ROUTE_URLS.SUBJECT.replace(":subject", subject);
```

## Breadcrumb Navigation

Location: `src/utils/routes/routes.ts`

```typescript
export const generateBreadcrumbLinks = (breadcrumbNodes: string[]) => {
  return breadcrumbNodes.map((node, index) => ({
    label: parseBreadcrumbNode(node),
    url: buildBreadcrumbUrl(breadcrumbNodes, index),
    isLast: index === breadcrumbNodes.length - 1,
  }));
};

const parseBreadcrumbNode = (node: string): string => {
  // Convert slugs to display labels
  // "greek" → "Grec"
  // "zeus" → "Zeus"
  // ...
};
```

## Redirects Configuration

Location: `next.config.js`

```javascript
module.exports = {
  async redirects() {
    return [
      // Spelling correction
      {
        source: "/cards/egyptian/hator",
        destination: "/cards/egyptian/hathor",
        permanent: true,
      },
      // Legacy route redirect
      {
        source: "/changelog",
        destination: "/about",
        permanent: true,
      },
      // Pantheon-only path redirect
      {
        source: "/cards/:pantheon(greek|egyptian|roman|norse|celtic|japanese|chinese|hindu|aztec|mesopotamian|slavic)",
        destination: "/pantheons/:pantheon",
        permanent: true,
      },
      // www to non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.palmythology.com" }],
        destination: "https://palmythology.com/:path*",
        permanent: true,
      },
    ];
  },
};
```

## Navigation Components

### Link Navigation

```typescript
// src/components/domains/navigation/MainMenu.tsx
import Link from "next/link";
import { ROUTES } from "../../../utils/routes/routes.constants";

const MainMenu = () => (
  <nav className="flex items-center justify-evenly sticky top-0">
    {ROUTES.map(({ name, url }) => (
      <Link
        href={url}
        key={`nav-${name}`}
        className="px-4 py-2 hover:underline"
      >
        {name}
      </Link>
    ))}
  </nav>
);
```

### Programmatic Navigation

```typescript
"use client";

import { useRouter } from "next/navigation";

const Component = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/search");
    // or router.replace("/search");
  };

  return <button onClick={handleNavigate}>Search</button>;
};
```

## SEO & Metadata

### Static Metadata

```typescript
// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Palmythology",
  description: "Découvrez l'histoire de Palmythology...",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://palmythology.com/about",
    languages: { fr: "https://palmythology.com/about" },
  },
  openGraph: {
    title: "À propos | Palmythology",
    description: "...",
    url: "https://palmythology.com/about",
    siteName: "Palmythology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | Palmythology",
  },
};
```

### Dynamic Metadata

```typescript
// app/cards/[...card]/page.tsx
import type { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: CardPageProps): Promise<Metadata> => {
  const { card } = await params;
  const pantheon = card[0];
  const title = card[1];

  const story = await fetchSpecificCard(title, pantheon);
  const cardName = story.content?.name;
  const pantheonLabel = getPantheonLabelFromValue(pantheon);

  return {
    title: `${cardName} | ${pantheonLabel} - Palmythology`,
    description: story.content?.metaDescription,
    openGraph: {
      title: `${cardName} | Palmythology`,
      description: story.content?.metaDescription,
      images: [story.content?.icon?.filename],
    },
  };
};
```

### JSON-LD Schema

```typescript
// In page component
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: name,
  datePublished: published_at,
  keywords: [name, pantheonLabel, subjectLabel],
  author: {
    "@type": "Organization",
    name: "Palmythology",
  },
};

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
    {/* Page content */}
  </>
);
```

## Sitemap & Robots

### Sitemap Generation

Location: `app/sitemap.ts`

```typescript
import type { MetadataRoute } from "next";
import { fetchAvailableCards } from "../src/utils/cms/cms.requests";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cards = await fetchAvailableCards();

  const cardUrls = cards.map((card) => ({
    url: `https://palmythology.com/cards/${card.pantheon}/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://palmythology.com", priority: 1.0 },
    { url: "https://palmythology.com/pantheons", priority: 0.9 },
    { url: "https://palmythology.com/subjects", priority: 0.9 },
    ...cardUrls,
  ];
}
```

### Robots.txt

Location: `app/robots.ts`

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://palmythology.com/sitemap.xml",
  };
}
```

## Error Handling

### Error Boundaries

Location: `app/cards/[...card]/error.tsx`

```typescript
"use client";

import { useErrorHandler } from "../../../src/components/hooks/useErrorHandler";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const { title, subtitle, httpCode } = useErrorHandler(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">{httpCode}</h1>
      <h2 className="text-2xl">{title}</h2>
      <p>{subtitle}</p>
      <button onClick={reset}>Réessayer</button>
    </div>
  );
};

export default ErrorPage;
```

## Route Types Reference

| Route Pattern | Example URL | File Location |
|---------------|-------------|---------------|
| Static | `/about` | `app/about/page.tsx` |
| Dynamic | `/pantheons/greek` | `app/pantheons/[pantheon]/page.tsx` |
| Catch-all | `/cards/greek/zeus` | `app/cards/[...card]/page.tsx` |
| API | `/api/revalidate` | `app/api/revalidate/route.ts` |
