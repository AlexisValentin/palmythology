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

Search uses **URL query parameters** to store filter state:

```
/search?pantheon=greek&subject=divinity&genre=male
```

**Library:** [nuqs](https://nuqs.47ng.com/) - URL query state management

**Parameters:**
- `pantheon` - Pantheon filter value (e.g., `greek`, `norse`, `egyptian`)
- `subject` - Subject filter value (e.g., `divinity`, `monster`, `place`)
- `genre` - Genre filter value (e.g., `male`, `female`, `androgynous`)

**Note:** Search term (autocomplete) and pagination are NOT stored in URL parameters:
- **Autocomplete:** Navigates directly to card pages, no `query` parameter
- **Pagination:** Managed via React state, not persisted in URL

**Benefits:**
- Bookmarkable filtered searches
- Back/forward button support
- Shareable search filter links
- SEO-friendly via canonical tags

### URL Management

```typescript
// Update query parameters
setFilters({
  pantheon: "greek",
  subject: "divinity"
})

// Get current parameters
const { pantheon, subject, genre } = filters
```

**File:** [src/components/domains/search/Filter.tsx](../src/components/domains/search/Filter.tsx)

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

## SEO Strategy for Query Parameters

### Why Query Parameters Are Not in Sitemap

The `/search` page supports query parameters for filtering, which creates URLs like:
- `/search?pantheon=greek`
- `/search?subject=divinity`
- `/search?pantheon=greek&subject=divinity&genre=male`

These filtered URLs are **intentionally excluded** from [app/sitemap.ts](../app/sitemap.ts) because:

1. **No Unique Content**: Filtered views show programmatically filtered results from the same dataset, not unique pages
2. **Duplicate Content Risk**: Each combination creates overlapping results (e.g., `/search?pantheon=greek` and `/search?subject=divinity` share many cards)
3. **Better Alternatives Exist**: Dedicated pages provide more value:
   - `/pantheons/greek` (included in sitemap, priority 0.8)
   - `/subjects/divinity` (included in sitemap, priority 0.7)
4. **Scale Considerations**: 11 pantheons × 7 subjects × 4 genres = 308+ combinations (future filters would increase exponentially)

### Canonical Tag Implementation

All search pages (with or without parameters) use a canonical tag pointing to the base URL:

```html
<link rel="canonical" href="https://palmythology.com/search" />
```

**Implementation:** [app/search/page.tsx:16](../app/search/page.tsx#L16)

This tells search engines:
- All filtered views are variations of the same page
- Index only the base `/search` page
- Consolidate ranking signals to the canonical URL
- Prevent duplicate content issues

**Examples:**
- `/search` → canonical: `https://palmythology.com/search` ✅
- `/search?pantheon=greek` → canonical: `https://palmythology.com/search` ✅
- `/search?pantheon=greek&subject=divinity` → canonical: `https://palmythology.com/search` ✅

### Google Search Console Configuration

To explicitly control how Google handles URL parameters:

1. **Navigate to:** Google Search Console → Settings → Crawling → URL Parameters
2. **Configure parameters:**
   - `pantheon`: "Narrows content" → "Let Googlebot decide"
   - `subject`: "Narrows content" → "Let Googlebot decide"
   - `genre`: "Narrows content" → "Let Googlebot decide"

This configuration:
- Tells Google these parameters filter results (not create new pages)
- Allows Googlebot to intelligently decide crawl priority
- Reinforces the canonical tag strategy

### Discoverability Strategy

Users and search engines find filtered content through:

1. **On-Page Filters**: Users interact with search UI directly
2. **Dedicated Pages**: `/pantheons/greek` and `/subjects/divinity` are in sitemap
3. **Internal Linking**: Cross-references between pantheon/subject pages
4. **Structured Navigation**: Site menu guides to pantheons/subjects

### Monitoring & Validation

**Google Search Console Checks:**
- **Coverage Report** → Excluded → "Duplicate, Google chose different canonical"
  - Filtered URLs should appear here (expected behavior)
  - Confirms Google is respecting canonical tags
- **Search Analytics**: Track `/search` page performance
- **URL Parameters Report**: Verify Googlebot behavior

**Manual Validation:**
```bash
# Test canonical tag with parameters
curl -s https://palmythology.com/search?pantheon=greek | grep canonical
# Should output: <link rel="canonical" href="https://palmythology.com/search" />

# Verify sitemap doesn't include parameters
curl -s https://palmythology.com/sitemap.xml | grep "search?"
# Should output: nothing (no parameterized URLs)

# Search Google for indexed parameter URLs
# site:palmythology.com/search?pantheon
# Should return: 0 or minimal results (base page only)
```

### SEO Best Practices Applied

Based on 2026 SEO standards, this implementation follows:

✅ **Canonical Tags as Primary Signal** - Strongest method for URL consolidation
✅ **Clean Sitemap with Canonical URLs Only** - Avoids inviting duplicate indexing
✅ **Consistent Signals** - Sitemap, canonicals, and internal linking align
✅ **Google Search Console Parameter Config** - Explicit crawl control
✅ **Crawl Budget Efficiency** - Focus on high-value unique pages
✅ **User Value First** - Dedicated pages for important content categories

### Trade-offs

**Advantages ✅**
- Zero duplicate content issues
- Efficient crawl budget usage
- Clean, maintainable sitemap
- Aligns with Next.js App Router patterns
- Scales infinitely with new filters
- Users can still share/bookmark filtered URLs

**Disadvantages ❌**
- Filtered views won't appear directly in search results
- Relies on Google discovering filters through navigation

**Mitigation:** Dedicated pantheon/subject pages (already in sitemap) serve the discovery need better than parameterized search URLs.

### Scalability

This strategy scales perfectly with future enhancements:
- **New filters** (e.g., `element`, `domain`, `powerLevel`) automatically covered by canonical tag
- **No sitemap changes** required when adding filters
- **No exponential growth** in indexed URLs
- **Google Search Console config** is parameter-based, not value-based

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
