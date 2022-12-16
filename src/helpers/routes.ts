import { PantheonLabel } from "../types/cards/pantheons";
import { ROUTE_URLS } from "../types/consts/routes";

export const setCardRouteParameters = (
  cardName: string,
  pantheon: PantheonLabel
) => ROUTE_URLS.CARD.replace(":pantheon", pantheon).replace(":card", cardName);
