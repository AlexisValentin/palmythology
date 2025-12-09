# Component Conventions

## Component Types

### Server Components (Default)

By default, all components in Next.js 16 are **Server Components**:

```typescript
// app/pantheons/page.tsx - Server Component (no directive needed)
const PantheonsPage = async () => {
  const data = await fetchPantheons(); // Direct async data fetching
  return <PantheonList data={data} />;
};

export default PantheonsPage;
```

### Client Components

Add `"use client"` directive when component needs:
- React hooks (useState, useEffect, etc.)
- Browser APIs (window, document)
- Event handlers (onClick, onChange)

```typescript
// src/components/domains/search/SearchResults.tsx
"use client";

import { useState, useEffect } from "react";

const SearchResults: React.FC<Props> = ({ pantheon, subject }) => {
  const [results, setResults] = useState([]);
  // ...
};
```

## Component Structure Pattern

### Basic Component Template

```typescript
// src/components/generics/ComponentName.tsx

interface ComponentNameProps {
  requiredProp: string;
  optionalProp?: number;
  children?: React.ReactNode;
}

const ComponentName: React.FC<ComponentNameProps> = ({
  requiredProp,
  optionalProp = defaultValue,
  children,
}) => {
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### Complex Component with Logic

```typescript
// src/components/generics/PageSquare.tsx
"use client";

import { useCallback } from "react";

// Enums for type safety
enum CONTENT_TYPE { CARD = "card", PANTHEON = "pantheon", SUBJECT = "subject" }
enum PAGE_SQUARE_SIZE_TYPE { SM = "sm", MD = "md", LG = "lg" }

interface PageSquareProps {
  name: string;
  contentType: CONTENT_TYPE;
  size?: PAGE_SQUARE_SIZE_TYPE;
  // ...
}

const PageSquare: React.FC<PageSquareProps> = ({
  name,
  contentType,
  size = PAGE_SQUARE_SIZE_TYPE.MD,
}) => {
  // Memoized callbacks for expensive operations
  const buildRoute = useCallback(() => {
    switch (contentType) {
      case CONTENT_TYPE.CARD:
        return setCardRouteParameters(name, pantheon);
      case CONTENT_TYPE.PANTHEON:
        return setPantheonRouteParameters(name);
      // ...
    }
  }, [name, contentType]);

  return (/* JSX */);
};

export default PageSquare;
```

## Props Conventions

### Props Interface Naming

```typescript
interface ButtonProps { ... }
interface PageSquareProps { ... }
interface SearchResultsProps { ... }
```

### Optional Props with Defaults

```typescript
interface ComponentProps {
  required: string;
  optional?: string;      // Use ? for optional
  withDefault?: number;   // Provide default in destructuring
}

const Component: React.FC<ComponentProps> = ({
  required,
  optional,
  withDefault = 10,       // Default value here
}) => { ... };
```

### Children Props

```typescript
interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
```

## Custom Hooks

### useModal Hook

Location: `src/components/hooks/useModal.ts`

```typescript
const useModal = (shouldBeDisplayed: boolean) => {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(shouldBeDisplayed);

  const displayModal = useCallback(() => setShouldDisplayModal(true), []);
  const hideModal = useCallback(() => setShouldDisplayModal(false), []);

  return { shouldDisplayModal, displayModal, hideModal };
};

// Usage
const { shouldDisplayModal, displayModal, hideModal } = useModal(false);
```

### useErrorHandler Hook

Location: `src/components/hooks/useErrorHandler.ts`

```typescript
const useErrorHandler = (error: Error & { digest?: string }) => {
  const getHttpCode = () => {
    const match = error.message.match(/HTTP error! status: (\d+)/);
    return match ? Number.parseInt(match[1]) : 500;
  };

  const httpCode = getHttpCode();

  return {
    title: getErrorTitle(httpCode),
    subtitle: getErrorSubtitle(httpCode),
    httpCode,
  };
};
```

## Component Organization

### Generic Components (`src/components/generics/`)

Reusable, domain-agnostic components:

| Component | Purpose |
|-----------|---------|
| `Button.tsx` | Base button with variants |
| `PageSquare.tsx` | Card/tile for displaying content |
| `PageHeader.tsx` | Page title with optional subtitle |
| `PageSection.tsx` | Section wrapper with title |
| `Pagination.tsx` | Pagination controls |
| `Breadcrumbs.tsx` | Navigation breadcrumbs |
| `Carousel.tsx` | Image/content carousel |
| `Summary.tsx` | Expandable summary/accordion |
| `Faq.tsx` | FAQ item with expand/collapse |
| `TextBlock.tsx` | Rich text block renderer |
| `Quotation.tsx` | Styled quote block |
| `SocialNetworks.tsx` | Social media links |
| `UpPageButton.tsx` | Scroll-to-top button |
| `Copyrights.tsx` | Copyright notice |

### Domain Components (`src/components/domains/`)

Feature-specific components organized by domain:

```
domains/
├── cards/
│   ├── LPCardList.tsx         # "Grandes Lignes" card list
│   ├── PantheonList.tsx       # Pantheon cards grid
│   ├── Quoi2NeufCardList.tsx  # New content list
│   └── SubjectList.tsx        # Subject cards grid
├── navigation/
│   └── MainMenu.tsx           # Top navigation bar
├── search/
│   ├── Filter.tsx             # Search filter form
│   ├── SearchResults.tsx      # Results with pagination
│   └── SelectFilter.tsx       # Dropdown filter
├── footer/
│   └── Footer.tsx             # Site footer
├── social/
│   └── SocialsIncentivePopin.tsx  # Social follow modal
└── tracking/
    └── TrackingNotice.tsx     # Analytics consent
```

## Styling Conventions

### Tailwind CSS Classes

```typescript
// Use template literals for dynamic classes
const Component = ({ color }) => (
  <div className={`bg-${color} text-white rounded-lg p-4`}>
    ...
  </div>
);

// Combine static and conditional classes
const Button = ({ active }) => (
  <button className={`px-4 py-2 rounded ${active ? "bg-blue-500" : "bg-gray-300"}`}>
    ...
  </button>
);
```

### Responsive Design

Mobile-first with breakpoints:

```typescript
<div className="
  w-full          // Mobile default
  sm:w-1/2        // Small screens
  md:w-1/3        // Medium screens
  lg:w-1/4        // Large screens
  xl:w-1/5        // Extra large
  2xl:w-1/6       // 2XL screens
">
```

## Testing Components

### Test File Location

Tests are **colocated** with components:

```
src/components/generics/
├── Button.tsx
└── Button.test.tsx
```

### Test Pattern

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
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
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## Examples from Codebase

### Button Component (Generic)

```typescript
// src/components/generics/Button.tsx
export interface ButtonProps {
  label: string;
  color: string;
  onClick: () => void;
  icon?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  color,
  onClick,
  icon,
  className = "",
}) => (
  <button
    className={`bg-${color} text-white rounded-lg hover:opacity-75 ${className}`}
    onClick={onClick}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </button>
);
```

### MainMenu Component (Domain)

```typescript
// src/components/domains/navigation/MainMenu.tsx
import Link from "next/link";
import { ROUTES } from "../../../utils/routes/routes.constants";

const MainMenu = () => {
  return (
    <nav className="flex items-center justify-evenly sticky top-0 z-50 bg-white">
      {ROUTES.map(({ name, url }) => (
        <Link href={url} key={`nav-${name}`} className="px-4 py-2 hover:underline">
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default MainMenu;
```
