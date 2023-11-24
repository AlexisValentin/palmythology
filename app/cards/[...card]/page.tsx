import React from 'react'

interface CardPagePropsType {
  params: { card: string[] }
}

const CardPage: React.FC<CardPagePropsType> = ({ params }) => {
  const pantheon = params.card[0]
  const title = params.card[1]

  return (
    <>
      <span>This is the card page</span>
      <ul>
        <li>Pantheon: {pantheon}</li>
        <li>Title: {title}</li>
      </ul>
    </>
  )
}

export default CardPage
