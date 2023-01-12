import axios from "axios";
import { CardDetails } from "../types/cards/card";
import { PantheonLabel, PantheonValue } from "../types/cards/pantheons";
import { Quoi2NeufItemType } from "../types/consts/quoi2Neuf";
import {
  STORYBLOK_TOKEN,
  STORYBLOK_URL_STORIES,
  STORYBLOK_VERSIONS,
} from "../types/storyblok";

export const getCardSlug = (cardName?: string, pantheon?: string) =>
  `cards/${getPantheonValue(pantheon)}/${cardName?.toLowerCase()}`;

const getPantheonValue = (pantheonLabel?: string) => {
  switch (pantheonLabel) {
    case PantheonLabel.AZTEC:
      return PantheonValue.AZTEC;
    case PantheonLabel.CELTIC:
      return PantheonValue.CELTIC;
    case PantheonLabel.CHINESE:
      return PantheonValue.CHINESE;
    case PantheonLabel.EGYPTIAN:
      return PantheonValue.EGYPTIAN;
    case PantheonLabel.GREEK:
      return PantheonValue.GREEK;
    case PantheonLabel.HINDU:
      return PantheonValue.HINDU;
    case PantheonLabel.JAPANESE:
      return PantheonValue.JAPANESE;
    case PantheonLabel.MAYAN:
      return PantheonValue.MAYAN;
    case PantheonLabel.NORSE:
      return PantheonValue.NORSE;
    case PantheonLabel.ROMAN:
      return PantheonValue.ROMAN;
  }
};

const fetchAllStories = () =>
  axios({
    method: "get",
    url: `${STORYBLOK_URL_STORIES}?token=${STORYBLOK_TOKEN}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: "json",
  });

export const fetchCardStories = async () =>
  await fetchAllStories().then((stories) =>
    stories.data.stories.map(
      // @ts-ignore
      (story) => story.content.component === "card" && parseCardData(story)
    )
  );

export const fetchQuoi2NeufStories = async () =>
  await fetchAllStories().then((stories) =>
    stories.data.stories.map(
      // @ts-ignore
      (story) =>
        story.content.component === "quoi2Neuf" && parseQuoi2NeufData(story)
    )
  );

// @ts-ignore
const parseCardData = (card): CardDetails => {
  const { name, pantheon, subject, available } = card.content;

  return {
    name,
    pantheon,
    subject,
    available,
  };
};

// @ts-ignore
const parseQuoi2NeufData = (quoi2NeufItem): Quoi2NeufItemType => {
  const { title, subtitle, icon, available } = quoi2NeufItem.content;

  return {
    title,
    subtitle,
    icon,
    available,
  };
};
