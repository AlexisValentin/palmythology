import { Metadata } from 'next'
import PageHeader from '../src/components/generics/PageHeader'
import { ROUTES } from '../src/utils/routes/routes.constants'
import { wording } from '../src/wording/fr/main'
import { SEO_WORDING } from '../src/wording/fr/seo'
import CardRandomizer from '../src/components/domains/cards/CardRandomizer'
import PageSquare, { CONTENT_TYPE } from '../src/components/generics/PageSquare'

export const metadata: Metadata = {
  title: SEO_WORDING.HOME.title,
  description: SEO_WORDING.HOME.description,
}

const HomePage = () => {
  return (
    <>
      <PageHeader
        title={wording.sections.home_title}
        subtitle={wording.sections.home_description}
      />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:mx-0 md:mt-16">
        {ROUTES.map((route) => {
          const { name, subtitle, url, icon } = route
          const { home_title } = wording.sections

          if (name === home_title) {
            return <div key={`section-${name}`} />
          }

          return (
            <PageSquare
              title={name}
              subtitle={subtitle}
              url={url}
              icon={icon.src}
              contentType={CONTENT_TYPE.ROUTE}
              key={`section-${name}`}
            />
          )
        })}
      </div>
      <CardRandomizer />
    </>
  )
}

export default HomePage
