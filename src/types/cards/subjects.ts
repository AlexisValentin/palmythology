export enum SubjectLabel {
  MONSTER = 'Créature',
  DIVINITY = 'Divinité',
  PERSON = 'Personnage',
  PLACE = 'Lieu',
  TRIBE = 'Peuple',
  WRITINGS = 'Écrits',
}

export enum SubjectValue {
  MONSTER = 'monster',
  DIVINITY = 'divinity',
  PERSON = 'person',
  PLACE = 'place',
  TRIBE = 'tribe',
  WRITINGS = 'writings',
}

export interface SubjectSelectType {
  value: SubjectValue
  label: SubjectLabel
  icon: string
}

export const ALL_SUBJECT: SubjectSelectType[] = [
  {
    value: SubjectValue.DIVINITY,
    label: SubjectLabel.DIVINITY,
    icon: 'https://a.storyblok.com/f/187414/681x681/809fcbc497/divinity.svg',
  },
  {
    value: SubjectValue.PERSON,
    label: SubjectLabel.PERSON,
    icon: 'https://a.storyblok.com/f/187414/683x683/f2dde966f4/hero.svg',
  },
  {
    value: SubjectValue.TRIBE,
    label: SubjectLabel.TRIBE,
    icon: 'https://a.storyblok.com/f/187414/512x512/931f446512/tribe.svg',
  },
  {
    value: SubjectValue.MONSTER,
    label: SubjectLabel.MONSTER,
    icon: 'https://a.storyblok.com/f/187414/150x150/0429ec0f8d/creature.svg',
  },
  {
    value: SubjectValue.PLACE,
    label: SubjectLabel.PLACE,
    icon: 'https://a.storyblok.com/f/187414/150x150/a12b37425f/place.svg',
  },
  {
    value: SubjectValue.WRITINGS,
    label: SubjectLabel.WRITINGS,
    icon: 'https://a.storyblok.com/f/187414/512x512/718d15204d/writings.svg',
  },
]
