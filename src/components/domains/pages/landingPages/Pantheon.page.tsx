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

  const { summary, relatedCards } = story.content

  return (
    <>
      <Meta title={`Panthéon ${params.pantheon}`} description={summary} />
      <PageHeader
        title={`Panthéon ${pantheonLabel?.toLowerCase()}`}
        subtitle={'Pantheon landing page'}
      />
      {summary && <Summary content={summary} />}
      {relatedCards && relatedCards.length > 0 && (
        <div className="flex flex-col mt-16">
          <div className="flex align-center justify-center">
            <h3 className="font-semibold">
              Les fiches les plus populaires du panthéon{' '}
              {pantheonLabel?.toLowerCase()}
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row mt-4">
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
