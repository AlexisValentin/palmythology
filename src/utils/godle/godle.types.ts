import type { AttributeValue } from "../cards/attributes.constants";
import type { GenreValue } from "../cards/genres.constants";
import type { PantheonValue } from "../cards/pantheons.constants";
import type { SubjectValue } from "../cards/subjects.constants";

export interface GodleEntity {
		name: string;
		pantheon: PantheonValue;
		subject: SubjectValue;
		genre: GenreValue;
		slug: string;
		icon: {
			alt: string;
			filename: string;
		};
		mainDomain: AttributeValue;
		attributes: AttributeValue[];
	}

export enum MatchType {
	EXACT = "exact",
	PARTIAL = "partial",
	NONE = "none",
}

export interface GuessResult {
		entity: GodleEntity;
		pantheonMatch: MatchType;
		subjectMatch: MatchType;
		genreMatch: MatchType;
		mainDomainMatch: MatchType;
		attributesMatch: MatchType;
		isCorrect: boolean;
	}

export interface GodleDailyState {
	date: string;
	targetEntityName: string;
	guesses: string[];
	isComplete: boolean;
	isWon: boolean;
}

export interface GodleStats {
	gamesPlayed: number;
	gamesWon: number;
	currentStreak: number;
	maxStreak: number;
	guessDistribution: Record<number, number>;
	lastPlayedDate: string;
}
