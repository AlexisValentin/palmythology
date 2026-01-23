"use server";

import { fetchAllAvailableEntitiesForGodle } from "../../utils/cms/cms.requests";
import { DAY_IN_MS } from "../../utils/dates/dates.constants";
import { GODLE_CONFIG } from "../../utils/godle/godle.constants";
import type { GodleEntity } from "../../utils/godle/godle.types";

export const getDailyEntity = async (): Promise<GodleEntity> => {
	const entities = await fetchAllAvailableEntitiesForGodle();

	if (entities.length === 0) {
		throw new Error("No entities available for Godle");
	}

	const now = Date.now();
	const daysSinceLaunch = Math.floor(
		(now - GODLE_CONFIG.EPOCH_START) / DAY_IN_MS,
	);

	const index = daysSinceLaunch % entities.length;

	return entities[index];
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
