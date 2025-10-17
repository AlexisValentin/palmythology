import Link from "next/link";
import { useCallback } from "react";
import {
	setCardRouteParameters,
	setPantheonRouteParameters,
	setSubjectRouteParameters,
} from "../../utils/routes/routes";
import { StoryblokImageType } from "../../utils/cms/cms.constants";
import { BLACK_COLOR, WHITE_COLOR } from "../../utils/styles/colors.constants";
import { PantheonValue } from "../../utils/cards/pantheons.constants";
import { SubjectValue } from "../../utils/cards/subjects.constants";
import {
	getPantheonMainColor,
	getPantheonTextColor,
} from "../../utils/styles/colors";
import Image from "next/image";

export enum CONTENT_TYPE {
	ROUTE = "route",
	CARD = "card",
	PANTHEON = "pantheon",
	SUBJECT = "subject",
}

export enum PAGE_SQUARE_SIZE_TYPE {
	SM = "w-6 md:w-8",
	MD = "w-36 md:w-48",
	COMPACT = "w-28 md:w-36 xl:w-40",
	XL = "w-52 md:w-72",
}

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
}

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
}) => {
	const buildLink = useCallback(() => {
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
	}, [contentType, title, pantheon, subject, url]);

	if (available === undefined || !buildLink()) return <></>;

	return available ? (
		<Link
			href={buildLink()!}
			className={`border-4 border-${
				pantheon ? getPantheonMainColor(pantheon) : BLACK_COLOR
			} rounded-3xl p-6 m-6 ${withoutText && "py-2 m-4"} bg-${
				pantheon ? getPantheonMainColor(pantheon) : "slate-500"
			} text-${pantheon ? getPantheonTextColor(pantheon) : WHITE_COLOR} 
      lg:bg-transparent
      lg:text-black
      lg:hover:bg-${
				pantheon ? getPantheonMainColor(pantheon) : "slate-500"
			} lg:hover:text-${pantheon ? getPantheonTextColor(pantheon) : WHITE_COLOR} transition-colors`}
		>
			<div className="flex items-center justify-center flex-col">
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
		<div className="flex items-center justify-center flex-col p-6 mx-6">
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
> = ({ title, subtitle, icon, size, withoutText }) => (
	<div className={`flex item-center justify-center flex-col ${size}`}>
		<div className="flex items-center justify-center flex-col mt-4">
			<Image
				className={`w-24 pb-4`}
				src={typeof icon === "string" ? icon : icon?.filename}
				alt={typeof icon === "string" ? `Icône ${title}` : icon?.alt}
				width={100}
				height={100}
			/>
			{!withoutText && <h2 className="font-bold truncate px-2">{title}</h2>}
			{!withoutText && <h3 className="italic truncate px-2">{subtitle}</h3>}
		</div>
	</div>
);

export default PageSquare;
