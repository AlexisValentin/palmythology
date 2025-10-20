import { MONTH_LABEL_TYPE, MONTH_VALUE_TYPE } from "../dates/dates.constants";
import { SubjectLabel, SubjectValue } from "./subjects.constants";

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

export const getMonthValueFromLabel = (
	month: MONTH_LABEL_TYPE,
): MONTH_VALUE_TYPE | null => {
	switch (month) {
		case MONTH_LABEL_TYPE.JANUARY:
			return MONTH_VALUE_TYPE.JANUARY;
		case MONTH_LABEL_TYPE.FEBRUARY:
			return MONTH_VALUE_TYPE.FEBRUARY;
		case MONTH_LABEL_TYPE.MARCH:
			return MONTH_VALUE_TYPE.MARCH;
		case MONTH_LABEL_TYPE.APRIL:
			return MONTH_VALUE_TYPE.APRIL;
		case MONTH_LABEL_TYPE.MAY:
			return MONTH_VALUE_TYPE.MAY;
		case MONTH_LABEL_TYPE.JUNE:
			return MONTH_VALUE_TYPE.JUNE;
		case MONTH_LABEL_TYPE.JULY:
			return MONTH_VALUE_TYPE.JULY;
		case MONTH_LABEL_TYPE.AUGUST:
			return MONTH_VALUE_TYPE.AUGUST;
		case MONTH_LABEL_TYPE.SEPTEMBER:
			return MONTH_VALUE_TYPE.SEPTEMBER;
		case MONTH_LABEL_TYPE.OCTOBER:
			return MONTH_VALUE_TYPE.OCTOBER;
		case MONTH_LABEL_TYPE.NOVEMBER:
			return MONTH_VALUE_TYPE.NOVEMBER;
		case MONTH_LABEL_TYPE.DECEMBER:
			return MONTH_VALUE_TYPE.DECEMBER;
		default:
			return null;
	}
};
