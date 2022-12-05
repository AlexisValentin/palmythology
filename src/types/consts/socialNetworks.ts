import FacebookIcon from "../../assets/icons/social_networks/facebook.svg";
import InstagramIcon from "../../assets/icons/social_networks/instagram.svg";
import TwitterIcon from "../../assets/icons/social_networks/twitter.svg";
import DiscordIcon from "../../assets/icons/social_networks/discord.svg";
import PinterestIcon from "../../assets/icons/social_networks/pinterest.svg";
import LinkedinIcon from "../../assets/icons/social_networks/linkedin.svg";

export enum SOCIAL_NETWORK_STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

interface SocialNetworkType {
  name: string;
  url?: string;
  iconUrl: string;
  status: SOCIAL_NETWORK_STATUS;
}

export const SOCIAL_NETWORKS: SocialNetworkType[] = [
  {
    name: "Facebook",
    iconUrl: FacebookIcon,
    status: SOCIAL_NETWORK_STATUS.INACTIVE,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/palmythology/",
    iconUrl: InstagramIcon,
    status: SOCIAL_NETWORK_STATUS.ACTIVE,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/palmythologue",
    iconUrl: TwitterIcon,
    status: SOCIAL_NETWORK_STATUS.ACTIVE,
  },
  {
    name: "Discord",
    iconUrl: DiscordIcon,
    status: SOCIAL_NETWORK_STATUS.INACTIVE,
  },
  {
    name: "Pinterest",
    iconUrl: PinterestIcon,
    status: SOCIAL_NETWORK_STATUS.INACTIVE,
  },
  {
    name: "LinkedIn",
    iconUrl: LinkedinIcon,
    status: SOCIAL_NETWORK_STATUS.INACTIVE,
  },
];
