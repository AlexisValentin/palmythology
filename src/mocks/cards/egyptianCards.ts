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

const EnneadeCard: Card = {
  details: {
    name: EgyptianNames.ENNEAD,
    pantheon: PantheonLabel.EGYPTIAN,
    subject: SubjectLabel.TRIBE,
  },
};

const Ogdoade: Card = {
  details: {
    name: EgyptianNames.OGDOAD,
    pantheon: PantheonLabel.EGYPTIAN,
    subject: SubjectLabel.TRIBE,
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

const ThothCard: Card = {
  details: {
    name: EgyptianNames.THOTH,
    pantheon: PantheonLabel.EGYPTIAN,
    subject: SubjectLabel.DIVINITY,
  },
};

export const availableEgyptianCards = [
  AnubisCard,
  EnneadeCard,
  Ogdoade,
  OsirisCard,
  ReCard,
  SethCard,
  SobekCard,
  ThothCard,
];
