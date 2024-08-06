export const isStringEmpty = (value?: string): boolean => value === ''

export const stripDiacritics = (stringToStrip: string): string =>
  stringToStrip?.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export const replaceHyphenByDashes = (stringToParse: string): string =>
  stringToParse.replaceAll("'", '-')

export const replaceSpacesByDashes = (stringToParse: string): string =>
  stringToParse.replaceAll(/\s+/g, '-')

export const replaceDashesBySpaces = (stringToParse: string): string =>
  stringToParse.replaceAll('-', ' ')

export const parseStringToSlug = (stringToParse: string): string =>
  replaceSpacesByDashes(stripDiacritics(stringToParse)).toLowerCase()

export const capitalize = (str: string): string =>
  str
    .toLowerCase()
    .replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase())
