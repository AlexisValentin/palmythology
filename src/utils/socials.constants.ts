import InstagramIcon from "../assets/icons/social_networks/instagram.svg";

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
];
