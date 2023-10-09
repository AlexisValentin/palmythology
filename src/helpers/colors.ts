import { PantheonValue } from '../types/cards/pantheons'
import {
  BACKGROUND,
  COLORS,
  COLOR_TAINTS,
  MYTHOLOGY_COLORS,
  PantheonStyleType,
  TEXT_COLORS,
} from '../types/styles/colors'

export const getPantheonStyle = (
  pantheon: PantheonValue,
): PantheonStyleType => {
  switch (pantheon) {
    case PantheonValue.AZTEC:
      return {
        backgroundColor: MYTHOLOGY_COLORS.AZTEC,
        textColor: TEXT_COLORS.GENERIC,
      }
    case PantheonValue.CELTIC:
      return {
        backgroundColor: MYTHOLOGY_COLORS.CELTIC,
        textColor: TEXT_COLORS.GENERIC,
      }
    case PantheonValue.CHINESE:
      return {
        backgroundColor: MYTHOLOGY_COLORS.CHINESE,
        textColor: TEXT_COLORS.GENERIC,
      }
    case PantheonValue.EGYPTIAN:
      return {
        backgroundColor: MYTHOLOGY_COLORS.EGYPTIAN,
        textColor: TEXT_COLORS.GENERIC,
      }
    case PantheonValue.GREEK:
      return {
        backgroundColor: MYTHOLOGY_COLORS.GREEK,
        textColor: TEXT_COLORS.GENERIC,
      }
    case PantheonValue.HINDU:
      return {
        backgroundColor: MYTHOLOGY_COLORS.HINDU,
        textColor: TEXT_COLORS.HINDU,
      }
    case PantheonValue.JAPANESE:
      return {
        backgroundColor: MYTHOLOGY_COLORS.JAPANESE,
        textColor: TEXT_COLORS.JAPANESE,
      }
    case PantheonValue.MAYAN:
      return {
        backgroundColor: MYTHOLOGY_COLORS.MAYAN,
        textColor: TEXT_COLORS.GENERIC,
      }
    case PantheonValue.MESOPOTAMIAN:
      return {
        backgroundColor: MYTHOLOGY_COLORS.MESOPOTAMIAN,
        textColor: TEXT_COLORS.GENERIC,
      }
    case PantheonValue.NORSE:
      return {
        backgroundColor: MYTHOLOGY_COLORS.NORSE,
        textColor: TEXT_COLORS.GENERIC,
      }
    case PantheonValue.ROMAN:
      return {
        backgroundColor: MYTHOLOGY_COLORS.ROMAN,
        textColor: TEXT_COLORS.ROMAN,
      }
    default: {
      return {
        backgroundColor: `${COLORS.LIME}-${COLOR_TAINTS.EXTRA_DARK}`,
        textColor: TEXT_COLORS.GENERIC,
      }
    }
  }
}

export const getSummaryBackgroundColor = () =>
  `${BACKGROUND}-${COLORS.NEUTRAL}-${COLOR_TAINTS.SUPER_LIGHT}`

export const getPantheonMainColor = (pantheon: PantheonValue) =>
  MYTHOLOGY_COLORS[pantheon.toUpperCase()]

export const getPantheonTextColor = (pantheon: PantheonValue) =>
  hasSpecialTextColor(pantheon)
    ? TEXT_COLORS[pantheon.toUpperCase()]
    : TEXT_COLORS.GENERIC

export const hasSpecialTextColor = (pantheon: PantheonValue) =>
  [PantheonValue.HINDU, PantheonValue.JAPANESE, PantheonValue.ROMAN].includes(
    pantheon,
  )
