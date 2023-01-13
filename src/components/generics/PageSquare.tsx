import { Quoi2NeufItemType } from "../../types/consts/quoi2Neuf";
import {
  PageSquareContainerStyled,
  PageSquareIconStyled,
  PageSquareTextStyled,
} from "./PageSquare.styled";

const PageSquare: React.FC<Quoi2NeufItemType> = ({
  title,
  subtitle,
  available,
  icon,
}): JSX.Element => {
  if (!available) return <></>;

  return (
    <PageSquareContainerStyled className="m-10">
      <PageSquareIconStyled src={icon.filename} alt={`${icon.alt}`} />
      <PageSquareTextStyled className="mt-4">
        <h2 className="font-bold">{title}</h2>
        <h3 className="italic">{subtitle}</h3>
      </PageSquareTextStyled>
    </PageSquareContainerStyled>
  );
};

export default PageSquare;
