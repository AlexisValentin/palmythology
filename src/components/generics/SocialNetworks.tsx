import InstagramIcon from "../../assets/instagram.svg";
import {
  InstagramLogoContainer,
  InstagramLogoStyled,
  InstagramTextStyled,
} from "./SocialNetworks.styled";

const SocialNetworks = (): JSX.Element => {
  return (
    <a
      href="https://www.instagram.com/palmythology/"
      target="_blank"
      rel="noreferrer"
    >
      <InstagramLogoContainer>
        <InstagramLogoStyled src={InstagramIcon} alt="Logo Instagram" />
        <InstagramTextStyled className="pl-2">Instagram</InstagramTextStyled>
      </InstagramLogoContainer>
    </a>
  );
};

export default SocialNetworks;
