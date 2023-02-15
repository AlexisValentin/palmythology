export const stripDiacritics = (stringToStrip: string): string =>
  stringToStrip.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
