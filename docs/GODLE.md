# Godle Game Documentation

**Godle** is Palmythology's daily mythology guessing game—a Wordle-like experience where players guess mythological entities based on clue feedback.

**Play it:** https://palmythology.com/godle

## Game Concept

### How to Play

1. **Guess an entity** - Type the name of a mythological god, creature, place, etc.
2. **Get feedback** - The game shows how close your guess is to the target
3. **Keep guessing** - Use the feedback to narrow down possibilities
4. **Win or lose** - Find the entity before you run out of guesses, or learn it at the end

### Feedback System

Each guess shows feedback on **6 attributes**:

| Attribute | Meaning | Colors |
|-----------|---------|--------|
| **Entity Name** | Is this the correct entity? | 🟩 Yes / 🟥 No |
| **Pantheon** | Does the target share this pantheon? | 🟩 Match / 🟥 No match |
| **Subject** | Does the target share this subject type? | 🟩 Match / 🟥 No match |
| **Genre** | Does the target share this gender/type? | 🟩 Match / 🟥 No match |
| **Main Domain** | Does the target share this primary attribute? | 🟩 Match / 🟥 No match |
| **Attributes** | Do any attributes match? | 🟩 All match / 🟨 Some match / 🟥 No match |

### Match Types

```
🟩 EXACT    - Perfect match (green)
🟨 PARTIAL  - Partial match (yellow) - only for Attributes
🟥 NONE     - No match (red)
```

## Game Mechanics

### Daily Entity Selection

Every day at midnight (Paris time, Europe/Paris timezone), a new target entity is selected:

- **Deterministic:** All players worldwide get the same entity each day
- **Seeded randomization:** Uses mathematical formula based on days since epoch date
- **No repeats:** Yesterday's entity is never today's entity

**Epoch date:** 2026-01-23

**Algorithm:**
```typescript
const daysSinceEpoch = getDaysSinceDate("2026-01-23")
const seed = daysSinceEpoch * 9999
const randomIndex = Math.sin(seed) * 10000 // Pseudo-random
const selectedEntity = availableEntities[randomIndex % availableEntities.length]
```

**File:** [src/utils/godle.ts](../src/utils/godle.ts)

### Entity Pool

The game only uses entities that:
- Have `available: true` in Storyblok
- Have a defined `mainDomain` (primary attribute)
- Are fresh and suitable for daily gameplay

Entities are fetched daily from the Storyblok CMS.

### Guess Validation

When you guess, the game:

1. **Finds the entity** by name
2. **Compares 6 attributes:**
   - Name match (exact comparison)
   - Pantheon match
   - Subject match
   - Genre match
   - Main Domain match
   - Attributes match (array comparison - exact/partial/none)
3. **Returns feedback** for each attribute
4. **Records the guess** in localStorage

**File:** [src/modules/godle/godleEngine.ts](../src/modules/godle/godleEngine.ts)

### Array Comparison Logic (Attributes)

When comparing attribute arrays:

```typescript
// EXACT: Same length + all items present
const isExact =
  guess.attributes.length === target.attributes.length &&
  guess.attributes.every(attr => target.attributes.includes(attr))

// PARTIAL: At least one common item
const isPartial =
  guess.attributes.some(attr => target.attributes.includes(attr))

// NONE: No common items
const isNone = !isPartial
```

## Game State & Statistics

### Daily Game State

Each day, the game manages:

```typescript
interface GodleDailyState {
  date: string              // YYYY-MM-DD in Paris timezone
  targetEntityName: string  // Name of today's target
  guesses: string[]         // Array of guess entity names
  isComplete: boolean       // Game finished?
  isWon: boolean           // Did player win?
}
```

Storage key: `GODLE_DAILY_STATE`

**File:** [src/modules/godle/godleStorage.ts](../src/modules/godle/godleStorage.ts)

### Statistics Tracking

The game tracks personal statistics:

```typescript
interface GodleStats {
  gamesPlayed: number                    // Total games played
  gamesWon: number                       // Total victories
  currentStreak: number                  // Current win streak
  maxStreak: number                      // Best streak ever
  guessDistribution: Record<number, number>  // Wins by guess count
  lastPlayedDate: string                 // Last play date (YYYY-MM-DD)
}
```

Storage key: `GODLE_STATISTICS`

**Statistics Calculations:**

- **Win Rate:** `(gamesWon / gamesPlayed) * 100`
- **Streak Logic:** Increments on consecutive daily wins, resets on loss or missed day
- **Max Streak:** Highest consecutive wins achieved

## Discord Webhook Integration

### Daily Discord Notifications

Every day at midnight Paris time, a Discord webhook is triggered to announce yesterday's entity:

**Endpoint:** `/api/godle`

**Trigger:** GitHub Actions workflow at 22:00 and 23:00 UTC

**Parameters:**
- `secret=<CRON_SECRET>` - Webhook authentication

**Discord Embed Format:**

