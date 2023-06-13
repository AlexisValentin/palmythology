import { isEven, isOdd } from './number'

describe('helpers/number', () => {
  describe('isEven', () => {
    test('should return `true` for even numbers', () => {
      for (let i = 0; i <= 10; i = i + 2) {
        expect(isEven(i)).toEqual(true)
      }
    })

    test('should return `false` for odd numbers', () => {
      for (let i = 1; i <= 10; i = i + 2) {
        expect(isEven(i)).toEqual(false)
      }
    })
  })

  describe('isOdd', () => {
    test('should return `true` for odd numbers', () => {
      for (let i = 1; i <= 10; i = i + 2) {
        expect(isOdd(i)).toEqual(true)
      }
    })

    test('should return `false` for even numbers', () => {
      for (let i = 0; i <= 10; i = i + 2) {
        expect(isOdd(i)).toEqual(false)
      }
    })
  })
})
