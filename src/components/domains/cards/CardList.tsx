import { useCallback, useEffect, useState } from 'react'
import { setCardRouteParameters } from '../../../helpers/routes'
import { filterCards } from '../../../modules/searchEngine'
import {
  ResearchCriterias,
  TranslatedCardDetails,
} from '../../../types/cards/card'
import { PantheonLabel } from '../../../types/cards/pantheons'
import { BACKGROUND, TEXT } from '../../../types/styles/colors'
import { wording } from '../../../wording/fr/main'
import MoreIcon from '../../../assets/icons/more.svg'
import ForbiddenIcon from '../../../assets/icons/forbidden.svg'
import { getPantheonStyle } from '../../../helpers/colors'
import { getPantheonValueFromLabel } from '../../../helpers/dictionary'
import Pagination from '../../generics/Pagination'
import { STORYBLOK_RESULTS_PER_PAGE } from '../../../types/storyblok/storyblok'
import { isStringEmpty } from '../../../helpers/string'
import Link from 'next/link'
import Image from 'next/image'

const CardList: React.FC<ResearchCriterias> = ({
  pantheon,
  subject,
}): JSX.Element => {
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
  }, [pantheon, subject])

  useEffect(() => {
    if (!areFiltersUnfilled()) {
      filterCards(currentPage, searchCriterias)
        .then((cards) => {
          const { results, total } = cards
          setSearchResults(results)

          return total
        })
        .then((total) => setTotalResult(total))
    }
  }, [searchCriterias, currentPage, areFiltersUnfilled])

  const dynamiseColor = useCallback(
    (pantheon: PantheonLabel): string | undefined => {
      const pantheonValue = getPantheonValueFromLabel(pantheon)

      if (pantheonValue === null) return undefined

      const { backgroundColor, textColor } = getPantheonStyle(pantheonValue)

      return `${BACKGROUND}-${backgroundColor} ${TEXT}-${textColor}`
    },
    [],
  )

  return (
    <div className="text-center my-6">
      Total de {totalResult} résultats
      <table className="shadow-lg mt-6 max-w-xs">
        <thead>
          <tr className="bg-gray-900 text-gray-100">
            <th className="px-4">{wording.filter.name}</th>
            <th className="px-4">{wording.filter.pantheon}</th>
            <th className="px-4 hidden sm:block">{wording.filter.subject}</th>
            <th className="px-4">{wording.filter.details}</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((card: TranslatedCardDetails, idx: number) => {
            if (!card) return <tr key={idx}></tr>

            return (
              <tr className={`${dynamiseColor(card.pantheon)}`} key={idx}>
                <td className="px-4 py-2">{card.name}</td>
                <td className="px-4 py-2">{card.pantheon}</td>
                <td className="px-4 py-2 hidden sm:block">{card.subject}</td>
                <td className="py-2">
                  {card.available ? (
                    <Link
                      className="flex justify-center"
                      href={setCardRouteParameters(
                        card.name,
                        getPantheonValueFromLabel(card.pantheon) ?? '',
                      )}
                      target="_blank"
                    >
                      <Image
                        className={`${
                          card.pantheon === PantheonLabel.JAPANESE &&
                          `filter-dark-red`
                        } w-6`}
                        src={MoreIcon}
                        alt={`Plus de détails sur la fiche ${card.name}`}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ) : (
                    <div className="flex justify-center">
                      <Image
                        className={`${
                          card.pantheon === PantheonLabel.JAPANESE &&
                          `filter-dark-red`
                        } w-6`}
                        src={ForbiddenIcon}
                        alt={`La fiche ${card.name} n'est pas encore disponible`}
                        width={24}
                        height={24}
                      />
                    </div>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {totalResult > STORYBLOK_RESULTS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          nbPages={Math.floor(totalResult / STORYBLOK_RESULTS_PER_PAGE)}
        />
      )}
    </div>
  )
}

export default CardList
