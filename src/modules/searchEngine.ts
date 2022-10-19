/* Lodash */
import { uniq } from "lodash";

/* Mocks */
import { allAvailableCards } from "../mocks/index";

/* Types */
import { Card, ResearchCriterias } from "../types/cards/card";

export const filterCards = (searchCriterias?: ResearchCriterias): Card[] => {
  const filteredCards: Card[] = [];
  console.log("searchCriteruias -> ", searchCriterias);
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
  const askedDetails = asked;
  const foundDetails = found?.details;

  return (
    isSelectedOptionMatching(askedDetails?.pantheon, foundDetails?.pantheon) &&
    isSelectedOptionMatching(askedDetails?.subject, foundDetails?.subject)
  );
};

export const isSelectedOptionMatching = (
  asked?: string,
  found?: string
): boolean => {
  return asked === found;
};
