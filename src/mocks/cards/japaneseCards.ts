/* Types */
import { Card } from "../../types/cards/card";
import { JapaneseNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

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
  InariCard,
  MyobuCard,
  TsuchigumoCard,
  YamataNoOrochiCard,
];
