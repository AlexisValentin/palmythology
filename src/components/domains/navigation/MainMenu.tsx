import { Link } from 'react-router-dom'
import { ROUTES } from '../../../types/consts/routes'
import { wording } from '../../../wording/fr/main'
import { useCallback } from 'react'

const MainMenu = (): JSX.Element => {
  const isHomePage = useCallback((routeName: string) => {
    return wording.sections.home_title === routeName
  }, [])

  return (
    <nav
      className={`flex items-center justify-evenly border border-solid z-10 w-full px-6 sm:px-24 md:40 lg:px-56 xl:px-72 2xl:px-96`}
    >
      {ROUTES.map((route, idx) => {
        const { url, name, iconUrl } = route

        return (
          <div className={`justify-items-center content-center py-3`} key={idx}>
            <Link to={url}>
              {isHomePage(name) ? (
                <img
                  className="border-2 border-slate-500 rounded-full shadow-xl"
                  src={iconUrl}
                  width="40"
                  alt="Logo de la Palmythology"
                />
              ) : (
                <>
                  <div className="hidden md:block">{name}</div>
                  <div className="md:hidden block">
                    <img
                      className="filter-black"
                      src={iconUrl}
                      width="30"
                      alt={name}
                    />
                  </div>
                </>
              )}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}

export default MainMenu
