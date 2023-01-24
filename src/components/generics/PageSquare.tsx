import { setCardRouteParameters } from "../../helpers/routes";
import { Quoi2NeufItemType } from "../../types/consts/quoi2Neuf";
import { BACKGROUND, COLORS, COLOR_TAINTS } from "../../types/styles/colors";
import {
  PageSquareContainerStyled,
  PageSquareIconStyled,
  PageSquareMainContainerStyled,
  PageSquareTextStyled,
} from "./PageSquare.styled";

const PageSquare: React.FC<Quoi2NeufItemType> = ({
  title,
  subtitle,
  available,
  icon,
  pantheon,
}): JSX.Element => {
  if (available === undefined) return <></>;

  return available ? (
    <PageSquareMainContainerStyled
      to={setCardRouteParameters(title, pantheon)}
      className={`hover:${BACKGROUND}-${COLORS.GRAY}-${COLOR_TAINTS.SUPER_LIGHT}`}
    >
      <PageSquareBlock title={title} subtitle={subtitle} icon={icon} />
    </PageSquareMainContainerStyled>
  ) : (
    <PageSquareBlock title={title} subtitle={subtitle} icon={icon} />
  );
};

const PageSquareBlock: React.FC<
  Omit<Quoi2NeufItemType, "available" | "pantheon">
> = ({ title, subtitle, icon }): JSX.Element => {
  const { filename, alt } = icon;

  return (
    <PageSquareContainerStyled className="m-6">
      <PageSquareIconStyled src={filename} alt={alt} />
      <PageSquareTextStyled className="mt-4">
        <h2 className="font-bold">{title}</h2>
        <h3 className="italic">{subtitle}</h3>
      </PageSquareTextStyled>
    </PageSquareContainerStyled>
  );
};

export default PageSquare;
