import type { DomainValue } from "./domains.constants";

// List of all valid domain values
export const DOMAIN_VALUES: DomainValue[] = [
	"Guerre",
	"Amour",
	"Sagesse",
	"Mort",
	"Nature",
	"Mer",
	"Ciel",
	"Fertilité",
	"Soleil",
	"Lune",
	"Feu",
	"Eau",
	"Terre",
	"Air",
	"Justice",
	"Artisanat",
	"Chasse",
	"Agriculture",
	"Enfers",
	"Guérison",
	"Magie",
	"Tonnerre",
	"Prophétie",
	"Beauté",
	"Vin",
	"Commerce",
	"Voyage",
	"Fortune",
	"Fertilité et Récoltes",
	"Foyer",
	"Mariage",
	"Maternité",
	"Musique",
	"Poésie",
	"Forge",
	"Victoire",
];

// Since domain values are already stored in French in Storyblok,
// we just return them as-is
export const getDomainLabelFromValue = (domain: string): string => {
	return domain;
};

// Check if a string is a valid domain value
export const isValidDomain = (domain: string): domain is DomainValue => {
	return DOMAIN_VALUES.includes(domain as DomainValue);
};
