# Testing Documentation

This document explains Palmythology's testing approach, tools, and best practices.

## Testing Framework

### Vitest

Palmythology uses **Vitest 4** for unit and integration testing:

- **Fast:** Optimized for speed
- **Vue/React Compatible:** Works great with our stack
- **Jest Compatible:** Uses familiar Jest API
- **TypeScript Support:** Full TypeScript support
- **Watch Mode:** Auto-rerun tests on changes

**Configuration:** [vitest.config.mts](../vitest.config.mts)

### React Testing Library

For component testing:

- **User-Centric:** Test from user perspective
- **Accessibility:** Encourages accessible code
- **Best Practices:** Promotes testing behavior, not implementation

**Website:** https://testing-library.com/

## Running Tests

### Run All Tests

```bash
pnpm test
```

Output shows:
- Test file names
- Test descriptions
- Pass/fail status
- Execution time

### Watch Mode

```bash
pnpm watch
```

Auto-runs tests when files change. Great for development.

### Test Coverage

```bash
pnpm coverage
```

Generates coverage report showing:
- % of lines covered
- % of functions covered
- % of branches covered
- % of statements covered

**Goal:** >80% coverage for critical paths

## Test File Structure

### Location

Test files are colocated with source code:

```
src/
├── utils/
│   ├── pantheons.ts           # Source file
│   ├── pantheons.test.ts      # Test file (same folder)
│   ├── pantheons.constants.ts
│   └── pantheons.constants.test.ts
└── modules/
    ├── godle/
    │   └── godleEngine.ts
    │   └── godleEngine.test.ts
```

**Naming Convention:**
- `*.test.ts` or `*.test.tsx` for tests
- `*.spec.ts` or `*.spec.tsx` also supported

### Test File Template

```typescript
import { describe, it, expect } from "vitest"
import { myFunction } from "./myModule"

describe("myModule", () => {
  it("should do something expected", () => {
    const result = myFunction("input")
    expect(result).toBe("expected")
  })

  it("should handle edge cases", () => {
    expect(() => myFunction(null)).toThrow()
  })
})
```

## Current Test Coverage

### Existing Tests

Palmythology has **8 test files**:

| File | Purpose |
|------|---------|
| `pantheons.test.ts` | Pantheon enum mappings |
| `subjects.test.ts` | Subject enum mappings |
| `cms.requests.test.ts` | CMS data fetching |
| `number.test.ts` | Number utilities |
| `object.test.ts` | Object utilities |
| `string.test.ts` | String utilities |
| `colors.test.ts` | Style color utilities |
| `routes.test.ts` | Route constant generation |

### Coverage Gaps

**Not currently tested:**
- ❌ React components (GodleGame, SearchResults, etc.)
- ❌ Game logic (godleEngine.ts, godleStorage.ts)
- ❌ Search engine (searchEngine.ts)
- ❌ Page routes (app/ components)
- ❌ API routes

## Testing Patterns

### 1. Testing Pure Functions

```typescript
// src/utils/pantheons.test.ts
import { getPantheonLabelFromValue } from "./pantheons"

describe("getPantheonLabelFromValue", () => {
  it("converts GREEK to Grec", () => {
    expect(getPantheonLabelFromValue(PantheonValue.GREEK)).toBe("Grec")
  })

  it("converts NORSE to Nordique", () => {
    expect(getPantheonLabelFromValue(PantheonValue.NORSE)).toBe("Nordique")
  })
})
```

**Best Practices:**
- Test one thing per test
- Use descriptive test names
- Test both happy path and edge cases
- Test error handling

### 2. Testing Utility Functions

```typescript
// src/utils/string.test.ts
import { truncateString, capitalize } from "./string"

describe("String utilities", () => {
  describe("truncateString", () => {
    it("truncates long strings", () => {
      const result = truncateString("Hello World", 5)
      expect(result).toBe("Hello...")
    })

    it("leaves short strings alone", () => {
      const result = truncateString("Hi", 5)
      expect(result).toBe("Hi")
    })
  })

  describe("capitalize", () => {
    it("capitalizes first letter", () => {
      expect(capitalize("hello")).toBe("Hello")
    })

    it("handles empty strings", () => {
      expect(capitalize("")).toBe("")
    })
  })
})
```

### 3. Testing Game Logic

