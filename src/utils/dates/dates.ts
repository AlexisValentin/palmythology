import {
  MONTH_LABEL_TYPE,
  MONTH_VALUE_TYPE,
  MONTHS_LABEL,
} from './dates.constants'

export const isMonthCodeRelevant = (monthCode: number) =>
  monthCode >= 0 && monthCode < 12
export const stringifyMonthCode = (monthCode: number) =>
  isMonthCodeRelevant(monthCode) ? MONTHS_LABEL[monthCode] : null

export const getMonthLabelFromValue = (
  month: MONTH_VALUE_TYPE,
): MONTH_LABEL_TYPE | null => {
  switch (month) {
    case MONTH_VALUE_TYPE.JANUARY:
      return MONTH_LABEL_TYPE.JANUARY
    case MONTH_VALUE_TYPE.FEBRUARY:
      return MONTH_LABEL_TYPE.FEBRUARY
    case MONTH_VALUE_TYPE.MARCH:
      return MONTH_LABEL_TYPE.MARCH
    case MONTH_VALUE_TYPE.APRIL:
      return MONTH_LABEL_TYPE.APRIL
    case MONTH_VALUE_TYPE.MAY:
      return MONTH_LABEL_TYPE.MAY
    case MONTH_VALUE_TYPE.JUNE:
      return MONTH_LABEL_TYPE.JUNE
    case MONTH_VALUE_TYPE.JULY:
      return MONTH_LABEL_TYPE.JULY
    case MONTH_VALUE_TYPE.AUGUST:
      return MONTH_LABEL_TYPE.AUGUST
    case MONTH_VALUE_TYPE.SEPTEMBER:
      return MONTH_LABEL_TYPE.SEPTEMBER
    case MONTH_VALUE_TYPE.OCTOBER:
      return MONTH_LABEL_TYPE.OCTOBER
    case MONTH_VALUE_TYPE.NOVEMBER:
      return MONTH_LABEL_TYPE.NOVEMBER
    case MONTH_VALUE_TYPE.DECEMBER:
      return MONTH_LABEL_TYPE.DECEMBER
    default:
      return null
  }
}
