import { ROUTE_URLS } from "../types/consts/routes";
import { stripDiacritics } from "./string";

export const setCardRouteParameters = (cardName: string, pantheon: string) =>
  ROUTE_URLS.CARD.replace(":pantheon", pantheon).replace(
    ":card",
    stripDiacritics(cardName.toLowerCase())
  );

export const setNewsRouteParameters = (newsName: string) =>
  ROUTE_URLS.ARTICLE.replace(":title", stripDiacritics(newsName.toLowerCase()));
