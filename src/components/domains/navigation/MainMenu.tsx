"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "../../../utils/routes/routes.constants";
import styles from "./MainMenu.module.scss";

const isHomePage = (routeName: string) => routeName === "Palmythology";

const MainMenu = () => {
	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			{ROUTES.map((route) => {
				const { url, name, icon } = route;

				if (!url) return <div key={`section-${name}`} />;

				const isCurrent = pathname === url;

				return (
					<Link
						className={styles.link}
						href={url}
						key={`section-${name}`}
						aria-current={isCurrent ? "page" : undefined}
						data-rybbit-event="nav_click"
						data-rybbit-prop-section={name}
					>
						<div className={styles.linkContent}>
							{isHomePage(name) ? (
								<Image
									className={styles.logo}
									src={icon}
									alt="Logo de la Palmythology"
									width={40}
									height={40}
									sizes="2.5rem"
									priority
								/>
							) : (
								<>
									<div className={styles.labelDesktop}>{name}</div>
									<div className={styles.labelMobile}>
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
