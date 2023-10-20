import { useParams } from 'react-router-dom'
import Meta from '../../../generics/Meta'
import PageHeader from '../../../generics/PageHeader'
import Summary from '../../../generics/Summary'
import useScrollToTop from '../../../../hooks/ui/useScrollToTop'
import NotFound404 from '../../http/404'
import { getPantheonLabelFromValue } from '../../../../helpers/dictionary'
import { PantheonValue } from '../../../../types/cards/pantheons'
import { useStoryblok } from '@storyblok/react'
import { getPantheonLandingPageSlut } from '../../../../helpers/storyblok'
import { isObjectEmpty } from '../../../../helpers/object'
import PageSquare, { CONTENT_TYPE } from '../../../generics/PageSquare'
import { CardRelatedType } from '../../../../types/storyblok/storyblok'

const PantheonLandingPage: React.FC = (): JSX.Element => {
  const params = useParams()
  const story = useStoryblok(
    getPantheonLandingPageSlut(params.pantheon as PantheonValue),
    {
      version: 'published',
    },
  )

  useScrollToTop()

  const pantheonLabel = getPantheonLabelFromValue(
    params.pantheon! as PantheonValue,
  )

  if (isObjectEmpty(story)) return <NotFound404 hasFadingEffect={true} />

  const { summary, relatedCards, metaDescription } = story.content

  return (
    <>
      <Meta
        title={`Panthéon ${params.pantheon}`}
        description={metaDescription}
      />
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

export default PantheonLandingPage
