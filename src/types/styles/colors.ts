/* Constants */
export const BACKGROUND = "bg";

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

export const BACKGROUND_COLORS = {
  BLUE: `${BACKGROUND}-${COLORS.BLUE}`,
  GRAY: `${BACKGROUND}-${COLORS.GRAY}`,
  GREEN: `${BACKGROUND}-${COLORS.GREEN}`,
  RED: `${BACKGROUND}-${COLORS.RED}`,
  YELLOW: `${BACKGROUND}-${COLORS.YELLOW}`,
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

export const TEXT = "text";

export const TEXT_COLORS = {
  GENERIC: `${COLORS.GRAY}-${COLOR_TAINTS.EXTRA_LIGHT}`,
  JAPANESE: `${COLORS.RED}-${COLOR_TAINTS.DARKER}`,
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
