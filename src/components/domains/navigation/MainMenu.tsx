"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "../../../utils/routes/routes.constants";

const isHomePage = (routeName: string) => routeName === "Palmythology";

const MainMenu = () => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center justify-evenly sticky top-0 z-10 drop-shadow-md bg-neutral-100 w-full px-6 sm:px-24 md:px-40 lg:px-56 xl:px-72 2xl:px-96 min-h-16">
			{ROUTES.map((route) => {
				const { url, name, icon } = route;

				if (!url) return <div key={`section-${name}`} />;

				const isCurrent = pathname === url;

				return (
					<Link
						className="px-2 md:px-2 rounded-3xl hover:bg-neutral-300"
						href={url}
						key={`section-${name}`}
						aria-current={isCurrent ? "page" : undefined}
						data-rybbit-event="nav_click"
						data-rybbit-prop-section={name}
					>
						<div className="justify-items-center content-center py-3">
							{isHomePage(name) ? (
								<Image
									className="rounded-full shadow-xl"
									src={icon}
									alt="Logo de la Palmythology"
									width={40}
									height={40}
									sizes="2.5rem"
									priority
								/>
							) : (
								<>
									<div className="hidden md:block">{name}</div>
									<div className="md:hidden block">
										<Image
											src={icon}
											alt={name}
											width={40}
											height={40}
											sizes="2.5rem"
										/>
									</div>
								</>
							)}
						</div>
					</Link>
				);
			})}
		</nav>
	);
};

export default MainMenu;
