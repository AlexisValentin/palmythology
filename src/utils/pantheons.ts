import { ALL_PANTHEON, type PantheonValue } from "./cards/pantheons.constants";

export const getPantheonData = (pantheon: PantheonValue) =>
	ALL_PANTHEON.find(({ value }) => pantheon === value);
