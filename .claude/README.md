# Palmythology - Code Conventions

This folder contains documentation of all code conventions and patterns used in the Palmythology codebase. It serves as a reference for AI-assisted development and ensures consistency across the project.

## Documentation Index

| File | Description |
|------|-------------|
| [architecture.md](./architecture.md) | Folder structure, design patterns, module organization |
| [components.md](./components.md) | React component patterns, hooks, client/server components |
| [api-and-data.md](./api-and-data.md) | CMS integration, data fetching, caching, state management |
| [routing.md](./routing.md) | Next.js App Router, dynamic routes, SEO patterns |
| [code-quality.md](./code-quality.md) | Biome, TypeScript, testing, git hooks configuration |
| [naming-conventions.md](./naming-conventions.md) | File, function, and variable naming rules |
| [utilities.md](./utilities.md) | Utility functions, constants, mappers |

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5.9.3 (strict mode)
- **Styling**: Tailwind CSS 3.4.17
- **CMS**: Storyblok (Headless CMS)
- **Testing**: Vitest 4.0.6 + Testing Library
- **Code Quality**: Biome 2.0.5+ (linter/formatter)
- **Git Hooks**: Husky 9.1.7 + CommitLint
- **Package Manager**: pnpm 10

## Key Principles

1. **Domain-Driven Organization** - Components organized by domain (cards, navigation, search)
2. **Type Safety** - Strict TypeScript with enums for categorical data
3. **Server-First** - Server components by default, "use client" only when needed
4. **ISR Caching** - Incremental Static Regeneration for performance
5. **Constants as Config** - Single source of truth for enums, routes, colors

## Quick Reference

### Creating a New Component

```typescript
// Domain component: src/components/domains/{domain}/{ComponentName}.tsx
// Generic component: src/components/generics/{ComponentName}.tsx

interface ComponentNameProps {
  requiredProp: string;
  optionalProp?: number;
}

const ComponentName: React.FC<ComponentNameProps> = ({ requiredProp, optionalProp }) => {
  return (/* JSX */);
};

export default ComponentName;
```

### Adding API Data

```typescript
// src/utils/cms/cms.requests.ts
"use server";

import { unstable_cache } from "next/cache";

export const fetchNewData = unstable_cache(
  async () => { /* fetch logic */ },
  ["cache-key"],
  { tags: ["tag"], revalidate: 86400 }
);
```

### Adding a New Route

1. Create `app/{route}/page.tsx`
2. Add route to `src/utils/routes/routes.constants.ts`
3. Generate metadata with `generateMetadata` or static `metadata` export
