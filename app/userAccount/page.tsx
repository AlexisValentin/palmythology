import React, { useCallback, useReducer, useState } from 'react'
import { selectUsersWithPassword } from '../../src/modules/databaseLoader'

const SET_IDENTIFIER = 'SET_IDENTIFIER'
const SET_PASSWORD = 'SET_PASSWORD'

const formReducer = (state, action: { type: string; payload: string }) => {
  switch (action.type) {
    case SET_IDENTIFIER:
      return { ...state, identifier: action.payload }
    case SET_PASSWORD:
      return { ...state, password: action.payload }
  }
}

const initialFormState = { identifier: '', password: '' }

const UserAccountPage = async () => {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  const checkCredentials = useCallback(async () => {
    const { username } = await selectUsersWithPassword('Palmypede', 'azerty123')

    if (username) setIsConnected(true)
  }, [])

  if (!isConnected) {
    return (
      <form onSubmit=s{checkCredentials}>
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
