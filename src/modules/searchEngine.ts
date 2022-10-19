/* Lodash */
import { uniq } from "lodash";

/* Mocks */
import { allAvailableCards } from "../mocks/index";

/* Types */
import { Card, ResearchCriterias } from "../types/cards/card";

export const filterCards = (searchCriterias?: ResearchCriterias): Card[] => {
  const filteredCards: Card[] = [];

  filteredCards.push(...searchFromInput(searchCriterias));

  return uniq(filteredCards);
};

const searchFromInput = (inputValues?: ResearchCriterias): Card[] => {
  const resultFromInput: Card[] = [];

  allAvailableCards.map((card) => {
    if (isACardFound(inputValues, card)) {
      resultFromInput.push(card);
    }

    return resultFromInput;
  });

  return resultFromInput;
};

export const isACardFound = (
  asked?: ResearchCriterias,
  found?: Card
): boolean => {
  const foundDetails = found?.details;

  const matchingPantheon = isSelectedOptionMatching(
    asked?.pantheon,
    foundDetails?.pantheon
  );
  const matchingSubject = isSelectedOptionMatching(
    asked?.subject,
    foundDetails?.subject
  );

  if (asked?.pantheon && !asked.subject) {
    return matchingPantheon;
  }

  if (!asked?.pantheon && asked?.subject) {
    return matchingSubject;
  }

  if (asked?.pantheon && asked?.subject) {
    return matchingPantheon && matchingSubject;
  }

  return false;
};

export const isSelectedOptionMatching = (
  asked?: string,
  found?: string
): boolean => {
  return asked === found;
};
