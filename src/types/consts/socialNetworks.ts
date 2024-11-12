import FacebookIcon from '../../assets/icons/social_networks/facebook.svg'
import InstagramIcon from '../../assets/icons/social_networks/instagram.svg'
import ThreadsIcon from '../../assets/icons/social_networks/threads.svg'
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
    status: SOCIAL_NETWORK_STATUS.INACTIVE,
  },
  {
    name: 'Threads',
    url: 'https://threads.net/@palmythology',
    iconUrl: ThreadsIcon,
    status: SOCIAL_NETWORK_STATUS.ACTIVE,
  },
  {
    name: 'Tipeee',
    url: 'https://fr.tipeee.com/palmythology',
    iconUrl: TipeeeIcon,
    status: SOCIAL_NETWORK_STATUS.INACTIVE,
  },
]
