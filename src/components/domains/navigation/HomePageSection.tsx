import { wording } from "../../../wording/fr/main";
import {
  HomePageSectionContainer,
  HomePageSubSectionContainer,
  HomePageSubSectionDescription,
  HomePageSubSectionLogo,
  HomePageSubSectionTitle,
} from "./HomePageSection.styled";
import MagnifyingGlass from "../../../assets/magnifying_glass.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";

const HomePageSubSection = (): JSX.Element => (
  <Link to={ROUTES.RESEARCH}>
    <HomePageSectionContainer className="bg-gradient-to-r from-red-500 to-orange-500">
      <HomePageSubSectionContainer className="m-14">
        <HomePageSubSectionLogo src={MagnifyingGlass} alt="Magnifying glass" />
      </HomePageSubSectionContainer>
      <HomePageSubSectionContainer className="text-white m-14">
        <HomePageSubSectionTitle className="text-xl">
          {wording.sections.research_title}
        </HomePageSubSectionTitle>
        <HomePageSubSectionDescription className="mt-6">
          {wording.sections.research_description}
        </HomePageSubSectionDescription>
      </HomePageSubSectionContainer>
    </HomePageSectionContainer>
  </Link>
);

export default HomePageSubSection;
