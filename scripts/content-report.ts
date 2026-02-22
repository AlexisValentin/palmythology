import * as fs from "node:fs";
import * as path from "node:path";

const envPath = path.resolve(process.cwd(), ".env");
const envContent = fs.readFileSync(envPath, "utf-8");
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const [key, ...valueParts] = trimmed.split("=");
    const value = valueParts.join("=");
    if (key && value) {
      process.env[key] = value;
    }
  }
}

const STORYBLOK_BASE_URL = process.env.STORYBLOK_BASE_URL;
const STORYBLOK_TOKEN = process.env.STORYBLOK_TOKEN;
const STORYBLOK_SITEMAP_MAX_ITEMS = 100;

interface CardContent {
  name: string;
  subtitle: string;
  pantheon: string;
  subject: string;
  available: boolean;
  mdSummary?: string;
  faq?: { question: string; response: string }[];
  quotations?: { author: string; quotation: string; origin: string }[];
}

interface StoryblokCard {
  full_slug: string;
  content: CardContent;
}

interface CardReport {
  name: string;
  pantheon: string;
  slug: string;
  mdSummary: string | undefined;
  hasFaq: boolean;
  faqCount: number;
  hasQuotations: boolean;
  quotationsCount: number;
}

async function fetchAllCards(): Promise<StoryblokCard[]> {
  let allCards: StoryblokCard[] = [];
  let currentPage = 1;
  let hasMorePages = true;

  console.log("Fetching cards from Storyblok...\n");

  while (hasMorePages) {
    const response = await fetch(
      `${STORYBLOK_BASE_URL}?starts_with=cards&token=${STORYBLOK_TOKEN}&version=published&per_page=${STORYBLOK_SITEMAP_MAX_ITEMS}&page=${currentPage}&filter_query[component][in]=card`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const stories: StoryblokCard[] = data.stories || [];
    const total = parseInt(response.headers.get("total") || "0", 10);

    allCards = [...allCards, ...stories];
    const totalFetched = currentPage * STORYBLOK_SITEMAP_MAX_ITEMS;
    hasMorePages = totalFetched < total;
    currentPage++;
  }

  return allCards;
}

function analyzeCards(cards: StoryblokCard[]): {
  noSummary: CardReport[];
  hasSummaryButMissingContent: CardReport[];
} {
  const noSummary: CardReport[] = [];
  const hasSummaryButMissingContent: CardReport[] = [];

  for (const card of cards) {
    const { content, full_slug } = card;

    // Skip unavailable cards
    if (!content.available) continue;

    const report: CardReport = {
      name: content.name,
      pantheon: content.pantheon,
      slug: full_slug,
      mdSummary: content.mdSummary,
      hasFaq: Array.isArray(content.faq) && content.faq.length > 0,
      faqCount: Array.isArray(content.faq) ? content.faq.length : 0,
      hasQuotations: Array.isArray(content.quotations) && content.quotations.length > 0,
      quotationsCount: Array.isArray(content.quotations) ? content.quotations.length : 0,
    };

    // Cards with "???" as mdSummary or no mdSummary
    if (!content.mdSummary || content.mdSummary === "???" || content.mdSummary.trim() === "") {
      noSummary.push(report);
    }
    // Cards with mdSummary but missing FAQ and/or Quotations
    else if (!report.hasFaq || !report.hasQuotations) {
      hasSummaryButMissingContent.push(report);
    }
  }

  return { noSummary, hasSummaryButMissingContent };
}

function printReport(results: {
  noSummary: CardReport[];
  hasSummaryButMissingContent: CardReport[];
}) {
  const { noSummary, hasSummaryButMissingContent } = results;

  console.log("=".repeat(80));
  console.log("CONTENT REPORT - Cards Needing Attention");
  console.log("=".repeat(80));
  console.log();

  // Report 1: Cards with "???" or empty mdSummary
  console.log("-".repeat(80));
  console.log(`1. CARDS WITH NO SUMMARY (mdSummary = "???" or empty): ${noSummary.length} cards`);
  console.log("-".repeat(80));
  console.log();

  if (noSummary.length === 0) {
    console.log("   No cards found with missing summary.\n");
  } else {
    // Group by pantheon
    const byPantheon = groupByPantheon(noSummary);
    for (const [pantheon, cards] of Object.entries(byPantheon)) {
      console.log(`   [${pantheon.toUpperCase()}] (${cards.length} cards)`);
      for (const card of cards) {
        const faqStatus = card.hasFaq ? `FAQ: ${card.faqCount}` : "FAQ: NONE";
        const quotStatus = card.hasQuotations ? `Quotes: ${card.quotationsCount}` : "Quotes: NONE";
        console.log(`      - ${card.name} (${faqStatus}, ${quotStatus})`);
      }
      console.log();
    }
  }

  // Report 2: Cards with summary but missing FAQ/Quotations
  console.log("-".repeat(80));
  console.log(`2. CARDS WITH SUMMARY BUT MISSING FAQ/QUOTATIONS: ${hasSummaryButMissingContent.length} cards`);
  console.log("-".repeat(80));
  console.log();

  if (hasSummaryButMissingContent.length === 0) {
    console.log("   All cards with summaries have both FAQ and Quotations.\n");
  } else {
    // Separate by what's missing
    const missingBoth = hasSummaryButMissingContent.filter(c => !c.hasFaq && !c.hasQuotations);
    const missingFaqOnly = hasSummaryButMissingContent.filter(c => !c.hasFaq && c.hasQuotations);
    const missingQuotationsOnly = hasSummaryButMissingContent.filter(c => c.hasFaq && !c.hasQuotations);

    if (missingBoth.length > 0) {
      console.log(`   [MISSING BOTH FAQ AND QUOTATIONS] (${missingBoth.length} cards)`);
      const byPantheon = groupByPantheon(missingBoth);
      for (const [pantheon, cards] of Object.entries(byPantheon)) {
        console.log(`      [${pantheon.toUpperCase()}]`);
        for (const card of cards) {
          console.log(`         - ${card.name}`);
        }
      }
      console.log();
    }

    if (missingFaqOnly.length > 0) {
      console.log(`   [MISSING FAQ ONLY] (${missingFaqOnly.length} cards)`);
      const byPantheon = groupByPantheon(missingFaqOnly);
      for (const [pantheon, cards] of Object.entries(byPantheon)) {
        console.log(`      [${pantheon.toUpperCase()}]`);
        for (const card of cards) {
          console.log(`         - ${card.name} (has ${card.quotationsCount} quotes)`);
        }
      }
      console.log();
    }

    if (missingQuotationsOnly.length > 0) {
      console.log(`   [MISSING QUOTATIONS ONLY] (${missingQuotationsOnly.length} cards)`);
      const byPantheon = groupByPantheon(missingQuotationsOnly);
      for (const [pantheon, cards] of Object.entries(byPantheon)) {
        console.log(`      [${pantheon.toUpperCase()}]`);
        for (const card of cards) {
          console.log(`         - ${card.name} (has ${card.faqCount} FAQs)`);
        }
      }
      console.log();
    }
  }

  // Summary
  console.log("=".repeat(80));
  console.log("SUMMARY");
  console.log("=".repeat(80));
  console.log(`   Cards needing summary content:     ${noSummary.length}`);
  console.log(`   Cards needing FAQ/Quotations:      ${hasSummaryButMissingContent.length}`);
  console.log(`   TOTAL cards needing attention:     ${noSummary.length + hasSummaryButMissingContent.length}`);
  console.log("=".repeat(80));
}

function groupByPantheon(cards: CardReport[]): Record<string, CardReport[]> {
  return cards.reduce((acc, card) => {
    const pantheon = card.pantheon || "unknown";
    if (!acc[pantheon]) acc[pantheon] = [];
    acc[pantheon].push(card);
    return acc;
  }, {} as Record<string, CardReport[]>);
}

async function main() {
  try {
    const cards = await fetchAllCards();
    console.log(`Total cards fetched: ${cards.length}\n`);

    const results = analyzeCards(cards);
    printReport(results);
  } catch (error) {
    console.error("Error generating report:", error);
    process.exit(1);
  }
}

main();
