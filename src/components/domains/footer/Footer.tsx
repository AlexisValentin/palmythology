import Copyrights from '../../generics/Copyrights'
import SocialNetworks from '../../generics/SocialNetworks'

const Footer = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 fixed bottom-0 w-full text-white bg-black h-14 z-10 mt-20 px-6 sm:h-16 md:h-20 md:px-20 lg:h-24 xl:px-60">
      <div className="flex items-center justify-center text-sm px-6">
        <Copyrights />
      </div>
      <div className="flex items-center justify-center">
        <SocialNetworks />
      </div>
    </div>
  )
}

export default Footer
