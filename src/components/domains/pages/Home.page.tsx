import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";
import { wording } from "../../../wording/fr/main";

export const Welcome: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-10 justify-items-center">
      <div className="link-button rounded-lg">
        <Link to={ROUTES.RESEARCH}>{wording.sections.research_title}</Link>
      </div>
      <div className="link-button rounded-lg">
        <Link to={ROUTES.ABOUT}>{wording.sections.about_title}</Link>
      </div>
    </div>
  );
};

export default Welcome;
