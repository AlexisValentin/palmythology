import { Quoi2NeufStoryType } from '../../../types/storyblok/storyblok'
import PageSquare, { CONTENT_TYPE } from '../../generics/PageSquare'

const Q2NItemList = ({
  quoi2NeufStories,
}: {
  quoi2NeufStories: Quoi2NeufStoryType[]
}) => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {quoi2NeufStories.map((item, idx) => {
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
  )
}

export default Q2NItemList
