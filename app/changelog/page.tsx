import { Metadata } from 'next'
import Changelog from '../../src/components/generics/Changelog'

export const metadata: Metadata = {
  title: 'Notes de version | Palmythology',
  description: `Retrouvez les derniers changements de la dernière version le site web de la Palmtyhology.`,
}

const AboutPage = async () => (
  <div className="mt-16">
    <Changelog />
  </div>
)

export default AboutPage
