import { ALL_SUBJECT, SubjectValue } from '../types/cards/subjects'

export const getSubjectData = (subject: SubjectValue) =>
  ALL_SUBJECT.find(({ value }) => subject === value)
