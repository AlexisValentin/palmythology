# Q2N (Quoi 2 Neuf) Documentation

**Q2N** ("Quoi 2 Neuf" = "What's New") is Palmythology's feature that highlights upcoming and recently added mythology content.

**View it:** https://palmythology.com/q2n

## Purpose

Q2N serves as a **content preview and announcement system**:

- **Upcoming Content:** Tease mythology content before publication
- **Recent Additions:** Showcase newly published cards
- **Planning Visibility:** Show monthly content calendar
- **User Engagement:** Keep users informed about new mythology entries

## Content Structure

### Q2N Story (Storyblok Content Type)

Each Q2N entry contains:

```typescript
interface StoryblokQ2NComponentType {
  title: string                // Card name being featured
  subtitle: string             // Short description
  icon: StoryblokImageType    // Card icon
  teasing: string             // Preview text (markdown)
  available: boolean          // Published status
  pantheon: PantheonValue     // Which pantheon
  publishDate?: string        // When this card will/was published
}
```

### Display Model

Transformed to `Quoi2NeufStoryType` for display:

```typescript
interface Quoi2NeufStoryType {
  title: string               // Card name
  subtitle: string            // Short description
  icon: StoryblokImageType   // Card icon
  teasing: string            // Preview text (markdown)
  pantheon: PantheonValue    // Pantheon for filtering
  publishDate?: string       // Publication date
}
```

## Routing & Pages

### Q2N Page

**Route:** `/q2n`

**Display:**
- Monthly calendar view of upcoming/recent cards
- Grid or list of Q2N entries
- Filtering by pantheon (optional)
- Links to full card pages

**File:** [app/q2n/page.tsx](../app/q2n/page.tsx)

### Q2N Component

Displays the list of upcoming content:

```typescript
// Main component
<Quoi2NeufCardList cards={q2nData} />
```

**File:** [src/components/domains/cards/Quoi2NeufCardList.tsx](../src/components/domains/cards/Quoi2NeufCardList.tsx)

## Data Fetching

### CMS Request

Q2N content is fetched from Storyblok:

```typescript
const q2nData = await fetchQ2NContent()
```

**Function:** `fetchQ2NContent()` in [src/utils/cms/cms.requests.ts](../src/utils/cms/cms.requests.ts)

**Parameters:** None

**Returns:** `Quoi2NeufStoryType[]`

**Process:**
1. Fetches Q2N stories from Storyblok
2. Filters available entries
3. Transforms to display model
4. Sorts by publication date (if available)

### Pagination

Q2N requests handle pagination automatically:
- **Items per page:** 100 (Storyblok default)
- **Automatic multi-page fetch:** Follows `total` header
- **Cache-friendly:** Requests wrap in `unstable_cache`

## Caching Strategy

### Cache Configuration

**Cache tag:** `cms-q2n`
**Cache duration:** 12 hours (43,200 seconds)
**Revalidation:** Manual via webhook

### Cache Key

```typescript
["quoi2neuf-stories"]
```

### Manual Revalidation

Clear Q2N cache by calling:

```bash
POST https://palmythology.com/api/revalidate?secret=<SECRET>&type=q2n
```

**File:** [src/utils/cms/cache.ts](../src/utils/cms/cache.ts)

## Page Configuration

### Metadata

```typescript
export const metadata: Metadata = {
  title: "Quoi 2 Neuf | Palmythology",
  description: "Découvrez les prochaines mythologies à venir",
  openGraph: {
    title: "Quoi 2 Neuf - Prochains contenus",
    description: "Aperçu des mythologies bientôt disponibles",
  },
}
```

### Revalidation

```typescript
export const revalidate = 43200  // 12 hours
```

**Rationale:** Q2N shows upcoming content, so less frequent updates than cards

## Features

### Monthly Calendar View

Option to display Q2N entries in a calendar format:
- Shows publication timeline
- Highlights release dates
- Organizes by month

### Pantheon Filtering

Filter Q2N entries by pantheon:
- Greek, Roman, Norse, Egyptian, Celtic, Japanese, Chinese, Hindu, Aztec, Mesopotamian, Slavic
- Updates URL parameters for bookmarking
- Remembers selection

### Teasing Content

Each Q2N entry shows:
- Card name and icon
- Pantheon badge
- Teasing text (markdown support)
- "Coming Soon" or "New" badge
- Link to full card (if published)

### Preview Images

Q2N entries can display card icons or preview images:
- Taken from card icon field
- Optimized for performance
- Lazy-loaded on scroll

## Content Management in Storyblok

### Creating Q2N Entries

1. **In Storyblok:**
   - Navigate to Q2N content folder
   - Create new story
   - Fill fields: title, subtitle, icon, teasing, publishDate
   - Set `available: true` to publish

2. **Publishing:**
   - Once card is ready, link it to Q2N entry
   - Set future publication date
   - Q2N shows preview with countdown

3. **Cache Invalidation:**
   - Content is cached 12 hours
   - Call revalidation webhook to show immediately:
   ```bash
   curl "https://palmythology.com/api/revalidate?secret=<SECRET>&type=q2n"
   ```

## Related Documentation

- [CARDS.md](CARDS.md) - Card system overview
- [CMS.md](CMS.md) - Storyblok integration
- [README.md](../README.md) - Quick start

## Related Features

- **Cards System** - Full mythology content
- **Search** - Find cards by criteria
- **Pantheons** - Browse by mythology
- **Subjects** - Browse by entity type

## See Also

- **Live Page:** https://palmythology.com/q2n
- **Pantheons:** https://palmythology.com/pantheons
- **Subjects:** https://palmythology.com/subjects
