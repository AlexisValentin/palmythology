import { Card } from "../../types/cards/card";
import { NorseNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const FreyjaCard: Card = {
  details: {
    name: NorseNames.FREYJA,
    pantheon: PantheonLabel.NORSE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const FriggCard: Card = {
  details: {
    name: NorseNames.FRIGG,
    pantheon: PantheonLabel.NORSE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const IdunnCard: Card = {
  details: {
    name: NorseNames.IDUNN,
    pantheon: PantheonLabel.NORSE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const LokiCard: Card = {
  details: {
    name: NorseNames.LOKI,
    pantheon: PantheonLabel.NORSE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const OdinCard: Card = {
  details: {
    name: NorseNames.ODIN,
    pantheon: PantheonLabel.NORSE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const ThorCard: Card = {
  details: {
    name: NorseNames.THOR,
    pantheon: PantheonLabel.NORSE,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

export const availableNorseCards = [
  FreyjaCard,
  FriggCard,
  IdunnCard,
  LokiCard,
  OdinCard,
  ThorCard,
];
