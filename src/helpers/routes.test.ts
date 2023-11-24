import { setCardRouteParameters } from './routes'
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
})
