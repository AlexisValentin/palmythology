import FacebookIcon from '../../assets/icons/social_networks/facebook.svg'
import InstagramIcon from '../../assets/icons/social_networks/instagram.svg'
import TwitterIcon from '../../assets/icons/social_networks/twitter.svg'
import TipeeeIcon from '../../assets/icons/social_networks/tipeee.svg'

export enum SOCIAL_NETWORK_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

interface SocialNetworkType {
  name: string
  url: string
  iconUrl: string
  status: SOCIAL_NETWORK_STATUS
}

export const SOCIAL_NETWORKS: SocialNetworkType[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/palmythology/',
    iconUrl: InstagramIcon,
    status: SOCIAL_NETWORK_STATUS.ACTIVE,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100089045127860',
    iconUrl: FacebookIcon,
    status: SOCIAL_NETWORK_STATUS.ACTIVE,
  },

  {
    name: 'Twitter',
    url: 'https://twitter.com/palmythology',
    iconUrl: TwitterIcon,
    status: SOCIAL_NETWORK_STATUS.ACTIVE,
  },
  {
    name: 'Tipeee',
    url: 'https://fr.tipeee.com/palmythology',
    iconUrl: TipeeeIcon,
    status: SOCIAL_NETWORK_STATUS.ACTIVE,
  },
]
