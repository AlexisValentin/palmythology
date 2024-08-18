'use client'

/* Libs */
import React from 'react'

/* Components */
import PageHeader from '../../../src/components/generics/PageHeader'
import SubjectList from '../../../src/components/domains/cards/SubjectList'

/* Hooks */
import useErrorHandler, {
  ErrorProps,
} from '../../../src/components/hooks/useErrorHandler'

const SubjectErrorPage: React.FC<ErrorProps> = ({ error }) => {
  const { title, subtitle } = useErrorHandler(error)

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <SubjectList />
    </>
  )
}

export default SubjectErrorPage
