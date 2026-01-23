import InstagramIcon from "../assets/icons/social_networks/instagram.svg";
import MastodonIcon from "../assets/icons/social_networks/mastodon.svg";
import PixelfedIcon from "../assets/icons/social_networks/pixelfed.svg";
import TwitchIcon from "../assets/icons/social_networks/twitch.svg";

export enum SOCIAL_NETWORK_STATUS {
	ACTIVE = "active",
	INACTIVE = "inactive",
}

interface SocialNetworkType {
	name: string;
	url: string;
	iconUrl: string;
	status: SOCIAL_NETWORK_STATUS;
}

export const SOCIAL_NETWORKS: SocialNetworkType[] = [
	{
		name: "Instagram",
		url: "https://www.instagram.com/palmythology/",
		iconUrl: InstagramIcon as unknown as string,
		status: SOCIAL_NETWORK_STATUS.ACTIVE,
	},
	{
		name: "Twitch",
		url: "https://www.twitch.tv/lepalmypede/",
		iconUrl: TwitchIcon as unknown as string,
		status: SOCIAL_NETWORK_STATUS.ACTIVE,
	},
	{
		name: "Pixelfed",
		url: "https://pixelfed.fr/Palmythology",
		iconUrl: PixelfedIcon as unknown as string,
		status: SOCIAL_NETWORK_STATUS.ACTIVE,
	},
	{
		name: "Mastodon",
		url: "https://mastodon.social/@Palmythology",
		iconUrl: MastodonIcon as unknown as string,
		status: SOCIAL_NETWORK_STATUS.ACTIVE,
	},
];
