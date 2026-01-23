import { ALL_PANTHEON, type PantheonValue } from "./cards/pantheons.constants";

export const getPantheonData = (pantheon: PantheonValue) =>
	ALL_PANTHEON.find(({ value }) => pantheon === value);

export const getPantheonIcon = (pantheonValue: PantheonValue): string => {
	const pantheon = ALL_PANTHEON.find((p) => p.value === pantheonValue);
	return pantheon?.icon || "";
};
