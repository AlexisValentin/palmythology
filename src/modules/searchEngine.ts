/* Lodash */
import { uniq } from "lodash";

/* Mocks */
import { allAvailableCards } from "../mocks/index";

/* Helpers */
import { isStringEmpty } from "../helpers/types";
import { isFormEmpty, isOptionNotSelected } from "../helpers/form";

/* Types */
import { Card, ResearchCriterias } from "../types/cards/card";
import { EMPTY_STRING, InputFields } from "../types/form";

export const filterCards = (searchCriterias: ResearchCriterias): Card[] => {
  const filteredCards: Card[] = [];

  if (isFormEmpty(searchCriterias)) {
    return [];
  }

  filteredCards.push(...searchFromInput(searchCriterias));

  return uniq(filteredCards);
};

const searchFromInput = (inputValues: ResearchCriterias): Card[] => {
  const resultFromInput: Card[] = [];

  allAvailableCards.map(card => {
    const inputFields = {
      name: !isStringEmpty(inputValues.name),
      pantheon: !isOptionNotSelected(inputValues.pantheon),
      subject: !isOptionNotSelected(inputValues.subject),
    };

    if (isACardFound(inputFields, inputValues, card)) {
      resultFromInput.push(card);
    }

    return resultFromInput;
  });

  return resultFromInput;
};

export const isACardFound = (
  inputFields: InputFields,
  asked: ResearchCriterias,
  found: Card,
): boolean => {
  const { name, pantheon, subject } = inputFields;
  const askedDetails = asked;
  const foundDetails = found.details;

  if (name && pantheon && subject) {
    return (
      isNameMatching(askedDetails.name, foundDetails.name) &&
      isSelectedOptionMatching(askedDetails.pantheon, foundDetails.pantheon) &&
      isSelectedOptionMatching(askedDetails.subject, foundDetails.subject)
    );
  }

  if (name && pantheon && !subject) {
    return (
      isNameMatching(askedDetails.name, foundDetails.name) &&
      isSelectedOptionMatching(askedDetails.pantheon, foundDetails.pantheon)
    );
  }

  if (name && !pantheon && subject) {
    return (
      isNameMatching(askedDetails.name, foundDetails.name) &&
      isSelectedOptionMatching(askedDetails.subject, foundDetails.subject)
    );
  }

  if (!name && pantheon && subject) {
    return (
      isSelectedOptionMatching(askedDetails.pantheon, foundDetails.pantheon) &&
      isSelectedOptionMatching(askedDetails.subject, foundDetails.subject)
    );
  }

  if (name && !pantheon && !subject) {
    return isNameMatching(askedDetails.name, foundDetails.name);
  }

  if (!name && pantheon && !subject) {
    return isSelectedOptionMatching(
      askedDetails.pantheon,
      foundDetails.pantheon,
    );
  }

  if (!name && !pantheon && subject) {
    return isSelectedOptionMatching(askedDetails.subject, foundDetails.subject);
  }

  return false;
};

export const isNameMatching = (askedName: string, foundName: string): boolean =>
  askedName !== EMPTY_STRING &&
  foundName.toLowerCase().includes(askedName.toLowerCase());

export const isSelectedOptionMatching = (
  asked: string,
  found: string,
): boolean => asked === found;
