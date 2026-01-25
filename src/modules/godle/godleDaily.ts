"use server";

import { fetchAllAvailableEntitiesForGodle } from "../../utils/cms/cms.requests";
import { getDaysSinceDate, getParisDateString } from "../../utils/dates/dates";
import { GODLE_CONFIG } from "../../utils/godle/godle.constants";
import type { GodleEntity } from "../../utils/godle/godle.types";

const getGodleDayNumber = (): number =>
	getDaysSinceDate(GODLE_CONFIG.EPOCH_DATE);

const seededRandom = (seed: number): number => {
	const x = Math.sin(seed * 9999) * 10000;
	return x - Math.floor(x);
};

const getEntityIndexForDay = (
	dayNumber: number,
	entitiesCount: number,
	excludeIndex?: number,
): number => {
	let index = Math.floor(seededRandom(dayNumber) * entitiesCount);

	if (excludeIndex !== undefined && index === excludeIndex && entitiesCount > 1) {
		index = Math.floor(seededRandom(dayNumber + 0.5) * (entitiesCount - 1));
		if (index >= excludeIndex) {
			index++;
		}
	}

	return index;
};

export const getDailyEntity = async (): Promise<GodleEntity> => {
	const entities = await fetchAllAvailableEntitiesForGodle();

	if (entities.length === 0) {
		throw new Error("No entities available for Godle");
	}

	const daysSinceLaunch = getGodleDayNumber();

	const yesterdayIndex =
		daysSinceLaunch > 0
			? getEntityIndexForDay(daysSinceLaunch - 1, entities.length)
			: undefined;

	const todayIndex = getEntityIndexForDay(
		daysSinceLaunch,
		entities.length,
		yesterdayIndex,
	);

	return entities[todayIndex];
};

export const getYesterdayEntity = async (): Promise<GodleEntity | null> => {
	const entities = await fetchAllAvailableEntitiesForGodle();

	if (entities.length === 0) {
		return null;
	}

	const daysSinceLaunch = getGodleDayNumber();

	if (daysSinceLaunch <= 0) {
		return null;
	}

	const dayBeforeYesterdayIndex =
		daysSinceLaunch > 1
			? getEntityIndexForDay(daysSinceLaunch - 2, entities.length)
			: undefined;

	const yesterdayIndex = getEntityIndexForDay(
		daysSinceLaunch - 1,
		entities.length,
		dayBeforeYesterdayIndex,
	);

	return entities[yesterdayIndex];
};

export const getTodayDateString = async (): Promise<string> =>
	getParisDateString();

export const getGameNumber = async (): Promise<number> =>
	getGodleDayNumber() + 1;
