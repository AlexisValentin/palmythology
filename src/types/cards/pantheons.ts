export enum PantheonLabel {
  AZTEC = 'Aztèque',
  CELTIC = 'Celtique',
  CHINESE = 'Chinois',
  EGYPTIAN = 'Égyptien',
  GREEK = 'Grec',
  HINDU = 'Hindou',
  JAPANESE = 'Japonais',
  MAYAN = 'Maya',
  MESOPOTAMIAN = 'Mésopotamien',
  NORSE = 'Scandinave',
  ROMAN = 'Romain',
}

export enum PantheonValue {
  AZTEC = 'aztec',
  CELTIC = 'celtic',
  CHINESE = 'chinese',
  EGYPTIAN = 'egyptian',
  GREEK = 'greek',
  HINDU = 'hindu',
  JAPANESE = 'japanese',
  MAYAN = 'mayan',
  MESOPOTAMIAN = 'mesopotamian',
  NORSE = 'norse',
  ROMAN = 'roman',
}

export interface PantheonSelectType {
  value: PantheonValue
  label: PantheonLabel
  icon: string
}

export const ALL_PANTHEON: PantheonSelectType[] = [
  {
    value: PantheonValue.AZTEC,
    label: PantheonLabel.AZTEC,
    icon: 'https://a.storyblok.com/f/187414/150x150/3548952805/aztec.svg',
  },
  {
    value: PantheonValue.CELTIC,
    label: PantheonLabel.CELTIC,
    icon: 'https://a.storyblok.com/f/187414/512x512/2808959fe9/celtic.svg',
  },
  {
    value: PantheonValue.CHINESE,
    label: PantheonLabel.CHINESE,
    icon: 'https://a.storyblok.com/f/187414/150x150/a19a5de071/chinese.svg',
  },
  {
    value: PantheonValue.EGYPTIAN,
    label: PantheonLabel.EGYPTIAN,
    icon: 'https://a.storyblok.com/f/187414/512x512/130f640778/egyptian.svg',
  },
  {
    value: PantheonValue.GREEK,
    label: PantheonLabel.GREEK,
    icon: 'https://a.storyblok.com/f/187414/512x512/e84b55a294/greek.svg',
  },
  {
    value: PantheonValue.HINDU,
    label: PantheonLabel.HINDU,
    icon: 'https://a.storyblok.com/f/187414/512x512/00f4254da4/hindu.svg',
  },
  {
    value: PantheonValue.JAPANESE,
    label: PantheonLabel.JAPANESE,
    icon: 'https://a.storyblok.com/f/187414/150x150/e51cd3daed/japanese.svg',
  },
  {
    value: PantheonValue.MAYAN,
    label: PantheonLabel.MAYAN,
    icon: 'https://a.storyblok.com/f/187414/512x512/41bbaee10a/mayan.svg',
  },
  {
    value: PantheonValue.NORSE,
    label: PantheonLabel.NORSE,
    icon: 'https://a.storyblok.com/f/187414/512x512/608f27b0b1/norse.svg',
  },
  {
    value: PantheonValue.ROMAN,
    label: PantheonLabel.ROMAN,
    icon: 'https://a.storyblok.com/f/187414/683x683/c30288bcb8/roman.svg',
  },
]
