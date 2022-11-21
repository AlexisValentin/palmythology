import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";
import { COLUMNS_NUMBER, GRID } from "../../../types/styles/grid";

const MainMenu = (): JSX.Element => {
  return (
    <nav
      className={`${GRID} grid-cols-${COLUMNS_NUMBER.TWO} border border-solid`}
    >
      {ROUTES.map((route, idx) => (
        <div className="grid justify-items-center py-3" key={idx}>
          <Link to={route.url}>{route.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default MainMenu;
