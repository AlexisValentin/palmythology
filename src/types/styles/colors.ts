export const BACKGROUND = "bg";
export const GRADIENT = "gradient";
export const TEXT = "text";

export const COLORS = {
  AMBER: "amber",
  BLUE: "blue",
  CYAN: "cyan",
  EMERALD: "emerald",
  FUCHSIA: "fuchsia",
  GRAY: "gray",
  GREEN: "green",
  INDIGO: "indigo",
  LIME: "lime",
  NEUTRAL: "neutral",
  ORANGE: "orange",
  PINK: "pink",
  PURPLE: "purple",
  RED: "red",
  ROSE: "rose",
  SKY: "sky",
  SLATE: "slate",
  STONE: "stone",
  TEAL: "teal",
  VIOLET: "violet",
  YELLOW: "yellow",
  ZINC: "zinc",
};

export const COLOR_TAINTS = {
  EXTRA_LIGHT: 100,
  SUPER_LIGHT: 200,
  LIGHTER: 300,
  LIGHT: 400,
  MEDIUM: 500,
  DARK: 600,
  DARKER: 700,
  SUPER_DARK: 800,
  EXTRA_DARK: 900,
};

export const TEXT_COLORS = {
  GENERIC: `${COLORS.GRAY}-${COLOR_TAINTS.EXTRA_LIGHT}`,
  HINDU: `${COLORS.EMERALD}-${COLOR_TAINTS.DARK}`,
  JAPANESE: `${COLORS.RED}-${COLOR_TAINTS.DARKER}`,
  ROMAN: `${COLORS.YELLOW}-${COLOR_TAINTS.MEDIUM}`,
};

export const ARTICLE_COLORS = {
  QU_EST_CE_QUE_CA_FICHE: [
    `${COLORS.CYAN}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.INDIGO}-${COLOR_TAINTS.MEDIUM}`,
  ],
  QUOI_2_NEUF: [
    `${COLORS.GREEN}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.LIME}-${COLOR_TAINTS.MEDIUM}`,
  ],
};

export const SECTION_COLORS = {
  ABOUT: [
    `${COLORS.BLUE}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.GREEN}-${COLOR_TAINTS.MEDIUM}`,
  ],
  NEWS: [
    `${COLORS.PURPLE}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.PINK}-${COLOR_TAINTS.MEDIUM}`,
  ],
  FOLDERS: [
    `${COLORS.AMBER}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.LIME}-${COLOR_TAINTS.MEDIUM}`,
  ],
  RESEARCH: [
    `${COLORS.RED}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.YELLOW}-${COLOR_TAINTS.MEDIUM}`,
  ],
};

export const MYTHOLOGY_COLORS = {
  AZTEC: `${COLORS.ORANGE}-${COLOR_TAINTS.DARK}`,
  CELTIC: `${COLORS.EMERALD}-${COLOR_TAINTS.DARKER}`,
  CHINESE: `${COLORS.RED}-${COLOR_TAINTS.DARKER}`,
  EGYPTIAN: `${COLORS.AMBER}-${COLOR_TAINTS.MEDIUM}`,
  GREEK: `${COLORS.BLUE}-${COLOR_TAINTS.DARKER}`,
  HINDU: `${COLORS.AMBER}-${COLOR_TAINTS.DARK}`,
  JAPANESE: `${COLORS.NEUTRAL}-${COLOR_TAINTS.EXTRA_LIGHT}`,
  MAYAN: `${COLORS.PURPLE}-${COLOR_TAINTS.SUPER_DARK}`,
  NORSE: `${COLORS.SKY}-${COLOR_TAINTS.LIGHTER}`,
  ROMAN: `${COLORS.RED}-${COLOR_TAINTS.EXTRA_DARK}`,
};

export type PantheonStyleType = {
  backgroundColor: string;
  textColor: string;
};
