"use server";

import { compareArraysForMatch } from "./array";
import { fetchAllAvailableEntitiesForGodle } from "./cms/cms.requests";
import { getDaysSinceDate, getParisDateString } from "./dates/dates";
import { GODLE_CONFIG } from "./godle/godle.constants";
import type { GodleEntity, GuessResult } from "./godle/godle.types";
import { MatchType } from "./godle/godle.types";

const getMainDomainMatch = (
	guessed: GodleEntity,
	target: GodleEntity,
): MatchType => {
	if (guessed.mainDomain === target.mainDomain) return MatchType.EXACT;

	const isInTargetAttributes = target.attributes.includes(guessed.mainDomain);
	const isInGuessedAttributes = guessed.attributes.includes(target.mainDomain);

	if (isInTargetAttributes || isInGuessedAttributes) return MatchType.PARTIAL;

	return MatchType.NONE;
};

const getAttributesMatch = (
	guessed: GodleEntity,
	target: GodleEntity,
): MatchType => {
	const arrayMatch = compareArraysForMatch(
		guessed.attributes,
		target.attributes,
	);

	if (arrayMatch !== MatchType.NONE) return arrayMatch;

	const hasMainDomainCrossMatch =
		guessed.attributes.includes(target.mainDomain);

	if (hasMainDomainCrossMatch) return MatchType.PARTIAL;

	return MatchType.NONE;
};

const compareEntityToTarget = (
	guessedEntity: GodleEntity,
	target: GodleEntity,
): GuessResult => {
	return {
		entity: guessedEntity,
		pantheonMatch:
			guessedEntity.pantheon === target.pantheon
				? MatchType.EXACT
				: MatchType.NONE,
		subjectMatch:
			guessedEntity.subject === target.subject
				? MatchType.EXACT
				: MatchType.NONE,
		genreMatch:
			guessedEntity.genre === target.genre ? MatchType.EXACT : MatchType.NONE,
		mainDomainMatch: getMainDomainMatch(guessedEntity, target),
		attributesMatch: getAttributesMatch(guessedEntity, target),
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

const getDailyEntityFromList = (entities: GodleEntity[]): GodleEntity => {
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

export const getDailyEntity = async (): Promise<GodleEntity> => {
	const entities = await fetchAllAvailableEntitiesForGodle();
	return getDailyEntityFromList(entities);
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
	result: GuessResult;
	targetEntity: GodleEntity | null;
}> => {
	const allEntities = await fetchAllAvailableEntitiesForGodle();
	const target = getDailyEntityFromList(allEntities);

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
	results: GuessResult[];
	targetEntity: GodleEntity | null;
	isComplete: boolean;
}> => {
	const allEntities = await fetchAllAvailableEntitiesForGodle();
	const target = getDailyEntityFromList(allEntities);

	const results: GuessResult[] = [];
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
