export enum GenreLabel {
	MALE = "Masculin",
	FEMALE = "Féminin",
	ANDROGYNOUS = "Androgyne",
	UNDEFINED = "Non défini",
	NOT_APPLICABLE = "/",
}

export enum GenreValue {
	MALE = "male",
	FEMALE = "female",
	ANDROGYNOUS = "androgynous",
	UNDEFINED = "undefined",
	NOT_APPLICABLE = "/",
}

export interface GenreSelectType {
	value: GenreValue;
	label: GenreLabel;
}

export const ALL_GENRE: GenreSelectType[] = [
	{
		value: GenreValue.MALE,
		label: GenreLabel.MALE,
	},
	{
		value: GenreValue.FEMALE,
		label: GenreLabel.FEMALE,
	},
	{
		value: GenreValue.ANDROGYNOUS,
		label: GenreLabel.ANDROGYNOUS,
	},
	{
		value: GenreValue.UNDEFINED,
		label: GenreLabel.UNDEFINED,
	},
];
