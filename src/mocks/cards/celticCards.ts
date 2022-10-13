import { Card } from "../../types/cards/card";
import { CelticNames } from "../../types/cards/names/celtic";
import { Pantheons } from "../../types/cards/pantheons";
import { Subjects } from "../../types/cards/subjects";

const EponaCard: Card = {
  details: {
    name: CelticNames.EPONA,
    pantheon: Pantheons.CELTIC,
    subject: Subjects.DIVINITY,
  },
};

export const availableCelticCards = [
  EponaCard
];
