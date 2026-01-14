"use client";

import { type RefObject, useCallback, useEffect, useState } from "react";

const useModal = <T extends HTMLElement = HTMLElement>(
	shouldBeDisplayed: boolean,
	modalRef?: RefObject<T | null>,
) => {
	const [shouldDisplayModal, setShouldDisplayModal] =
		useState(shouldBeDisplayed);

	const displayModal = useCallback(() => setShouldDisplayModal(true), []);
	const hideModal = useCallback(() => setShouldDisplayModal(false), []);

	useEffect(() => {
		if (!modalRef?.current) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				hideModal();
			}
		};

		if (shouldDisplayModal) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [shouldDisplayModal, modalRef, hideModal]);

	return { shouldDisplayModal, displayModal, hideModal };
};

export default useModal;
