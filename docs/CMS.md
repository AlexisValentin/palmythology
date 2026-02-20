# CMS Integration Documentation

Palmythology uses **Storyblok** as a headless CMS to manage all mythology content, with intelligent caching and webhook-based revalidation.

## CMS Overview

### Storyblok

**Storyblok** is a headless CMS that:
- Stores all mythology content (cards, pantheons, subjects, Q2N)
- Provides REST API for data fetching
- Offers real-time content editing
- Doesn't require code deployment for content changes

**Website:** https://www.storyblok.com/

**Advantages:**
- Separate content from code
- Non-technical users can edit content
- Versioning and content workflows
- Flexible content structure

## Content Types

### Card Content Type

Represents mythology entities (gods, creatures, places, etc.):

```typescript
interface StoryblokCardComponentType {
  name: string                    // Entity name
  subtitle: string               // Short description
  icon: StoryblokImageType      // Card icon/image
  pantheon: PantheonValue       // Which pantheon
  subject: SubjectValue         // Type of entity
  genre: GenreValue             // Gender/classification
  available: boolean            // Published status
  summary?: string              // Markdown content
  mainImage?: string            // Featured image
  quotations?: {                // Famous quotes
    title: string
    text: string
  }[]
  relatedCards?: CardRelatedType[]   // Links to other cards
  faq?: {                       // Frequently asked questions
    question: string
    answer: string
  }[]
  mainDomain?: AttributeValue   // Primary attribute (for Godle)
  attributes?: AttributeValue[] // Secondary attributes (for Godle)
  socialLinks?: {               // Social media URLs
    instagram?: string
    threads?: string
    bluesky?: string
    mastodon?: string
  }[]
}
```

### Pantheon Landing Page

Content for pantheon-specific pages (`/pantheons/[pantheon]`):

```typescript
interface StoryblokPantheonComponentType {
  title: string                 // Pantheon name
  description: string          // Overview markdown
  icon: StoryblokImageType    // Pantheon icon
  faq?: {                      // Pantheon FAQ
    question: string
    answer: string
  }[]
}
```

### Subject Landing Page

Content for subject-specific pages (`/subjects/[subject]`):

```typescript
interface StoryblokSubjectComponentType {
  title: string               // Subject name
  description: string        // Overview markdown
  icon: StoryblokImageType  // Subject icon
  faq?: {                    // Subject FAQ
    question: string
    answer: string
  }[]
}
```

### Q2N (What's New)

Preview content for upcoming mythology entries:

```typescript
interface StoryblokQ2NComponentType {
  title: string                 // Card name being featured
  subtitle: string             // Short description
  icon: StoryblokImageType    // Card icon
  teasing: string             // Preview text (markdown)
  available: boolean          // Published status
  pantheon: PantheonValue     // Pantheon
  publishDate?: string        // Publication date
}
```

## CMS Utilities

All CMS-related code is in [src/utils/cms/](../src/utils/cms/):

### cms.ts

Environment configuration:

```typescript
export const getStoryblokToken = () => process.env.STORYBLOK_TOKEN
export const getStoryblokBaseUrl = () => process.env.STORYBLOK_BASE_URL
```

**File:** [src/utils/cms/cms.ts](../src/utils/cms/cms.ts)

### cms.constants.ts

Type definitions and constants for CMS responses:

```typescript
type StoryblokImageType = {
  filename: string
  alt?: string
  title?: string
}

type CardRelatedType = {
  id: string
  link: string
  title: string
}

// ... other type definitions
```

**File:** [src/utils/cms/cms.constants.ts](../src/utils/cms/cms.constants.ts)

### cms.requests.ts

All data fetching functions with caching:

```typescript
// Fetch specific card
fetchSpecificCard(title: string, pantheon: string)

// Fetch all cards by criteria (paginated)
fetchAllCardsFromCriterias(
  pantheon: string,
  subject: string,
  genre: string
)

// Fetch paginated cards
fetchCardsFromCriterias(
  pantheon: string,
  subject: string,
  genre: string,
  page: number
)

// Fetch latest cards
fetchPlaceholderCards()

// Fetch Q2N content
fetchQ2NContent()

// Fetch all available cards (for sitemap/search)
fetchAvailableCards()

// Fetch entities for Godle game
fetchAllAvailableEntitiesForGodle()

// Fetch cards for search
fetchAllAvailableCardsForSearch()

// Fetch pantheon landing page
fetchLandingPage(type: "pantheons" | "subjects", slug: string)
```

**File:** [src/utils/cms/cms.requests.ts](../src/utils/cms/cms.requests.ts) (551 lines)

**Every function wraps requests in `unstable_cache` for performance.**

