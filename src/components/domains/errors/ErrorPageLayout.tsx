"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { ROUTES } from "../../../utils/routes/routes.constants";
import PageHeader from "../../generics/PageHeader";
import PageSquare, { CONTENT_TYPE } from "../../generics/PageSquare";

interface ErrorPageLayoutProps {
	code: number;
	title: string;
	subtitle: string;
	illustration: StaticImageData;
	illustrationAlt: string;
	children?: React.ReactNode;
}

const ErrorPageLayout: React.FC<ErrorPageLayoutProps> = ({
	code,
	title,
	subtitle,
	illustration,
	illustrationAlt,
	children,
}) => (
	<div className="flex flex-col items-center justify-center mt-12">
		<Image
			className="w-48 h-48 md:w-64 md:h-64"
			src={illustration}
			alt={illustrationAlt}
			width={256}
			height={256}
			priority
		/>
		{code > 0 && (
			<span className="text-4xl md:text-5xl font-bold px-8 py-4 rounded-full md:mt-8">
				{code}
			</span>
		)}
		<div className="hidden md:block">
			<PageHeader title={title} subtitle={subtitle} fullDisplay />
		</div>
		<div className="md:hidden">
			<PageHeader title={title} fullDisplay />
		</div>
		<p className="text-sm md:text-base max-w-2xl text-center md:font-bold md:mt-8">
			Cependant, vous pouvez toujours naviguer sur la Palmythology
		</p>
		<div className="flex flex-row justify-center flex-wrap mx-8 sm:mx-0 md:mt-8">
			{ROUTES.map((route) => {
				const { name, subtitle: routeSubtitle, url, icon } = route;

				if (name === "Palmythology") {
					return null;
				}

				return (
					<PageSquare
						title={name}
						subtitle={routeSubtitle}
						url={url}
						icon={icon.src}
						contentType={CONTENT_TYPE.ROUTE}
						key={`section-${name}`}
					/>
				);
			})}
		</div>
		{children && <div className="mt-12 w-full">{children}</div>}
	</div>
);

export default ErrorPageLayout;
