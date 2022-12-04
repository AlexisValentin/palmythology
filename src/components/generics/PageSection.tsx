import { Link } from "react-router-dom";
import { RouteType } from "../../types/consts/routes";
import { BACKGROUND, GRADIENT } from "../../types/styles/colors";
import {
  PageSectionContainerStyled,
  PageSubSectionLogoStyled,
  PageSubSectionTextContainerStyled,
  PageSubSectionTextStyled,
} from "./PageSection.styled";

const PageSection = ({
  name,
  url,
  description,
  gradient,
  iconUrl,
}: RouteType): JSX.Element => (
  <>
    <Link to={url}>
      <PageSectionContainerStyled
        className={`${BACKGROUND}-${GRADIENT}-to-r from-${gradient?.startingColor} to-${gradient?.endingColor}`}
      >
        <PageSubSectionLogoStyled
          className="m-12"
          src={iconUrl}
          alt={`${name} - ${description}`}
        />
        <PageSubSectionTextContainerStyled className="text-white mt-12 mb-12 mr-12">
          <PageSubSectionTextStyled className="mt-2 mb-2">
            <h2 className="font-semibold text-xl">{name}</h2>
            <div className="font-medium mt-6">{description}</div>
          </PageSubSectionTextStyled>
        </PageSubSectionTextContainerStyled>
      </PageSectionContainerStyled>
    </Link>
  </>
);

export default PageSection;
