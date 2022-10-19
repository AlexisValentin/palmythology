import { Card } from "../../types/cards/card";
import { RomanNames } from "../../types/cards/names";

const FloraCard: Card = {
  details: {
    name: RomanNames.FLORA,
    pantheon: "Romain",
    subject: "Divinité",
  },
};

export const availableRomanCards = [FloraCard];
