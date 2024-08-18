'use client'

/* Libs */
import React from 'react'

/* Components */
import PageHeader from '../../../src/components/generics/PageHeader'
import PantheonList from '../../../src/components/domains/cards/PantheonList'

/* Hooks */
import useErrorHandler, {
  ErrorProps,
} from '../../../src/components/hooks/useErrorHandler'

const PantheonErrorPage: React.FC<ErrorProps> = ({ error }) => {
  const { title, subtitle } = useErrorHandler(error)

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <PantheonList />
    </>
  )
}

export default PantheonErrorPage
