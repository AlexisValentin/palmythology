# Palmythology - Specialized Agent Definitions

This file defines specialized agents for common development tasks in the Palmythology project. Each agent has specific context, tools, and use cases tailored to recurring patterns in the codebase.

## Overview

These agents are designed to work with Claude Code and provide focused assistance for specific development workflows. Use them to maintain consistency with project conventions while accelerating development.

---

## 1. Test Agent

**Purpose**: Generate unit tests following Vitest conventions and project testing patterns.

**Context Files**:
- [.claude/code-quality.md](.claude/code-quality.md) - Testing configuration and patterns
- [vitest.config.mts](vitest.config.mts) - Vitest setup
- Example tests in `src/utils/*.test.ts`

**Common Tasks**:
- Write unit tests for utility functions
- Add test coverage for edge cases
- Mock Storyblok CMS requests with `vi.mock()`
- Test string/array/object utilities
- Follow `describe`/`it` nested block structure
- Use Testing Library for component tests

**Tools Available**: Read, Write, Edit, Bash (for running tests)

**Example Use Cases**:
```
"Write tests for the new parseCardAttributes utility function"
"Add edge case tests for parseStringToSlug with diacritics"
"Create tests for the new CMS fetch function with mocked responses"
```

---

## 2. Component Agent

**Purpose**: Create React components following domain-driven organization and project conventions.

**Context Files**:
- [.claude/components.md](.claude/components.md) - Component patterns and conventions
- [.claude/architecture.md](.claude/architecture.md) - Folder structure
- [.claude/naming-conventions.md](.claude/naming-conventions.md) - Naming rules

**Common Tasks**:
- Create new domain-specific components in `src/components/domains/`
- Create reusable generic components in `src/components/generics/`
- Implement server components (default) or client components (`"use client"`)
- Apply responsive Tailwind CSS styling
- Extract local sub-components from repetitive JSX (3+ repetitions)
- Follow PascalCase naming and `{Component}Props` interface pattern

**Tools Available**: Read, Write, Edit

**Example Use Cases**:
```
"Create a new PantheonCard component in src/components/domains/cards/"
"Build a reusable Modal generic component with Tailwind styling"
"Extract the repetitive stat display into a StatItem sub-component"
```

---

## 3. CMS Data Agent

**Purpose**: Manage Storyblok CMS requests, caching, and data transformation.

**Context Files**:
- [.claude/api-and-data.md](.claude/api-and-data.md) - CMS patterns and caching
- [src/utils/cms/cms.requests.ts](src/utils/cms/cms.requests.ts) - Existing fetch functions
- [src/utils/cms/cache.ts](src/utils/cms/cache.ts) - Cache configuration

**Common Tasks**:
- Create new `fetch{Resource}` functions with `unstable_cache`
- Implement cache tags and appropriate revalidation durations
- Transform CMS data to TypeScript interfaces
- Handle pagination for large datasets (Storyblok limit: 100 per request)
- Add `"use server"` directive to server-side functions
- Parse Storyblok rich text and asset fields

**Tools Available**: Read, Write, Edit

**Example Use Cases**:
```
"Add a fetchGodleHistory function with 7-day cache duration"
"Create a paginated fetch for all cards in a specific pantheon"
"Transform Storyblok FAQ content into FAQ component props"
```

---

## 4. API Agent

**Purpose**: Create and maintain Next.js server actions and API route handlers.

**Context Files**:
- [.claude/api-and-data.md](.claude/api-and-data.md) - API patterns
- [.claude/routing.md](.claude/routing.md) - Route configuration
- [app/api/](app/api/) - Existing API routes

**Common Tasks**:
- Create new API route handlers in `app/api/*/route.ts`
- Implement server actions with `"use server"` directive
- Configure ISR and revalidation for pages
- Add cache revalidation logic with `revalidateTag`
- Handle error responses with appropriate HTTP status codes
- Implement webhook endpoints

**Tools Available**: Read, Write, Edit, Bash (for testing endpoints)

**Example Use Cases**:
```
"Create a new API route for Godle game results submission"
"Add a server action to revalidate cache tags after CMS updates"
"Implement a webhook endpoint for Discord notifications"
```

---

## 5. Quality Agent

**Purpose**: Ensure code quality, fix linting issues, and enforce project conventions.

**Context Files**:
- [.claude/code-quality.md](.claude/code-quality.md) - Quality standards
- [biome.json](biome.json) - Biome configuration
- [tsconfig.json](tsconfig.json) - TypeScript strict mode settings

**Common Tasks**:
- Fix Biome linting errors and warnings
- Format code with Biome (`pnpm biome`)
- Ensure TypeScript strict type safety (no `any`, proper types)
- Validate conventional commit messages
- Fix pre-commit hook failures
- Run and fix test failures

**Tools Available**: Read, Edit, Bash (for linting/formatting/testing)

**Example Use Cases**:
```
"Fix all Biome linting errors in src/components/domains/godle/"
"Ensure strict TypeScript compliance in the new utility file"
"Format all files and fix commit message to follow conventional commits"
```

---

## 6. Utility Agent

**Purpose**: Create and maintain utility functions, constants, and helper modules.

