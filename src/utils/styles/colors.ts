import { PantheonValue } from "../cards/pantheons.constants";
import {
	COLOR_TAINTS,
	COLORS,
	MYTHOLOGY_COLORS,
	type PantheonStyleType,
	TEXT_COLORS,
} from "./colors.constants";

export const getPantheonStyle = (
	pantheon: PantheonValue,
): PantheonStyleType => {
	switch (pantheon) {
		case PantheonValue.AZTEC:
			return {
				backgroundColor: MYTHOLOGY_COLORS.AZTEC,
				textColor: TEXT_COLORS.GENERIC,
			};
		case PantheonValue.CELTIC:
			return {
				backgroundColor: MYTHOLOGY_COLORS.CELTIC,
				textColor: TEXT_COLORS.GENERIC,
			};
		case PantheonValue.CHINESE:
			return {
				backgroundColor: MYTHOLOGY_COLORS.CHINESE,
				textColor: TEXT_COLORS.GENERIC,
			};
		case PantheonValue.EGYPTIAN:
			return {
				backgroundColor: MYTHOLOGY_COLORS.EGYPTIAN,
				textColor: TEXT_COLORS.EGYPTIAN,
			};
		case PantheonValue.GREEK:
			return {
				backgroundColor: MYTHOLOGY_COLORS.GREEK,
				textColor: TEXT_COLORS.GENERIC,
			};
		case PantheonValue.HINDU:
			return {
				backgroundColor: MYTHOLOGY_COLORS.HINDU,
				textColor: TEXT_COLORS.HINDU,
			};
		case PantheonValue.JAPANESE:
			return {
				backgroundColor: MYTHOLOGY_COLORS.JAPANESE,
				textColor: TEXT_COLORS.JAPANESE,
			};
		case PantheonValue.MAYAN:
			return {
				backgroundColor: MYTHOLOGY_COLORS.MAYAN,
				textColor: TEXT_COLORS.GENERIC,
			};
		case PantheonValue.MESOPOTAMIAN:
			return {
				backgroundColor: MYTHOLOGY_COLORS.MESOPOTAMIAN,
				textColor: TEXT_COLORS.GENERIC,
			};
		case PantheonValue.NORSE:
			return {
				backgroundColor: MYTHOLOGY_COLORS.NORSE,
				textColor: TEXT_COLORS.GENERIC,
			};
		case PantheonValue.ROMAN:
			return {
				backgroundColor: MYTHOLOGY_COLORS.ROMAN,
				textColor: TEXT_COLORS.ROMAN,
			};
		default: {
			return {
				backgroundColor: `${COLORS.LIME}-${COLOR_TAINTS.EXTRA_DARK}`,
				textColor: TEXT_COLORS.GENERIC,
			};
		}
	}
};

export const getPantheonMainColor = (pantheon: PantheonValue) =>
	MYTHOLOGY_COLORS[pantheon.toUpperCase() as keyof typeof MYTHOLOGY_COLORS];

export const getPantheonTextColor = (pantheon: PantheonValue) =>
	hasSpecialTextColor(pantheon)
		? TEXT_COLORS[pantheon.toUpperCase() as keyof typeof TEXT_COLORS]
		: TEXT_COLORS.GENERIC;

export const hasSpecialTextColor = (pantheon: PantheonValue) =>
	[
		PantheonValue.EGYPTIAN,
		PantheonValue.HINDU,
		PantheonValue.JAPANESE,
		PantheonValue.ROMAN,
	].includes(pantheon);
