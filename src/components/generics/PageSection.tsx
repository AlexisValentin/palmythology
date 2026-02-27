import Image from "next/image";
import Link from "next/link";
import type { PantheonValue } from "../../utils/cards/pantheons.constants";
import type { StoryblokImageType } from "../../utils/cms/cms.constants";
import type { NextImageType } from "../../utils/image.constants";
import { getPantheonInlineStyle } from "../../utils/styles/colors";
import styles from "./PageSection.module.scss";

type PageSectionProps = {
	title: string;
	subtitle?: string;
	description: string;
	icon: NextImageType | StoryblokImageType;
	url?: string;
	pantheon?: PantheonValue;
	badge?: React.ReactNode;
};

const isStoryblokImage = (
	icon: NextImageType | StoryblokImageType,
): icon is StoryblokImageType => "filename" in icon;

const PageSectionContent: React.FC<
	Omit<PageSectionProps, "url" | "pantheon">
> = ({ title, subtitle, description, icon, badge }) => {
	const imageSrc = isStoryblokImage(icon) ? icon.filename : icon;
	const imageAlt = isStoryblokImage(icon)
		? icon.alt || `${title} - ${description}`
		: `${title} - ${description}`;

	return (
		<section className={styles.content}>
			<Image
				className={styles.icon}
				src={imageSrc}
				alt={imageAlt}
				width={100}
				height={100}
				sizes="6rem"
			/>
			<div className={styles.body}>
				<div className={styles.bodyInner}>
					<div className={styles.titleRow}>
						<h3 className={styles.title}>
							{title}
							{subtitle && (
								<span className={styles.titleSubtitle}>{subtitle}</span>
							)}
						</h3>
						<span className={styles.badge}>{badge}</span>
					</div>
					<div className={styles.description}>{description}</div>
				</div>
			</div>
		</section>
	);
};

const PageSection: React.FC<PageSectionProps> = ({
	title,
	subtitle,
	url,
	description,
	icon,
	pantheon,
	badge,
}) => {
	const inlineStyle = pantheon ? getPantheonInlineStyle(pantheon) : undefined;

	return url ? (
		<Link href={url} style={inlineStyle} className={styles.sectionLink}>
			<PageSectionContent
				title={title}
				subtitle={subtitle}
				description={description}
				icon={icon}
				badge={badge}
			/>
		</Link>
	) : (
		<div className={styles.sectionWrapper}>
			<PageSectionContent
				title={title}
				subtitle={subtitle}
				description={description}
				icon={icon}
				badge={badge}
			/>
		</div>
	);
};

export default PageSection;
