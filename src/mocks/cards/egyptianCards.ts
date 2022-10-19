/* Types */
import { Card } from "../../types/cards/card";
import { EgyptianNames } from "../../types/cards/names";

const AnubisCard: Card = {
  details: {
    name: EgyptianNames.ANUBIS,
    pantheon: "Egyptien",
    subject: "Divinité",
  },
};

const OsirisCard: Card = {
  details: {
    name: EgyptianNames.OSIRIS,
    pantheon: "Egyptien",
    subject: "Divinité",
  },
};

const ReCard: Card = {
  details: {
    name: EgyptianNames.RE,
    pantheon: "Egyptien",
    subject: "Divinité",
  },
};

const SethCard: Card = {
  details: {
    name: EgyptianNames.SETH,
    pantheon: "Egyptien",
    subject: "Divinité",
  },
};

const SobekCard: Card = {
  details: {
    name: EgyptianNames.SOBEK,
    pantheon: "Egyptien",
    subject: "Divinité",
  },
};

export const availableEgyptianCards = [
  AnubisCard,
  OsirisCard,
  ReCard,
  SethCard,
  SobekCard,
];
