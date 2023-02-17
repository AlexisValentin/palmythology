import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/consts/routes";
import { wording } from "../../../wording/fr/main";

const MainMenu = (): JSX.Element => {
  const gridColumns = ROUTES.length;

  const isHomePage = (routeName: string) =>
    wording.sections.home_title === routeName;

  return (
    <nav
      className={`grid grid-cols-${gridColumns} border border-solid z-10 w-full px-6 md:px-20 xl:px-60`}
    >
      {ROUTES.map((route, idx) => {
        const { url, name, iconUrl } = route;

        return (
          <div
            className={`grid justify-items-center content-center py-3`}
            key={idx}
          >
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
        );
      })}
    </nav>
  );
};

export default MainMenu;
