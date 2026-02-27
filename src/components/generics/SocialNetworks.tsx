import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import {
	SOCIAL_NETWORK_STATUS,
	SOCIAL_NETWORKS,
} from "../../utils/socials.constants";
import styles from "./SocialNetworks.module.scss";

interface SocialNetworkProps {
	name: string;
	url?: string;
	iconUrl: StaticImageData;
	context?: string;
}

interface SocialNetworksProps {
	customLinks?: {
		instagram: string;
		threads: string;
		bluesky: string;
	};
	context?: string;
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({
	name,
	url,
	iconUrl,
	context,
}) => (
	<>
		{url && (
			<Link
				href={url}
				target="_blank"
				rel="noreferrer"
				data-rybbit-event="social_click"
				data-rybbit-prop-network={name}
				{...(context && { "data-rybbit-prop-context": context })}
			>
				<div className={styles.iconWrapper}>
					<Image
						className={styles.icon}
						src={iconUrl}
						alt={`Logo du réseau social ${name}`}
						width={24}
						height={24}
					/>
				</div>
			</Link>
		)}
	</>
);

const SocialNetworks: React.FC<SocialNetworksProps> = ({
	customLinks,
	context,
}) => {
	if (customLinks) {
		return (
			<>
				<div className={styles.header}>
					<h3 className={styles.title}>Disponible sur</h3>
				</div>
				<div className={styles.list}>
					{Object.values(customLinks).map((socialLink, idx) => (
						<SocialNetwork
							key={`${SOCIAL_NETWORKS[idx].name}-${idx}`}
							name={SOCIAL_NETWORKS[idx].name}
							url={socialLink}
							iconUrl={SOCIAL_NETWORKS[idx].iconUrl}
							context={context}
						/>
					))}
				</div>
			</>
		);
	}

	return (
		<>
			{SOCIAL_NETWORKS.map(({ name, url, iconUrl, status }) => {
				if (status === SOCIAL_NETWORK_STATUS.INACTIVE) return null;

				return (
					<SocialNetwork
						key={`${name}`}
						name={name}
						url={url}
						iconUrl={iconUrl}
						context={context}
					/>
				);
			})}
		</>
	);
};

export default SocialNetworks;
