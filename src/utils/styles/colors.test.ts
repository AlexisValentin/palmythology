import { PantheonValue } from "../cards/pantheons.constants";
import { getPantheonCssVars, getPantheonInlineStyle } from "./colors";

describe("utils/colors", () => {
	describe("getPantheonCssVars", () => {
		test("should return correct CSS variable names for each of the 11 pantheons", () => {
			expect(getPantheonCssVars(PantheonValue.AZTEC)).toEqual({
				bg: "--color-pantheon-aztec-bg",
				text: "--color-pantheon-aztec-text",
			});
			expect(getPantheonCssVars(PantheonValue.CELTIC)).toEqual({
				bg: "--color-pantheon-celtic-bg",
				text: "--color-pantheon-celtic-text",
			});
			expect(getPantheonCssVars(PantheonValue.CHINESE)).toEqual({
				bg: "--color-pantheon-chinese-bg",
				text: "--color-pantheon-chinese-text",
			});
			expect(getPantheonCssVars(PantheonValue.EGYPTIAN)).toEqual({
				bg: "--color-pantheon-egyptian-bg",
				text: "--color-pantheon-egyptian-text",
			});
			expect(getPantheonCssVars(PantheonValue.GREEK)).toEqual({
				bg: "--color-pantheon-greek-bg",
				text: "--color-pantheon-greek-text",
			});
			expect(getPantheonCssVars(PantheonValue.HINDU)).toEqual({
				bg: "--color-pantheon-hindu-bg",
				text: "--color-pantheon-hindu-text",
			});
			expect(getPantheonCssVars(PantheonValue.JAPANESE)).toEqual({
				bg: "--color-pantheon-japanese-bg",
				text: "--color-pantheon-japanese-text",
			});
			expect(getPantheonCssVars(PantheonValue.MAYAN)).toEqual({
				bg: "--color-pantheon-mayan-bg",
				text: "--color-pantheon-mayan-text",
			});
			expect(getPantheonCssVars(PantheonValue.MESOPOTAMIAN)).toEqual({
				bg: "--color-pantheon-mesopotamian-bg",
				text: "--color-pantheon-mesopotamian-text",
			});
			expect(getPantheonCssVars(PantheonValue.NORSE)).toEqual({
				bg: "--color-pantheon-norse-bg",
				text: "--color-pantheon-norse-text",
			});
			expect(getPantheonCssVars(PantheonValue.ROMAN)).toEqual({
				bg: "--color-pantheon-roman-bg",
				text: "--color-pantheon-roman-text",
			});
		});
	});

	describe("getPantheonInlineStyle", () => {
		test("should return inline style object with CSS variable references", () => {
			expect(getPantheonInlineStyle(PantheonValue.GREEK)).toEqual({
				"--pantheon-bg": "var(--color-pantheon-greek-bg)",
				"--pantheon-text": "var(--color-pantheon-greek-text)",
			});
			expect(getPantheonInlineStyle(PantheonValue.NORSE)).toEqual({
				"--pantheon-bg": "var(--color-pantheon-norse-bg)",
				"--pantheon-text": "var(--color-pantheon-norse-text)",
			});
		});
	});
});
