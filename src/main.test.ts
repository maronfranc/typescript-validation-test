import { isEmptyString, isNegativeNumber, isNegativeOrZeroNumber, isNil, isNotEmptyString, isNotNil } from "./validationCheck";


describe("Validation check", () => {
    it("isNil should validate any data type", () => {
        expect(isNil(null)).toBe(true);
        expect(isNil(undefined)).toBe(true);

        expect(isNil("")).toBe(false);
        expect(isNil(0)).toBe(false);
        expect(isNil(1)).toBe(false);
        expect(isNil(true)).toBe(false);
        expect(isNil(false)).toBe(false);
    });

    it("isNotNil should validate any data type", () => {
        expect(isNotNil(null)).toBe(false);
        expect(isNotNil(undefined)).toBe(false);

        expect(isNotNil("")).toBe(true);
        expect(isNotNil(0)).toBe(true);
        expect(isNotNil(1)).toBe(true);
        expect(isNotNil(true)).toBe(true);
        expect(isNotNil(false)).toBe(true);
    });

    it("isEmptyString", () => {
        expect(isEmptyString(null)).toBe(true);
        expect(isEmptyString(undefined)).toBe(true);
        expect(isEmptyString("")).toBe(true);
        expect(isEmptyString("Not empty")).toBe(false);
    });

    it("isNotEmptyString", () => {
        expect(isNotEmptyString(null)).toBe(false);
        expect(isNotEmptyString(undefined)).toBe(false);
        expect(isNotEmptyString("")).toBe(false);
        expect(isNotEmptyString("Not empty")).toBe(true);
    });

    it("isNegativeNumber", () => {
        expect(isNegativeNumber(null)).toBe(true);
        expect(isNegativeNumber(undefined)).toBe(true);
        expect(isNegativeNumber(-1)).toBe(true);
        expect(isNegativeNumber(0)).toBe(false);
        expect(isNegativeNumber(1)).toBe(false);
        expect(isNegativeNumber(0n)).toBe(false);
        expect(isNegativeNumber(NaN)).toBe(false);
    });

    it("isNegativeOrZeroNumber", () => {
        expect(isNegativeOrZeroNumber(null)).toBe(true);
        expect(isNegativeOrZeroNumber(undefined)).toBe(true);
        expect(isNegativeOrZeroNumber(-1)).toBe(true);
        expect(isNegativeOrZeroNumber(0)).toBe(true);
        expect(isNegativeOrZeroNumber(1)).toBe(false);
        expect(isNegativeNumber(NaN)).toBe(false);
    });
});
