'use client'

import React, { useState } from 'react'
import PageHeader from '../../src/components/generics/PageHeader'
import Input, { INPUT_TYPES } from '../../src/components/generics/Input'
import Button from '../../src/components/generics/Button'
import { checkCredentials } from '../../src/modules/databaseLoader'

const LoginPage = () => {
  const [login, setLogin] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [isFirstAttempt, setIsFirstAttempt] = useState<boolean>(true)

  return (
    <>
      {!isFirstAttempt && <div>FAIL</div>}
      <PageHeader title="Connexion" />
      <form>
        <Input
          label="Identifiant"
          type={INPUT_TYPES.TEXT}
          placeholder="Identifiant ou adresse mail"
          onChange={(e) => {
            setLogin(e.target.value)
          }}
        />
        <Input
          label="Mot de passe"
          type={INPUT_TYPES.PASSWORD}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <div className="mt-8">
          <Button
            label="Se connecter"
            onClick={async () => {
              if (!login || !password) {
                console.error('No credentials provided.')
              } else {
                const { username } = await checkCredentials(login!, password!)

                if (!username) {
                  setIsFirstAttempt(false)
                } else {
                  console.log('YOU ARE SUCCESSFULLY LOGGED IN !')
                }
              }
            }}
          />
        </div>
      </form>
    </>
  )
}

export default LoginPage
