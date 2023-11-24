import Head from 'next/head'

type MetaProps = {
  title: string
  description: string
}

const Meta: React.FC<MetaProps> = ({ title, description }) => (
  <Head>
    <title>{`Palmythology | ${title}`}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  </Head>
)

export default Meta
