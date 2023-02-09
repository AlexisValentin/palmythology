import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/consts/routes";
import { wording } from "../../../wording/fr/main";

const MainMenu = (): JSX.Element => {
  const gridColumns = ROUTES.length;

  const isHomePage = (routeName: string) =>
    wording.sections.home_title === routeName;

  return (
    <nav className={`grid grid-cols-${gridColumns} border border-solid`}>
      {ROUTES.map((route, idx) => {
        const { url, name, iconUrl } = route;

        return (
          <div
            className={`grid justify-items-center content-center py-3`}
            key={idx}
          >
            <Link to={url}>
              {isHomePage(name) ? (
                <div className="border border-transparent rounded-3xl shadow-xl">
                  <img src={iconUrl} width="40" alt="Logo de la Palmythology" />
                </div>
              ) : (
                name
              )}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default MainMenu;
