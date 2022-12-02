import { Card } from "../../types/cards/card";
import { MayanNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const CamazotzCard: Card = {
  details: {
    name: MayanNames.CAMAZOTZ,
    pantheon: PantheonLabel.MAYAN,
    subject: SubjectLabel.DIVINITY,
  },
};

const HunabKuCard: Card = {
  details: {
    name: MayanNames.HUNAB_KU,
    pantheon: PantheonLabel.MAYAN,
    subject: SubjectLabel.DIVINITY,
  },
};

const XquicCard: Card = {
  details: {
    name: MayanNames.XQUIC,
    pantheon: PantheonLabel.MAYAN,
    subject: SubjectLabel.DIVINITY,
  },
};

export const availableMayanCards = [CamazotzCard, HunabKuCard, XquicCard];