```typescript
// src/modules/godle/godleEngine.test.ts
import { compareGuess } from "./godleEngine"

describe("Godle engine", () => {
  const target = {
    name: "Zeus",
    pantheon: PantheonValue.GREEK,
    subject: SubjectValue.DIVINITY,
    genre: GenreValue.MALE,
    mainDomain: "War",
    attributes: ["War", "Sky", "Thunder"]
  }

  it("returns EXACT match for correct guess", () => {
    const result = compareGuess("Zeus", target)
    expect(result.isCorrect).toBe(true)
  })

  it("returns PARTIAL attribute match", () => {
    const guess = {
      name: "Odin",
      pantheon: PantheonValue.NORSE,
      subject: SubjectValue.DIVINITY,
      genre: GenreValue.MALE,
      mainDomain: "War",
      attributes: ["War", "Wisdom"]  // "War" matches
    }
    const result = compareGuess("Odin", target)
    expect(result.attributesMatch).toBe(MatchType.PARTIAL)
  })

  it("returns NONE for no attribute match", () => {
    const guess = {
      // ... attributes: ["Love", "Music"]
    }
    const result = compareGuess("Aphrodite", target)
    expect(result.attributesMatch).toBe(MatchType.NONE)
  })
})
```

### 4. Testing Search Engine

```typescript
// src/modules/searchEngine.test.ts
import { filterCards } from "./searchEngine"

describe("Search engine", () => {
  const cards = [
    { name: "Zeus", pantheon: PantheonValue.GREEK },
    { name: "Odin", pantheon: PantheonValue.NORSE },
    { name: "Ra", pantheon: PantheonValue.EGYPTIAN }
  ]

  it("filters by pantheon", () => {
    const results = filterCards(cards, {
      pantheon: PantheonValue.GREEK
    })
    expect(results).toHaveLength(1)
    expect(results[0].name).toBe("Zeus")
  })

  it("filters by query", () => {
    const results = filterCards(cards, {
      query: "zeus"
    })
    expect(results).toHaveLength(1)
  })

  it("combines multiple filters", () => {
    const results = filterCards(cards, {
      pantheon: PantheonValue.GREEK,
      query: "zeu"
    })
    expect(results).toHaveLength(1)
  })
})
```

### 5. Testing CMS Requests

```typescript
// src/utils/cms/cms.requests.test.ts
import { parseCardData } from "./cms.requests"

describe("CMS request utilities", () => {
  it("parses Storyblok card to application type", () => {
    const storyblokCard = {
      name: "Zeus",
      subtitle: "King of the gods",
      pantheon: "GREEK",
      // ... other fields
    }

    const result = parseCardData(storyblokCard)

    expect(result).toEqual({
      name: "Zeus",
      subtitle: "King of the gods",
      pantheon: PantheonValue.GREEK,
      // ... other fields
    })
  })
})
```

## Mocking

### Mock CMS Requests

```typescript
// src/components/domains/cards/__tests__/CardDetail.test.tsx
import { vi } from "vitest"
import { fetchSpecificCard } from "@/utils/cms/cms.requests"

vi.mock("@/utils/cms/cms.requests", () => ({
  fetchSpecificCard: vi.fn().mockResolvedValue({
    name: "Zeus",
    subtitle: "King of the gods",
    // ... mock card data
  })
}))

describe("CardDetail component", () => {
  it("renders card information", async () => {
    // Test card display
  })
})
```

### Mock Browser APIs

```typescript
describe("Game state", () => {
  it("saves to localStorage", () => {
    const store: { [key: string]: string } = {}

    const mockLocalStorage = {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value
      },
      removeItem: (key: string) => {
        delete store[key]
      },
      clear: () => {
        Object.keys(store).forEach((key) => delete store[key])
      }
    }

    global.localStorage = mockLocalStorage as any

    // Test localStorage operations
  })
})
```

## Component Testing

### Testing with React Testing Library

```typescript
// src/components/domains/search/__tests__/SearchInput.test.tsx
import { render, screen, userEvent } from "@testing-library/react"
import SearchInput from "../SearchInput"

describe("SearchInput component", () => {
  it("displays input field", () => {
    render(<SearchInput />)
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
  })

  it("calls onChange when user types", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<SearchInput onChange={onChange} />)

    const input = screen.getByRole("searchbox")
    await user.type(input, "Zeus")

    expect(onChange).toHaveBeenCalledWith("Zeus")
  })

  it("shows suggestions on input", async () => {
    const user = userEvent.setup()
    render(<SearchInput suggestions={["Zeus", "Odin"]} />)

    const input = screen.getByRole("searchbox")
    await user.type(input, "Z")

    expect(screen.getByText("Zeus")).toBeInTheDocument()
  })
})
```

