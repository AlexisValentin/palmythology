import { PantheonValue } from "../cards/pantheons.constants";

export type PantheonCssVars = {
	bg: string;
	text: string;
};

const PANTHEON_CSS_VARS: Record<PantheonValue, PantheonCssVars> = {
	[PantheonValue.AZTEC]: {
		bg: "--color-pantheon-aztec-bg",
		text: "--color-pantheon-aztec-text",
	},
	[PantheonValue.CELTIC]: {
		bg: "--color-pantheon-celtic-bg",
		text: "--color-pantheon-celtic-text",
	},
	[PantheonValue.CHINESE]: {
		bg: "--color-pantheon-chinese-bg",
		text: "--color-pantheon-chinese-text",
	},
	[PantheonValue.EGYPTIAN]: {
		bg: "--color-pantheon-egyptian-bg",
		text: "--color-pantheon-egyptian-text",
	},
	[PantheonValue.GREEK]: {
		bg: "--color-pantheon-greek-bg",
		text: "--color-pantheon-greek-text",
	},
	[PantheonValue.HINDU]: {
		bg: "--color-pantheon-hindu-bg",
		text: "--color-pantheon-hindu-text",
	},
	[PantheonValue.JAPANESE]: {
		bg: "--color-pantheon-japanese-bg",
		text: "--color-pantheon-japanese-text",
	},
	[PantheonValue.MAYAN]: {
		bg: "--color-pantheon-mayan-bg",
		text: "--color-pantheon-mayan-text",
	},
	[PantheonValue.MESOPOTAMIAN]: {
		bg: "--color-pantheon-mesopotamian-bg",
		text: "--color-pantheon-mesopotamian-text",
	},
	[PantheonValue.NORSE]: {
		bg: "--color-pantheon-norse-bg",
		text: "--color-pantheon-norse-text",
	},
	[PantheonValue.ROMAN]: {
		bg: "--color-pantheon-roman-bg",
		text: "--color-pantheon-roman-text",
	},
};

export const getPantheonCssVars = (pantheon: PantheonValue): PantheonCssVars =>
	PANTHEON_CSS_VARS[pantheon];

export const getPantheonInlineStyle = (
	pantheon: PantheonValue,
): React.CSSProperties => {
	const { bg, text } = PANTHEON_CSS_VARS[pantheon];
	return {
		"--pantheon-bg": `var(${bg})`,
		"--pantheon-text": `var(${text})`,
	} as React.CSSProperties;
};
