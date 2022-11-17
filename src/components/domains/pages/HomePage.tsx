import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";
import { wording } from "../../../wording/fr/main";
import {
  HomePageMainContainer,
  HomePageSectionContainer,
} from "./HomePage.styled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageMainContainer>
      <HomePageSectionContainer className="bg-gradient-to-r from-red-500 to-orange-500">
        <Link to={ROUTES.RESEARCH}>{wording.sections.research_title}</Link>
      </HomePageSectionContainer>
    </HomePageMainContainer>
  );
};

export default HomePage;
