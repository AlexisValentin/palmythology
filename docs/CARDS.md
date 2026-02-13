# Cards System Documentation

The **Cards System** is the core content model of Palmythology. Each card represents a mythological entity from one of 11 world pantheons.

## What Are Cards?

Cards are detailed information profiles for mythological entities, including:

- **Gods and Deities** (e.g., Zeus, Odin, Ra)
- **Mythological Creatures** (e.g., Dragons, Phoenixes, Chimeras)
- **Sacred Places** (e.g., Olympus, Valhalla)
- **Legendary Persons** (e.g., Hercules, Achilles)
- **Tribes & Groups** (e.g., the Furies, the Valkyries)
- **Sacred Writings** (e.g., Vedas, I Ching)
- **Events** (e.g., Ragnarok, the Trojan War)

## Card Structure

### Pantheons (11 Total)

Cards are organized by **pantheon** (cultural origin):

| Pantheon | Code | Label |
|----------|------|-------|
| Greek | `GREEK` | Grec |
| Roman | `ROMAN` | Romain |
| Norse | `NORSE` | Nordique |
| Egyptian | `EGYPTIAN` | Égyptien |
| Celtic | `CELTIC` | Celte |
| Japanese | `JAPANESE` | Japonais |
| Chinese | `CHINESE` | Chinois |
| Hindu | `HINDU` | Hindou |
| Aztec | `AZTEC` | Aztèque |
| Mesopotamian | `MESOPOTAMIAN` | Mésopotamien |
| Slavic | `SLAVIC` | Slave |

**File:** [src/utils/cards/pantheons.constants.ts](../src/utils/cards/pantheons.constants.ts)

### Subjects (7 Types)

Each card has a **subject** (type of entity):

| Subject | Code | Label |
|---------|------|-------|
| Divinity | `DIVINITY` | Divinité |
| Creature | `MONSTER` | Créature |
| Person | `PERSON` | Personne |
| Place | `PLACE` | Lieu |
| Tribe | `TRIBE` | Tribu |
| Writings | `WRITINGS` | Écrits |
| Event | `EVENT` | Événement |

**File:** [src/utils/cards/subjects.constants.ts](../src/utils/cards/subjects.constants.ts)

### Genres (5 Types)

Cards have a **genre** (biological/metaphysical classification):

| Genre | Code | Label |
|-------|------|-------|
| Male | `MALE` | Masculin |
| Female | `FEMALE` | Féminin |
| Androgynous | `ANDROGYNOUS` | Androgyne |
| Undefined | `UNDEFINED` | Indéfini |
| Not Applicable | `NOT_APPLICABLE` | S/O |

**File:** [src/utils/cards/genres.constants.ts](../src/utils/cards/genres.constants.ts)

### Attributes (37 Total)

Cards can have multiple **attributes** representing domains, powers, or associations:

Examples: War, Love, Wisdom, Death, Nature, Magic, Commerce, Health, Fertility, Harvest, Weather, Sea, Underworld, Fate, Crafts, Music, etc.

These attributes are used for:
- **Filtering** in search (multi-select)
- **Godle game** comparisons
- **Content organization** and discovery

**File:** [src/utils/cards/attributes.constants.ts](../src/utils/cards/attributes.constants.ts)

## Card Data Model

### Storyblok Content Type

Cards are stored in Storyblok CMS as `StoryblokCardComponentType`:

```typescript
{
  name: string                    // Card name
  subtitle: string               // Short description
  icon: StoryblokImageType       // Card icon
  pantheon: PantheonValue        // Which pantheon
  subject: SubjectValue          // Type of entity
  genre: GenreValue              // Gender/classification
  available: boolean             // Published status
  summary?: string               // Markdown content
  mainImage?: string             // Featured image
  quotations?: {
    title: string
    text: string
  }[]
  relatedCards?: CardRelatedType[]
  faq?: {
    question: string
    answer: string
  }[]
  mainDomain?: AttributeValue    // Primary attribute (for Godle)
  attributes?: AttributeValue[]  // Secondary attributes (for Godle)
}
```

