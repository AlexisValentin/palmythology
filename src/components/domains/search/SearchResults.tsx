'use client'

import { useCallback, useEffect, useState } from 'react'
import { filterCards, getPlaceholderCards } from '../../../modules/searchEngine'
import {
  ResearchCriterias,
  TranslatedCardDetails,
} from '../../../utils/cards/card.constants'
import Pagination from '../../generics/Pagination'
import { STORYBLOK_RESULTS_PER_PAGE } from '../../../utils/cms/cms.constants'
import { isStringEmpty } from '../../../utils/string'
import PageSquare, { CONTENT_TYPE } from '../../generics/PageSquare'
import { getPantheonValueFromLabel } from '../../../utils/cards/pantheons'

const SearchResults: React.FC<ResearchCriterias> = ({ pantheon, subject }) => {
  const [searchCriterias, setSearchCriterias] = useState<ResearchCriterias>({
    pantheon: '',
    subject: '',
  })
  const [searchResults, setSearchResults] = useState<TranslatedCardDetails[]>(
    [],
  )
  const [totalResult, setTotalResult] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const areFiltersUnfilled = useCallback(
    () =>
      isStringEmpty(searchCriterias.pantheon) &&
      isStringEmpty(searchCriterias.subject),
    [searchCriterias],
  )

  useEffect(() => {
    setSearchCriterias({ pantheon, subject })
    setCurrentPage(1)
  }, [pantheon, subject])

  useEffect(() => {
    const updateResultData = async () => {
      if (areFiltersUnfilled()) {
        const cards = await getPlaceholderCards()

        const { results } = cards
        setSearchResults(results)
      } else {
        const cards = await filterCards(currentPage, searchCriterias)

        const { results, total } = cards
        setSearchResults(results)

        setTotalResult(total)
      }
    }

    updateResultData()
  }, [searchCriterias, currentPage, areFiltersUnfilled])

  return (
    <div className="mt-12">
      {areFiltersUnfilled() && (
        <h2 className="flex justify-center text-xl font-bold mb-8">
          Les fiches récentes
        </h2>
      )}
      <div className="flex items-center justify-center flex-wrap">
        {searchResults.map((card: TranslatedCardDetails) => {
          const { name, subtitle, pantheon, icon } = card

          if (!icon) return <></>

          return (
            <PageSquare
              key={`${pantheon}-${name}`}
              title={name}
              subtitle={subtitle}
              pantheon={getPantheonValueFromLabel(pantheon)!}
              icon={icon}
              contentType={CONTENT_TYPE.CARD}
            />
          )
        })}
      </div>
      {totalResult > STORYBLOK_RESULTS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          nbPages={Math.ceil(totalResult / STORYBLOK_RESULTS_PER_PAGE)}
        />
      )}
    </div>
  )
}

export default SearchResults
