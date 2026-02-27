"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";
import styles from "./UpPageButton.module.scss";

export const UpPageButton: FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollDistance = window.scrollY;
			const viewportHeight = window.innerHeight;
			const shouldShow = scrollDistance >= viewportHeight;

			setIsVisible(shouldShow);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleToggle = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			type="button"
			onClick={handleToggle}
			onTouchEnd={(e) => {
				e.preventDefault();
				handleToggle();
			}}
			className={`${styles.button} ${isVisible ? styles.visible : styles.hidden}`}
			aria-label="Remonter en haut de page"
		>
			<div className={styles.arrowWrapper}>
				<ArrowDownIcon customColor="white" />
			</div>
		</button>
	);
};
