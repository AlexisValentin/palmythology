"use server";

import { fetchAllAvailableEntitiesForGodle } from "../../utils/cms/cms.requests";
import { DAY_IN_MS } from "../../utils/dates/dates.constants";
import { GODLE_CONFIG } from "../../utils/godle/godle.constants";
import type { GodleEntity } from "../../utils/godle/godle.types";

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

	const now = Date.now();
	const daysSinceLaunch = Math.floor(
		(now - GODLE_CONFIG.EPOCH_START) / DAY_IN_MS,
	);

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

	const now = Date.now();
	const daysSinceLaunch = Math.floor(
		(now - GODLE_CONFIG.EPOCH_START) / DAY_IN_MS,
	);

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

export const getTodayDateString = async (): Promise<string> => {
	return new Date().toISOString().split("T")[0];
};

export const getGameNumber = async (): Promise<number> => {
	const now = Date.now();
	const daysSinceLaunch = Math.floor(
		(now - GODLE_CONFIG.EPOCH_START) / DAY_IN_MS,
	);
	return daysSinceLaunch + 1;
};
