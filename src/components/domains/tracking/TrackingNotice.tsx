"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
	getFromLocalStorage,
	LOCAL_STORAGE_KEYS,
	setInLocalStorage,
} from "../../../utils/storage";
import { COLOR_TAINTS, COLORS } from "../../../utils/styles/colors.constants";
import Button from "../../generics/Button";
import useModal from "../../hooks/useModal";

const TrackingNotice = () => {
	const [isMounted, setIsMounted] = useState(false);
	const { shouldDisplayModal, hideModal } = useModal(
		!getFromLocalStorage(LOCAL_STORAGE_KEYS.MODAL_TRACKING_LAST_DISPLAY),
	);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const onClick = () => {
		setInLocalStorage(
			LOCAL_STORAGE_KEYS.MODAL_TRACKING_LAST_DISPLAY,
			Date.now(),
		);
		hideModal();
	};

	if (!isMounted || !shouldDisplayModal) return null;

	const plausibleUrl = "https://plausible.io/data-policy";

	return (
		<>
			<div className="fixed top-0 left-0 bg-slate-300 opacity-75 w-full h-full z-40" />
			<div className="fixed bg-white border-t-2 border-slate-300 bottom-0 w-full md:border-0 md:w-auto md:bottom-auto md:top-1/2 md:left-1/2 z-50 md:-translate-x-1/2 md:-translate-y-1/2 shadow-2xl rounded-lg opacity-100">
				<div className="m-8 mt-10">
					<h3 className="text-2xl font-bold mb-4">
						La Palmythology utilise vos données de navigation
					</h3>
					<div className="text-sm mb-4">
						Dans le but d'optimiser et améliorer l'expérience utilisateur, le
						site web utilise une solution de collecte de données respectueuse de
						la vie privée. Cette solution permet de collecter des informations
						anonymes sur la manière dont chaque utilisateurs interagissent avec
						le site web. Les données recueillies sont agrégées et ne permettent
						en aucun d'identifier les utilisateurs personnellement. Elles aident
						à comprendre quelles pages sont les plus populaires, à identifier
						les points de friction et à prendre des décisions éclairées pour
						améliorer continuellement le contenu et les fonctionnalités. La
						Palmythology s'engage à traiter vos données avec le plus grand soin,
						sans aucune atteinte à votre vie privée.
					</div>
					<div className="flex items-center">
						<div className="mr-4">
							<Button
								label="Accepter"
								color={`${COLORS.GREEN}-${COLOR_TAINTS.DARK}`}
								onClick={onClick}
								className="min-w-24"
							/>
						</div>
						<div className="mr-4">
							<Button
								label="Refuser"
								color={`${COLORS.RED}-${COLOR_TAINTS.DARK}`}
								onClick={onClick}
								className="min-w-24"
							/>
						</div>

						<Link
							className="text-sm md:text-base underline hover:text-pink-500 hover:decoration-sky-500 underline-offset-8"
							href={plausibleUrl}
							target="_blank"
						>
							En savoir plus
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrackingNotice;
