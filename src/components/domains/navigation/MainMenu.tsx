import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/consts/routes";
import { wording } from "../../../wording/fr/main";

const MainMenu = (): JSX.Element => {
  const gridColumns = ROUTES.length;

  const isHomePage = (routeName: string) =>
    wording.sections.home_title === routeName;

  return (
    <nav className={`grid grid-cols-${gridColumns} border border-solid z-10`}>
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
