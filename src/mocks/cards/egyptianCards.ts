/* Types */
import { Card } from "../../types/cards/card";
import { EgyptianNames } from "../../types/cards/names/egyptian";

const OsirisCard: Card = {
  details: {
    name: EgyptianNames.OSIRIS,
    pantheon: "Egyptien",
    subject: "Divinité",
  },
};

export const availableEgyptianCards = [
  OsirisCard,
];
