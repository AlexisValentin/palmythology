import { ALL_SUBJECT, type SubjectValue } from "./cards/subjects.constants";

export const getSubjectData = (subject: SubjectValue) =>
	ALL_SUBJECT.find(({ value }) => subject === value);
