import { setCardRouteParameters, setNewsRouteParameters } from './routes'
import { parseStringToSlug } from './string'

vi.mock('./string')

describe('helpers/route', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('setCardRouteParameters', () => {
    test('should call `parseStringToSlug` method', () => {
      const replaceSpy = vi.spyOn(String.prototype, 'replace')

      setCardRouteParameters('Jupiter', 'Roman')
      expect(replaceSpy).toHaveBeenCalledTimes(2)
      expect(parseStringToSlug).toHaveBeenCalledTimes(1)
      expect(parseStringToSlug).toHaveBeenCalledWith('jupiter')
    })
  })

  describe('setNewsRouteParameters', () => {
    test('should call `parseStringToSlug` method', () => {
      const replaceSpy = vi.spyOn(String.prototype, 'replace')

      setNewsRouteParameters('Le guide de la Palmythology')
      expect(replaceSpy).toHaveBeenCalledTimes(1)
      expect(parseStringToSlug).toHaveBeenCalledTimes(1)
      expect(parseStringToSlug).toHaveBeenCalledWith(
        'le guide de la palmythology',
      )
    })
  })
})
