import { Quoi2NeufItemType } from "../../types/consts/quoi2Neuf";
import {
  PageSquareContainerStyled,
  PageSquareIconStyled,
  PageSquareTextStyled,
} from "./PageSquare.styled";

const PageSquare: React.FC<Quoi2NeufItemType> = ({
  name,
  description,
  iconUrl,
}): JSX.Element => (
  <PageSquareContainerStyled className="m-10">
    <PageSquareIconStyled src={iconUrl} alt={`${name}, ${description}`} />
    <PageSquareTextStyled className="mt-4">
      <h2>{name}</h2>
      <h3>{description}</h3>
    </PageSquareTextStyled>
  </PageSquareContainerStyled>
);

export default PageSquare;
