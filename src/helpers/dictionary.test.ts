import { PantheonLabel, PantheonValue } from '../types/cards/pantheons'
import { SubjectLabel, SubjectValue } from '../types/cards/subjects'
import {
  getPantheonLabelFromValue,
  getPantheonValueFromLabel,
  getSubjectLabelFromValue,
} from './dictionary'

describe('helpers/dictionary', () => {
  describe('getPantheonLabelFromValue', () => {
    test('should return the related pantheon label when pantheon value is provided', () => {
      expect(getPantheonLabelFromValue(PantheonValue.AZTEC)).toEqual(
        PantheonLabel.AZTEC,
      )
      expect(getPantheonLabelFromValue(PantheonValue.CELTIC)).toEqual(
        PantheonLabel.CELTIC,
      )
      expect(getPantheonLabelFromValue(PantheonValue.CHINESE)).toEqual(
        PantheonLabel.CHINESE,
      )
      expect(getPantheonLabelFromValue(PantheonValue.EGYPTIAN)).toEqual(
        PantheonLabel.EGYPTIAN,
      )
      expect(getPantheonLabelFromValue(PantheonValue.GREEK)).toEqual(
        PantheonLabel.GREEK,
      )
      expect(getPantheonLabelFromValue(PantheonValue.HINDU)).toEqual(
        PantheonLabel.HINDU,
      )
      expect(getPantheonLabelFromValue(PantheonValue.JAPANESE)).toEqual(
        PantheonLabel.JAPANESE,
      )
      expect(getPantheonLabelFromValue(PantheonValue.MAYAN)).toEqual(
        PantheonLabel.MAYAN,
      )
      expect(getPantheonLabelFromValue(PantheonValue.NORSE)).toEqual(
        PantheonLabel.NORSE,
      )
      expect(getPantheonLabelFromValue(PantheonValue.ROMAN)).toEqual(
        PantheonLabel.ROMAN,
      )
    })
  })

  describe('getPantheonValueFromLabel', () => {
    test('should return the related pantheon value when pantheon label is provided', () => {
      expect(getPantheonValueFromLabel(PantheonLabel.AZTEC)).toEqual(
        PantheonValue.AZTEC,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.CELTIC)).toEqual(
        PantheonValue.CELTIC,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.CHINESE)).toEqual(
        PantheonValue.CHINESE,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.CHINESE)).toEqual(
        PantheonValue.CHINESE,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.EGYPTIAN)).toEqual(
        PantheonValue.EGYPTIAN,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.GREEK)).toEqual(
        PantheonValue.GREEK,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.HINDU)).toEqual(
        PantheonValue.HINDU,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.JAPANESE)).toEqual(
        PantheonValue.JAPANESE,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.MAYAN)).toEqual(
        PantheonValue.MAYAN,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.NORSE)).toEqual(
        PantheonValue.NORSE,
      )
      expect(getPantheonValueFromLabel(PantheonLabel.ROMAN)).toEqual(
        PantheonValue.ROMAN,
      )
    })
  })

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
