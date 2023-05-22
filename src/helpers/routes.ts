import { ROUTE_URLS } from "../types/consts/routes";
import { parseUrlToMatchSlug } from "./string";

export const setCardRouteParameters = (cardName: string, pantheon: string) =>
  ROUTE_URLS.CARD.replace(":pantheon", pantheon).replace(
    ":card",
    parseUrlToMatchSlug(cardName.toLowerCase())
  );

export const setNewsRouteParameters = (newsName: string) =>
  ROUTE_URLS.ARTICLE.replace(
    ":title",
    parseUrlToMatchSlug(newsName.toLowerCase())
  );
