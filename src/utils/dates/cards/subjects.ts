import { SubjectLabel, SubjectValue } from "../../cards/subjects.constants";

export const getSubjectLabelFromValue = (
	subject: SubjectValue,
): SubjectLabel | null => {
	switch (subject) {
		case SubjectValue.DIVINITY:
			return SubjectLabel.DIVINITY;
		case SubjectValue.EVENT:
			return SubjectLabel.EVENT;
		case SubjectValue.MONSTER:
			return SubjectLabel.MONSTER;
		case SubjectValue.PERSON:
			return SubjectLabel.PERSON;
		case SubjectValue.PLACE:
			return SubjectLabel.PLACE;
		case SubjectValue.TRIBE:
			return SubjectLabel.TRIBE;
		case SubjectValue.WRITINGS:
			return SubjectLabel.WRITINGS;
		default:
			return null;
	}
};
