/* Types */
import {
  BACKGROUND,
  MYTHOLOGY_COLORS,
  TEXT,
  TEXT_COLORS,
} from "../../styles/colors";

const selectAztecBgColor = () => MYTHOLOGY_COLORS.AZTEC;
const selectCelticBgColor = () => MYTHOLOGY_COLORS.CELTIC;
const selectChineseBgColor = () => MYTHOLOGY_COLORS.CHINESE;
const selectEgyptianBgColor = () => MYTHOLOGY_COLORS.EGYPTIAN;
const selectGreekBgColor = () => MYTHOLOGY_COLORS.GREEK;
const selectHinduBgColor = () => MYTHOLOGY_COLORS.HINDU;
const selectJapaneseBgColor = () => MYTHOLOGY_COLORS.JAPANESE;
const selectMayanBgColor = () => MYTHOLOGY_COLORS.MAYAN;
const selectNorseBgColor = () => MYTHOLOGY_COLORS.NORSE;
const selectRomanBgColor = () => MYTHOLOGY_COLORS.ROMAN;

/* export const selectBackgroundColor = (mythology: Pantheons) => {
  let mythologyColor;

  switch (mythology) {
    case Pantheons.AZTEC:
      mythologyColor = selectAztecBgColor();
      break;
    case Pantheons.CELTIC:
      mythologyColor = selectCelticBgColor();
      break;
    case Pantheons.CHINESE:
      mythologyColor = selectChineseBgColor();
      break;
    case Pantheons.EGYPTIAN:
      mythologyColor = selectEgyptianBgColor();
      break;
    case Pantheons.GREEK:
      mythologyColor = selectGreekBgColor();
      break;
    case Pantheons.HINDU:
      mythologyColor = selectHinduBgColor();
      break;
    case Pantheons.JAPANESE:
      mythologyColor = selectJapaneseBgColor();
      break;
    case Pantheons.MAYAN:
      mythologyColor = selectMayanBgColor();
      break;
    case Pantheons.NORSE:
      mythologyColor = selectNorseBgColor();
      break;
    case Pantheons.ROMAN:
      mythologyColor = selectRomanBgColor();
      break;
    default:
      return;
  }

  return `${BACKGROUND}-${mythologyColor}`;
}; */

const selectGenericTextColor = () => TEXT_COLORS.GENERIC;
const selectJapaneseTextColor = () => TEXT_COLORS.JAPANESE;

/* export const selectTextColor = (mythology: Pantheons) => {
  let mythologyColor;

  switch (mythology) {
    case Pantheons.AZTEC:
    case Pantheons.CELTIC:
    case Pantheons.CHINESE:
    case Pantheons.EGYPTIAN:
    case Pantheons.GREEK:
    case Pantheons.HINDU:
    case Pantheons.MAYAN:
    case Pantheons.NORSE:
    case Pantheons.ROMAN:
      mythologyColor = selectGenericTextColor();
      break;
    case Pantheons.JAPANESE:
      mythologyColor = selectJapaneseTextColor();
      break;
    default:
      return;
  }

  return `${TEXT}-${mythologyColor}`;
}; */
