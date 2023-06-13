import { useEffect, useState } from 'react'
import { setCardRouteParameters } from '../../../helpers/routes'
import { fetchQuEstCeQueCaFicheStories } from '../../../helpers/storyblok'
import { wording } from '../../../wording/fr/main'
import PageHeader from '../../generics/PageHeader'
import PageSection from '../../generics/PageSection'
import { QuestCeQueCaFicheItemType } from '../../../types/storyblok'
import { BLACK_COLOR, GradientType } from '../../../types/styles/colors'
import { getPantheonMainColor } from '../../../helpers/colors'
import { PantheonValue } from '../../../types/cards/pantheons'
import Meta from '../../generics/Meta'
import { SEO_WORDING } from '../../../wording/fr/seo'

const QuestCeQueCaFichePage = (): JSX.Element => {
  const [quEstCeQueCaFicheItems, setQuEstCeQueCaFicheItems] = useState<
    QuestCeQueCaFicheItemType[]
  >([])

  useEffect(() => {
    fetchQuEstCeQueCaFicheStories().then((items) => {
      setQuEstCeQueCaFicheItems(() => items)
    })
  }, [])

  return (
    <>
      <Meta
        title={SEO_WORDING.QQCF.title}
        description={SEO_WORDING.QQCF.description}
      />
      <PageHeader
        title={wording.folders.qu_est_ce_que_ca_fiche_title}
        subtitle={wording.folders.qu_est_ce_que_ca_fiche_description}
      />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:block sm:mx-0">
        {quEstCeQueCaFicheItems.map((item, idx) => {
          if (!item) return <div key={idx} />

          const { title, summary, icon, pantheon } = item
          const gradient: GradientType = {
            startingColor: BLACK_COLOR,
            endingColor: getPantheonMainColor(pantheon as PantheonValue),
          }

          return (
            <PageSection
              key={idx}
              name={title}
              description={summary}
              url={setCardRouteParameters(title, pantheon)}
              iconUrl={icon.filename}
              gradient={gradient}
            />
          )
        })}
      </div>
    </>
  )
}

export default QuestCeQueCaFichePage
