import { Card } from "../../types/cards/card";
import { ChineseNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const FuxiCard: Card = {
  details: {
    name: ChineseNames.FUXI,
    pantheon: PantheonLabel.CHINESE,
    subject: SubjectLabel.DIVINITY,
  },
};

export const availableChineseCards = [FuxiCard];
