import Image from 'next/image'
import {
  SOCIAL_NETWORKS,
  SOCIAL_NETWORK_STATUS,
} from '../../types/consts/socialNetworks'

interface SocialNetworkProps {
  name: string
  url?: string
  iconUrl: string
}

interface SocialNetworksProps {
  customLinks?: {
    instagram: string
    facebook: string
    threads: string
  }
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({
  name,
  url,
  iconUrl,
}): JSX.Element => (
  <>
    {url && (
      <a href={url} target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center m-2">
          <Image
            className="w-10"
            src={iconUrl}
            alt={`Logo du réseau social ${name}`}
            width={24}
            height={24}
          />
        </div>
      </a>
    )}
  </>
)

const SocialNetworks: React.FC<SocialNetworksProps> = ({
  customLinks,
}): JSX.Element => {
  if (customLinks) {
    return (
      <>
        <div className="flex align-center justify-center">
          <h3 className="font-semibold">Disponible sur</h3>
        </div>
        <div className="flex flex-row align-center justify-center">
          {Object.values(customLinks).map((socialLink, idx) => (
            <SocialNetwork
              key={`${SOCIAL_NETWORKS[idx].name}-${idx}`}
              name={SOCIAL_NETWORKS[idx].name}
              url={socialLink}
              iconUrl={SOCIAL_NETWORKS[idx].iconUrl}
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      {SOCIAL_NETWORKS.map(({ name, url, iconUrl, status }, idx) => {
        if (status === SOCIAL_NETWORK_STATUS.INACTIVE) return null

        return (
          <SocialNetwork
            key={`${name}-${idx}`}
            name={name}
            url={url}
            iconUrl={iconUrl}
          />
        )
      })}
    </>
  )
}

export default SocialNetworks
