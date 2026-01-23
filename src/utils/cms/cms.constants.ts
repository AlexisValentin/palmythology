import type { DomainValue } from "../cards/domains.constants";
import type { PantheonValue } from "../cards/pantheons.constants";
import type { SubjectValue } from "../cards/subjects.constants";

export const STORYBLOK_RESULTS_PER_PAGE = 20;
export const STORYBLOK_MAX_ITEMS_PER_REQUEST = 20;
export const STORYBLOK_SITEMAP_MAX_ITEMS = 100;

export enum STORYBLOK_VERSIONS {
	DRAFT = "draft",
	PUBLISHED = "published",
}

export interface StoryblokImageType {
	alt: string;
	filename: string;
}

export interface GodlePropertiesType {
	_uid?: string;
	component?: string;
	genre: "male" | "female" | "androgynous" | "none" | "undefined";
	domain: DomainValue[];
}

interface StoryblokLinkType {
	alt: string;
	filename: string;
}

export type CardRelatedType = Pick<
	CardItemType,
	"name" | "subtitle" | "pantheon"
> & { icon: StoryblokImageType };

export interface CardItemType {
	name: string;
	subtitle: string;
	pantheon: PantheonValue;
	subject: SubjectValue;
	images: StoryblokImageType[];
	available: boolean;
	isFolder: boolean;
	instagramUrl: StoryblokLinkType;
	relatedCards: CardRelatedType[];
}

export interface Quoi2NeufStoryType {
	title: string;
	subtitle: string;
	pantheon: PantheonValue;
	icon: StoryblokImageType;
	available?: boolean;
	teasing: string;
}

export type AboutPageType = AboutItemType[];
export interface AboutItemType {
	aboutItem: TextBlockType[];
}

export interface StoryblokCardComponentType {
	content: {
		component: string;
		name: string;
		subtitle: string;
		icon: StoryblokImageType;
		pantheon: PantheonValue;
		subject: SubjectValue;
		available: boolean;
		isFolder: boolean;
		godle?: GodlePropertiesType[];
	};
}

export interface StoryblokQ2NComponentType {
	content: {
		component: string;
		title: string;
		subtitle: PantheonValue;
		icon: { alt: string; filename: string };
		available: boolean;
		isFolder: boolean;
		pantheon: PantheonValue;
		teasing: string;
	};
}

export interface TextBlockType {
	text: string;
	illustration: {
		alt: string;
		filename: string;
	};
	component: string;
	_uid: string;
}

export interface AvailableCardForSitemap {
	slug: string;
	published_at: string;
}

export interface StoryblokStoryResponse {
	full_slug: string;
	published_at: string;
	content: {
		available: boolean;
		component: string;
	};
}

export interface FaqItemType {
	question: string;
	response: string;
}

export interface CategoryPageContentType {
	metaDescription: string;
	mdSummary?: string;
	faq?: FaqItemType[];
}

export interface StoryblokPantheonComponentType {
	content: CategoryPageContentType & {
		component: string;
	};
}

export interface StoryblokSubjectComponentType {
	content: CategoryPageContentType & {
		component: string;
	};
}