## Best Practices

### ✅ DO

- **Test behavior, not implementation** - Test what users see, not how it works
- **Use descriptive test names** - Explain what the test verifies
- **One assertion per test** - Keep tests focused
- **Test edge cases** - null, undefined, empty, large values
- **Mock external dependencies** - CMS, APIs, browser APIs
- **Keep tests isolated** - Each test should be independent
- **Use beforeEach for setup** - Reduce duplication
- **Test error handling** - What happens when things fail?

### ❌ DON'T

- **Test implementation details** - Don't test private functions
- **Create interdependent tests** - Tests should run in any order
- **Use magic numbers** - Explain test data
- **Test library code** - Don't test React or other libraries
- **Test database operations** - Mock them instead
- **Make tests flaky** - Tests should be deterministic

## Test Categories

### Unit Tests

```typescript
// Test single functions in isolation
expect(getPantheonLabel(value)).toBe(label)
```

**Files:**
- `pantheons.test.ts`
- `subjects.test.ts`
- `string.test.ts`
- etc.

### Integration Tests

```typescript
// Test multiple functions working together
const cards = await fetchAllCards()
const filtered = filterCards(cards, criteria)
expect(filtered).toHaveLength(expectedCount)
```

**Files:**
- `cms.requests.test.ts` (CMS + data transformation)
- `searchEngine.test.ts` (filtering logic)

### Component Tests (To Add)

```typescript
// Test React components
render(<GodleGame />)
expect(screen.getByText("Guess the entity")).toBeInTheDocument()
```

**Should Add:**
- `src/components/domains/godle/*.test.tsx`
- `src/components/domains/search/*.test.tsx`

### End-to-End Tests (Optional)

Tests full user flows using Playwright or Cypress:

```typescript
// Example with Playwright
test("user can search for cards", async ({ page }) => {
  await page.goto("/search")
  await page.fill("[role=searchbox]", "Zeus")
  await page.click('text="Zeus"')
  expect(page.url()).toContain("/cards/greek/zeus")
})
```

**Currently not implemented but recommended for production.**

## Coverage Goals

### Current Coverage

Run `pnpm coverage` to see detailed metrics.

### Target Coverage

- **Utilities:** 90%+ (pure functions)
- **Modules:** 80%+ (business logic)
- **Components:** 70%+ (behavioral testing)
- **Overall:** 75%+

### Critical Paths to Test

**High Priority:**
- CMS request functions
- Search/filter logic
- Godle game engine
- Card transformations

**Medium Priority:**
- Utility functions
- Component rendering
- Event handlers

**Low Priority:**
- Styling components
- Layout/structure tests

## Continuous Integration

### GitHub Actions

Tests run automatically on every commit:

1. **Run tests** - `pnpm test`
2. **Generate coverage** - `pnpm coverage`
3. **Report results** - Success/failure badge

Configure in `.github/workflows/test.yml` (if exists).

## Debugging Tests

### Run Single Test

```bash
# Run specific test file
pnpm test pantheons.test.ts

# Run tests matching pattern
pnpm test --grep "pantheon"
```

### Debug Mode

```bash
# Run with debugging information
pnpm test --reporter=verbose

# Watch mode for development
pnpm watch pantheons.test.ts
```

### Visual Debugging

```typescript
import { screen, debug } from "@testing-library/react"

it("should render correctly", () => {
  render(<Component />)
  debug()  // Prints DOM to console
  screen.debug()  // Prints specific elements
})
```

## Adding Tests

### Step-by-Step

1. **Create test file** in same folder as source:
   ```
   src/utils/newFeature.ts
   src/utils/newFeature.test.ts  // ← Create this
   ```

2. **Import test utilities:**
   ```typescript
   import { describe, it, expect } from "vitest"
   ```

3. **Write test cases:**
   ```typescript
   describe("newFeature", () => {
     it("should work correctly", () => {
       const result = newFeature("input")
       expect(result).toBe("expected")
     })
   })
   ```

4. **Run tests:**
   ```bash
   pnpm test
   ```

5. **Check coverage:**
   ```bash
   pnpm coverage
   ```

## Related Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - How code is organized
- [README.md](../README.md) - Quick start
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines
- [.claude/code-quality.md](../.claude/code-quality.md) - Detailed code quality info

## External Resources

- **Vitest:** https://vitest.dev/
- **Jest:** https://jestjs.io/ (Vitest API reference)
- **Testing Library:** https://testing-library.com/
- **Playwright:** https://playwright.dev/ (for E2E)
