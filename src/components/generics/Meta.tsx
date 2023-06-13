import { Helmet } from 'react-helmet-async'

type MetaProps = {
  title: string
  description: string
}

const Meta: React.FC<MetaProps> = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
)

export default Meta
