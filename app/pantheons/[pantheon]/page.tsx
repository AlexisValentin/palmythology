import React from 'react'

interface PantheonPagePropsType {
  params: { pantheon: string }
}

const PantheonPage: React.FC<PantheonPagePropsType> = ({ params }) => {
  const pantheon = params.pantheon

  return (
    <>
      <span>This is the card page</span>
      <ul>
        <li>Pantheon: {pantheon}</li>
        <li>Title: {pantheon}</li>
      </ul>
    </>
  )
}

export default PantheonPage
