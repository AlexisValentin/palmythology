import { Card } from "../../types/cards/card";
import { MayanNames } from "../../types/cards/names/mayan";

const CamazotzCard: Card = {
  details: {
    name: MayanNames.CAMAZOTZ,
    pantheon: "Maya",
    subject: "Divinité",
  },
};

export const availableMayanCards = [
  CamazotzCard
];
