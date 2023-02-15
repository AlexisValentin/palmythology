import { PantheonLabel, PantheonValue } from "../types/cards/pantheons";
import { SubjectLabel, SubjectValue } from "../types/cards/subjects";

export const getPantheonLabelFromValue = (
  pantheon: PantheonValue
): PantheonLabel => {
  switch (pantheon) {
    case PantheonValue.AZTEC:
      return PantheonLabel.AZTEC;
    case PantheonValue.CELTIC:
      return PantheonLabel.CELTIC;
    case PantheonValue.CHINESE:
      return PantheonLabel.CHINESE;
    case PantheonValue.EGYPTIAN:
      return PantheonLabel.EGYPTIAN;
    case PantheonValue.GREEK:
      return PantheonLabel.GREEK;
    case PantheonValue.HINDU:
      return PantheonLabel.HINDU;
    case PantheonValue.JAPANESE:
      return PantheonLabel.JAPANESE;
    case PantheonValue.MAYAN:
      return PantheonLabel.MAYAN;
    case PantheonValue.NORSE:
      return PantheonLabel.NORSE;
    case PantheonValue.ROMAN:
      return PantheonLabel.ROMAN;
  }
};

export const getPantheonValueFromLabel = (
  pantheon: PantheonLabel
): PantheonValue => {
  switch (pantheon) {
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

export const getSubjectLabelFromValue = (
  subject: SubjectValue
): SubjectLabel => {
  switch (subject) {
    case SubjectValue.DIVINITY:
      return SubjectLabel.DIVINITY;
    case SubjectValue.MONSTER:
      return SubjectLabel.MONSTER;
    case SubjectValue.PERSON:
      return SubjectLabel.PERSON;
    case SubjectValue.PLACE:
      return SubjectLabel.PLACE;
    case SubjectValue.TRIBE:
      return SubjectLabel.TRIBE;
    case SubjectValue.WRITINGS:
      return SubjectLabel.WRITINGS;
  }
};
