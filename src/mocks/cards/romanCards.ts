import { Card } from "../../types/cards/card";
import { RomanNames } from "../../types/cards/names/roman";
import { Pantheons } from "../../types/cards/pantheons";
import { Subjects } from "../../types/cards/subjects";

const FloraCard: Card = {
  details: {
    name: RomanNames.FLORA,
    pantheon: Pantheons.ROMAN,
    subject: Subjects.DIVINITY,
  },
};

export const availableRomanCards = [
  FloraCard
];
