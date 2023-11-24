import Meta from '../../src/components/generics/Meta'
import PageHeader from '../../src/components/generics/PageHeader'
import PageSquare, {
  CONTENT_TYPE,
} from '../../src/components/generics/PageSquare'
import { ALL_PANTHEON } from '../../src/types/cards/pantheons'
import { wording } from '../../src/wording/fr/main'
import { SEO_WORDING } from '../../src/wording/fr/seo'

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
        {ALL_PANTHEON.map((pantheon, idx) => (
          <PageSquare
            title={pantheon.label}
            pantheon={pantheon.value}
            key={idx}
            icon={{
              alt: `Icône du panthéon ${pantheon.label}`,
              filename: pantheon.icon,
            }}
            contentType={CONTENT_TYPE.PANTHEON}
          />
        ))}
      </div>
    </>
  )
}

export default PantheonsPage
