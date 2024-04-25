import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import { ROUTES } from '../../../types/consts/routes'
import { wording } from '../../../wording/fr/main'

const MainMenu = (): JSX.Element => {
  const isHomePage = useCallback((routeName: string) => {
    return wording.sections.home_title === routeName
  }, [])

  return (
    <nav className="flex items-center justify-evenly sticky top-0 z-10 drop-shadow-md bg-neutral-100 w-full px-6 sm:px-24 md:40 lg:px-56 xl:px-72 2xl:px-96 min-h-16">
      {ROUTES.map((route) => {
        const { url, name, iconUrl } = route

        if (!url) return <div key={`section-${name}`} />

        return (
          <Link
            className="px-2 md:px-2 rounded-3xl hover:bg-neutral-300"
            href={url}
            key={`section-${name}`}
          >
            <div className="justify-items-center content-center py-3">
              {isHomePage(name) ? (
                <Image
                  className="rounded-full shadow-xl"
                  src={iconUrl}
                  alt="Logo de la Palmythology"
                  width={40}
                  height={40}
                />
              ) : (
                <>
                  <div className="hidden md:block">{name}</div>
                  <div className="md:hidden block">
                    <Image src={iconUrl} alt={name} width={40} height={40} />
                  </div>
                </>
              )}
            </div>
          </Link>
        )
      })}
    </nav>
  )
}

export default MainMenu
