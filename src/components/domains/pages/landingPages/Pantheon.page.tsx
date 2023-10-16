import { useParams } from 'react-router-dom'
import Meta from '../../../generics/Meta'
import PageHeader from '../../../generics/PageHeader'
import Summary from '../../../generics/Summary'
import useScrollToTop from '../../../../hooks/ui/useScrollToTop'
import NotFound404 from '../../http/404'
import { getPantheonLabelFromValue } from '../../../../helpers/dictionary'
import { PantheonValue } from '../../../../types/cards/pantheons'

const PantheonLandingPage: React.FC = (): JSX.Element => {
  const params = useParams()

  useScrollToTop()

  const pantheonLabel = getPantheonLabelFromValue(
    params.pantheon! as PantheonValue,
  )

  if (!params.pantheon || !pantheonLabel)
    return <NotFound404 hasFadingEffect={true} />

  return (
    <>
      <Meta
        title={'Pantheon landing page'}
        description={'Pantheon landing page'}
      />
      <PageHeader
        title={`Panthéon ${pantheonLabel}`}
        subtitle={'Pantheon landing page'}
      />
      <Summary content={'Pantheon landing page summary'} />
    </>
  )
}

export default PantheonLandingPage
