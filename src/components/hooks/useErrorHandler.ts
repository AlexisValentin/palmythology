'use client'

import { useCallback } from 'react'

export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const useErrorHandler = (error: Error & { digest?: string }) => {
  const { message: errorMessage } = error
  const httpCode = Number(
    errorMessage.substring(errorMessage.length - 3, errorMessage.length),
  )

  const getCustomErrorMessage = useCallback(() => {
    switch (httpCode) {
      case 403:
        return `Vous n'avez malheureusement pas les droits d'accès à cette page.`
      case 404:
        return `Le contenu demandé est introuvable. Vous êtes-vous perdu ?`
      default:
        return `Une erreur inconnue est survenue. Le canard mène l'enquête...`
    }
  }, [httpCode])

  return {
    title: `On dirait qu'il y a comme un couac !`,
    subtitle: getCustomErrorMessage(),
    httpCode,
  }
}

export default useErrorHandler
