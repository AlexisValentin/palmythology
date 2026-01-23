# Naming Conventions

## File Naming

### Component Files

| Pattern | Case | Example |
|---------|------|---------|
| React Components | PascalCase | `Button.tsx`, `PageSquare.tsx`, `MainMenu.tsx` |
| Test Files | Match source + `.test` | `Button.test.tsx`, `pantheons.test.ts` |
| Page Files | lowercase | `page.tsx`, `layout.tsx`, `error.tsx` |
| API Routes | lowercase | `route.ts` |

### Utility Files

| Pattern | Case | Example |
|---------|------|---------|
| Utility Functions | camelCase | `string.ts`, `pantheons.ts`, `searchEngine.ts` |
| Constants | camelCase + `.constants` | `routes.constants.ts`, `cms.constants.ts` |
| Type Definitions | camelCase | `images.d.ts` |

### Folder Names

| Pattern | Case | Example |
|---------|------|---------|
| All folders | lowercase | `components/`, `utils/`, `domains/` |
| Multi-word | camelCase or hyphen | `socialNetworks/` or `social-networks/` |

## Component Naming

### Component Names

```typescript
// PascalCase for component names
const PageSquare: React.FC<PageSquareProps> = () => { ... };
const MainMenu: React.FC = () => { ... };
const SearchResults: React.FC<SearchResultsProps> = () => { ... };

export default PageSquare;
```

### Props Interface Names

```typescript
// {ComponentName}Props
interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface PageSquareProps {
  name: string;
  contentType: CONTENT_TYPE;
}

interface SearchResultsProps {
  pantheon: string;
  subject: string;
}
```

## Function Naming

### Getter Functions

```typescript
// get{Property} - retrieves a value
getPantheonLabelFromValue(pantheon: PantheonValue): PantheonLabel
getPantheonValueFromLabel(pantheon: PantheonLabel): PantheonValue
getPantheonMainColor(pantheon: PantheonValue): string
getSubjectLabelFromValue(subject: SubjectValue): SubjectLabel
getStoryblokToken(): string
getStoryblokBaseUrl(): string
```

### Setter/Builder Functions

```typescript
// set{Property} - builds/sets route parameters
setCardRouteParameters(cardName: string, pantheon: string): string
setPantheonRouteParameters(pantheon: string): string
setSubjectRouteParameters(subject: string): string
```

### Parser/Transform Functions

```typescript
// parse{Type} - transforms data format
parseStringToSlug(name: string): string
parseBreadcrumbNode(node: string): string

// build{Type} - constructs complex objects
buildLink(url: string, label: string): LinkType
buildBreadcrumbUrl(nodes: string[], index: number): string
```

### Boolean Check Functions

```typescript
// is{Condition} - returns boolean
isACardFound(criterias: ResearchCriterias, card: CardDetails): boolean
isSelectedOptionMatching(option: string, value: string): boolean
isStringEmpty(str: string): boolean
isHomePage(pathname: string): boolean
areFiltersUnfilled(): boolean
```

### Fetch Functions

```typescript
// fetch{Resource} - async data retrieval
fetchCardsFromString(startingString: string): Promise<...>
fetchLatestCards(count: number): Promise<...>
fetchFilteredCards(pantheon, subject, page): Promise<...>
fetchSpecificCard(title: string, pantheon: string): Promise<...>
fetchSpecificPantheon(pantheon: string): Promise<...>
fetchSpecificSubject(subject: string): Promise<...>
fetchCardsFromCriterias(criteria, page): Promise<...>
fetchPlaceholderCards(): Promise<...>
fetchQ2NContent(): Promise<...>
fetchAvailableCards(): Promise<...>
```

### Filter Functions

```typescript
// filter{Items} - filters collections
filterCards(currentPage: number, criteria: ResearchCriterias): Promise<...>
```

### Generate Functions

```typescript
// generate{Output} - creates output
generateBreadcrumbLinks(nodes: string[]): BreadcrumbLink[]
generateMetadata(params: PageParams): Promise<Metadata>
generateStaticParams(): Promise<StaticParams[]>
```

## Variable Naming

### State Variables

```typescript
// Descriptive camelCase
const [searchCriterias, setSearchCriterias] = useState<ResearchCriterias>(...);
const [searchResults, setSearchResults] = useState<TranslatedCardDetails[]>([]);
const [totalResult, setTotalResult] = useState(0);
const [currentPage, setCurrentPage] = useState(1);

// Boolean state with "should" prefix
const { shouldDisplayModal, displayModal, hideModal } = useModal(false);
```

### Constants

```typescript
// UPPER_SNAKE_CASE for true constants
const STORYBLOK_RESULTS_PER_PAGE = 12;
const STORYBLOK_MAX_ITEMS_PER_REQUEST = 20;

// Object constants with UPPER_SNAKE_CASE keys
const ROUTE_URLS = {
  HOME: "/",
  ABOUT: "/about",
  CARD: "/cards/:pantheon/:card",
};
```

