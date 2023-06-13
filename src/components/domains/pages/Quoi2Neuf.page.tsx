import { useEffect, useState } from 'react'
import { stringifyMonthCode } from '../../../helpers/dates'
import { fetchQuoi2NeufStories } from '../../../helpers/storyblok'
import { wording } from '../../../wording/fr/main'
import PageHeader from '../../generics/PageHeader'
import PageSquare from '../../generics/PageSquare'
import { Quoi2NeufItemType } from '../../../types/storyblok'

const Quoi2NeufPage = (): JSX.Element => {
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
          const { title, subtitle, icon, pantheon, available, isFolder } = item

          return (
            <PageSquare
              key={idx}
              title={title}
              subtitle={subtitle}
              icon={icon}
              isFolder={isFolder}
              available={available}
              pantheon={pantheon}
            />
          )
        })}
      </div>
    </>
  )
}

export default Quoi2NeufPage
