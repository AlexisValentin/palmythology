import { PantheonLabel, PantheonValue } from './pantheons.constants'

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
