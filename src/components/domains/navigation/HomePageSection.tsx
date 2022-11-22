import { wording } from "../../../wording/fr/main";
import {
  HomePageMainTitleStyled,
  HomePageSectionContainer,
  HomePageSubSectionContainer,
  HomePageSubSectionLogo,
} from "./HomePageSection.styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";
import { BACKGROUND, GRADIENT } from "../../../types/styles/colors";

const HomePageSection = (): JSX.Element => (
  <>
    {ROUTES.map((route, idx) => {
      const { name, url, description, gradient, iconUrl } = route;
      const { home_title } = wording.sections;

      if (name === home_title)
        return (
          <HomePageMainTitleStyled
            key={idx}
            className="text-2xl font-bold p-10"
          >
            {description}
          </HomePageMainTitleStyled>
        );

      return (
        <Link to={url} key={idx}>
          <HomePageSectionContainer
            className={`${BACKGROUND}-${GRADIENT}-to-r from-${gradient?.startingColor} to-${gradient?.endingColor}`}
          >
            <HomePageSubSectionContainer className="m-14">
              <HomePageSubSectionLogo src={iconUrl} alt="Magnifying glass" />
            </HomePageSubSectionContainer>
            <HomePageSubSectionContainer className="text-white m-14">
              <h2 className="font-semibold text-xl">{name}</h2>
              <div className="font-medium mt-6">{description}</div>
            </HomePageSubSectionContainer>
          </HomePageSectionContainer>
        </Link>
      );
    })}
  </>
);

export default HomePageSection;
