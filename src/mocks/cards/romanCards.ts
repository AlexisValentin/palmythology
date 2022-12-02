import { Card } from "../../types/cards/card";
import { RomanNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const FloraCard: Card = {
  details: {
    name: RomanNames.FLORA,
    pantheon: PantheonLabel.ROMAN,
    subject: SubjectLabel.DIVINITY,
  },
};

export const availableRomanCards = [FloraCard];
