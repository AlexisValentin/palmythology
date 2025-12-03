"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";
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
			className={`w-12 h-12 fixed flex items-center justify-center rounded-full bg-sky-500 hover:bg-pink-400 transition-all duration-300 cursor-pointer bottom-10 right-6 text-white ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-4 pointer-events-none"
			}`}
			aria-label="Remonter en haut de page"
		>
			<div className="rotate-180">
				<ArrowDownIcon customColor="white" />
			</div>
		</button>
	);
};
