/* Types */
import { Card } from "../../types/cards/card";
import { NorseNames } from "../../types/cards/names/norse";
import { Pantheons } from "../../types/cards/pantheons";
import { Subjects } from "../../types/cards/subjects";

const FriggCard: Card = {
  details: {
    name: NorseNames.FRIGG,
    pantheon: Pantheons.NORSE,
    subject: Subjects.DIVINITY,
  },
};

const IdunnCard: Card = {
  details: {
    name: NorseNames.IDUNN,
    pantheon: Pantheons.NORSE,
    subject: Subjects.DIVINITY,
  },
};

const LokiCard: Card = {
  details: {
    name: NorseNames.LOKI,
    pantheon: Pantheons.NORSE,
    subject: Subjects.DIVINITY,
  },
};

export const availableNorseCards = [
  FriggCard,
  IdunnCard,
  LokiCard,
];
