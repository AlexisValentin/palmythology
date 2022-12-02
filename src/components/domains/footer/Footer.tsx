import { GRID } from "../../../types/styles/grid";
import Copyrights from "../../generics/Copyrights";
import SocialNetworks from "../../generics/SocialNetworks";
import {
  FooterMainContainerStyled,
  FooterSubContainerStyled,
} from "./Footer.styled";

const Footer = (): JSX.Element => {
  return (
    <FooterMainContainerStyled className={`${GRID} grid-cols-2 mt-20`}>
      <FooterSubContainerStyled>
        <SocialNetworks />
      </FooterSubContainerStyled>
      <FooterSubContainerStyled>
        <Copyrights />
      </FooterSubContainerStyled>
    </FooterMainContainerStyled>
  );
};

export default Footer;
