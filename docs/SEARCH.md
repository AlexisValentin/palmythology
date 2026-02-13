# Search & Filter Documentation

The **Search & Filter system** allows users to discover mythology content through powerful multi-criteria searching and filtering.

**Use it:** https://palmythology.com/search

## Search Features

### Autocomplete Search

Users can search for mythological entities by name:

- **Real-time suggestions** as they type
- **Instant results** from cached entity list
- **Keyboard navigation** (arrow keys, enter to select)
- **Mobile-friendly** with touch support

**Component:** [SearchAutocomplete.tsx](../src/components/domains/search/SearchAutocomplete.tsx)

### Multi-Criteria Filtering

Filter search results by:

| Criteria | Options | Type |
|----------|---------|------|
| **Pantheon** | 11 world pantheons | Single-select |
| **Subject** | 7 entity types | Single-select |
| **Genre** | 5 gender/classifications | Single-select |

**Components:**
- [Filter.tsx](../src/components/domains/search/Filter.tsx) - Filter UI
- [SelectFilter.tsx](../src/components/domains/search/SelectFilter.tsx) - Individual select

### Pagination

Search results are paginated:
- **Items per page:** Configurable (typically 12-20)
- **Navigation:** Previous/Next buttons
- **URL-based:** Page state stored in URL

**Component:** [SearchResults.tsx](../src/components/domains/search/SearchResults.tsx)

## Search Architecture

### Client-Side Search

Search functionality is entirely client-side for speed:

1. **Initial load:** All available cards are fetched and cached
2. **User searches:** Filter in-memory array (no API calls)
3. **Results update:** Instant as user types/filters

### Data Flow

```
Page Loads
  ↓
Fetch all available cards from CMS (cached)
  ↓
User enters search term + filters
  ↓
Run searchEngine.filterCards() (client-side)
  ↓
Display results with pagination
```

**Advantage:** No latency, works offline (except initial load)

## URL Query State

Search uses **URL query parameters** to store state:

```
/search?query=zeus&pantheon=GREEK&subject=DIVINITY&page=1
```

