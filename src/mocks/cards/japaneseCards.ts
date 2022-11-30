import { Card } from "../../types/cards/card";
import { JapaneseNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const FujinCard: Card = {
  details: {
    name: JapaneseNames.FUJIN,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.DIVINITY,
  },
};

const InariCard: Card = {
  details: {
    name: JapaneseNames.INARI,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.DIVINITY,
  },
};

const MyobuCard: Card = {
  details: {
    name: JapaneseNames.MYOBU,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.MONSTER,
  },
};

const RaijinCard: Card = {
  details: {
    name: JapaneseNames.RAIJIN,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.DIVINITY,
  },
};

const TsuchigumoCard: Card = {
  details: {
    name: JapaneseNames.TSUCHIGUMO,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.MONSTER,
  },
};

const YamataNoOrochiCard: Card = {
  details: {
    name: JapaneseNames.YAMATA_NO_OROCHI,
    pantheon: PantheonLabel.JAPANESE,
    subject: SubjectLabel.MONSTER,
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
