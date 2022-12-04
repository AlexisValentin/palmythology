import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

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
];
