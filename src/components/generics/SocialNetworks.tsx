import {
  SOCIAL_NETWORKS,
  SOCIAL_NETWORK_STATUS,
} from "../../types/consts/socialNetworks";

const SocialNetworks = (): JSX.Element => {
  return (
    <>
      {SOCIAL_NETWORKS.map(({ name, url, iconUrl, status }, idx) => {
        if (status === SOCIAL_NETWORK_STATUS.INACTIVE) return null;

        return (
          <a href={url} target="_blank" rel="noreferrer" key={idx}>
            <div className="flex items-center justify-center m-2">
              <img className="w-10" src={iconUrl} alt={`Logo ${name}`} />
            </div>
          </a>
        );
      })}
    </>
  );
};

export default SocialNetworks;
