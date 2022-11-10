import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";
import { wording } from "../../../wording/fr/main";
import {
  HomePageMainContainer,
  HomePageSectionContainer,
} from "./HomePage.styled";

export const HomePage: FunctionComponent = () => {
  return (
    <HomePageMainContainer>
      <HomePageSectionContainer className="bg-gradient-to-r from-red-500 to-orange-500">
        <Link to={ROUTES.RESEARCH}>{wording.sections.research_title}</Link>
      </HomePageSectionContainer>
      <HomePageSectionContainer className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <Link to={ROUTES.ABOUT}>{wording.sections.about_title}</Link>
      </HomePageSectionContainer>
    </HomePageMainContainer>
  );
};

export default HomePage;
