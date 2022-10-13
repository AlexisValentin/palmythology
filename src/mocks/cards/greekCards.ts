/* Types */
import { Card } from "../../types/cards/card";
import { GreekNames } from "../../types/cards/names/greek";
import { Pantheons } from "../../types/cards/pantheons";
import { Subjects } from "../../types/cards/subjects";

const AphroditeCard: Card = {
  details: {
    name: GreekNames.APHRODITE,
    pantheon: Pantheons.GREEK,
    subject: Subjects.DIVINITY,
  },
};

const ArachneaCard: Card = {
  details: {
    name: GreekNames.ARACHNEA,
    pantheon: Pantheons.GREEK,
    subject: Subjects.HERO,
  },
};

const DemeterCard: Card = {
  details: {
    name: GreekNames.DEMETER,
    pantheon: Pantheons.GREEK,
    subject: Subjects.DIVINITY,
  },
};

const HadesCard: Card = {
  details: {
    name: GreekNames.HADES,
    pantheon: Pantheons.GREEK,
    subject: Subjects.DIVINITY,
  },
};

const PersephoneCard: Card = {
  details: {
    name: GreekNames.PERSEPHONE,
    pantheon: Pantheons.GREEK,
    subject: Subjects.DIVINITY,
  },
};

const PoseidonCard: Card = {
  details: {
    name: GreekNames.POSEIDON,
    pantheon: Pantheons.GREEK,
    subject: Subjects.DIVINITY,
  },
};

export const ZeusCard: Card = {
  details: {
    name: GreekNames.ZEUS,
    pantheon: Pantheons.GREEK,
    subject: Subjects.DIVINITY,
  },
};

export const availableGreekCards = [
  AphroditeCard,
  ArachneaCard,
  DemeterCard,
  HadesCard,
  PersephoneCard,
  PoseidonCard,
  ZeusCard,
];
