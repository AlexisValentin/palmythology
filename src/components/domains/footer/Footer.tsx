import Link from 'next/link'
import { ROUTE_URLS } from '../../../types/consts/routes'
import Copyrights from '../../generics/Copyrights'
import SocialNetworks from '../../generics/SocialNetworks'

const { version } = require('../../../../package.json')

const Footer = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 w-full text-white bg-black h-32 z-10 mt-auto px-6 md:px-20 xl:px-60">
      <div className="flex flex-col justify-center text-sm px-6">
        <Copyrights />
        <Link
          href={ROUTE_URLS.CHANGELOG}
          className="w-min hover:underline hover:text-pink-500 decoration-sky-500 underline-offset-4"
        >
          <span className="mt-1 text-xs italic">v{version}</span>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <SocialNetworks />
      </div>
    </div>
  )
}

export default Footer
