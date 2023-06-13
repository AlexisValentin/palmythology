export const MONTHS = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
]

export const isMonthCodeRelevant = (monthCode: number) =>
  monthCode >= 0 && monthCode < 12
export const stringifyMonthCode = (monthCode: number) =>
  isMonthCodeRelevant(monthCode) ? MONTHS[monthCode] : '???'
