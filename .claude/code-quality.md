# Code Quality Configuration

## Overview

| Tool | Version | Purpose |
|------|---------|---------|
| Biome | 2 | Linting & Formatting (replaces ESLint + Prettier) |
| TypeScript | 5.9.3 | Type checking (strict mode) |
| Vitest | 4 | Unit & component testing |
| Husky | 9 | Git hooks |
| CommitLint | 20 | Conventional commit enforcement |

## Biome Configuration

Location: `biome.json`

```json
{
  "$schema": "https://biomejs.dev/schemas/2.0.5/schema.json",
  "formatter": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "security": {
        "noDangerouslySetInnerHtml": "off"
      }
    }
  },
  "assist": {
    "enabled": true
  }
}
```

### Key Rules

- **Formatter**: Enabled (handles code style)
- **Linter**: Enabled with default strict rules
- **`noDangerouslySetInnerHtml`**: OFF (needed for markdown/HTML content rendering)

### Running Biome

```bash
# Format all files
pnpm run format

# Format with write mode
pnpm run biome

# Check formatting (CI)
pnpm exec biome check ./
```

## TypeScript Configuration

Location: `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "types": ["vitest/globals"],
    "incremental": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["src", ".next/types/**/*.ts", ".next/dev/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Strictness Level: MAXIMUM

`"strict": true` enables:

| Option | Description |
|--------|-------------|
| `noImplicitAny` | No implicit `any` types |
| `strictNullChecks` | `null`/`undefined` must be handled |
| `strictFunctionTypes` | Strict function type checking |
| `strictBindCallApply` | Strict `bind`, `call`, `apply` checking |
| `strictPropertyInitialization` | Class properties must be initialized |
| `noImplicitThis` | `this` must have explicit type |
| `alwaysStrict` | Use strict mode in all files |

### Additional Quality Rules

- `forceConsistentCasingInFileNames`: Enforces file naming consistency
- `noFallthroughCasesInSwitch`: Prevents switch fallthrough bugs
- `isolatedModules`: Ensures safe transpilation

## Testing Configuration

Location: `vitest.config.mts`

```typescript
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: [],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Test Configuration Details

| Setting | Value | Purpose |
|---------|-------|---------|
| `globals` | `true` | No need to import `describe`, `it`, `expect` |
| `environment` | `jsdom` | DOM testing for React components |
| `include` | `src/**/*.{test,spec}.*` | Test file patterns |
| Path alias | `@` → `./src` | Simplified imports |

### Running Tests

```bash
# Run tests once
pnpm run test

# Watch mode
pnpm run watch

# Coverage report
pnpm run coverage
```

### Test File Patterns

Tests are **colocated** with source files:

```
src/
├── components/generics/
│   ├── Button.tsx
│   └── Button.test.tsx
├── utils/cards/
│   ├── pantheons.ts
│   └── pantheons.test.ts
```

### Writing Tests

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Click me" color="blue" onClick={() => {}} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click" color="blue" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Git Hooks (Husky)

Location: `.husky/`

### Commit Message Hook

Location: `.husky/commit-msg`

```bash
npx --no -- commitlint --edit ${1}
pnpm link
pnpm build
pnpm test
```

**Actions on commit:**
1. Validate commit message (CommitLint)
2. Link dependencies
3. Build the project
4. Run all tests

## CommitLint Configuration

Location: `commitlint.config.js`

```javascript
module.exports = { extends: ["@commitlint/config-conventional"] };
```

### Conventional Commits Format

```
type(scope): subject

[optional body]

[optional footer]
```

### Valid Commit Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no code change |
| `refactor` | Code change, no new feature or fix |
| `perf` | Performance improvement |
| `test` | Adding/updating tests |
| `chore` | Maintenance tasks |
| `ci` | CI/CD changes |
| `build` | Build system changes |
| `revert` | Revert previous commit |

### Examples

```bash
# Good commits
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve pagination bug on search page"
git commit -m "docs: update README with new API endpoints"
git commit -m "refactor: simplify card filtering logic"
git commit -m "chore: update dependencies"

# Bad commits (will be rejected)
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "updates"
```

## NPM Scripts Reference

From `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "NODE_ENV=production node server.js",
    "lint": "next lint",
    "test": "vitest run",
    "watch": "vitest watch",
    "coverage": "vitest run --coverage",
    "biome": "pnpm exec biome format --write",
    "prepare": "husky install",
    "format": "biome format --write ./"
  }
}
```

### Development Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |

### Quality Commands

| Command | Purpose |
|---------|---------|
| `pnpm lint` | Run Next.js linting |
| `pnpm format` | Format all files with Biome |
| `pnpm biome` | Biome format with write |
| `pnpm test` | Run tests once |
| `pnpm watch` | Run tests in watch mode |
| `pnpm coverage` | Generate coverage report |

## Security Headers

Location: `next.config.js`

```javascript
const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
```

## Best Practices Checklist

### Before Committing

- [ ] Run `pnpm format` to format code
- [ ] Run `pnpm test` to verify tests pass
- [ ] Run `pnpm build` to verify build succeeds
- [ ] Use conventional commit message format

### Code Style

- [ ] Use TypeScript strict mode (no `any` unless necessary)
- [ ] Define interfaces for all props
- [ ] Use enums for categorical data
- [ ] Add tests for new utilities
- [ ] Colocate tests with source files

### Component Quality

- [ ] Use functional components with hooks
- [ ] Add `"use client"` only when needed
- [ ] Use `useCallback` for expensive callbacks
- [ ] Define clear prop interfaces