**Context Files**:
- [.claude/utilities.md](.claude/utilities.md) - Utility patterns
- [.claude/naming-conventions.md](.claude/naming-conventions.md) - Function naming
- [src/utils/](src/utils/) - Existing utilities

**Common Tasks**:
- Create new utility functions (getters, parsers, validators)
- Add constants and enums in `*.constants.ts` files
- Write data transformation mappers
- Implement validation helpers with `is{Condition}` pattern
- Generate corresponding unit tests
- Follow naming conventions: `get{Property}`, `parse{Type}`, `is{Condition}`

**Tools Available**: Read, Write, Edit

**Example Use Cases**:
```
"Create a getGenreLabel utility to map genre values to display labels"
"Add a parseCardRelations function to transform CMS relation data"
"Implement an isValidPantheon validator for pantheon enum values"
```

---

## 7. Search Agent

**Purpose**: Extend search functionality and filter capabilities.

**Context Files**:
- [src/modules/searchEngine.ts](src/modules/searchEngine.ts) - Search engine logic
- [src/components/domains/search/](src/components/domains/search/) - Search components
- [.claude/utilities.md](.claude/utilities.md) - Search patterns

**Common Tasks**:
- Add new search filters (genre, attributes, etc.)
- Implement autocomplete for new entity types
- Optimize search performance with better indexing
- Add advanced query builders
- Extend filter criteria in `ResearchCriterias` interface
- Update search results pagination

**Tools Available**: Read, Write, Edit

**Example Use Cases**:
```
"Add a genre filter to the search component with autocomplete"
"Optimize the search engine to handle 1000+ cards efficiently"
"Implement fuzzy matching for card name search"
```

---

## 8. Content Type Agent

**Purpose**: Manage CMS schemas, TypeScript type definitions, and enum constants.

**Context Files**:
- [src/utils/cards/](src/utils/cards/) - Card-related constants and types
- [src/types/](src/types/) - Type definitions
- [.claude/utilities.md](.claude/utilities.md) - Constants patterns

**Common Tasks**:
- Add new Storyblok content types
- Generate TypeScript interfaces from CMS schemas
- Update content type constants and enums
- Create mappers for new content types (value ↔ label)
- Define new `PantheonValue`, `SubjectValue` enum members
- Update type exports

**Tools Available**: Read, Write, Edit

**Example Use Cases**:
```
"Add a new 'Hero' subject type with corresponding enum and mapper"
"Generate TypeScript interfaces for the new FAQ content type from Storyblok"
"Update PantheonValue enum to include the new 'Polynesian' pantheon"
```

---

## 9. Deployment Agent

**Purpose**: Handle deployment configuration, Docker optimization, and build processes.

**Context Files**:
- [Dockerfile](Dockerfile) - Multi-stage Docker build
- [next.config.js](next.config.js) - Next.js configuration
- [server.js](server.js) - Custom Node.js server
- [.env.exemple](.env.exemple) - Environment variables

**Common Tasks**:
- Update Dockerfile with new dependencies or build steps
- Configure environment variables for new features
- Set up redirects in `next.config.js`
- Optimize build performance (bundle size, build time)
- Handle deployment-related issues
- Configure security headers
- Update image optimization settings

**Tools Available**: Read, Write, Edit, Bash (for building/testing)

**Example Use Cases**:
```
"Add a redirect from /old-pantheons to /pantheons in next.config.js"
"Optimize Dockerfile to reduce image size by 30%"
"Configure environment variable for new analytics service"
```

---

## 10. Documentation Agent

**Purpose**: Maintain project documentation and keep it aligned with codebase changes.

**Context Files**:
- [.claude/](/.claude/) - All technical documentation
- [README.md](README.md) - Project setup and scripts
- [CLAUDE.md](CLAUDE.md) - Project context

**Common Tasks**:
- Update documentation when patterns or conventions change
- Add code examples for new features
- Keep technology stack versions current
- Generate API documentation
- Update quick reference guides
- Maintain changelog and version notes

**Tools Available**: Read, Write, Edit

**Example Use Cases**:
```
"Update .claude/components.md to document the new Modal pattern"
"Add examples of the new cache revalidation strategy to api-and-data.md"
"Update README.md with new npm script for Godle Discord sync"
```

---

## Agent Usage Guidelines

### When to Use Agents

- **Repetitive Tasks**: Use agents for tasks you do frequently (tests, components, utilities)
- **Pattern Consistency**: When you need to follow established patterns exactly
- **Context-Heavy Work**: When the task requires deep knowledge of specific conventions
- **Multi-File Changes**: When updates span multiple related files

### When NOT to Use Agents

- **Simple One-Off Tasks**: Quick fixes that don't need specialized context
- **Exploration**: When you're learning or experimenting with new approaches
- **Cross-Domain Work**: Tasks that span multiple agent specializations

### Best Practices

1. **Choose the Right Agent**: Match the task to the agent's specialization
2. **Provide Clear Instructions**: Specify what you want, reference existing files
3. **Review Agent Output**: Always verify the generated code matches your intent
4. **Combine Agents**: Use multiple agents sequentially (e.g., component-agent → test-agent)
5. **Update Agent Context**: Keep context files up-to-date as patterns evolve

---

**Last Updated**: 2026-02-13
**Maintained By**: Palmythology Development Team
