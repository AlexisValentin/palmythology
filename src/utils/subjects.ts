import { ALL_SUBJECT, type SubjectValue } from "./cards/subjects.constants";

export const getSubjectData = (subject: SubjectValue) =>
	ALL_SUBJECT.find(({ value }) => subject === value);

export const getSubjectIcon = (subjectValue: SubjectValue): string => {
	const subject = ALL_SUBJECT.find((s) => s.value === subjectValue);

	return subject?.icon || "";
};
