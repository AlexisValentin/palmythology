import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";
import { COLUMNS_NUMBER, GRID } from "../../../types/styles/grid";
import { wording } from "../../../wording/fr/main";

const MainMenu = (): JSX.Element => {
  return (
    <nav
      className={`${GRID} grid-cols-${COLUMNS_NUMBER.TWO} border border-solid`}
    >
      <div className="grid justify-items-center py-2">
        <Link to={ROUTES.ROOT}>{wording.sections.home_title}</Link>
      </div>
      <div className="grid justify-items-center py-2">
        <Link to={ROUTES.RESEARCH}>{wording.sections.research_title}</Link>
      </div>
    </nav>
  );
};

export default MainMenu;