**Library:** [nuqs](https://nuqs.47ng.com/) - URL query state management

**Parameters:**
- `query` - Search term
- `pantheon` - Pantheon filter value
- `subject` - Subject filter value
- `genre` - Genre filter value
- `page` - Current page number

**Benefits:**
- Bookmarkable searches
- Back/forward button support
- Shareable search links
- SEO-friendly URLs

### URL Management

```typescript
// Update query parameters
setSearchParams({
  query: "zeus",
  pantheon: "GREEK"
})

// Get current parameters
const { query, pantheon, subject } = searchParams
```

**File:** [app/search/page.tsx](../app/search/page.tsx)

## Search Engine Module

### Core Function

```typescript
// Filter cards by criteria
const results = filterCards(
  cards,
  {
    query: "zeus",
    pantheon: "GREEK",
    subject: "DIVINITY",
    genre: "MALE"
  }
)
```

**File:** [src/modules/searchEngine.ts](../src/modules/searchEngine.ts)

### Filtering Logic

**Query Search:**
- Matches against card name (case-insensitive)
- Partial matches supported
- Sanitized for special characters

**Pantheon Filter:**
- Exact match against card pantheon
- Optional (empty = no filter)

**Subject Filter:**
- Exact match against card subject
- Optional

**Genre Filter:**
- Exact match against card genre
- Optional

**Combined Logic:**
- All filters must match (AND logic)
- Empty filters are skipped
- Results sorted by relevance

### Placeholder Cards

When search is empty, show placeholder cards:

```typescript
const placeholders = getPlaceholderCards(allCards)
```

**Logic:**
- Shows latest 20 cards
- Helps users discover new content
- Falls back to first 20 if insufficient data

## Search Page Structure

### Page Component

**Route:** `/search`

**File:** [app/search/page.tsx](../app/search/page.tsx)

**Layout:**
```
Header (page title)
  ↓
SearchAutocomplete (search input)
  ↓
Filter Row (pantheon, subject, genre selects)
  ↓
SearchResults (paginated results grid)
```

### Server vs Client

**Server Component:** Page wrapper
- Fetches initial data from CMS
- Generates metadata

**Client Components:** Search logic
- `SearchAutocompleteClient` - Real-time search
- `Filter` - Multi-select filters
- Manages URL query state

**Reason:** Splits data fetching (server) from interactivity (client)

## Data Fetching

### Initial Data Load

On page load, fetch all searchable cards:

```typescript
const allCards = await fetchAllAvailableCardsForSearch()
```

**Function:** `fetchAllAvailableCardsForSearch()` in [src/utils/cms/cms.requests.ts](../src/utils/cms/cms.requests.ts)

**Caching:**
- Cache tag: `cms-search`
- Cache duration: 1 hour (3,600s)
- Revalidation: Webhook clears on content update

**In Dev Mode:**
- Adds cache buster (`&cv=${Date.now()}`) for fresh data
- Ensures latest changes visible immediately

### Card Details

Each searchable card includes:
- Name
- Pantheon
- Subject
- Genre
- Icon
- Availability status

## Metadata & SEO

### Page Metadata

```typescript
export const metadata: Metadata = {
  title: "Recherche | Palmythology",
  description: "Recherchez parmi les mythologies du monde",
  robots: {
    index: true,
    follow: true,
  },
}
```

### Structured Data

**SearchResultsPage Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "SearchResultsPage",
  "name": "Recherche - Palmythology",
  "url": "https://palmythology.com/search",
  "primaryImageOfPage": "...",
  "mainEntity": {
    "@type": "WebSite",
    "name": "Palmythology",
    "url": "https://palmythology.com"
  }
}
```

## Components

### SearchAutocomplete

Wraps the actual autocomplete component:

**File:** [src/components/domains/search/SearchAutocomplete.tsx](../src/components/domains/search/SearchAutocomplete.tsx)

### SearchAutocompleteClient

Client-side autocomplete with keyboard navigation:
- Shows suggestions as user types
- Debounced for performance
- Arrow key navigation
- Enter to select

**File:** [src/components/domains/search/SearchAutocompleteClient.tsx](../src/components/domains/search/SearchAutocompleteClient.tsx)

**Client Component:** Yes (needs hooks, state, event handlers)

### Filter

Filter UI component with multiple select filters:

**File:** [src/components/domains/search/Filter.tsx](../src/components/domains/search/Filter.tsx)

**Features:**
- Pantheon select
- Subject select
- Genre select
- Clear all button
- Visual indicators of active filters

**Client Component:** Yes (manages form state)

### SelectFilter

Individual select dropdown component:

**File:** [src/components/domains/search/SelectFilter.tsx](../src/components/domains/search/SelectFilter.tsx)

**Props:**
- `label` - Display label
- `options` - Available options
- `value` - Current selected value
- `onChange` - Change handler
- `clearable` - Show clear button

### SearchResults

Displays paginated search results:

**File:** [src/components/domains/search/SearchResults.tsx](../src/components/domains/search/SearchResults.tsx)

**Features:**
- Card grid layout
- Responsive (mobile/tablet/desktop)
- Empty state message
- Pagination controls
- Loading states

**Client Component:** Yes (manages pagination)

## Responsive Design

### Mobile (< 768px)

- Single-column card grid
- Stacked filters
- Touch-friendly autocomplete
- Mobile-optimized pagination

### Tablet (768px - 1024px)

- Two-column card grid
- Inline filters
- Horizontal pagination

### Desktop (> 1024px)

- Three or four-column grid
- Horizontal filter bar
- Grouped pagination controls

## Accessibility

### Keyboard Navigation

- **Tab:** Navigate between search, filters, results
- **Arrow Keys:** Navigate autocomplete suggestions
- **Enter:** Select suggestion / Submit filter
- **Escape:** Close autocomplete

### Screen Reader Support

- Proper ARIA labels on inputs
- Semantic HTML (not just divs)
- Form labels associated with inputs
- Results announced dynamically

### Color & Contrast

- Color not sole indicator of status
- Sufficient contrast ratios
- Visual feedback for all states

## Performance Optimization

### Debouncing

Search input is debounced to reduce filtering operations:

```typescript
const [query, setQuery] = useState("")

// Debounce filter execution
const debouncedSearch = useMemo(
  () => debounce((q) => setQuery(q), 300),
  []
)
```

### Memoization

Components are memoized to prevent unnecessary re-renders:

```typescript
export const SearchResults = React.memo(({ results, page }) => {
  return // render results
})
```

### Lazy Loading

Card images in results are lazy-loaded:

```typescript
<img src={card.image} loading="lazy" alt={card.name} />
```

## Testing

Currently no test files for search components.

**To add tests:**
```bash
# Component tests
src/components/domains/search/*.test.tsx

# Module tests
src/modules/searchEngine.test.ts
```

**Run tests:**
```bash
pnpm test
pnpm coverage
```

## Related Documentation

- [CARDS.md](CARDS.md) - Card system
- [ARCHITECTURE.md](ARCHITECTURE.md) - Component patterns
- [TESTING.md](TESTING.md) - Testing approach
- [README.md](../README.md) - Quick start

## See Also

- **Live Search:** https://palmythology.com/search
- **Browse by Pantheon:** https://palmythology.com/pantheons
- **Browse by Subject:** https://palmythology.com/subjects
- **Cards Hub:** https://palmythology.com/cards
