import React from 'react'
import { checkCredentials } from '../../src/modules/databaseLoader'

const UserAccountPage = async () => {
  const { username } = await checkCredentials('Palmypede', 'azerty123')

  if (!username) {
    return <>Vous n'êtes pas connecté</>
  }

  return <>Coucou {username}</>
}

export default UserAccountPage
