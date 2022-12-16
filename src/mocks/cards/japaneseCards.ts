import { Card } from "../../types/cards/card";
import { JapaneseNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const FujinCard: Card = {
  details: {
    name: JapaneseNames.FUJIN,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const InariCard: Card = {
  details: {
    name: JapaneseNames.INARI,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const MyobuCard: Card = {
  details: {
    name: JapaneseNames.MYOBU,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.MONSTER,
    available: false,
  },
};

const RaijinCard: Card = {
  details: {
    name: JapaneseNames.RAIJIN,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const TsuchigumoCard: Card = {
  details: {
    name: JapaneseNames.TSUCHIGUMO,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.MONSTER,
    available: false,
  },
};

const YamataNoOrochiCard: Card = {
  details: {
    name: JapaneseNames.YAMATA_NO_OROCHI,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.MONSTER,
    available: false,
  },
};

export const availableJapaneseCards = [
  FujinCard,
  InariCard,
  MyobuCard,
  RaijinCard,
  TsuchigumoCard,
  YamataNoOrochiCard,
];
