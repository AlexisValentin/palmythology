import { PantheonLabel, PantheonValue } from "../types/cards/pantheons";
import { SubjectLabel } from "../types/cards/subjects";
import {
  CARD_LIST_ACTIONS,
  FILTER_ACTIONS,
  cardListReducer,
  filterReducer,
} from "./searchReducers";

describe("reducers/searchReducers", () => {
  describe("cardListReducer", () => {
    const mockedInitialState = {
      searchCriterias: undefined,
      searchResults: [],
    };

    test(`should correctly update state on ${CARD_LIST_ACTIONS.SET_SEARCH_CRITERIAS} call`, () => {
      expect(
        cardListReducer(mockedInitialState, {
          type: CARD_LIST_ACTIONS.SET_SEARCH_CRITERIAS,
          payload: {
            pantheon: PantheonValue.CHINESE,
            subject: SubjectLabel.MONSTER,
          },
        })
      ).toEqual({
        ...mockedInitialState,
        searchCriterias: {
          pantheon: PantheonValue.CHINESE,
          subject: SubjectLabel.MONSTER,
        },
      });
    });

    test(`should correctly update state on ${CARD_LIST_ACTIONS.SET_SEARCH_RESULTS} call`, () => {
      expect(
        cardListReducer(mockedInitialState, {
          type: CARD_LIST_ACTIONS.SET_SEARCH_RESULTS,
          payload: {
            name: "Dragon",
            pantheon: PantheonLabel.CHINESE,
            subject: SubjectLabel.MONSTER,
            available: false,
            isFolder: false,
          },
        })
      ).toEqual({
        ...mockedInitialState,
        searchResults: {
          name: "Dragon",
          pantheon: PantheonLabel.CHINESE,
          subject: SubjectLabel.MONSTER,
          available: false,
          isFolder: false,
        },
      });
    });
  });

  describe("filterReducer", () => {
    const mockedInitialState = {
      pantheonSearchCriterias: "",
      subjectSearchCriterias: "",
    };

    test(`should correctly update state on ${FILTER_ACTIONS.SET_PANTHEON_SEARCH_CRITERIAS} call`, () => {
      expect(
        filterReducer(mockedInitialState, {
          type: FILTER_ACTIONS.SET_PANTHEON_SEARCH_CRITERIAS,
          payload: "norse",
        })
      ).toEqual({
        ...mockedInitialState,
        pantheonSearchCriterias: "norse",
      });
    });

    test(`should correctly update state on ${FILTER_ACTIONS.SET_SUBJECT_SEARCH_CRITERIAS} call`, () => {
      expect(
        filterReducer(mockedInitialState, {
          type: FILTER_ACTIONS.SET_SUBJECT_SEARCH_CRITERIAS,
          payload: "place",
        })
      ).toEqual({
        ...mockedInitialState,
        subjectSearchCriterias: "place",
      });
    });
  });
});
