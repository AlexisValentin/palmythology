import { Card } from "../../types/cards/card";
import { JapaneseNames } from "../../types/cards/names/japanese";
import { Pantheons } from "../../types/cards/pantheons";
import { Subjects } from "../../types/cards/subjects";

const InariCard: Card = {
  details: {
    name: JapaneseNames.INARI,
    pantheon: Pantheons.JAPANESE,
    subject: Subjects.DIVINITY,
  },
};

export const availableJapaneseCards = [
  InariCard
];
