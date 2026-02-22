import type { AttributeValue } from "./attributes.constants";

export const ATTRIBUTE_VALUES: AttributeValue[] = [
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

export const getAttributeLabelFromValue = (attribute: string): string =>
	attribute;

export const isValidAttribute = (
	attribute: string,
): attribute is AttributeValue =>
	ATTRIBUTE_VALUES.includes(attribute as AttributeValue);