### cache.ts

Cache configuration and revalidation logic:

```typescript
// Cache durations
const cacheTags = {
  CARDS: { TAG: "cms-cards", DURATION: 86400 },      // 1 day
  PANTHEONS: { TAG: "cms-pantheons", DURATION: 604800 }, // 7 days
  SUBJECTS: { TAG: "cms-subjects", DURATION: 604800 },   // 7 days
  Q2N: { TAG: "cms-q2n", DURATION: 43200 },            // 12 hours
  SEARCH: { TAG: "cms-search", DURATION: 3600 },       // 1 hour
  GODLE: { TAG: "godle-entities", DURATION: 86400 },   // 1 day
  ALL: { TAG: "cms", DURATION: 86400 }                 // 1 day
}

// Revalidation functions
revalidateCardsCache()          // Clear card cache
revalidatePantheonsCache()      // Clear pantheon cache
revalidateSubjectsCache()       // Clear subject cache
revalidateQ2NCache()            // Clear Q2N cache
revalidateCMSCache()            // Clear all CMS cache
```

**File:** [src/utils/cms/cache.ts](../src/utils/cms/cache.ts)

## Caching Architecture

### ISR (Incremental Static Regeneration)

Palmythology uses Next.js ISR for optimal performance:

1. **Static Generation** - Pages are pre-generated at build time
2. **Incremental Updates** - Pages regenerate when CMS updates
3. **Fast Serving** - Cached pages serve immediately
4. **Automatic Revalidation** - Time-based or webhook-triggered

### Multiple Cache Layers

```
┌─────────────────────────────────────────┐
│  Page-level Revalidation (export revalidate)
│  Example: export const revalidate = 86400
└────────────────────┬────────────────────┘
                     │
┌────────────────────▼────────────────────┐
│  Function-level Cache (unstable_cache)
│  Wraps each CMS request with cache key
└────────────────────┬────────────────────┘
                     │
┌────────────────────▼────────────────────┐
│  Storyblok API Cache (Storyblok CDN)
│  External service caching
└──────────────────────────────────────────┘
```

### Cache Keys

Each CMS request has a unique cache key:

```typescript
const cacheKey = [
  "card-story",      // Request type
  pantheon,          // Parameters
  title
]

unstable_cache(
  async () => fetchData(),
  cacheKey,          // Cache key
  {
    tags: ["cms-cards", "cms"],  // Revalidation tags
    revalidate: 86400            // Time-based revalidation
  }
)
```

## Webhook Revalidation

### Cache Invalidation API

**Endpoint:** `/api/revalidate`

**Methods:** GET, POST

**Authentication:** Query parameter `secret=<REVALIDATION_SECRET>`

**File:** [app/api/revalidate/route.ts](../app/api/revalidate/route.ts)

### Webhook Requests

Clear specific cache by type:

```bash
# Clear card cache
POST https://palmythology.com/api/revalidate?secret=<SECRET>&type=cards

# Clear pantheon cache
POST https://palmythology.com/api/revalidate?secret=<SECRET>&type=pantheons

# Clear Q2N cache
POST https://palmythology.com/api/revalidate?secret=<SECRET>&type=q2n

# Clear all caches
POST https://palmythology.com/api/revalidate?secret=<SECRET>&type=
```

### Storyblok Webhook Configuration

In Storyblok CMS settings:

1. **Go to:** Settings → Webhooks
2. **Create webhook:**
   - URL: `https://palmythology.com/api/revalidate?secret=<REVALIDATION_SECRET>&type=cards`
   - Trigger: "Story published" and "Story unpublished"
   - Method: POST

3. **Result:** Cache automatically clears when content updates

### Manual Cache Busting

For development/debugging:

```bash
curl "https://palmythology.com/api/revalidate?secret=dev-secret&type=cards"
```

## Data Transformation

### Parse Functions

Transform Storyblok data to application types:

```typescript
// Parse card data
const card: CardDetails = parseCardData(storyblokCard)

// Parse Q2N data
const q2nEntry: Quoi2NeufStoryType = parseQuoi2NeufData(storyblokStory)
```

**File:** [src/utils/cms/cms.requests.ts](../src/utils/cms/cms.requests.ts)

### Value-to-Label Mapping

Convert enum values to human-readable labels:

```typescript
// Pantheon
getPantheonLabelFromValue(PantheonValue.GREEK)    // "Grec"
getPantheonData(PantheonValue.GREEK)              // { label, icon, color }

// Subject
getSubjectLabelFromValue(SubjectValue.DIVINITY)   // "Divinité"
getSubjectData(SubjectValue.DIVINITY)             // { label, icon }

// Genre
getGenreLabelFromValue(GenreValue.MALE)           // "Masculin"
```

