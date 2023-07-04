import { ROUTES } from '../../../types/consts/routes'
import { wording } from '../../../wording/fr/main'
import PageHeader from '../../generics/PageHeader'
import PageSection from '../../generics/PageSection'
import Meta from '../../generics/Meta'
import { SEO_WORDING } from '../../../wording/fr/seo'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Meta
        title={SEO_WORDING.HOME.title}
        description={SEO_WORDING.HOME.description}
      />
      <PageHeader
        title={wording.sections.home_title}
        subtitle={wording.sections.home_description}
      />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:block sm:mx-0">
        {ROUTES.map((route, idx) => {
          const { name, url, description, gradient, iconUrl } = route
          const { home_title } = wording.sections

          if (name === home_title) {
            return <></>
          }

          return (
            <PageSection
              key={idx}
              name={name}
              url={url}
              description={description}
              gradient={gradient}
              iconUrl={iconUrl}
            />
          )
        })}
      </div>
    </>
  )
}

export default HomePage
