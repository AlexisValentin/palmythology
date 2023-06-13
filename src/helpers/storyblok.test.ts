import { getCardSlug, getNewsSlug } from './storyblok'
import { parseStringToSlug } from './string'

vi.mock('./string')

describe('helpers/storyblok', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('getCardSlug', () => {
    beforeEach(() => {
      vi.mocked(parseStringToSlug).mockReturnValueOnce('grec')
      vi.mocked(parseStringToSlug).mockReturnValueOnce('zeus')
    })

    test('should call `parseStringToSlug` twice', () => {
      getCardSlug('zeus', 'grec')

      expect(parseStringToSlug).toHaveBeenCalledTimes(2)
      expect(parseStringToSlug).toHaveBeenNthCalledWith(1, 'grec')
      expect(parseStringToSlug).toHaveBeenNthCalledWith(2, 'zeus')
    })

    test('should provide card slug', () =>
      expect(getCardSlug('zeus', 'grec')).toEqual('cards/grec/zeus'))
  })

  describe('getNewsSlug', () => {
    beforeEach(() => {
      vi.mocked(parseStringToSlug).mockReturnValueOnce(
        'le-guide-de-la-palmythology',
      )
    })

    test('should call `parseStringToSlug` once', () => {
      getNewsSlug('Le guide de la Palmythology')

      expect(parseStringToSlug).toHaveBeenCalledTimes(1)
      expect(parseStringToSlug).toHaveBeenCalledWith(
        'Le guide de la Palmythology',
      )
    })

    test('should provide card slug', () =>
      expect(getNewsSlug('Le guide de la Palmythology')).toEqual(
        'news/le-guide-de-la-palmythology',
      ))
  })
})
