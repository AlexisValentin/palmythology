/* Types */
import { Card } from "../../types/cards/card";
import { NorseNames } from "../../types/cards/names/norse";

const LokiCard: Card = {
  details: {
    name: NorseNames.LOKI,
    pantheon: "Scandinave",
    subject: "Divinité",
  },
};

export const availableNorseCards = [
  LokiCard,
];
