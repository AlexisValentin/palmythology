export enum SubjectLabel {
	MONSTER = "Créature",
	DIVINITY = "Divinité",
	PERSON = "Personnage",
	PLACE = "Lieu",
	TRIBE = "Peuple",
	WRITINGS = "Écrits",
	EVENT = "Événement",
}

export enum SubjectValue {
	MONSTER = "monster",
	DIVINITY = "divinity",
	PERSON = "person",
	PLACE = "place",
	TRIBE = "tribe",
	WRITINGS = "writings",
	EVENT = "event",
}

export interface SubjectSelectType {
	value: SubjectValue;
	label: SubjectLabel;
	icon: string;
}

export const ALL_SUBJECT: SubjectSelectType[] = [
	{
		value: SubjectValue.DIVINITY,
		label: SubjectLabel.DIVINITY,
		icon: "https://a.storyblok.com/f/187414/683x683/9b6e2ecb6b/divinity.svg",
	},
	{
		value: SubjectValue.PERSON,
		label: SubjectLabel.PERSON,
		icon: "https://a.storyblok.com/f/187414/512x512/a664d2c65b/hero.svg",
	},
	{
		value: SubjectValue.TRIBE,
		label: SubjectLabel.TRIBE,
		icon: "https://a.storyblok.com/f/187414/512x512/b2ba0572af/tribe.svg",
	},
	{
		value: SubjectValue.MONSTER,
		label: SubjectLabel.MONSTER,
		icon: "https://a.storyblok.com/f/187414/150x150/0429ec0f8d/creature.svg",
	},
	{
		value: SubjectValue.PLACE,
		label: SubjectLabel.PLACE,
		icon: "https://a.storyblok.com/f/187414/150x150/5bef40d196/place.svg",
	},
	{
		value: SubjectValue.WRITINGS,
		label: SubjectLabel.WRITINGS,
		icon: "https://a.storyblok.com/f/187414/681x681/8500a52950/writing.svg",
	},
	{
		value: SubjectValue.EVENT,
		label: SubjectLabel.EVENT,
		icon: "https://a.storyblok.com/f/187414/683x683/d01b0a76e4/event.svg",
	},
];
