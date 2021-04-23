import { isEmptyObject, isEmptyString, isNegativeNumber, isNegativeOrZeroNumber, isNil, isNotEmptyString, isNotNil } from "./validationCheck";


interface ITestObj {
    number?: {
        optional?: number;
        undefined: number | undefined;
        null?: number | null;
        nil?: number | null | undefined;
        zero: number;
        negative: number;
        positive: number;
        obj?: {};
    } | null | undefined;
    string?: {
        optional?: string;
        undefined: string | undefined;
        null?: string | null;
        nil?: string | null | undefined;
        empty?: string | null | undefined;
        notEmpty?: string | null | undefined;
    } | null | undefined;
    bool?: {
        optional?: boolean;
        undefined: boolean | undefined;
        null?: boolean | null;
        nil?: boolean | null | undefined;
        true: boolean | null | undefined;
        false: boolean | null | undefined;
    } | null | undefined;
}

describe("Validation check", () => {
    it("should validate object and mutate types correctly", () => {
        const obj: ITestObj = {
            number: {
                zero: 0,
                negative: -1,
                undefined: undefined,
                null: null,
                positive: 1,
                obj: {}
            },
            string: {
                undefined: undefined,
                null: null,
                empty: "",
                notEmpty: "Not empty"
            },
            bool: {
                undefined: undefined,
                null: null,
                true: true,
                false: false
            }
        };

        expect(isNil(obj.number)).toBe(false);

        if (isNotNil(obj.string)) {
            expect(isEmptyString(obj.string.null)).toBe(true);
            expect(isEmptyString(obj.string.undefined)).toBe(true);
            expect(isEmptyString(obj.string.empty)).toBe(true);
            expect(isEmptyString(obj.string.notEmpty)).toBe(false);
        }

        if (isNotNil(obj.number)) {
            expect(isNil(obj.number.null)).toBe(true);
            expect(isNil(obj.number.undefined)).toBe(true);
            expect(isNil(obj.number.obj)).toBe(false);

            expect(isNegativeOrZeroNumber(obj.number.zero)).toBe(true);
            expect(isNegativeOrZeroNumber(obj.number.negative)).toBe(true);
            expect(isNegativeOrZeroNumber(obj.number.positive)).toBe(false);
            expect(isNegativeOrZeroNumber(obj.number.undefined)).toBe(true);
        };

        if (isNotNil(obj.bool)) {
            expect(isNil(obj.bool.false)).toBe(false);
            expect(isNil(obj.bool.true)).toBe(false);
        }
    });

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

    it("isEmptyObject", () => {
        expect(isEmptyObject(undefined)).toBe(true);
        expect(isEmptyObject(null)).toBe(true);
        expect(isEmptyObject({})).toBe(true);
        expect(isEmptyObject({ id: 1 })).toBe(false);
        expect(isEmptyObject({ objObj: {} })).toBe(false);
    });
});
