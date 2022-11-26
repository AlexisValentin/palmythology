import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";
import { GRID } from "../../../types/styles/grid";

const MainMenu = (): JSX.Element => {
  const gridColumns = ROUTES.length;

  return (
    <nav className={`${GRID} grid-cols-${gridColumns} border border-solid`}>
      {ROUTES.map((route, idx) => (
        <div className="grid justify-items-center py-3" key={idx}>
          <Link to={route.url}>{route.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default MainMenu;
