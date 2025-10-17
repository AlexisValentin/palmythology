import { parseStringToSlug } from "../string";
import { getCardSlug } from "./cms.requests";

vi.mock("../string");

describe("utils/cms.requests", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	describe("getCardSlug", () => {
		describe("when all data is provided", () => {
			beforeEach(() => {
				vi.mocked(parseStringToSlug).mockReturnValueOnce("grec");
				vi.mocked(parseStringToSlug).mockReturnValueOnce("zeus");
			});

			test("should call `parseStringToSlug` twice", async () => {
				await getCardSlug("zeus", "grec");

				expect(parseStringToSlug).toHaveBeenCalledTimes(2);
				expect(parseStringToSlug).toHaveBeenNthCalledWith(1, "grec");
				expect(parseStringToSlug).toHaveBeenNthCalledWith(2, "zeus");
			});

			test("should provide card slug", async () =>
				expect(await getCardSlug("zeus", "grec")).toEqual("cards/grec/zeus"));
		});

		describe("should return an empty string", () => {
			test("when name parameter is not provided", async () => {
				expect(await getCardSlug(undefined, "grec")).toEqual("");
			});

			test("when pantheon parameter is not provided", async () => {
				expect(await getCardSlug("zeus", undefined)).toEqual("");
			});

			test("when no parameters are provided", async () => {
				expect(await getCardSlug(undefined, undefined)).toEqual("");
			});
		});
	});
});
