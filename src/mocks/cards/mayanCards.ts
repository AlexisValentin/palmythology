import { Card } from "../../types/cards/card";
import { MayanNames } from "../../types/cards/names/mayan";
import { Pantheons } from "../../types/cards/pantheons";
import { Subjects } from "../../types/cards/subjects";

const CamazotzCard: Card = {
  details: {
    name: MayanNames.CAMAZOTZ,
    pantheon: Pantheons.MAYAN,
    subject: Subjects.DIVINITY,
  },
};

export const availableMayanCards = [
  CamazotzCard
];
