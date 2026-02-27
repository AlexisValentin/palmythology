"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { ROUTES } from "../../../utils/routes/routes.constants";
import PageHeader from "../../generics/PageHeader";
import PageSquare, { CONTENT_TYPE } from "../../generics/PageSquare";
import styles from "./ErrorPageLayout.module.scss";

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
	<div className={styles.container}>
		<Image
			className={styles.illustration}
			src={illustration}
			alt={illustrationAlt}
			width={256}
			height={256}
			priority
		/>
		{code > 0 && (
			<span className={styles.errorCode}>{code}</span>
		)}
		<div className={styles.headerDesktop}>
			<PageHeader title={title} subtitle={subtitle} fullDisplay />
		</div>
		<div className={styles.headerMobile}>
			<PageHeader title={title} fullDisplay />
		</div>
		<p className={styles.helpText}>
			Cependant, vous pouvez toujours naviguer sur la Palmythology
		</p>
		<div className={styles.routeList}>
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
		{children && <div className={styles.childrenWrapper}>{children}</div>}
	</div>
);

export default ErrorPageLayout;
