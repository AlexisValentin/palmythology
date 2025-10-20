"use client";

import { useCallback, useState } from "react";

const useModal = (shouldBeDisplayed: boolean) => {
	const [shouldDisplayModal, setShouldDisplayModal] =
		useState(shouldBeDisplayed);

	const displayModal = useCallback(() => setShouldDisplayModal(true), []);
	const hideModal = useCallback(() => setShouldDisplayModal(false), []);

	return { shouldDisplayModal, displayModal, hideModal };
};

export default useModal;
