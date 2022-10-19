import { Card } from "../../types/cards/card";
import { CelticNames } from "../../types/cards/names";

const ArtioCard: Card = {
  details: {
    name: CelticNames.ARTIO,
    pantheon: "Celtique",
    subject: "Divinité",
  },
};

const CernunnosCard: Card = {
  details: {
    name: CelticNames.CERNUNNOS,
    pantheon: "Celtique",
    subject: "Divinité",
  },
};

export const availableCelticCards = [ArtioCard, CernunnosCard];
