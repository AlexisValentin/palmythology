import axios from "axios";
import { CardDetails } from "../types/cards/card";
import { NewsItemType } from "../types/consts/news";
import { QuestCeQueCaFicheItemType } from "../types/consts/questCeQueCaFiche";
import { Quoi2NeufItemType } from "../types/consts/quoi2Neuf";
import {
  STORYBLOK_TOKEN,
  STORYBLOK_URL_STORIES,
  STORYBLOK_VERSIONS,
} from "../types/storyblok";

export const getCardSlug = (cardName?: string, pantheon?: string) =>
  `cards/${pantheon}/${cardName?.toLowerCase()}`;

export const getNewsSlug = (newsTitle?: string) =>
  `news/${newsTitle?.toLowerCase().replace(/ /g, "-")}`;

const fetchStoriesByStartingString = (startingString: string) =>
  axios({
    method: "get",
    url: `${STORYBLOK_URL_STORIES}?starts_with=${startingString}&token=${STORYBLOK_TOKEN}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: "json",
  });

export const fetchCardStories = async () =>
  await fetchStoriesByStartingString("card").then((stories) =>
    stories.data.stories.map(
      // @ts-ignore
      (story) => story.content.component === "card" && parseCardData(story)
    )
  );

export const fetchQuoi2NeufStories = async () =>
  await fetchStoriesByStartingString("quoi2neuf").then((stories) =>
    stories.data.stories.map(
      // @ts-ignore
      (story) =>
        story.content.component === "quoi2Neuf" && parseQuoi2NeufData(story)
    )
  );

export const fetchQuEstCeQueCaFicheStories = async () =>
  await fetchStoriesByStartingString("questcequecafiche").then((stories) =>
    stories.data.stories.map(
      // @ts-ignore
      (story) =>
        story.content.component === "quEstCeQueCaFiche" &&
        parseQuEstCeQueCaFicheData(story)
    )
  );

export const fetchNewsStories = async () =>
  await fetchStoriesByStartingString("news").then((stories) =>
    stories.data.stories.map(
      // @ts-ignore
      (story) =>
        story.content.component === "newsArticle" && parseNewsData(story)
    )
  );

// @ts-ignore
const parseCardData = (card): CardDetails => {
  const { name, pantheon, subject, available, isFolder } = card.content;

  return {
    name,
    pantheon,
    subject,
    available,
    isFolder,
  };
};

// @ts-ignore
const parseQuoi2NeufData = (quoi2NeufItem): Quoi2NeufItemType => {
  const { title, subtitle, icon, available, pantheon } = quoi2NeufItem.content;

  return {
    title,
    subtitle,
    icon,
    available,
    pantheon,
  };
};

const parseQuEstCeQueCaFicheData = (
  // @ts-ignore
  quEstCeQueCaFicheItem
): QuestCeQueCaFicheItemType => {
  const { title, summary, icon, pantheon } = quEstCeQueCaFicheItem.content;

  return {
    title,
    summary,
    icon,
    pantheon,
  };
};

const parseNewsData = (
  // @ts-ignore
  newsItem
): NewsItemType => {
  const { title, summary, text, icon } = newsItem.content;

  return {
    title,
    summary,
    text,
    icon,
  };
};
