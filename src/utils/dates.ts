export enum MONTH_LABEL_TYPE {
  JANUARY = 'Janvier',
  FEBRUARY = 'Février',
  MARCH = 'Mars',
  APRIL = 'Avril',
  MAY = 'Mai',
  JUNE = 'Juin',
  JULY = 'Juillet',
  AUGUST = 'Août',
  SEPTEMBER = 'Septembre',
  OCTOBER = 'Octobre',
  NOVEMBER = 'Novembre',
  DECEMBER = 'Décembre',
}

export enum MONTH_VALUE_TYPE {
  JANUARY = 'january',
  FEBRUARY = 'february',
  MARCH = 'march',
  APRIL = 'april',
  MAY = 'may',
  JUNE = 'june',
  JULY = 'july',
  AUGUST = 'august',
  SEPTEMBER = 'september',
  OCTOBER = 'october',
  NOVEMBER = 'november',
  DECEMBER = 'december',
}

export const MONTHS_LABEL = [
  MONTH_LABEL_TYPE.JANUARY,
  MONTH_LABEL_TYPE.FEBRUARY,
  MONTH_LABEL_TYPE.MARCH,
  MONTH_LABEL_TYPE.APRIL,
  MONTH_LABEL_TYPE.MAY,
  MONTH_LABEL_TYPE.JUNE,
  MONTH_LABEL_TYPE.JULY,
  MONTH_LABEL_TYPE.AUGUST,
  MONTH_LABEL_TYPE.SEPTEMBER,
  MONTH_LABEL_TYPE.OCTOBER,
  MONTH_LABEL_TYPE.NOVEMBER,
  MONTH_LABEL_TYPE.DECEMBER,
]

export const MONTHS_VALUE = [
  MONTH_VALUE_TYPE.JANUARY,
  MONTH_VALUE_TYPE.FEBRUARY,
  MONTH_VALUE_TYPE.MARCH,
  MONTH_VALUE_TYPE.APRIL,
  MONTH_VALUE_TYPE.MAY,
  MONTH_VALUE_TYPE.JUNE,
  MONTH_VALUE_TYPE.JULY,
  MONTH_VALUE_TYPE.AUGUST,
  MONTH_VALUE_TYPE.SEPTEMBER,
  MONTH_VALUE_TYPE.OCTOBER,
  MONTH_VALUE_TYPE.NOVEMBER,
  MONTH_VALUE_TYPE.DECEMBER,
]

export const isMonthCodeRelevant = (monthCode: number) =>
  monthCode >= 0 && monthCode < 12
export const stringifyMonthCode = (monthCode: number) =>
  isMonthCodeRelevant(monthCode) ? MONTHS_LABEL[monthCode] : null
