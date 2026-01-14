import { getPantheonLabelFromValue } from "./cards/pantheons";
import type { GuessResult } from "./godle/godle.types";
import { getPantheonIcon } from "./pantheons";

export const getEntityIcon = (guess: GuessResult) => {
	if (guess.entity.icon?.filename) {
		return {
			src: guess.entity.icon.filename,
			alt: guess.entity.icon.alt,
		};
	}

	return {
		src: getPantheonIcon(guess.entity.pantheon),
		alt: getPantheonLabelFromValue(guess.entity.pantheon) || "",
	};
};
