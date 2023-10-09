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
}

export const ALL_PANTHEON: PantheonSelectType[] = [
  { value: PantheonValue.AZTEC, label: PantheonLabel.AZTEC },
  { value: PantheonValue.CELTIC, label: PantheonLabel.CELTIC },
  { value: PantheonValue.CHINESE, label: PantheonLabel.CHINESE },
  { value: PantheonValue.EGYPTIAN, label: PantheonLabel.EGYPTIAN },
  { value: PantheonValue.GREEK, label: PantheonLabel.GREEK },
  { value: PantheonValue.HINDU, label: PantheonLabel.HINDU },
  { value: PantheonValue.JAPANESE, label: PantheonLabel.JAPANESE },
  { value: PantheonValue.MAYAN, label: PantheonLabel.MAYAN },
  { value: PantheonValue.MESOPOTAMIAN, label: PantheonLabel.MESOPOTAMIAN },
  { value: PantheonValue.NORSE, label: PantheonLabel.NORSE },
  { value: PantheonValue.ROMAN, label: PantheonLabel.ROMAN },
]
