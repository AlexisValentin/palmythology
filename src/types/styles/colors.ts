export const BACKGROUND = 'bg'
export const GRADIENT = 'gradient'
export const TEXT = 'text'

export const COLORS = {
  AMBER: 'amber',
  BLUE: 'blue',
  CYAN: 'cyan',
  EMERALD: 'emerald',
  FUCHSIA: 'fuchsia',
  INDIGO: 'indigo',
  LIME: 'lime',
  NEUTRAL: 'neutral',
  ORANGE: 'orange',
  PINK: 'pink',
  RED: 'red',
  SKY: 'sky',
  VIOLET: 'violet',
}

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
}

export const TEXT_COLORS = {
  GENERIC: `${COLORS.NEUTRAL}-${COLOR_TAINTS.EXTRA_LIGHT}`,
  HINDU: `${COLORS.EMERALD}-${COLOR_TAINTS.DARK}`,
  JAPANESE: `${COLORS.RED}-${COLOR_TAINTS.DARKER}`,
  ROMAN: `${COLORS.AMBER}-${COLOR_TAINTS.MEDIUM}`,
}

export const MYTHOLOGY_COLORS = {
  AZTEC: `${COLORS.ORANGE}-${COLOR_TAINTS.DARK}`,
  CELTIC: `${COLORS.EMERALD}-${COLOR_TAINTS.DARKER}`,
  CHINESE: `${COLORS.RED}-${COLOR_TAINTS.DARKER}`,
  EGYPTIAN: `${COLORS.AMBER}-${COLOR_TAINTS.MEDIUM}`,
  GREEK: `${COLORS.BLUE}-${COLOR_TAINTS.DARKER}`,
  HINDU: `${COLORS.AMBER}-${COLOR_TAINTS.DARK}`,
  JAPANESE: `${COLORS.NEUTRAL}-${COLOR_TAINTS.LIGHTER}`,
  MAYAN: `${COLORS.VIOLET}-${COLOR_TAINTS.SUPER_DARK}`,
  MESOPOTAMIAN: `${COLORS.PINK}-${COLOR_TAINTS.MEDIUM}`,
  NORSE: `${COLORS.SKY}-${COLOR_TAINTS.LIGHTER}`,
  ROMAN: `${COLORS.RED}-${COLOR_TAINTS.EXTRA_DARK}`,
}

export const FOLDERS_COLORS = {
  QU_EST_CE_QUE_CA_FICHE: [
    `${COLORS.CYAN}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.INDIGO}-${COLOR_TAINTS.MEDIUM}`,
  ],
  QUOI_2_NEUF: [
    `${COLORS.EMERALD}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.LIME}-${COLOR_TAINTS.MEDIUM}`,
  ],
  PANTHEONS: {
    DEFAULT: [
      `${COLORS.NEUTRAL}-${COLOR_TAINTS.EXTRA_DARK}`,
      `${COLORS.NEUTRAL}-${COLOR_TAINTS.EXTRA_DARK}`,
    ],
  },
}

export const SECTION_COLORS = {
  ABOUT: [
    `${COLORS.VIOLET}-${COLOR_TAINTS.DARK}`,
    `${COLORS.PINK}-${COLOR_TAINTS.DARK}`,
  ],
  NEWS: [
    `${COLORS.AMBER}-${COLOR_TAINTS.MEDIUM}`,
    `${COLORS.BLUE}-${COLOR_TAINTS.MEDIUM}`,
  ],
  Q2N: [
    `${COLORS.CYAN}-${COLOR_TAINTS.LIGHTER}`,
    `${COLORS.RED}-${COLOR_TAINTS.LIGHTER}`,
  ],
  PANTHEONS: [
    `${COLORS.LIME}-${COLOR_TAINTS.DARKER}`,
    `${COLORS.AMBER}-${COLOR_TAINTS.DARKER}`,
  ],
  SUBJECTS: [
    `${COLORS.LIME}-${COLOR_TAINTS.DARKER}`,
    `${COLORS.AMBER}-${COLOR_TAINTS.DARKER}`,
  ],
  RESEARCH: [
    `${COLORS.EMERALD}-${COLOR_TAINTS.DARKER}`,
    `${COLORS.AMBER}-${COLOR_TAINTS.LIGHTER}`,
  ],
}

export type PantheonStyleType = {
  backgroundColor: string
  textColor: string
}

export type GradientType = {
  startingColor: string
  endingColor: string
}

export const BLACK_COLOR = `${COLORS.NEUTRAL}-${COLOR_TAINTS.EXTRA_DARK}`
export const WHITE_COLOR = `${COLORS.NEUTRAL}-${COLOR_TAINTS.EXTRA_LIGHT}`
