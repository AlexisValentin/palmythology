import { wording } from '../../../wording/fr/main'
import PageHeader from '../../generics/PageHeader'
import Filter from '../cards/Filter'

const SearchPage = (): JSX.Element => {
  return (
    <>
      <PageHeader
        title={wording.sections.research_title}
        subtitle={wording.sections.research_description}
      />
      <Filter />
    </>
  )
}

export default SearchPage
