"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import {
	generateBreadcrumbLinks,
	getHomeBreadcrumbNode,
	parseBreadcrumbNode,
} from "../../utils/routes/routes";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs: React.FC = () => {
	const nodes = usePathname()
		.split("/")
		.filter((node) => Boolean(node));

	if (!nodes.length) return <></>;

	const breadcrumLinks = generateBreadcrumbLinks(nodes);

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: getHomeBreadcrumbNode(),
				item: "https://palmythology.com/",
			},
			...nodes.map((node, idx) => ({
				"@type": "ListItem",
				position: idx + 2,
				name: parseBreadcrumbNode(node),
				item: `https://palmythology.com${breadcrumLinks[idx]}`,
			})),
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<nav aria-label="Fil d'Ariane" className={styles.nav}>
				<Link className={styles.link} href="/">
					{getHomeBreadcrumbNode()}
				</Link>
				<BreadcrumbSeparator />
				{nodes.map((node, idx) => (
					<span key={node}>
						{idx === breadcrumLinks.length - 1 ? (
							<span
								className={styles.current}
							>{`${parseBreadcrumbNode(node)}`}</span>
						) : (
							<span>
								<Link className={styles.link} href={breadcrumLinks[idx]}>
									{node ? parseBreadcrumbNode(node) : getHomeBreadcrumbNode()}
								</Link>
								<BreadcrumbSeparator />
							</span>
						)}
					</span>
				))}
			</nav>
		</>
	);
};

const BreadcrumbSeparator = () => (
	<span className={styles.separator}>{" > "}</span>
);

export default Breadcrumbs;
