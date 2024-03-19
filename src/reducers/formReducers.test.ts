import { SET_IDENTIFIER, SET_PASSWORD } from '../actionTypes/formActionTypes'
import { userAccountFormInitialState } from '../states/formStates'
import { userAccountFormReducer } from './formReducers'

describe('formReducers', () => {
  describe('userAccountFormReducer', () => {
    test(`should correctly update state on ${SET_IDENTIFIER} action type`, () =>
      expect(
        userAccountFormReducer(userAccountFormInitialState, {
          type: SET_IDENTIFIER,
          payload: 'palmypede',
        }),
      ).toEqual({ ...userAccountFormInitialState, identifier: 'palmypede' }))

    test(`should correctly update state on ${SET_PASSWORD} action type`, () =>
      expect(
        userAccountFormReducer(userAccountFormInitialState, {
          type: SET_PASSWORD,
          payload: 'azerty123',
        }),
      ).toEqual({ ...userAccountFormInitialState, password: 'azerty123' }))

    test(`should keep the same state on irrelevant action type`, () =>
      expect(
        userAccountFormReducer(userAccountFormInitialState, {
          type: 'FAKE_ACTION',
          payload: 'fakePayload',
        }),
      ).toEqual(userAccountFormInitialState))
  })
})