```
Title: ⏰ Le Godle du {DATE} est terminé !
Description: L'entité à trouver était {ENTITY NAME}...
Color: Gold (#fdc103)
Link: https://palmythology.com/godle
Timestamp: Current time
```

### GitHub Actions Workflow

**File:** [.github/workflows/godle-discord.yml](.github/workflows/godle-discord.yml)

**Schedule:**
- Runs at **22:00 UTC** and **23:00 UTC** daily
- Checks if current Paris time is **midnight (00:00)**
- Sends webhook only once per day

This ensures the webhook is sent right at midnight Paris time despite timezone differences.

**Environment Variables Needed:**
- `CRON_SECRET` - Webhook authentication token
- `DISCORD_WEBHOOK_URL` - Discord webhook endpoint

## UI Components

### Component Hierarchy

```
GodleGame (main orchestrator, client component)
├── GodleInput (search & autocomplete)
│   └── EntityAutocompleteInput (entity name search)
├── GodleGuessHistory (display all guesses)
│   ├── GodleGuessRow (individual guess row)
│   │   └── GodleGuessCell (feedback cell with color)
│   └── Headers (pantheon, subject, etc.)
├── GodleResultModal (victory screen)
│   └── GodleStatistics (show stats)
├── GodleRules (game rules tab)
├── GodleFAQ (FAQ with structured data)
└── GodleStatistics (statistics display)
```

**Location:** [src/components/domains/godle/](../src/components/domains/godle/)

### GodleGame (Main Component)

Orchestrates the entire game flow:
- Loads today's entity
- Manages game state (guesses, completion)
- Handles guess submission and validation
- Shows feedback
- Triggers win/loss flow
- Restores game from localStorage

**File:** [src/components/domains/godle/GodleGame.tsx](../src/components/domains/godle/GodleGame.tsx)

**Client Component:** Yes (needs hooks, state, event handlers)

### GodleInput

Autocomplete search for entity names:
- Shows suggestions as user types
- Filters available entities
- Returns selected entity

**File:** [src/components/domains/godle/GodleInput.tsx](../src/components/domains/godle/GodleInput.tsx)

### GodleGuessHistory

Displays all previous guesses with feedback:
- Shows each guess in a row
- Color-codes feedback cells
- Shows attribute labels

**File:** [src/components/domains/godle/GodleGuessHistory.tsx](../src/components/domains/godle/GodleGuessHistory.tsx)

### GodleGuessRow & GodleGuessCell

Individual guess display with animations:
- **GodleGuessRow:** Full row with pantheon, subject, genre, domain, attributes
- **GodleGuessCell:** Single feedback cell with color and animation

**Responsive Design:**
- Desktop: All 6 attributes visible
- Mobile: Stacked layout with attribute abbreviations

**Animations:**
- `colorReveal` - Feedback color animation
- `slideInFromBottom` - Row entrance animation
- Staggered delays (100ms between cells)

**Files:**
- [src/components/domains/godle/GodleGuessRow.tsx](../src/components/domains/godle/GodleGuessRow.tsx)
- [src/components/domains/godle/GodleGuessCell.tsx](../src/components/domains/godle/GodleGuessCell.tsx)

### GodleResultModal

Victory screen with:
- Congratulations message
- Number of guesses
- Game number
- Statistics summary
- Share button

**File:** [src/components/domains/godle/GodleResultModal.tsx](../src/components/domains/godle/GodleResultModal.tsx)

**Animation:** `slideUpModal` - Modal entrance from bottom

### GodleStatistics

Displays player statistics:
- Games played
- Win rate (percentage)
- Current streak
- Max streak
- Guess distribution chart

**File:** [src/components/domains/godle/GodleStatistics.tsx](../src/components/domains/godle/GodleStatistics.tsx)

### GodleRules & GodleFAQ

Educational components:
- **GodleRules:** Explains game mechanics
- **GodleFAQ:** Common questions with answers
- **Structured Data:** FAQPage schema.org markup

**Files:**
- [src/components/domains/godle/GodleRules.tsx](../src/components/domains/godle/GodleRules.tsx)
- [src/components/domains/godle/GodleFAQ.tsx](../src/components/domains/godle/GodleFAQ.tsx)

## Share Functionality

### Share Format

After winning, players can share their result with a text emoji grid:

```
Godle #42 4/∞

❓🏛️🔎⚧️⭐🌟
🟩🟩🟩🟩🟩🟨
🟩🟥🟨🟩🟩🟥
🟥🟩🟥🟥🟥🟩

📊 Parties: 42 | Taux de victoires: 85%
🔥 Série: 7 | Max: 12

Tentez de trouver l'entité mythologique du jour !
https://palmythology.com/godle
```

### Share Text Generation

```typescript
// Format: Godle #{gameNumber} {guessCount}/∞
// Then emoji grid for each guess
// Then statistics
// Then link

const shareText = generateShareText(
  gameNumber,
  guesses,
  statistics,
  isWon
)
```

