import { ROUTE_URLS } from "../types/consts/routes";

export const setCardRouteParameters = (cardName: string, pantheon: string) =>
  ROUTE_URLS.CARD.replace(":pantheon", pantheon).replace(":card", cardName);
