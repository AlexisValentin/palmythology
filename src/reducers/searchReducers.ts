import { ResearchCriterias, TranslatedCardDetails } from '../types/cards/card'

export enum CARD_LIST_ACTIONS {
  SET_SEARCH_CRITERIAS = 'SET_SEARCH_CRITERIAS',
  SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS',
}

export interface CardListState {
  searchCriterias?: ResearchCriterias
  searchResults: TranslatedCardDetails[]
}

export const cardListReducer = (
  state: CardListState,
  action: { type: CARD_LIST_ACTIONS; payload?: any },
) => {
  const { type, payload } = action

  switch (type) {
    case CARD_LIST_ACTIONS.SET_SEARCH_CRITERIAS:
      return { ...state, searchCriterias: payload }
    case CARD_LIST_ACTIONS.SET_SEARCH_RESULTS:
      return { ...state, searchResults: payload }
    default:
      return state
  }
}
