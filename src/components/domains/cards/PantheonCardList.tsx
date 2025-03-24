import { CardRelatedType } from '../../../utils/cms/cms.constants'
import PageSquare, { CONTENT_TYPE } from '../../generics/PageSquare'
import Summary from '../../generics/Summary'

const PantheonCardList = ({
  summary,
  relatedCards,
}: {
  summary: string
  relatedCards: CardRelatedType[]
}) => (
  <>
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

export default PantheonCardList
