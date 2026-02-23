"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import {
	generateBreadcrumbLinks,
	getHomeBreadcrumbNode,
	parseBreadcrumbNode,
} from "../../utils/routes/routes";

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
			<nav
				aria-label="Fil d'Ariane"
				className="flex items-center justify-center sticky bottom-0 z-10 bg-neutral-200 w-full py-2 text-xs"
			>
				<Link
					className="hover:underline hover:text-pink-500 decoration-sky-500 underline-offset-4"
					href="/"
				>
					{getHomeBreadcrumbNode()}
				</Link>
				<BreadcrumbSeparator />
				{nodes.map((node, idx) => (
					<span key={node}>
						{idx === breadcrumLinks.length - 1 ? (
							<span className="text-slate-500">{`${parseBreadcrumbNode(node)}`}</span>
						) : (
							<span>
								<Link
									className="hover:underline hover:text-pink-500 decoration-sky-500 underline-offset-4"
									href={breadcrumLinks[idx]}
								>
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

const BreadcrumbSeparator = () => <span className="mx-1">{" > "}</span>;

export default Breadcrumbs;
