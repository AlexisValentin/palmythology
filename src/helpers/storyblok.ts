import { PantheonLabel, PantheonValue } from "../types/cards/pantheons";

export const getCardSlug = (cardName?: string, pantheon?: string) =>
  `cards/${getPantheonValue(pantheon)}/${cardName?.toLowerCase()}`;

const getPantheonValue = (pantheonLabel?: string) => {
  switch (pantheonLabel) {
    case PantheonLabel.AZTEC:
      return PantheonValue.AZTEC;
    case PantheonLabel.CELTIC:
      return PantheonValue.CELTIC;
    case PantheonLabel.CHINESE:
      return PantheonValue.CHINESE;
    case PantheonLabel.EGYPTIAN:
      return PantheonValue.EGYPTIAN;
    case PantheonLabel.GREEK:
      return PantheonValue.GREEK;
    case PantheonLabel.HINDU:
      return PantheonValue.HINDU;
    case PantheonLabel.JAPANESE:
      return PantheonValue.JAPANESE;
    case PantheonLabel.MAYAN:
      return PantheonValue.MAYAN;
    case PantheonLabel.NORSE:
      return PantheonValue.NORSE;
    case PantheonLabel.ROMAN:
      return PantheonValue.ROMAN;
  }
};
