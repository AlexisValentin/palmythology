/* Types */
import { Card } from "../../types/cards/card";
import { HinduNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const AgniCard: Card = {
  details: {
    name: HinduNames.AGNI,
    pantheon: PantheonLabel.HINDU,
    subject: SubjectLabel.DIVINITY,
  },
};

export const availableHinduCards = [AgniCard];
