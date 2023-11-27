'use client'

import React, { useEffect, useState } from 'react'
import { Quoi2NeufItemType } from '../../src/types/storyblok/storyblok'
import { stringifyMonthCode } from '../../src/helpers/dates'
import { fetchQuoi2NeufStories } from '../../src/helpers/storyblok'
import PageHeader from '../../src/components/generics/PageHeader'
import { wording } from '../../src/wording/fr/main'
import PageSquare, {
  CONTENT_TYPE,
} from '../../src/components/generics/PageSquare'

const Q2NPage: React.FC = () => {
  const [quoi2NeufItems, setQuoi2NeufItems] = useState<Quoi2NeufItemType[]>([])

  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const parsedDate = `${stringifyMonthCode(month)} ${year}`

  useEffect(() => {
    fetchQuoi2NeufStories().then((items) => {
      setQuoi2NeufItems(() => items)
    })
  }, [])

  return (
    <>
      <PageHeader
        title={`${wording.folders.quoi_2_neuf_title}`}
        subtitle={`${parsedDate}`}
      />
      <div className="flex items-center justify-center flex-wrap">
        {quoi2NeufItems.map((item, idx) => {
          const { title, subtitle, icon, pantheon, available } = item

          return (
            <PageSquare
              key={idx}
              title={title}
              subtitle={subtitle}
              icon={icon}
              available={available}
              pantheon={pantheon}
              contentType={CONTENT_TYPE.CARD}
            />
          )
        })}
      </div>
    </>
  )
}

export default Q2NPage
