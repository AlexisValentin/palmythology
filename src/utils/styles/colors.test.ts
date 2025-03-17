import { PantheonValue } from '../cards/pantheons.constants'
import {
  getPantheonMainColor,
  getPantheonStyle,
  getPantheonTextColor,
  getSummaryBackgroundColor,
  hasSpecialTextColor,
} from './colors'

describe('utils/colors', () => {
  describe('getPantheonStyle', () => {
    test('should return correct color properties for each of the 10 pantheons', () => {
      expect(getPantheonStyle(PantheonValue.AZTEC)).toEqual({
        backgroundColor: 'orange-700',
        textColor: 'neutral-100',
      })
      expect(getPantheonStyle(PantheonValue.CELTIC)).toEqual({
        backgroundColor: 'emerald-700',
        textColor: 'neutral-100',
      })
      expect(getPantheonStyle(PantheonValue.CHINESE)).toEqual({
        backgroundColor: 'red-700',
        textColor: 'neutral-100',
      })
      expect(getPantheonStyle(PantheonValue.EGYPTIAN)).toEqual({
        backgroundColor: 'amber-400',
        textColor: 'neutral-900',
      })
      expect(getPantheonStyle(PantheonValue.GREEK)).toEqual({
        backgroundColor: 'blue-700',
        textColor: 'neutral-100',
      })
      expect(getPantheonStyle(PantheonValue.HINDU)).toEqual({
        backgroundColor: 'amber-500',
        textColor: 'emerald-900',
      })
      expect(getPantheonStyle(PantheonValue.JAPANESE)).toEqual({
        backgroundColor: 'neutral-300',
        textColor: 'red-800',
      })
      expect(getPantheonStyle(PantheonValue.MAYAN)).toEqual({
        backgroundColor: 'violet-800',
        textColor: 'neutral-100',
      })
      expect(getPantheonStyle(PantheonValue.MESOPOTAMIAN)).toEqual({
        backgroundColor: 'pink-500',
        textColor: 'neutral-100',
      })
      expect(getPantheonStyle(PantheonValue.NORSE)).toEqual({
        backgroundColor: 'sky-500',
        textColor: 'neutral-100',
      })
      expect(getPantheonStyle(PantheonValue.ROMAN)).toEqual({
        backgroundColor: 'red-900',
        textColor: 'amber-500',
      })
    })
  })

  describe('getSummaryBackgroundColor', () => {
    test('should return default summary background color', () => {
      expect(getSummaryBackgroundColor()).toEqual('bg-neutral-200')
    })
  })

  describe('getPantheonMainColor', () => {
    test('should return correct pantheon main color properties for each of the 10 pantheons', () => {
      expect(getPantheonMainColor(PantheonValue.AZTEC)).toEqual('orange-700')
      expect(getPantheonMainColor(PantheonValue.CELTIC)).toEqual('emerald-700')
      expect(getPantheonMainColor(PantheonValue.CHINESE)).toEqual('red-700')
      expect(getPantheonMainColor(PantheonValue.EGYPTIAN)).toEqual('amber-400')
      expect(getPantheonMainColor(PantheonValue.GREEK)).toEqual('blue-700')
      expect(getPantheonMainColor(PantheonValue.HINDU)).toEqual('amber-500')
      expect(getPantheonMainColor(PantheonValue.JAPANESE)).toEqual(
        'neutral-300',
      )
      expect(getPantheonMainColor(PantheonValue.MAYAN)).toEqual('violet-800')
      expect(getPantheonMainColor(PantheonValue.MESOPOTAMIAN)).toEqual(
        'pink-500',
      )
      expect(getPantheonMainColor(PantheonValue.NORSE)).toEqual('sky-500')
      expect(getPantheonMainColor(PantheonValue.ROMAN)).toEqual('red-900')
    })
  })

  describe('getPantheonTextColor', () => {
    test('should return correct pantheon text color properties for each of the 10 pantheons', () => {
      expect(getPantheonTextColor(PantheonValue.AZTEC)).toEqual('neutral-100')
      expect(getPantheonTextColor(PantheonValue.CELTIC)).toEqual('neutral-100')
      expect(getPantheonTextColor(PantheonValue.CHINESE)).toEqual('neutral-100')
      expect(getPantheonTextColor(PantheonValue.EGYPTIAN)).toEqual(
        'neutral-900',
      )
      expect(getPantheonTextColor(PantheonValue.GREEK)).toEqual('neutral-100')
      expect(getPantheonTextColor(PantheonValue.HINDU)).toEqual('emerald-900')
      expect(getPantheonTextColor(PantheonValue.JAPANESE)).toEqual('red-800')
      expect(getPantheonTextColor(PantheonValue.MAYAN)).toEqual('neutral-100')
      expect(getPantheonTextColor(PantheonValue.MESOPOTAMIAN)).toEqual(
        'neutral-100',
      )
      expect(getPantheonTextColor(PantheonValue.NORSE)).toEqual('neutral-100')
      expect(getPantheonTextColor(PantheonValue.ROMAN)).toEqual('amber-500')
    })
  })

  describe('hasSpecialTextColor', () => {
    test(`should return 'true' for ${PantheonValue.HINDU}, ${PantheonValue.JAPANESE} and ${PantheonValue.ROMAN} pantheons`, () => {
      expect(hasSpecialTextColor(PantheonValue.HINDU)).toEqual(true)
      expect(hasSpecialTextColor(PantheonValue.JAPANESE)).toEqual(true)
      expect(hasSpecialTextColor(PantheonValue.ROMAN)).toEqual(true)
    })

    test(`should return 'false' for other pantheons than ${PantheonValue.HINDU}, ${PantheonValue.JAPANESE} and ${PantheonValue.ROMAN}`, () => {
      expect(hasSpecialTextColor(PantheonValue.AZTEC)).toEqual(false)
      expect(hasSpecialTextColor(PantheonValue.CELTIC)).toEqual(false)
      expect(hasSpecialTextColor(PantheonValue.CHINESE)).toEqual(false)
      expect(hasSpecialTextColor(PantheonValue.EGYPTIAN)).toEqual(true)
      expect(hasSpecialTextColor(PantheonValue.GREEK)).toEqual(false)
      expect(hasSpecialTextColor(PantheonValue.MAYAN)).toEqual(false)
      expect(hasSpecialTextColor(PantheonValue.NORSE)).toEqual(false)
    })
  })
})
