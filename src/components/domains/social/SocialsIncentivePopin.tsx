"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import DoubleArrowRightIcon from "../../../assets/icons/double_arrow_right.svg";
import { SEVEN_DAYS_IN_MS } from "../../../utils/dates/dates.constants";
import {
	getFromLocalStorage,
	LOCAL_STORAGE_KEYS,
	removeFromLocalStorage,
	setInLocalStorage,
} from "../../../utils/storage";
import SocialNetworks from "../../generics/SocialNetworks";

const SocialsIncentivePopin = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [shouldDisplayDesktop, setShouldDisplayDesktop] = useState(false);
	const [shouldDisplayMobile, setShouldDisplayMobile] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const visitCountStr = getFromLocalStorage(
			LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_VISIT_COUNT,
		);
		const visitCount = visitCountStr ? Number.parseInt(visitCountStr, 10) : 0;
		const newVisitCount = visitCount + 1;

		setInLocalStorage(
			LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_VISIT_COUNT,
			newVisitCount.toString(),
		);

		const lastCollapsedTimestamp = getFromLocalStorage(
			LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED,
		);

		let shouldShowDesktop = false;
		let shouldShowMobile = false;
		let initialExpandedState = false;

		if (lastCollapsedTimestamp) {
			const timeSinceCollapsed =
				Date.now() - Number.parseInt(lastCollapsedTimestamp, 10);

			if (timeSinceCollapsed >= SEVEN_DAYS_IN_MS) {
				removeFromLocalStorage(
					LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED,
				);
				shouldShowDesktop = true;
				initialExpandedState = true;
			}
		} else {
			shouldShowDesktop = true;
			initialExpandedState = newVisitCount >= 2;
		}

		if (newVisitCount >= 2) {
			if (lastCollapsedTimestamp) {
				const timeSinceCollapsed =
					Date.now() - Number.parseInt(lastCollapsedTimestamp, 10);

				if (timeSinceCollapsed >= SEVEN_DAYS_IN_MS) {
					removeFromLocalStorage(
						LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED,
					);
					shouldShowMobile = true;
				}
			} else {
				shouldShowMobile = true;
			}
		}

		setShouldDisplayDesktop(shouldShowDesktop);
		setShouldDisplayMobile(shouldShowMobile);
		setIsExpanded(initialExpandedState);
		setIsMounted(true);
	}, []);

	const toggleExpand = () => {
		const newExpandedState = !isExpanded;

		if (newExpandedState) {
			removeFromLocalStorage(
				LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED,
			);
		} else {
			setInLocalStorage(
				LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED,
				Date.now().toString(),
			);
		}

		setIsExpanded(newExpandedState);
	};

	const closeMobile = () => {
		setInLocalStorage(
			LOCAL_STORAGE_KEYS.MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED,
			Date.now().toString(),
		);
		setShouldDisplayMobile(false);
	};

	if (!isMounted) return null;

	return (
		<>
			{shouldDisplayDesktop && (
				<div
					className={`hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 ${
						isExpanded ? "translate-x-0" : "translate-x-[calc(100%-2.2rem)]"
					}`}
				>
					<button
						type="button"
						onClick={toggleExpand}
						className="bg-white rounded-l-lg shadow-2xl px-2 py-4 flex flex-col items-center justify-center gap-1 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-pink-400 transition-colors border border-gray-200 cursor-pointer"
						aria-label={
							isExpanded
								? "Masquer les réseaux sociaux"
								: "Afficher les réseaux sociaux"
						}
						data-rybbit-event="social_popin_toggle"
					>
						<Image
							src={DoubleArrowRightIcon}
							className={isExpanded ? "" : "rotate-180"}
							alt={`Double flèches vers la ${isExpanded ? "droite" : "gauche"}`}
							width={16}
							height={16}
							unoptimized
						/>
					</button>
					<div className="bg-white rounded-r-lg shadow-2xl p-6 w-40 xl:w-56 2xl:w-72">
						<div>
							<p className="text-sm text-center text-gray-600 mb-4">
								Le meilleur moyen de soutenir la Palmythology, c'est sur les
								réseaux sociaux !
							</p>
							<div className="flex justify-center items-center">
								<SocialNetworks context="popin" />
							</div>
						</div>
					</div>
				</div>
			)}
			{shouldDisplayMobile && (
				<>
					<div className="lg:hidden fixed top-0 left-0 bg-slate-300 opacity-75 w-full h-full z-40" />
					<div className="lg:hidden fixed bg-white border-t-2 border-slate-300 bottom-0 w-full z-50 shadow-2xl rounded-t-lg opacity-100">
						<div className="m-6">
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-lg font-bold">
									Soutenez la Palmythology !
								</h3>
								<button
									type="button"
									onClick={closeMobile}
									className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
									aria-label="Fermer"
									data-rybbit-event="social_popin_close"
								>
									×
								</button>
							</div>
							<p className="text-sm text-gray-600 mb-4">
								Le meilleur moyen de soutenir la Palmythology, c'est sur les
								réseaux sociaux !
							</p>
							<div className="flex justify-center items-center">
								<SocialNetworks context="popin" />
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SocialsIncentivePopin;
