import React, { useCallback, useReducer, useState } from 'react'
import { checkCredentials } from '../../src/modules/databaseLoader'
import { userAccountFormReducer } from '../../src/reducers/formReducers'
import { userAccountFormInitialState } from '../../src/states/formStates'
import {
  SET_IDENTIFIER,
  SET_PASSWORD,
} from '../../src/actionTypes/formActionTypes'

const UserAccountPage = async () => {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [userAccountFormState, dispatch] = useReducer(
    userAccountFormReducer,
    userAccountFormInitialState,
  )

  const onSubmitHandler = useCallback(async () => {
    const { username } = await checkCredentials('Palmypede', 'azerty123')

    if (username) setIsConnected(true)
  }, [])

  if (!isConnected) {
    return (
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Identifiant ou mot de passe</label>
          <input
            type="text"
            name="identifier"
            onChange={(e) =>
              dispatch({ type: SET_IDENTIFIER, payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            onChange={(e) =>
              dispatch({ type: SET_PASSWORD, payload: e.target.value })
            }
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
    )
  }

  return <>Coucou vous êtes connecté</>
}

export default UserAccountPage
