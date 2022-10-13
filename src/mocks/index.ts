/* Mocks */
import { availableCelticCards } from "./cards/celticCards";
import { availableEgyptianCards } from "./cards/egyptianCards";
import { availableGreekCards } from "./cards/greekCards";
import { availableHinduCards } from "./cards/hinduCards";
import { availableJapaneseCards } from "./cards/japaneseCards";
import { availableMayanCards } from "./cards/mayanCards";
import { availableNorseCards } from "./cards/norseCards";
import { availableRomanCards } from "./cards/romanCards";

export const allAvailableCards = [
  ...availableCelticCards,
  ...availableEgyptianCards,
  ...availableGreekCards,
  ...availableHinduCards,
  ...availableJapaneseCards,
  ...availableMayanCards,
  ...availableNorseCards,
  ...availableRomanCards
];
