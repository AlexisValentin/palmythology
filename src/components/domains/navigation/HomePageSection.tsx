import { wording } from "../../../wording/fr/main";
import {
  HomePageMainTitleStyled,
  HomePageSectionContainerStyled,
  HomePageSubSectionLogoStyled,
  HomePageSubSectionTextContainerStyled,
  HomePageSubSectionTextStyled,
} from "./HomePageSection.styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../types/routes";
import { BACKGROUND, GRADIENT } from "../../../types/styles/colors";

const HomePageSection = (): JSX.Element => (
  <>
    {ROUTES.map((route, idx) => {
      const { name, url, description, gradient, iconUrl } = route;
      const { home_title } = wording.sections;

      if (name === home_title) {
        return (
          <HomePageMainTitleStyled
            key={idx}
            className="text-2xl font-bold p-10"
          >
            {description}
          </HomePageMainTitleStyled>
        );
      }

      return (
        <Link to={url} key={idx}>
          <HomePageSectionContainerStyled
            className={`${BACKGROUND}-${GRADIENT}-to-r from-${gradient?.startingColor} to-${gradient?.endingColor}`}
          >
            <HomePageSubSectionLogoStyled
              className="m-12"
              src={iconUrl}
              alt={`${name} - ${description}`}
            />
            <HomePageSubSectionTextContainerStyled className="text-white m-12">
              <HomePageSubSectionTextStyled className="mt-2 mb-2">
                <h2 className="font-semibold text-xl">{name}</h2>
                <div className="font-medium mt-6">{description}</div>
              </HomePageSubSectionTextStyled>
            </HomePageSubSectionTextContainerStyled>
          </HomePageSectionContainerStyled>
        </Link>
      );
    })}
  </>
);

export default HomePageSection;
