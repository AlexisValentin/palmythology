import { isPageServerSide } from "./browser";

export enum LOCAL_STORAGE_KEYS {
	MODAL_TRACKING_LAST_DISPLAY = "MODAL_TRACKING_LAST_DISPLAY",
	MODAL_SOCIALS_FOLLOW_LAST_CLOSED = "MODAL_SOCIALS_FOLLOW_LAST_CLOSED",
	MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED = "MODAL_SOCIALS_INCENTIVE_LAST_COLLAPSED",
	MODAL_SOCIALS_INCENTIVE_VISIT_COUNT = "MODAL_SOCIALS_INCENTIVE_VISIT_COUNT",
	GODLE_DAILY_STATE = "GODLE_DAILY_STATE",
	GODLE_STATISTICS = "GODLE_STATISTICS",
}

export const getFromLocalStorage = (key: LOCAL_STORAGE_KEYS) => {
	if (isPageServerSide()) return null;

	return localStorage.getItem(key);
};

export const setInLocalStorage = (key: LOCAL_STORAGE_KEYS, payload: any) => {
	if (isPageServerSide()) return null;

	return localStorage.setItem(key, payload);
};

export const removeFromLocalStorage = (key: LOCAL_STORAGE_KEYS) => {
	if (isPageServerSide()) return null;

	return localStorage.removeItem(key);
};