**File:** [src/modules/godle/godleEngine.ts](../src/modules/godle/godleEngine.ts)

### Share Buttons

Players can share to:
- Twitter/X (via Web Intent)
- Copy to clipboard
- Other social platforms via Web Share API

## Routing & SEO

### Page Route

**Route:** `/godle`

**File:** [app/godle/page.tsx](../app/godle/page.tsx)

**Configuration:**
- `force-dynamic` - Always regenerate (no static caching) because content changes daily
- `revalidate: 3600` - Revalidate hourly

### Metadata

```typescript
title: "Godle | Le jeu quotidien - Palmythology"
description: "Un jeu quotidien pour découvrir les mythologies du monde"
openGraph: {
  title: "Godle - Le jeu quotidien",
  description: "Devinez l'entité mythologique du jour",
  image: "...",
  type: "website",
}
```

### Structured Data

**VideoGame Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Godle",
  "description": "Un jeu quotidien de devinettes sur les mythologies",
  "url": "https://palmythology.com/godle",
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "0"
  }
}
```

## Date & Timezone Handling

All times use **Paris timezone** (Europe/Paris):

```typescript
// Get current date in Paris
getParisDateString()  // "2026-02-13"

// Get days since epoch
getDaysSinceDate("2026-01-23")  // 21

// Get next game countdown
getTimeUntilNextGame()  // { hours, minutes, seconds }

// Get game number
getGameNumber()  // days since epoch + 1
```

**File:** [src/utils/dates/dates.ts](../src/utils/dates/dates.ts)

**Important:** Uses `Intl.DateTimeFormat` with `timeZone: "Europe/Paris"` for correct timezone handling.

## Data Fetching

### Server Actions

Game logic runs on server side:

```typescript
// Get today's entity
getDailyEntity()  // GodleEntity

// Get yesterday's entity (for Discord)
getYesterdayEntity()  // GodleEntity

// Validate guess and return feedback
validateGuess(guessName)  // GuessResult

// Restore game state from saved guesses
restoreGameGuesses(guessNames)  // GuessResult[]

// Get current Paris date
getTodayDateString()  // string (YYYY-MM-DD)

// Get current game number
getGameNumber()  // number
```

**File:** [src/utils/godle.ts](../src/utils/godle.ts)

### CMS Integration

Entities are fetched from Storyblok:

```typescript
// Get all available entities for today's game
fetchAllAvailableEntitiesForGodle()
```

**Caching:**
- Cache tag: `godle-entities`
- Cache duration: 1 day (86,400s)
- Revalidation: Webhook triggers cache clear

**File:** [src/utils/cms/cms.requests.ts](../src/utils/cms/cms.requests.ts)

## LocalStorage

### Game State Persistence

Game state is saved to localStorage:

```typescript
localStorage.setItem(
  "GODLE_DAILY_STATE",
  JSON.stringify({
    date: "2026-02-13",
    targetEntityName: "Zeus",
    guesses: ["Odin", "Ra", "Zeus"],
    isComplete: true,
    isWon: true
  })
)
```

### Automatic Reset

At midnight, the game detects date change and resets for new game:

```typescript
const savedDate = localStorage.getItem("GODLE_DAILY_STATE")?.date
const todayDate = getParisDateString()

if (savedDate !== todayDate) {
  // Reset game state
  clearGameState()
}
```

## API Endpoint

### `/api/godle` (GET)

**Purpose:** Discord webhook for daily notifications

**Parameters:**
- `secret=<CRON_SECRET>` - Authentication

**Response:**
```json
{
  "status": "success",
  "message": "Discord notification sent",
  "entity": {
    "name": "Zeus",
    "pantheon": "GREEK"
  }
}
```

**File:** [app/api/godle/route.ts](../app/api/godle/route.ts)

## Animations

Game uses custom CSS animations defined in global.css:

```css
@keyframes slideInFromBottom {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes colorReveal {
  from { background-color: rgba(255,255,255,0.1); }
  to { /* match-type color */ }
}

@keyframes slideUpModal {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
```

**Respects:** `prefers-reduced-motion` for accessibility

## Testing

Currently no test files for Godle components or logic.

**To add tests:**
```bash
# Add unit tests for Godle utilities
src/modules/godle/godleEngine.test.ts
src/utils/godle.test.ts

# Add component tests
src/components/domains/godle/GodleGame.test.tsx
```

**Run tests:**
```bash
pnpm test
pnpm coverage
```

## Related Documentation

- [CMS.md](CMS.md) - Storyblok integration
- [ARCHITECTURE.md](ARCHITECTURE.md) - Component patterns
- [TESTING.md](TESTING.md) - Testing approach
- [README.md](../README.md) - Quick start

## See Also

- **Live Game:** https://palmythology.com/godle
- **Discord Notifications:** Enabled via GitHub Actions
- **Statistics:** Stored in browser localStorage
