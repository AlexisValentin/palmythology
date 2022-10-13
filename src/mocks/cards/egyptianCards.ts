/* Types */
import { Card } from "../../types/cards/card";
import { EgyptianNames } from "../../types/cards/names/egyptian";
import { Pantheons } from "../../types/cards/pantheons";
import { Subjects } from "../../types/cards/subjects";

const OsirisCard: Card = {
  details: {
    name: EgyptianNames.OSIRIS,
    pantheon: Pantheons.EGYPTIAN,
    subject: Subjects.DIVINITY,
  },
};

const SethCard: Card = {
  details: {
    name: EgyptianNames.SETH,
    pantheon: Pantheons.EGYPTIAN,
    subject: Subjects.DIVINITY,
  },
};

export const availableEgyptianCards = [
  OsirisCard,
  SethCard,
];
