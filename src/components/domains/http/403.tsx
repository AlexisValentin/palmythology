import PageHeader from '../../generics/PageHeader'

const Forbidden403: React.FC = (): JSX.Element => (
  <PageHeader
    title="On dirait qu'il y a comme un couac !"
    subtitle="Vous n'êtes pas autorisé à accéder à cette page"
  />
)

export default Forbidden403
