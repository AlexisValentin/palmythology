import { Card } from "../../types/cards/card";
import { AztecNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const TepoztecatlCard: Card = {
  details: {
    name: AztecNames.TEPOZTECATL,
    pantheon: PantheonLabel.AZTEC,
    subject: SubjectLabel.DIVINITY,
  },
};

export const availableAztecCards = [TepoztecatlCard];
