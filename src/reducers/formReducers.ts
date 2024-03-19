import { SET_IDENTIFIER, SET_PASSWORD } from '../actionTypes/formActionTypes'

export const userAccountFormReducer = (
  state: {
    identifier: string
    password: string
  },
  action: { type: string; payload: string },
) => {
  const { type, payload } = action

  switch (type) {
    case SET_IDENTIFIER:
      return { ...state, identifier: payload }
    case SET_PASSWORD:
      return { ...state, password: payload }
    default:
      console.error(
        `[React] Error -> Provided action "${type}" does not match.`,
      )
      return state
  }
}
