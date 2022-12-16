import { Card } from "../../types/cards/card";
import { CelticNames } from "../../types/cards/names";
import { PantheonLabel } from "../../types/cards/pantheons";
import { SubjectLabel } from "../../types/cards/subjects";

const ArtioCard: Card = {
  details: {
    name: CelticNames.ARTIO,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const BrigitCard: Card = {
  details: {
    name: CelticNames.BRIGIT,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const CamulosCard: Card = {
  details: {
    name: CelticNames.CAMULOS,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const CernunnosCard: Card = {
  details: {
    name: CelticNames.CERNUNNOS,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const DanaCard: Card = {
  details: {
    name: CelticNames.DANA,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.DIVINITY,
    available: false,
  },
};

const FomoriansCard: Card = {
  details: {
    name: CelticNames.FOMORIANS,
    pantheon: PantheonLabel.CELTIC,
    subject: SubjectLabel.TRIBE,
    available: false,
  },
};

export const availableCelticCards = [
  ArtioCard,
  BrigitCard,
  CamulosCard,
  CernunnosCard,
  DanaCard,
  FomoriansCard,
];
