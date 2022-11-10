import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { SPACED_STRING } from "../../../types/form";
import { ROUTES } from "../../../types/routes";
import { COLUMNS_NUMBER, GRID } from "../../../types/styles/grid";
import { wording } from "../../../wording/fr/main";

export const MainMenu: FunctionComponent = () => {
  const navClassNames = [
    GRID,
    "justify-items-center",
    `grid-cols-${COLUMNS_NUMBER.THREE}`,
    "border",
    "border-solid",
  ].join(SPACED_STRING);

  return (
    <nav className={navClassNames}>
      <div className="grid justify-items-center py-2">
        <Link to={ROUTES.ROOT}>{wording.sections.home_title}</Link>
      </div>
      <div className="grid justify-items-center py-2">
        <Link to={ROUTES.RESEARCH}>{wording.sections.research_title}</Link>
      </div>
      <div className="grid justify-items-center py-2">
        <Link to={ROUTES.ABOUT}>{wording.sections.about_title}</Link>
      </div>
    </nav>
  );
};

export default MainMenu;
