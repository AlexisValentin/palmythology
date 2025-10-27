"use server";

import { revalidateTag } from "next/cache";
import {
	DAY_IN_MS,
	HALF_DAY_IN_MS,
	HOUR_IN_MS,
	SEVEN_DAYS_IN_MS,
} from "../dates/dates.constants";

export const getCacheTags = async () => ({
	CARDS: { TAG: "cms-cards", DURATION: DAY_IN_MS },
	PANTHEONS: { TAG: "cms-pantheons", DURATION: SEVEN_DAYS_IN_MS },
	SUBJECTS: { TAG: "cms-subjects", DURATION: SEVEN_DAYS_IN_MS },
	SEARCH: { TAG: "cms-search", DURATION: HOUR_IN_MS },
	Q2N: { TAG: "cms-q2n", DURATION: HALF_DAY_IN_MS },
	ALL: { TAG: "cms", DURATION: DAY_IN_MS },
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

export async function revalidateQ2NCache() {
	revalidateTag((await getCacheTags()).Q2N.TAG, "max");

	return { success: true, message: "Q2N data cache has been revalidated!" };
}
