export const isStringEmpty = (value?: string): boolean => value === "";

export const stripDiacritics = (stringToStrip: string): string =>
	stringToStrip?.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "");

export const normalizeString = (str: string): string =>
	stripDiacritics(str).toLowerCase();

export const replaceHyphenByDashes = (stringToParse: string): string =>
	stringToParse.replaceAll("'", "-");

export const replaceSpacesByDashes = (stringToParse: string): string =>
	stringToParse.replaceAll(/\s+/g, "-");

export const replaceDashesBySpaces = (stringToParse: string): string =>
	stringToParse.replaceAll("-", " ");

export const parseStringToSlug = (stringToParse: string): string =>
	replaceSpacesByDashes(stripDiacritics(stringToParse)).toLowerCase();

export const capitalize = (stringToParse: string): string =>
	stringToParse
		.toLowerCase()
		.replaceAll(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

export const calculateWordCount = (mdSummary?: string): number => {
	let totalWords = 0;

	if (mdSummary) {
		const cleanText = mdSummary.replaceAll(/[#*`_~[\]]/g, "").trim();
		totalWords += cleanText.split(/\s+/).filter((w) => w.length > 0).length;
	}

	return totalWords;
};
