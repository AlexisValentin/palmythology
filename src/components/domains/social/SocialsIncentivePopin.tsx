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
import styles from "./SocialsIncentivePopin.module.scss";

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
					className={`${styles.desktopPopin} ${isExpanded ? styles.desktopPopinExpanded : styles.desktopPopinCollapsed}`}
				>
					<button
						type="button"
						onClick={toggleExpand}
						className={styles.desktopToggle}
						aria-label={
							isExpanded
								? "Masquer les réseaux sociaux"
								: "Afficher les réseaux sociaux"
						}
						data-rybbit-event="social_popin_toggle"
					>
						<Image
							src={DoubleArrowRightIcon}
							className={isExpanded ? "" : styles.desktopArrowCollapsed}
							alt={`Double flèches vers la ${isExpanded ? "droite" : "gauche"}`}
							width={16}
							height={16}
							unoptimized
						/>
					</button>
					<div className={styles.desktopPanel}>
						<p className={styles.description}>
							Le meilleur moyen de soutenir la Palmythology, c'est sur les
							réseaux sociaux !
						</p>
						<div className={styles.socialsWrapper}>
							<SocialNetworks context="popin" />
						</div>
					</div>
				</div>
			)}
			{shouldDisplayMobile && (
				<>
					<div className={styles.mobileOverlay} />
					<div className={styles.mobilePanel}>
						<div className={styles.mobilePanelInner}>
							<div className={styles.mobilePanelHeader}>
								<h3 className={styles.mobilePanelTitle}>
									Soutenez la Palmythology !
								</h3>
								<button
									type="button"
									onClick={closeMobile}
									className={styles.mobileCloseButton}
									aria-label="Fermer"
									data-rybbit-event="social_popin_close"
								>
									×
								</button>
							</div>
							<p className={styles.description}>
								Le meilleur moyen de soutenir la Palmythology, c'est sur les
								réseaux sociaux !
							</p>
							<div className={styles.socialsWrapper}>
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
