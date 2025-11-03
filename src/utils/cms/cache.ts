"use server";

import { revalidateTag } from "next/cache";
import {
	DAY_IN_S,
	HALF_DAY_IN_S,
	HOUR_IN_S,
	SEVEN_DAYS_IN_S,
} from "../dates/dates.constants";

export const getCacheTags = async () => ({
	CARDS: { TAG: "cms-cards", DURATION: DAY_IN_S },
	PANTHEONS: { TAG: "cms-pantheons", DURATION: SEVEN_DAYS_IN_S },
	SUBJECTS: { TAG: "cms-subjects", DURATION: SEVEN_DAYS_IN_S },
	SEARCH: { TAG: "cms-search", DURATION: HOUR_IN_S },
	Q2N: { TAG: "cms-q2n", DURATION: HALF_DAY_IN_S },
	ALL: { TAG: "cms", DURATION: DAY_IN_S },
});

export const revalidateCMSCache = async () => {
	revalidateTag((await getCacheTags()).ALL.TAG, "max");

	return {
		success: true,
		message: "Global cache has been revalidated!",
	};
};

export const revalidateCardsCache = async () => {
	revalidateTag((await getCacheTags()).CARDS.TAG, "max");

	return { success: true, message: "Cards data cache has been revalidated!" };
};

export const revalidatePantheonsCache = async () => {
	revalidateTag((await getCacheTags()).PANTHEONS.TAG, "max");

	return {
		success: true,
		message: "Pantheons data cache has been revalidated!",
	};
};

export const revalidateSubjectsCache = async () => {
	revalidateTag((await getCacheTags()).SUBJECTS.TAG, "max");

	return {
		success: true,
		message: "Subjects data cache has been revalidated!",
	};
};

export const revalidateQ2NCache = async () => {
	revalidateTag((await getCacheTags()).Q2N.TAG, "max");

	return { success: true, message: "Q2N data cache has been revalidated!" };
};
