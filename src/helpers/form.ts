/* Types */
import { ResearchCriterias } from "../types/cards/card";
import { isStringEmpty } from "./types";

export const isFormEmpty = (formInputValues: ResearchCriterias): boolean => {
  const { name } = formInputValues;

  return isStringEmpty(name);
};
