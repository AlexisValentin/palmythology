export enum SubjectLabel {
  MONSTER = "Créature",
  DIVINITY = "Divinité",
  PERSON = "Personnage",
  PLACE = "Lieu",
  TRIBE = "Peuple",
  WRITINGS = "Ecrits",
}

enum SubjectValue {
  MONSTER = "monster",
  DIVINITY = "divinity",
  PERSON = "person",
  PLACE = "place",
  TRIBE = "tribe",
  WRITINGS = "writings",
}

export interface SubjectSelectType {
  value: SubjectValue;
  label: SubjectLabel;
}

export const allSubject: SubjectSelectType[] = [
  { value: SubjectValue.MONSTER, label: SubjectLabel.MONSTER },
  { value: SubjectValue.DIVINITY, label: SubjectLabel.DIVINITY },
  { value: SubjectValue.PERSON, label: SubjectLabel.PERSON },
  { value: SubjectValue.PLACE, label: SubjectLabel.PLACE },
  { value: SubjectValue.TRIBE, label: SubjectLabel.TRIBE },
  { value: SubjectValue.WRITINGS, label: SubjectLabel.WRITINGS },
];
