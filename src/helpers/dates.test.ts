import { MONTHS, isMonthCodeRelevant, stringifyMonthCode } from "./dates";

describe("helpers/dates", () => {
  describe("isMonthCodeRelevant", () => {
    test("should month code be relevant between `0` and `12`", () => {
      for (let i = 0; i < MONTHS.length; i++) {
        expect(isMonthCodeRelevant(i)).toEqual(true);
      }
    });

    test("should month code not be relevant beyond `0` and `12`", () => {
      expect(isMonthCodeRelevant(-1)).toEqual(false);
      expect(isMonthCodeRelevant(12)).toEqual(false);
      expect(isMonthCodeRelevant(333)).toEqual(false);
    });
  });

  describe("stringifyMonthCode", () => {
    test("should return month name according to month code provided", () => {
      expect(stringifyMonthCode(0)).toEqual("Janvier");
      expect(stringifyMonthCode(1)).toEqual("Février");
      expect(stringifyMonthCode(2)).toEqual("Mars");
      expect(stringifyMonthCode(3)).toEqual("Avril");
      expect(stringifyMonthCode(4)).toEqual("Mai");
      expect(stringifyMonthCode(5)).toEqual("Juin");
      expect(stringifyMonthCode(6)).toEqual("Juillet");
      expect(stringifyMonthCode(7)).toEqual("Août");
      expect(stringifyMonthCode(8)).toEqual("Septembre");
      expect(stringifyMonthCode(9)).toEqual("Octobre");
      expect(stringifyMonthCode(10)).toEqual("Novembre");
      expect(stringifyMonthCode(11)).toEqual("Décembre");
    });

    test("should return `???` if provided month code is irrelevant", () => {
      expect(stringifyMonthCode(-1)).toEqual("???");
      expect(stringifyMonthCode(12)).toEqual("???");
      expect(stringifyMonthCode(333)).toEqual("???");
    });
  });
});
