import { Link } from "react-router-dom";
import { ArticleType } from "../../types/consts/articles";
import { RouteType } from "../../types/consts/routes";
import { BACKGROUND, GRADIENT } from "../../types/styles/colors";
import {
  PageSectionContainerStyled,
  PageSubSectionLogoStyled,
  PageSubSectionTextContainerStyled,
  PageSubSectionTextStyled,
} from "./PageSection.styled";

type PageSectionProps = RouteType | ArticleType;

const PageSection: React.FC<PageSectionProps> = ({
  name,
  url,
  description,
  gradient,
  iconUrl,
}): JSX.Element =>
  url ? (
    <>
      {url && (
        <Link to={url}>
          <PageSectionTemplate
            name={name}
            description={description}
            gradient={gradient}
            iconUrl={iconUrl}
          />
        </Link>
      )}
    </>
  ) : (
    <PageSectionTemplate
      name={name}
      description={description}
      gradient={gradient}
      iconUrl={iconUrl}
    />
  );

const PageSectionTemplate = ({
  name,
  description,
  gradient,
  iconUrl,
}: PageSectionProps): JSX.Element => (
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
);

export default PageSection;
