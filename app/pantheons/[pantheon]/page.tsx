'use client'

import { useStoryblok } from '@storyblok/react'
import PageHeader from '../../../src/components/generics/PageHeader'
import Summary from '../../../src/components/generics/Summary'
import NotFound404 from '../../../src/components/domains/http/404'
import { getPantheonLabelFromValue } from '../../../src/helpers/dictionary'
import { PantheonValue } from '../../../src/types/cards/pantheons'
import { getPantheonLandingPageSlut } from '../../../src/helpers/storyblok'
import { isObjectEmpty } from '../../../src/helpers/object'
import PageSquare, {
  CONTENT_TYPE,
} from '../../../src/components/generics/PageSquare'
import { CardRelatedType } from '../../../src/types/storyblok/storyblok'
import React from 'react'

interface PantheonPagePropsType {
  params: { pantheon: string }
}

const PantheonPage = ({ params }: PantheonPagePropsType) => {
  const pantheon = params.pantheon

  const story = useStoryblok(
    getPantheonLandingPageSlut(pantheon as PantheonValue),
    {
      version: 'published',
    },
  )

  const pantheonLabel = getPantheonLabelFromValue(
    params.pantheon! as PantheonValue,
  )

  if (isObjectEmpty(story)) return <NotFound404 />

  const { summary, relatedCards, metaDescription } = story.content

  return (
    <>
      <PageHeader title={`Panthéon ${pantheonLabel?.toLowerCase()}`} />
      {summary && <Summary content={summary} />}
      {relatedCards && relatedCards.length > 0 && (
        <div className="flex flex-col mt-2 xl:mt-0">
          <div className="flex flex-col justify-center lg:flex-wrap lg:flex-row mt-4">
            {relatedCards.map((card: CardRelatedType) => (
              <PageSquare
                key={`${card.name}-${card.subtitle}}`}
                title={card.name}
                subtitle={card.subtitle}
                pantheon={card.pantheon}
                icon={card.icon}
                contentType={CONTENT_TYPE.CARD}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default PantheonPage
