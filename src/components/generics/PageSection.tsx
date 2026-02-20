import Image from "next/image";
import Link from "next/link";
import type { PantheonValue } from "../../utils/cards/pantheons.constants";
import type { StoryblokImageType } from "../../utils/cms/cms.constants";
import type { NextImageType } from "../../utils/image.constants";
import {
	getPantheonMainColor,
	getPantheonTextColor,
} from "../../utils/styles/colors";

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
		<section className="flex flex-col items-center rounded-3xl p-2.5 w-60 sm:w-full sm:flex-row sm:p-0">
			<Image
				className="w-24 m-6 sm:m-12"
				src={imageSrc}
				alt={imageAlt}
				width={100}
				height={100}
				sizes="6rem"
			/>
			<div className="flex items-center grow">
				<div className="flex flex-col grow sm:py-4 sm:pr-8 md:mr-6">
					<div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
						<h3 className="font-semibold text-md text-xl text-center md:text-left md:block">
							{title}
							{subtitle && (
								<span className="hidden md:inline text-sm ml-4">
									{subtitle}
								</span>
							)}
						</h3>
						<span className="mt-2 md:mt-0">{badge}</span>
					</div>
					<div className="font-medium mt-4 block text-center md:block md:text-left">
						{description}
					</div>
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
	const mainColor = pantheon ? getPantheonMainColor(pantheon) : "slate-500";
	const textColor = pantheon ? getPantheonTextColor(pantheon) : "white";

	return url ? (
		<Link
			href={url}
			className={`flex flex-row m-5 sm:block sm:w-full sm:m-0 rounded-3xl border-4 border-${mainColor} bg-${mainColor} text-${textColor} lg:bg-transparent lg:text-black lg:hover:bg-${mainColor} lg:hover:text-${textColor} transition-colors`}
		>
			<PageSectionContent
				title={title}
				subtitle={subtitle}
				description={description}
				icon={icon}
				badge={badge}
			/>
		</Link>
	) : (
		<div className="flex flex-row items-center justify-center sm:block sm:w-full sm:m-0">
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
