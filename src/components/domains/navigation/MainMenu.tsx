import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/consts/routes";
import { GRID } from "../../../types/styles/grid";
import { wording } from "../../../wording/fr/main";
import { MainMenuLogoContainerStyled } from "./MainMenu.styled";

const MainMenu = (): JSX.Element => {
  const gridColumns = ROUTES.length;

  const isHomePage = (routeName: string) =>
    wording.sections.home_title === routeName;

  return (
    <nav className={`${GRID} grid-cols-${gridColumns} border border-solid`}>
      {ROUTES.map((route, idx) => {
        const { url, name, iconUrl } = route;

        return (
          <div
            className={`grid justify-items-center content-center py-3`}
            key={idx}
          >
            <Link to={url}>
              {isHomePage(name) ? (
                <MainMenuLogoContainerStyled>
                  <img src={iconUrl} width="40" alt="Logo de la Palmythology" />
                </MainMenuLogoContainerStyled>
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
