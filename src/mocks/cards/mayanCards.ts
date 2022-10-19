import { Card } from "../../types/cards/card";
import { MayanNames } from "../../types/cards/names";

const CamazotzCard: Card = {
  details: {
    name: MayanNames.CAMAZOTZ,
    pantheon: "Maya",
    subject: "Divinité",
  },
};

const HunabKuCard: Card = {
  details: {
    name: MayanNames.HUNAB_KU,
    pantheon: "Maya",
    subject: "Divinité",
  },
};

export const availableMayanCards = [CamazotzCard, HunabKuCard];