### Application Data Model

Cards are transformed to `CardDetails` for display:

```typescript
interface CardDetails {
  name: string
  subtitle: string
  icon: StoryblokImageType
  pantheon: PantheonValue
  subject: SubjectValue
  genre: GenreValue
  available: boolean
  isFolder: boolean
  summary?: string
  image?: string
}
```

## Routing & URLs

### Card Pages

Individual card pages use dynamic routing:

**Route:** `/cards/[pantheon]/[name]`

**Examples:**
- `/cards/greek/zeus`
- `/cards/norse/odin`
- `/cards/egyptian/ra`

**File:** [app/cards/[...card]/page.tsx](../app/cards/[...card]/page.tsx)

### Pantheon Pages

Browse all cards from a specific pantheon:

**Route:** `/pantheons/[pantheon]`

**Examples:**
- `/pantheons/greek`
- `/pantheons/norse`

**File:** [app/pantheons/[pantheon]/page.tsx](../app/pantheons/[pantheon]/page.tsx)

### Subject Pages

Browse all cards of a specific type:

**Route:** `/subjects/[subject]`

**Examples:**
- `/subjects/divinity`
- `/subjects/creature`

**File:** [app/subjects/[subject]/page.tsx](../app/subjects/[subject]/page.tsx)

### Cards Hub

Browse and discover all cards:

**Route:** `/cards`

**File:** [app/cards/page.tsx](../app/cards/page.tsx)

## Content Management

### Fetching Cards from CMS

Cards are fetched from Storyblok using these functions in [src/utils/cms/cms.requests.ts](../src/utils/cms/cms.requests.ts):

| Function | Purpose | Returns |
|----------|---------|---------|
| `fetchSpecificCard(title, pantheon)` | Single card detail | Full card object |
| `fetchAllCardsFromCriterias(pantheon, subject, genre)` | All cards (all pages) | CardDetails[] |
| `fetchCardsFromCriterias(pantheon, subject, genre, page)` | Paginated cards | Paginated results |
| `fetchPlaceholderCards()` | Latest 20 cards | CardDetails[] |
| `fetchAvailableCards()` | All published cards (for sitemap) | CardDetails[] |

### Caching Strategy

Cards use **ISR (Incremental Static Regeneration)**:

- **Cache tag:** `cms-cards`
- **Cache duration:** 1 day (86,400 seconds)
- **Revalidation:** Webhook triggers on Storyblok content updates

When Storyblok content is updated, call the revalidation webhook:

```bash
POST https://palmythology.com/api/revalidate?secret=<SECRET>&type=cards
```

**File:** [src/utils/cms/cache.ts](../src/utils/cms/cache.ts)

## Display Components

### Card Detail Page

The card detail page displays:
- Card header (name, subtitle, icon)
- Main image/hero
- Markdown summary
- Quotations (if available)
- Related cards carousel
- FAQ section (if available)
- Schema.org Article markup for SEO

**File:** [app/cards/[...card]/page.tsx](../app/cards/[...card]/page.tsx)

### Card Lists

Multiple components render card lists:

| Component | Location | Usage |
|-----------|----------|-------|
| `LPCardList` | [src/components/domains/cards/LPCardList.tsx](../src/components/domains/cards/LPCardList.tsx) | Generic card grid |
| `PantheonList` | [src/components/domains/cards/PantheonList.tsx](../src/components/domains/cards/PantheonList.tsx) | Pantheon page cards |
| `SubjectList` | [src/components/domains/cards/SubjectList.tsx](../src/components/domains/cards/SubjectList.tsx) | Subject page cards |
| `Quoi2NeufCardList` | [src/components/domains/cards/Quoi2NeufCardList.tsx](../src/components/domains/cards/Quoi2NeufCardList.tsx) | Q2N page cards |

### Card Grid Item

Individual card grid items display:
- Card icon
- Card name
- Pantheon label with color
- Subject label with icon
- Clickable link to detail page

## SEO & Structured Data

