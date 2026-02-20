import { GenreLabel, GenreValue } from "./genres.constants";

export const getGenreLabelFromValue = (
	genre: GenreValue,
): GenreLabel | null => {
	switch (genre) {
		case GenreValue.MALE:
			return GenreLabel.MALE;
		case GenreValue.FEMALE:
			return GenreLabel.FEMALE;
		case GenreValue.ANDROGYNOUS:
			return GenreLabel.ANDROGYNOUS;
		case GenreValue.UNDEFINED:
			return GenreLabel.UNDEFINED;
		case GenreValue.NOT_APPLICABLE:
			return GenreLabel.NOT_APPLICABLE;
		default:
			return null;
	}
};

export const getGenreValueFromLabel = (
	genre: GenreLabel,
): GenreValue | null => {
	switch (genre) {
		case GenreLabel.MALE:
			return GenreValue.MALE;
		case GenreLabel.FEMALE:
			return GenreValue.FEMALE;
		case GenreLabel.ANDROGYNOUS:
			return GenreValue.ANDROGYNOUS;
		case GenreLabel.UNDEFINED:
			return GenreValue.UNDEFINED;
		case GenreLabel.NOT_APPLICABLE:
			return GenreValue.NOT_APPLICABLE;
		default:
			return null;
	}
};
