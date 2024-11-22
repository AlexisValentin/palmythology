import { PantheonLabel, PantheonValue } from '../types/cards/pantheons'
import { SubjectLabel, SubjectValue } from '../types/cards/subjects'
import { MONTH_LABEL_TYPE, MONTH_VALUE_TYPE } from './dates'

export const getPantheonLabelFromValue = (
  pantheon: PantheonValue,
): PantheonLabel | null => {
  switch (pantheon) {
    case PantheonValue.AZTEC:
      return PantheonLabel.AZTEC
    case PantheonValue.CELTIC:
      return PantheonLabel.CELTIC
    case PantheonValue.CHINESE:
      return PantheonLabel.CHINESE
    case PantheonValue.EGYPTIAN:
      return PantheonLabel.EGYPTIAN
    case PantheonValue.GREEK:
      return PantheonLabel.GREEK
    case PantheonValue.HINDU:
      return PantheonLabel.HINDU
    case PantheonValue.JAPANESE:
      return PantheonLabel.JAPANESE
    case PantheonValue.MAYAN:
      return PantheonLabel.MAYAN
    case PantheonValue.MESOPOTAMIAN:
      return PantheonLabel.MESOPOTAMIAN
    case PantheonValue.NORSE:
      return PantheonLabel.NORSE
    case PantheonValue.ROMAN:
      return PantheonLabel.ROMAN
    default:
      return null
  }
}

export const getPantheonValueFromLabel = (
  pantheon: PantheonLabel,
): PantheonValue | null => {
  switch (pantheon) {
    case PantheonLabel.AZTEC:
      return PantheonValue.AZTEC
    case PantheonLabel.CELTIC:
      return PantheonValue.CELTIC
    case PantheonLabel.CHINESE:
      return PantheonValue.CHINESE
    case PantheonLabel.EGYPTIAN:
      return PantheonValue.EGYPTIAN
    case PantheonLabel.GREEK:
      return PantheonValue.GREEK
    case PantheonLabel.HINDU:
      return PantheonValue.HINDU
    case PantheonLabel.JAPANESE:
      return PantheonValue.JAPANESE
    case PantheonLabel.MAYAN:
      return PantheonValue.MAYAN
    case PantheonLabel.MESOPOTAMIAN:
      return PantheonValue.MESOPOTAMIAN
    case PantheonLabel.NORSE:
      return PantheonValue.NORSE
    case PantheonLabel.ROMAN:
      return PantheonValue.ROMAN
    default:
      return null
  }
}

export const getSubjectLabelFromValue = (
  subject: SubjectValue,
): SubjectLabel | null => {
  switch (subject) {
    case SubjectValue.DIVINITY:
      return SubjectLabel.DIVINITY
    case SubjectValue.EVENT:
      return SubjectLabel.EVENT
    case SubjectValue.MONSTER:
      return SubjectLabel.MONSTER
    case SubjectValue.PERSON:
      return SubjectLabel.PERSON
    case SubjectValue.PLACE:
      return SubjectLabel.PLACE
    case SubjectValue.TRIBE:
      return SubjectLabel.TRIBE
    case SubjectValue.WRITINGS:
      return SubjectLabel.WRITINGS
    default:
      return null
  }
}

export const getMonthValueFromLabel = (
  month: MONTH_LABEL_TYPE,
): MONTH_VALUE_TYPE | null => {
  switch (month) {
    case MONTH_LABEL_TYPE.JANUARY:
      return MONTH_VALUE_TYPE.JANUARY
    case MONTH_LABEL_TYPE.FEBRUARY:
      return MONTH_VALUE_TYPE.FEBRUARY
    case MONTH_LABEL_TYPE.MARCH:
      return MONTH_VALUE_TYPE.MARCH
    case MONTH_LABEL_TYPE.APRIL:
      return MONTH_VALUE_TYPE.APRIL
    case MONTH_LABEL_TYPE.MAY:
      return MONTH_VALUE_TYPE.MAY
    case MONTH_LABEL_TYPE.JUNE:
      return MONTH_VALUE_TYPE.JUNE
    case MONTH_LABEL_TYPE.JULY:
      return MONTH_VALUE_TYPE.JULY
    case MONTH_LABEL_TYPE.AUGUST:
      return MONTH_VALUE_TYPE.AUGUST
    case MONTH_LABEL_TYPE.SEPTEMBER:
      return MONTH_VALUE_TYPE.SEPTEMBER
    case MONTH_LABEL_TYPE.OCTOBER:
      return MONTH_VALUE_TYPE.OCTOBER
    case MONTH_LABEL_TYPE.NOVEMBER:
      return MONTH_VALUE_TYPE.NOVEMBER
    case MONTH_LABEL_TYPE.DECEMBER:
      return MONTH_VALUE_TYPE.DECEMBER
    default:
      return null
  }
}

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