### Article Schema

Each card page includes **Article schema.org markup** with:
- Headline (card name)
- Description (card subtitle)
- Image (card icon and images)
- Author (Palmythology organization)
- Published date (from Storyblok)
- Modified date (from Storyblok)
- Word count of summary

Example:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Zeus",
  "description": "King of the Greek gods",
  "image": "...",
  "author": {
    "@type": "Organization",
    "name": "Palmythology"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-02-10"
}
```

### Metadata Generation

Each card page exports dynamic metadata:

```typescript
export const generateMetadata = async ({ params }: { params: CardParams }): Promise<Metadata> => {
  const card = await fetchSpecificCard(...)
  return {
    title: `${card.name} - Palmythology`,
    description: card.subtitle,
    openGraph: {
      title: card.name,
      description: card.subtitle,
      image: card.image,
    },
  }
}
```

**File:** [app/cards/[...card]/page.tsx](../app/cards/[...card]/page.tsx)

## Social Media Integration

### Per-Card Social Links

Card detail pages can display social media links for each entity:

- **Instagram** - Link to Instagram profile/posts
- **Threads** - Link to Threads account
- **Bluesky** - Link to Bluesky profile
- **Mastodon** - Link to Mastodon account

These are managed through Storyblok CMS social media fields on each card.

### Social Sharing

Users can share card pages on social media:
- Twitter/X (via Open Graph)
- Facebook (via Open Graph)
- LinkedIn
- Copy link

Open Graph metadata is automatically generated from card data.

## Related Cards

Cards can reference other related cards:

- **Type:** Links to other CardDetails
- **Display:** Carousel on card page
- **Management:** Configured in Storyblok CMS

Example relationships:
- Zeus → Related cards: Hera, Hades, Poseidon
- Odin → Related cards: Thor, Loki, Yggdrasil

## Utilities & Helpers

### Pantheon Utilities

```typescript
// Get pantheon label from value
getPantheonLabelFromValue(PantheonValue.GREEK)  // "Grec"

// Get pantheon metadata
getPantheonData(PantheonValue.GREEK)  // { label, icon, color }

// Get all pantheons
getAllPantheons()  // PantheonValue[]
```

**File:** [src/utils/cards/pantheons.ts](../src/utils/cards/pantheons.ts)

### Subject Utilities

```typescript
// Get subject label from value
getSubjectLabelFromValue(SubjectValue.DIVINITY)  // "Divinité"

// Get subject metadata
getSubjectData(SubjectValue.DIVINITY)  // { label, icon }

// Get all subjects
getAllSubjects()  // SubjectValue[]
```

**File:** [src/utils/cards/subjects.ts](../src/utils/cards/subjects.ts)

### Data Transformation

```typescript
// Transform Storyblok card to display model
parseCardData(storyblokCard)  // CardDetails

// Transform Q2N story
parseQuoi2NeufData(story)  // Quoi2NeufStoryType
```

**File:** [src/utils/cms/cms.requests.ts](../src/utils/cms/cms.requests.ts)

## Testing

Card utilities are tested in:

- [src/utils/cards/pantheons.test.ts](../src/utils/cards/pantheons.test.ts) - Pantheon helpers
- [src/utils/cards/subjects.test.ts](../src/utils/cards/subjects.test.ts) - Subject helpers
- [src/utils/cms/cms.requests.test.ts](../src/utils/cms/cms.requests.test.ts) - CMS requests

To run tests:

```bash
pnpm test
```

## Related Documentation

- [CMS.md](CMS.md) - Storyblok integration and caching
- [SEARCH.md](SEARCH.md) - Card filtering and search
- [ARCHITECTURE.md](ARCHITECTURE.md) - Folder structure and patterns
- [README.md](../README.md) - Quick start guide

## See Also

- **Pantheons Page:** `/pantheons` - Browse by pantheon
- **Subjects Page:** `/subjects` - Browse by subject
- **Cards Hub:** `/cards` - Browse all cards
- **Search:** `/search` - Multi-criteria search and filter
