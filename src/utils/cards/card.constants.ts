import type { StoryblokImageType } from "../cms/cms.constants";
import type { GenreLabel, GenreValue } from "./genres.constants";
import type { PantheonLabel, PantheonValue } from "./pantheons.constants";
import type { SubjectLabel, SubjectValue } from "./subjects.constants";

export interface Card {
	details: CardDetails;
}

export interface CardDetails {
		name: string;
		subtitle: string;
		icon: StoryblokImageType;
		pantheon: PantheonValue;
		subject: SubjectValue;
		genre: GenreValue;
		available: boolean;
		isFolder: boolean;
		summary?: string;
		image?: string;
	}

export interface TranslatedCardDetails {
		name: string;
		subtitle: string;
		icon: StoryblokImageType;
		pantheon: PantheonLabel;
		subject: SubjectLabel;
		genre: GenreLabel;
		available: boolean;
		isFolder: boolean;
		summary?: string;
		image?: string;
	}

export interface ResearchCriterias {
		pantheon: string;
		subject: string;
		genre: string;
	}
