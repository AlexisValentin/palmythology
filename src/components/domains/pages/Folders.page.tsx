import { FOLDERS } from '../../../types/consts/folders'
import { wording } from '../../../wording/fr/main'
import { SEO_WORDING } from '../../../wording/fr/seo'
import Meta from '../../generics/Meta'
import PageHeader from '../../generics/PageHeader'
import PageSection from '../../generics/PageSection'

const FoldersPage = (): JSX.Element => {
  return (
    <>
      <Meta
        title={SEO_WORDING.FOLDERS.title}
        description={SEO_WORDING.FOLDERS.description}
      />
      <PageHeader
        title={wording.sections.folders_title}
        subtitle={wording.sections.folders_description}
      />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:block sm:mx-0">
        {FOLDERS.map((route, idx) => {
          const { name, url, description, gradient, iconUrl } = route
          const { home_title } = wording.sections

          if (name === home_title) return <></>

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

export default FoldersPage
