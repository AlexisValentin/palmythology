import { Helmet } from 'react-helmet-async'

type MetaProps = {
  title: string
  description: string
}

const Meta: React.FC<MetaProps> = ({ title, description }) => (
  <Helmet>
    <title>{`Palmythology | ${title}`}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </Helmet>
)

export default Meta
