import PageHeader from '../../generics/PageHeader'

interface NotFound404Props {
  hasFadingEffect?: boolean
}

const NotFound404: React.FC<NotFound404Props> = ({
  hasFadingEffect = false,
}): JSX.Element => (
  <PageHeader
    title="On dirait qu'il y a comme un couac !"
    subtitle="La page demandée est introuvable"
    hasFadingEffect={hasFadingEffect}
  />
)

export default NotFound404
