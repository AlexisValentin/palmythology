/* Types */
import { Card } from "../../types/cards/card";
import { EgyptianNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const AnubisCard: Card = {
  details: {
    name: EgyptianNames.ANUBIS,
    pantheon: PantheonLabel.EGYPTIAN,
    subject: SubjectLabel.DIVINITY,
  },
};

const OsirisCard: Card = {
  details: {
    name: EgyptianNames.OSIRIS,
    pantheon: PantheonLabel.EGYPTIAN,
    subject: SubjectLabel.DIVINITY,
  },
};

const ReCard: Card = {
  details: {
    name: EgyptianNames.RE,
    pantheon: PantheonLabel.EGYPTIAN,
    subject: SubjectLabel.DIVINITY,
  },
};

const SethCard: Card = {
  details: {
    name: EgyptianNames.SETH,
    pantheon: PantheonLabel.EGYPTIAN,
    subject: SubjectLabel.DIVINITY,
  },
};

const SobekCard: Card = {
  details: {
    name: EgyptianNames.SOBEK,
    pantheon: PantheonLabel.EGYPTIAN,
    subject: SubjectLabel.DIVINITY,
  },
};

export const availableEgyptianCards = [
  AnubisCard,
  OsirisCard,
  ReCard,
  SethCard,
  SobekCard,
];
