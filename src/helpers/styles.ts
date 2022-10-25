import { PantheonLabel } from "../types/cards/pantheons";
import {
  COLORS,
  COLOR_TAINTS,
  MYTHOLOGY_COLORS,
  PantheonStyleType,
  TEXT_COLORS,
} from "../types/styles/colors";

export const getPantheonStyle = (
  pantheon: PantheonLabel
): PantheonStyleType => {
  switch (pantheon) {
    case PantheonLabel.AZTEC:
      return {
        backgroundColor: MYTHOLOGY_COLORS.AZTEC,
        textColor: TEXT_COLORS.GENERIC,
      };
    case PantheonLabel.CELTIC:
      return {
        backgroundColor: MYTHOLOGY_COLORS.CELTIC,
        textColor: TEXT_COLORS.GENERIC,
      };
    case PantheonLabel.CHINESE:
      return {
        backgroundColor: MYTHOLOGY_COLORS.CHINESE,
        textColor: TEXT_COLORS.GENERIC,
      };
    case PantheonLabel.EGYPTIAN:
      return {
        backgroundColor: MYTHOLOGY_COLORS.EGYPTIAN,
        textColor: TEXT_COLORS.GENERIC,
      };
    case PantheonLabel.GREEK:
      return {
        backgroundColor: MYTHOLOGY_COLORS.GREEK,
        textColor: TEXT_COLORS.GENERIC,
      };
    case PantheonLabel.HINDU:
      return {
        backgroundColor: MYTHOLOGY_COLORS.HINDU,
        textColor: TEXT_COLORS.HINDU,
      };
    case PantheonLabel.JAPANESE:
      return {
        backgroundColor: MYTHOLOGY_COLORS.JAPANESE,
        textColor: TEXT_COLORS.JAPANESE,
      };
    case PantheonLabel.MAYAN:
      return {
        backgroundColor: MYTHOLOGY_COLORS.MAYAN,
        textColor: TEXT_COLORS.GENERIC,
      };
    case PantheonLabel.NORSE:
      return {
        backgroundColor: MYTHOLOGY_COLORS.NORSE,
        textColor: TEXT_COLORS.GENERIC,
      };
    case PantheonLabel.ROMAN:
      return {
        backgroundColor: MYTHOLOGY_COLORS.ROMAN,
        textColor: TEXT_COLORS.ROMAN,
      };
    default: {
      return {
        backgroundColor: `${COLORS.ZINC}-${COLOR_TAINTS.EXTRA_DARK}`,
        textColor: TEXT_COLORS.GENERIC,
      };
    }
  }
};
