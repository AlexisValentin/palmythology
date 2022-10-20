import { PayloadAction } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { Languages } from "./types/languages/languages";

/* Types */
import { initialState } from "./types/store/store";

const reducer = (
  currentState = initialState,
  action: PayloadAction<string>
) => {
  switch (action?.type) {
    case "TOGGLE_LANGUAGE":
      return {
        ...currentState,
        language:
          currentState.language === Languages.FRENCH
            ? Languages.ENGLISH
            : Languages.FRENCH,
      };
    default:
      return currentState;
  }
};

export const store = createStore(reducer);
