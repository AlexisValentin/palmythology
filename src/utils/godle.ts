"use server";

import { compareArraysForMatch } from "./array";
import { fetchAllAvailableEntitiesForGodle } from "./cms/cms.requests";
import { getDaysSinceDate, getParisDateString } from "./dates/dates";
import { GODLE_CONFIG } from "./godle/godle.constants";
import type { GodleEntity } from "./godle/godle.types";

type MatchResult = "exact" | "partial" | "none";

interface ComparisonResult {
	guessedEntity: GodleEntity;
	pantheonMatch: MatchResult;
	subjectMatch: MatchResult;
	genreMatch: MatchResult;
	mainDomainMatch: MatchResult;
	attributesMatch: MatchResult;
	isCorrect: boolean;
}

const compareEntityToTarget = (
	guessedEntity: GodleEntity,
	target: GodleEntity,
): ComparisonResult => {
	const genreMatch: MatchResult =
		guessedEntity.genre === target.genre ? "exact" : "none";

	const mainDomainMatch: MatchResult =
		guessedEntity.mainDomain === target.mainDomain ? "exact" : "none";

	const attributesMatch: MatchResult = compareArraysForMatch(
		guessedEntity.attributes,
		target.attributes,
	);

	return {
		guessedEntity,
		pantheonMatch:
			guessedEntity.pantheon === target.pantheon ? "exact" : "none",
		subjectMatch: guessedEntity.subject === target.subject ? "exact" : "none",
		genreMatch,
		mainDomainMatch,
		attributesMatch,
		isCorrect: guessedEntity.name === target.name,
	};
};

const getGodleDayNumber = (): number =>
	getDaysSinceDate(GODLE_CONFIG.EPOCH_DATE);

const seededRandom = (seed: number): number =>
	Math.sin(seed * 9999) * 10000 - Math.floor(Math.sin(seed * 9999) * 10000);

const getEntityIndexForDay = (
	dayNumber: number,
	entitiesCount: number,
	excludeIndex?: number,
): number => {
	let index = Math.floor(seededRandom(dayNumber) * entitiesCount);

	if (
		excludeIndex !== undefined &&
		index === excludeIndex &&
		entitiesCount > 1
	) {
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

export const getDailyEntityName = async (): Promise<string> => {
	const entity = await getDailyEntity();
	return entity.name;
};

export const validateGuess = async (
	guessName: string,
): Promise<{
	result: ComparisonResult;
	targetEntity: GodleEntity | null;
}> => {
	const [target, allEntities] = await Promise.all([
		getDailyEntity(),
		fetchAllAvailableEntitiesForGodle(),
	]);

	const guessedEntity = allEntities.find((e) => e.name === guessName);

	if (!guessedEntity) {
		throw new Error(`Entity not found: ${guessName}`);
	}

	const result = compareEntityToTarget(guessedEntity, target);

	return {
		result,
		targetEntity: result.isCorrect ? target : null,
	};
};

export const restoreGameGuesses = async (
	guessNames: string[],
): Promise<{
	results: ComparisonResult[];
	targetEntity: GodleEntity | null;
	isComplete: boolean;
}> => {
	const [target, allEntities] = await Promise.all([
		getDailyEntity(),
		fetchAllAvailableEntitiesForGodle(),
	]);

	const results: ComparisonResult[] = [];
	let foundCorrect = false;

	for (const guessName of guessNames) {
		const guessedEntity = allEntities.find((e) => e.name === guessName);

		if (!guessedEntity) {
			continue;
		}

		const result = compareEntityToTarget(guessedEntity, target);
		if (result.isCorrect) foundCorrect = true;
		results.push(result);
	}

	return {
		results,
		targetEntity: foundCorrect ? target : null,
		isComplete: foundCorrect,
	};
};
