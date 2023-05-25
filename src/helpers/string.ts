export const stripDiacritics = (stringToStrip: string): string =>
  stringToStrip?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const replaceSpacesByDashes = (stringToParse: string): string =>
  stringToParse.replace(/\s+/g, "-");

export const parseStringToSlug = (stringToParse: string): string =>
  replaceSpacesByDashes(stripDiacritics(stringToParse)).toLowerCase();
