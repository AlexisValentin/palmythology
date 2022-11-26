export enum SubjectLabel {
  MONSTER = "Créature",
  DIVINITY = "Divinité",
  HERO = "Héros",
  PLACE = "Lieu",
}

enum SubjectValue {
  MONSTER = "monster",
  DIVINITY = "divinity",
  HERO = "hero",
  PLACE = "place",
}

export interface SubjectSelectType {
  value: SubjectValue;
  label: SubjectLabel;
}

export const allSubject: SubjectSelectType[] = [
  { value: SubjectValue.MONSTER, label: SubjectLabel.MONSTER },
  { value: SubjectValue.DIVINITY, label: SubjectLabel.DIVINITY },
  { value: SubjectValue.HERO, label: SubjectLabel.HERO },
  { value: SubjectValue.PLACE, label: SubjectLabel.PLACE },
];
