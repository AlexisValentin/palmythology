import { isObjectEmpty } from "./object";

describe("helpers/object", () => {
  describe("isObjectEmpty", () => {
    test("should return `true` if provided object is empty", () => {
      expect(isObjectEmpty({})).toEqual(true);
    });

    test("should return `false` if provided object has any property", () => {
      expect(isObjectEmpty({ pantheon: "greek" })).toEqual(false);
    });
  });
});
