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
    value: SubjectValue.MONSTER,
    label: SubjectLabel.MONSTER,
    icon: 'https://a.storyblok.com/f/187414/150x150/3548952805/aztec.svg',
  },
  {
    value: SubjectValue.DIVINITY,
    label: SubjectLabel.DIVINITY,
    icon: 'https://a.storyblok.com/f/187414/150x150/3548952805/aztec.svg',
  },
  {
    value: SubjectValue.PERSON,
    label: SubjectLabel.PERSON,
    icon: 'https://a.storyblok.com/f/187414/150x150/3548952805/aztec.svg',
  },
  {
    value: SubjectValue.PLACE,
    label: SubjectLabel.PLACE,
    icon: 'https://a.storyblok.com/f/187414/150x150/3548952805/aztec.svg',
  },
  {
    value: SubjectValue.TRIBE,
    label: SubjectLabel.TRIBE,
    icon: 'https://a.storyblok.com/f/187414/150x150/3548952805/aztec.svg',
  },
  {
    value: SubjectValue.WRITINGS,
    label: SubjectLabel.WRITINGS,
    icon: 'https://a.storyblok.com/f/187414/150x150/3548952805/aztec.svg',
  },
]
