const stripDiacritics = (stringToStrip: string): string =>
  stringToStrip?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const replaceSpacesByDashes = (stringToParse: string): string =>
  stringToParse.replace(/\s+/g, "-");

export const parseUrlToMatchSlug = (stringToParse: string): string =>
  replaceSpacesByDashes(stripDiacritics(stringToParse));
