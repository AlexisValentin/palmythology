import {
  getPantheonLabelFromValue,
  getSubjectLabelFromValue,
} from "../helpers/dictionary";
import { fetchCardStories } from "../helpers/storyblok";
import {
  CardDetails,
  ResearchCriterias,
  TranslatedCardDetails,
} from "../types/cards/card";

export const filterCards = (
  searchCriterias?: ResearchCriterias
): Promise<TranslatedCardDetails[]> =>
  fetchCardStories().then((stories) =>
    stories.map((card: CardDetails) => {
      if (isACardFound(searchCriterias, card)) {
        const { pantheon, subject } = card;

        return {
          ...card,
          pantheon: getPantheonLabelFromValue(pantheon),
          subject: getSubjectLabelFromValue(subject),
        };
      }

      return undefined;
    })
  );

export const isACardFound = (
  asked?: ResearchCriterias,
  found?: CardDetails
): boolean => {
  const matchingPantheon = isSelectedOptionMatching(
    asked?.pantheon,
    found?.pantheon
  );
  const matchingSubject = isSelectedOptionMatching(
    asked?.subject,
    found?.subject
  );

  if (found?.isFolder) return false;

  if (asked?.pantheon && !asked.subject) return matchingPantheon;
  if (!asked?.pantheon && asked?.subject) return matchingSubject;
  if (asked?.pantheon && asked?.subject)
    return matchingPantheon && matchingSubject;

  return false;
};

export const isSelectedOptionMatching = (
  asked?: string,
  found?: string
): boolean => {
  return asked === found;
};
