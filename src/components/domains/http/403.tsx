import PageHeader from '../../generics/PageHeader'

interface NotFound404Props {
  hasFadingEffect?: boolean
}

const Forbidden403: React.FC<NotFound404Props> = ({
  hasFadingEffect = false,
}): JSX.Element => (
  <PageHeader
    title="On dirait qu'il y a comme un couac !"
    subtitle="Vous n'êtes pas autorisé à accéder à cette page"
    hasFadingEffect={hasFadingEffect}
  />
)

export default Forbidden403
