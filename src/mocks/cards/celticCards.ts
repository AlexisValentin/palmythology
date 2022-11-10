/* Types */
import { Card } from "../../types/cards/card";
import { CelticNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const ArtioCard: Card = {
  details: {
    name: CelticNames.ARTIO,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.DIVINITY,
  },
};

const CamulosCard: Card = {
  details: {
    name: CelticNames.CERNUNNOS,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.DIVINITY,
  },
};

const CernunnosCard: Card = {
  details: {
    name: CelticNames.CERNUNNOS,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.DIVINITY,
  },
};

export const availableCelticCards = [ArtioCard, CamulosCard, CernunnosCard];
