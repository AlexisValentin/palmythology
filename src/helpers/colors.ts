import { PantheonValue } from "../types/cards/pantheons";
import {
  BACKGROUND,
  COLORS,
  COLOR_TAINTS,
  MYTHOLOGY_COLORS,
  TEXT_COLORS,
} from "../types/styles/colors";

export const getSummaryBackgroundColor = () =>
  `${BACKGROUND}-${COLORS.GRAY}-${COLOR_TAINTS.SUPER_LIGHT}`;

export const getPantheonMainColor = (pantheon: string) => {
  // @ts-ignore
  return MYTHOLOGY_COLORS[pantheon.toUpperCase()];
};

export const getPantheonTextColor = (pantheon: string) =>
  hasSpecialTextColor(pantheon)
    ? // @ts-ignore
      TEXT_COLORS[pantheon.toUpperCase()]
    : TEXT_COLORS.GENERIC;

const hasSpecialTextColor = (pantheon: string) =>
  [PantheonValue.HINDU, PantheonValue.JAPANESE, PantheonValue.ROMAN].includes(
    // @ts-ignore
    pantheon
  );
