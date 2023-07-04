import { wording } from '../../../wording/fr/main'
import { SEO_WORDING } from '../../../wording/fr/seo'
import Meta from '../../generics/Meta'
import PageHeader from '../../generics/PageHeader'
import Filter from '../cards/Filter'

const SearchPage = (): JSX.Element => {
  return (
    <>
      <Meta
        title={SEO_WORDING.SEARCH.title}
        description={SEO_WORDING.SEARCH.description}
      />
      <PageHeader
        title={wording.sections.research_title}
        subtitle={wording.sections.research_description}
      />
      <Filter />
    </>
  )
}

export default SearchPage
