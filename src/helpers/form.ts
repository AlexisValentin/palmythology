/* Types */
import { ResearchCriterias } from "../types/cards/card";
import { UNSET_SELECT } from "../types/form";
import { isStringEmpty } from "./types";

export const isOptionNotSelected = (value: string): boolean =>
  value === UNSET_SELECT;

export const isFormEmpty = (formInputValues: ResearchCriterias): boolean => {
  const { name, pantheon, subject } = formInputValues;

  return (
    isStringEmpty(name) &&
    isOptionNotSelected(pantheon) &&
    isOptionNotSelected(subject)
  );
};
