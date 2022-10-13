import { Card } from "../../types/cards/card";
import { HinduNames } from "../../types/cards/names/hindu";
import { Pantheons } from "../../types/cards/pantheons";
import { Subjects } from "../../types/cards/subjects";

const AgniCard: Card = {
  details: {
    name: HinduNames.AGNI,
    pantheon: Pantheons.HINDU,
    subject: Subjects.DIVINITY,
  },
};

export const availableHinduCards = [
  AgniCard
];
