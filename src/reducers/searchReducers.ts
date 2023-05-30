import { ResearchCriterias, TranslatedCardDetails } from "../types/cards/card";

export enum CARD_LIST_ACTIONS {
  SET_SEARCH_CRITERIAS = "SET_SEARCH_CRITERIAS",
  SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS",
}

export enum FILTER_ACTIONS {
  SET_PANTHEON_SEARCH_CRITERIAS = "SET_PANTHEON_SEARCH_CRITERIAS",
  SET_SUBJECT_SEARCH_CRITERIAS = "SET_SUBJECT_SEARCH_CRITERIAS",
}

export interface CardListState {
  searchCriterias?: ResearchCriterias;
  searchResults: TranslatedCardDetails[];
}

export interface FilterState {
  pantheonSearchCriterias: string;
  subjectSearchCriterias: string;
}

export const cardListReducer = (
  state: CardListState,
  action: { type: CARD_LIST_ACTIONS; payload?: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_LIST_ACTIONS.SET_SEARCH_CRITERIAS:
      return { ...state, searchCriterias: payload };
    case CARD_LIST_ACTIONS.SET_SEARCH_RESULTS:
      return { ...state, searchResults: payload };
    default:
      return state;
  }
};

export const filterReducer = (
  state: FilterState,
  action: { type: FILTER_ACTIONS; payload?: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTIONS.SET_PANTHEON_SEARCH_CRITERIAS:
      return { ...state, pantheonSearchCriterias: payload };
    case FILTER_ACTIONS.SET_SUBJECT_SEARCH_CRITERIAS:
      return { ...state, subjectSearchCriterias: payload };
    default:
      return state;
  }
};
