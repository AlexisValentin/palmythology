import { Metadata } from 'next'
import Changelog from '../../src/components/generics/Changelog'
import { SEO_WORDING } from '../../src/wording/fr/seo'

export const metadata: Metadata = {
  title: SEO_WORDING.CHANGELOG.title,
  description: SEO_WORDING.CHANGELOG.description,
}

const AboutPage = async () => {
  return (
    <div className="mt-16">
      <Changelog />
    </div>
  )
}

export default AboutPage
