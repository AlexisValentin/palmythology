import { getSubjectLabelFromValue } from './subjects'
import { SubjectLabel, SubjectValue } from './subjects.constants'

describe('utils/dictionary', () => {
  describe('getSubjectLabelFromValue', () => {
    test('should return the related subject label when subject value is provided', () => {
      expect(getSubjectLabelFromValue(SubjectValue.DIVINITY)).toEqual(
        SubjectLabel.DIVINITY,
      )
      expect(getSubjectLabelFromValue(SubjectValue.MONSTER)).toEqual(
        SubjectLabel.MONSTER,
      )
      expect(getSubjectLabelFromValue(SubjectValue.PERSON)).toEqual(
        SubjectLabel.PERSON,
      )
      expect(getSubjectLabelFromValue(SubjectValue.PLACE)).toEqual(
        SubjectLabel.PLACE,
      )
      expect(getSubjectLabelFromValue(SubjectValue.TRIBE)).toEqual(
        SubjectLabel.TRIBE,
      )
      expect(getSubjectLabelFromValue(SubjectValue.WRITINGS)).toEqual(
        SubjectLabel.WRITINGS,
      )
    })
  })
})