### Local Variables

```typescript
// Descriptive camelCase
const pantheonLabel = getPantheonLabelFromValue(pantheon);
const cardRoute = setCardRouteParameters(name, pantheon);
const formattedDate = formatDate(publishedAt);
```

## Enum Naming

### Enum Names

```typescript
// PascalCase for enum names
enum PantheonValue { ... }
enum PantheonLabel { ... }
enum SubjectValue { ... }
enum SubjectLabel { ... }
enum CONTENT_TYPE { ... }  // Legacy: UPPER_SNAKE allowed
enum PAGE_SQUARE_SIZE_TYPE { ... }
enum STORYBLOK_VERSIONS { ... }
```

### Enum Members

```typescript
// UPPER_SNAKE_CASE for enum members
enum PantheonValue {
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

enum PantheonLabel {
  GREEK = "Grec",
  EGYPTIAN = "Égyptien",
  ROMAN = "Romain",
  // ...
}
```

### Enum Usage Pattern

```typescript
// Value enums: for URLs, database keys
PantheonValue.GREEK  // "greek"

// Label enums: for display
PantheonLabel.GREEK  // "Grec"

// Mapper functions for conversion
getPantheonLabelFromValue(PantheonValue.GREEK)  // → "Grec"
getPantheonValueFromLabel(PantheonLabel.GREEK)  // → "greek"
```

## Type/Interface Naming

### Type Aliases

```typescript
// {Name}Type suffix
type CardRelatedType = "card" | "pantheon" | "subject";
type RouteType = { name: string; url: string };
type StoryblokImageType = { filename: string; alt: string };
```

### Interfaces

```typescript
// Descriptive PascalCase
interface Card { ... }
interface CardDetails { ... }
interface TranslatedCardDetails { ... }
interface ResearchCriterias { ... }
interface PantheonSelectType { ... }
```

### Props Interfaces

```typescript
// {ComponentName}Props suffix
interface ButtonProps { ... }
interface PageSquareProps { ... }
interface SearchResultsProps { ... }
```

### Page Props

```typescript
// {PageName}PagePropsType
interface CardPagePropsType {
  params: Promise<{ card: string[] }>;
}

interface PantheonPagePropsType {
  params: Promise<{ pantheon: string }>;
}
```

## Hook Naming

### Custom Hook Names

```typescript
// use{Feature} prefix
const useModal = (initialState: boolean) => { ... };
const useErrorHandler = (error: Error) => { ... };
```

### Hook Return Values

```typescript
// Descriptive object returns
const useModal = (shouldBeDisplayed: boolean) => {
  return {
    shouldDisplayModal,  // State value
    displayModal,        // Action function
    hideModal,           // Action function
  };
};

const useErrorHandler = (error: Error) => {
  return {
    title,      // Computed value
    subtitle,   // Computed value
    httpCode,   // Computed value
  };
};
```

## CSS Class Naming

### Tailwind Classes

```typescript
// Utility-first, space-separated
className="flex items-center justify-between p-4"
className="bg-blue-500 text-white rounded-lg hover:opacity-75"

// Dynamic classes with template literals
className={`bg-${color} text-white rounded-lg ${className}`}

// Conditional classes
className={`px-4 py-2 ${active ? "bg-blue-500" : "bg-gray-300"}`}
```

## File Path Conventions

### Import Paths

```typescript
// Relative imports (no path aliases in this project)
import Button from "../../src/components/generics/Button";
import { ROUTES } from "../../../src/utils/routes/routes.constants";
import { getPantheonLabelFromValue } from "../utils/cards/pantheons";
```

### Test Imports

```typescript
// Import from same directory
import Button from "./Button";
import { parseStringToSlug } from "./string";
```

## Summary Table

| Item | Convention | Example |
|------|------------|---------|
| Component file | PascalCase.tsx | `Button.tsx` |
| Utility file | camelCase.ts | `string.ts` |
| Constants file | camelCase.constants.ts | `routes.constants.ts` |
| Test file | {source}.test.tsx | `Button.test.tsx` |
| Component | PascalCase | `PageSquare` |
| Props interface | {Component}Props | `PageSquareProps` |
| Getter function | get{Property} | `getPantheonLabel` |
| Boolean function | is{Condition} | `isStringEmpty` |
| Fetch function | fetch{Resource} | `fetchSpecificCard` |
| State variable | camelCase | `searchResults` |
| Constant | UPPER_SNAKE | `ROUTE_URLS` |
| Enum name | PascalCase | `PantheonValue` |
| Enum member | UPPER_SNAKE | `GREEK` |
