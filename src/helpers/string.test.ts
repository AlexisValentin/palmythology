import {
  parseStringToSlug,
  replaceSpacesByDashes,
  stripDiacritics,
} from "./string";

describe("helpers/string", () => {
  describe("stripDiacritics", () => {
    test("should not modify unaccentuated string", () =>
      expect(stripDiacritics("Ulysse")).toEqual("Ulysse"));

    test("should not modify spaced string", () =>
      expect(stripDiacritics("Gae Bolga")).toEqual("Gae Bolga"));

    test("should get rid of accents of string", () =>
      expect(stripDiacritics("Déméter")).toEqual("Demeter"));

    test("should get rid of accents of spaced string", () =>
      expect(stripDiacritics("Déméter, déesse de l'agriculture")).toEqual(
        "Demeter, deesse de l'agriculture"
      ));
  });

  describe("replaceSpacesByDashes", () => {
    test("should not modify undashed string", () =>
      expect(replaceSpacesByDashes("Anubis")).toEqual("Anubis"));

    test("should not modify dashed string", () =>
      expect(replaceSpacesByDashes("Yamata-no-Orochi")).toEqual(
        "Yamata-no-Orochi"
      ));

    test("should replace spaces by dashes", () =>
      expect(replaceSpacesByDashes("Yamata no Orochi")).toEqual(
        "Yamata-no-Orochi"
      ));
  });

  describe("parseStringToSlug", () => {
    test("should not modify unspaced string", () =>
      expect(parseStringToSlug("Morrigan")).toEqual("morrigan"));

    test("should parse spaced string", () =>
      expect(parseStringToSlug("Le guide de la Palmythology")).toEqual(
        "le-guide-de-la-palmythology"
      ));

    test("should parse accentuated string", () =>
      expect(parseStringToSlug("Rê")).toEqual("re"));

    test("should parse accentuated and spaced string", () =>
      expect(parseStringToSlug("Les grandes cités égyptiennes")).toEqual(
        "les-grandes-cites-egyptiennes"
      ));
  });
});