**Files:**
- [src/utils/cards/pantheons.ts](../src/utils/cards/pantheons.ts)
- [src/utils/cards/subjects.ts](../src/utils/cards/subjects.ts)
- [src/utils/cards/genres.ts](../src/utils/cards/genres.ts)

## Data Flow Example

### Fetching a Card Detail Page

**File:** [app/cards/[...card]/page.tsx](../app/cards/[...card]/page.tsx)

1. **User visits** `/cards/greek/zeus`

2. **Page receives params:** `{ card: ["greek", "zeus"] }`

3. **Page calls CMS function:**
   ```typescript
   const card = await fetchSpecificCard("zeus", "greek")
   ```

4. **CMS function:**
   - Checks cache (key: `["card-story", "greek", "zeus"]`)
   - If cached, returns immediately
   - If not, fetches from Storyblok API

5. **Storyblok API call:**
   ```
   GET https://api.storyblok.com/v2/cdn/stories/cards/greek/zeus/
   ?token=<TOKEN>&version=published
   ```

6. **Response:** Full story object with content

7. **Component renders:** Page with card details

8. **Caching:** Result cached for 1 day with tags `["cms-cards", "cms"]`

9. **Later:** If Storyblok content updates and webhook fires:
   ```
   POST /api/revalidate?secret=<SECRET>&type=cards
   ```
   → Clears `cms-cards` tag → Next request fetches fresh data

## Environment Variables

Required environment variables (see [.env.exemple](../.env.exemple)):

```bash
# CMS Configuration
STORYBLOK_BASE_URL=https://api.storyblok.com/v2/cdn/stories/
STORYBLOK_TOKEN=<your-storyblok-api-token>

# Cache Revalidation
REVALIDATION_SECRET=<webhook-secret-token>
```

### Obtaining Credentials

1. **Storyblok Token:**
   - Log in to Storyblok
   - Navigate to Settings → API Tokens
   - Copy your API token

2. **Revalidation Secret:**
   - Generate a random string (at least 32 characters)
   - Store in `.env.local` (never commit)
   - Use in webhook URL

## Development Tips

### Cache Busting in Dev

In development mode, CMS requests add cache-busting query params:

```typescript
if (ENV === "dev") {
  url += `&cv=${Date.now()}` // Cache version
}
```

This ensures you see fresh data during development despite caching.

### Debugging CMS Requests

Enable logging in `cms.requests.ts`:

```typescript
console.log(`Fetching from: ${url}`)
console.log(`Cache hit: ${isCached}`)
console.log(`Response: ${JSON.stringify(data)}`)
```

### Testing CMS Integration

See [TESTING.md](TESTING.md) for testing CMS requests with Vitest.

## Performance Metrics

### Typical Response Times

| Request | Time | Cache Hit |
|---------|------|-----------|
| Fetch card | 50-200ms | 1-5ms |
| Fetch all cards | 200-500ms | 5-10ms |
| Search autocomplete | 100-300ms | 2-5ms |

### Cache Hit Rate

With proper webhook configuration, expect:
- **>90%** cache hit rate in production
- **~50-70%** hit rate during development (cache busting)

## Troubleshooting

### Cache Not Clearing

**Problem:** Content updates don't appear immediately

**Solutions:**
1. Check `REVALIDATION_SECRET` matches webhook config
2. Verify Storyblok webhook is configured correctly
3. Check server logs for webhook errors
4. Manually call revalidation endpoint
5. Check cache tags in `cache.ts` match webhook `type` parameter

### API Errors

**Problem:** CMS requests return errors

**Solutions:**
1. Verify `STORYBLOK_TOKEN` is correct and not expired
2. Check Storyblok API status
3. Verify story paths match folder structure
4. Check network connectivity

### Slow Responses

**Problem:** Requests taking too long

**Solutions:**
1. Enable cache with webhooks
2. Check Storyblok rate limits (plan-specific)
3. Optimize paginated requests (fetch fewer items)
4. Use browser DevTools to identify bottlenecks

## Related Documentation

- [CARDS.md](CARDS.md) - Card content type
- [DEPLOYMENT.md](DEPLOYMENT.md) - Webhook configuration
- [ARCHITECTURE.md](ARCHITECTURE.md) - Overall architecture
- [README.md](../README.md) - Quick start

## External Resources

- **Storyblok Docs:** https://www.storyblok.com/docs
- **Storyblok API:** https://www.storyblok.com/docs/api/content-delivery/v2
- **Next.js ISR:** https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
- **Next.js Cache:** https://nextjs.org/docs/app/building-your-application/data-fetching/caching
