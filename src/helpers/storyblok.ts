import axios from "axios";
import { PantheonLabel, PantheonValue } from "../types/cards/pantheons";
import {
  STORYBLOK_CV,
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
    url: `${STORYBLOK_URL_STORIES}?cv=${STORYBLOK_CV}&token=${STORYBLOK_TOKEN}&version=${STORYBLOK_VERSIONS.PUBLISHED}`,
    responseType: "json",
  });

export const fetchCardStories = async () => {
  await fetchAllStories().then((stories) => {
    return stories.data.stories.map(
      // @ts-ignore
      (story) => story.content.component === "card" && story
    );
  });
};
