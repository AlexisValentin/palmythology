import { Card } from "../../types/cards/card";
import { JapaneseNames } from "../../types/cards/names";

const InariCard: Card = {
  details: {
    name: JapaneseNames.INARI,
    pantheon: "Japanese",
    subject: "Divinité",
  },
};

const MyobuCard: Card = {
  details: {
    name: JapaneseNames.MYOBU,
    pantheon: "Japanese",
    subject: "Divinité",
  },
};

const TsuchigumoCard: Card = {
  details: {
    name: JapaneseNames.TSUCHIGUMO,
    pantheon: "Japanese",
    subject: "Divinité",
  },
};

const YamataNoOrochiCard: Card = {
  details: {
    name: JapaneseNames.YAMATA_NO_OROCHI,
    pantheon: "Japanese",
    subject: "Divinité",
  },
};

export const availableJapaneseCards = [
  InariCard,
  MyobuCard,
  TsuchigumoCard,
  YamataNoOrochiCard,
];
