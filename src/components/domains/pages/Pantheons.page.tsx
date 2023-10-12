import { ALL_PANTHEON } from '../../../types/cards/pantheons'
import { wording } from '../../../wording/fr/main'
import { SEO_WORDING } from '../../../wording/fr/seo'
import Meta from '../../generics/Meta'
import PageHeader from '../../generics/PageHeader'
import PageSquare from '../../generics/PageSquare'
import TextBlock, { IconSize } from '../../generics/TextBlock'

const PantheonsPage = (): JSX.Element => {
  return (
    <>
      <Meta
        title={SEO_WORDING.PANTHEONS.title}
        description={SEO_WORDING.PANTHEONS.description}
      />
      <PageHeader
        title={wording.sections.pantheon_title}
        subtitle={wording.sections.pantheon_description}
      />
      <div className="flex flex-col items-center justify-center flex-wrap md:flex-row mt-4">
        {ALL_PANTHEON.map((pantheon) => (
          <PageSquare
            title={pantheon.label}
            pantheon={pantheon.value}
            icon={{
              alt: `Icône du panthéon ${pantheon.label}`,
              filename: pantheon.icon,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default PantheonsPage
