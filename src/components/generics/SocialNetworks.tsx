import {
  SOCIAL_NETWORKS,
  SOCIAL_NETWORK_STATUS,
} from "../../types/consts/socialNetworks";
import {
  SocialNetworkLogoContainerStyled,
  SocialNetworkLogoStyled,
} from "./SocialNetworks.styled";

const SocialNetworks = (): JSX.Element => {
  return (
    <>
      {SOCIAL_NETWORKS.map(({ name, url, iconUrl, status }, idx) => {
        if (status === SOCIAL_NETWORK_STATUS.INACTIVE) return null;

        return (
          <a href={url} target="_blank" rel="noreferrer" key={idx}>
            <SocialNetworkLogoContainerStyled className="m-2">
              <SocialNetworkLogoStyled src={iconUrl} alt={`Logo ${name}`} />
            </SocialNetworkLogoContainerStyled>
          </a>
        );
      })}
    </>
  );
};

export default SocialNetworks;
