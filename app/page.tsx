import { Metadata } from 'next'
import PageHeader from '../src/components/generics/PageHeader'
import PageSection from '../src/components/generics/PageSection'
import { ROUTES } from '../src/helpers/routes/routes.const'
import { wording } from '../src/wording/fr/main'
import { SEO_WORDING } from '../src/wording/fr/seo'
import CardRandomizer from '../src/components/domains/cards/CardRandomizer'

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
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:block sm:mx-0 md:mt-16">
        {ROUTES.map((route) => {
          const { name, url, description, gradient, iconUrl } = route
          const { home_title } = wording.sections

          if (name === home_title) {
            return <div key={`section-${name}`} />
          }

          return (
            <div className="md:mb-8" key={`section-${name}`}>
              <PageSection
                name={name}
                url={url}
                description={description}
                gradient={gradient}
                iconUrl={iconUrl}
              />
            </div>
          )
        })}
      </div>
      <CardRandomizer />
    </>
  )
}

export default HomePage
