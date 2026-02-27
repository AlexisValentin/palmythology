import Image from "next/image";
import Link from "next/link";
import type { PantheonValue } from "../../utils/cards/pantheons.constants";
import type { SubjectValue } from "../../utils/cards/subjects.constants";
import type { StoryblokImageType } from "../../utils/cms/cms.constants";
import {
	setCardRouteParameters,
	setPantheonRouteParameters,
	setSubjectRouteParameters,
} from "../../utils/routes/routes";
import { getPantheonInlineStyle } from "../../utils/styles/colors";
import styles from "./PageSquare.module.scss";

export enum CONTENT_TYPE {
	ROUTE = "route",
	CARD = "card",
	PANTHEON = "pantheon",
	SUBJECT = "subject",
}

export enum PAGE_SQUARE_SIZE_TYPE {
	SM = "sm",
	MD = "md",
	COMPACT = "compact",
	XL = "xl",
}

const SIZE_CLASS: Record<PAGE_SQUARE_SIZE_TYPE, string> = {
	[PAGE_SQUARE_SIZE_TYPE.SM]: styles.sizeSm,
	[PAGE_SQUARE_SIZE_TYPE.MD]: styles.sizeMd,
	[PAGE_SQUARE_SIZE_TYPE.COMPACT]: styles.sizeCompact,
	[PAGE_SQUARE_SIZE_TYPE.XL]: styles.sizeXl,
};

interface PageSquareProps {
	title: string;
	subtitle?: string;
	pantheon?: PantheonValue;
	subject?: SubjectValue;
	icon: StoryblokImageType | string;
	available?: boolean;
	contentType: CONTENT_TYPE;
	size?:
		| PAGE_SQUARE_SIZE_TYPE.SM
		| PAGE_SQUARE_SIZE_TYPE.MD
		| PAGE_SQUARE_SIZE_TYPE.COMPACT
		| PAGE_SQUARE_SIZE_TYPE.XL;
	withoutText?: boolean;
	url?: string;
	prefetch?: boolean;
}

const RYBBIT_EVENTS: Partial<Record<CONTENT_TYPE, string>> = {
	[CONTENT_TYPE.CARD]: "card_click",
	[CONTENT_TYPE.PANTHEON]: "pantheon_click",
	[CONTENT_TYPE.SUBJECT]: "subject_click",
};

const PageSquare: React.FC<PageSquareProps> = ({
	title,
	subtitle,
	pantheon,
	subject,
	icon,
	available = true,
	contentType,
	size = PAGE_SQUARE_SIZE_TYPE.MD,
	withoutText = false,
	url,
	prefetch,
}) => {
	const buildLink = () => {
		switch (contentType) {
			case CONTENT_TYPE.ROUTE:
				return url;
			case CONTENT_TYPE.CARD:
				return setCardRouteParameters(title, pantheon!);
			case CONTENT_TYPE.PANTHEON:
				return setPantheonRouteParameters(pantheon!);
			case CONTENT_TYPE.SUBJECT:
				return setSubjectRouteParameters(subject!);
			default:
				return null;
		}
	};

	const link = buildLink();
	const rybbitEvent = RYBBIT_EVENTS[contentType];
	const inlineStyle = pantheon ? getPantheonInlineStyle(pantheon) : undefined;

	if (available === undefined || !link) return null;

	return available ? (
		<Link
			href={link}
			prefetch={prefetch}
			style={inlineStyle}
			{...(rybbitEvent && {
				"data-rybbit-event": rybbitEvent,
				"data-rybbit-prop-title": title,
			})}
			className={`${styles.squareLink}${withoutText ? ` ${styles.withoutText}` : ""}`}
		>
			<div className={styles.block}>
				<PageSquareBlock
					title={title}
					subtitle={subtitle}
					icon={icon}
					size={size}
					withoutText={withoutText}
				/>
			</div>
		</Link>
	) : (
		<div className={styles.squareUnavailable}>
			<PageSquareBlock
				title={title}
				subtitle={subtitle}
				icon={icon}
				size={size}
				withoutText={withoutText}
			/>
		</div>
	);
};

const PageSquareBlock: React.FC<
	Pick<PageSquareProps, "title" | "subtitle" | "icon" | "size" | "withoutText">
> = ({ title, subtitle, icon, size = PAGE_SQUARE_SIZE_TYPE.MD, withoutText }) => (
	<div className={SIZE_CLASS[size]}>
		<div className={styles.blockInner}>
			<Image
				className={styles.icon}
				src={typeof icon === "string" ? icon : icon?.filename}
				alt={typeof icon === "string" ? `Icône ${title}` : icon?.alt}
				width={100}
				height={100}
				sizes="6rem"
			/>
			{!withoutText && (
				<>
					<h3 className={styles.title}>{title}</h3>
					<h4 className={styles.subtitle}>{subtitle}</h4>
				</>
			)}
		</div>
	</div>
);

export default PageSquare;
