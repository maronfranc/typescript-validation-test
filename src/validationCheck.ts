/**
 * Check if `val === undefined || val === null`.
 */
export const isNil = <T extends any>(val?: T | null): val is undefined | null => val === undefined || val === null;
/**
 * Check if `val === undefined || val === null || val === ""`.
 */
export const isEmptyString = <T extends string>(val?: T | null): val is undefined | null => isNil(val) || val === "";
/**
 * Check if `val === undefined || val === null || val === 0`.
 */
export const isNegativeNumber = <T extends number | BigInt>(val?: T | null): val is undefined | null => isNil(val) || val < 0;
/**
 * Check if `val === undefined || val === null || val <= 0`.
 */
export const isNegativeOrZeroNumber = <T extends number | BigInt>(val?: T | null): val is undefined | null => isNil(val) || val <= 0;

/**
 * Check if `obj === undefined && obj === null && obj === {}`.
 */
export const isEmptyObject = <T extends Record<string, any>>(obj?: T | null): obj is undefined | null => {
    if (obj === undefined && obj === null) {
        return true;
    }

    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
};

/**
 * Check if `val !== undefined && val !== null`.
 */
export const isNotNil = <T extends any>(val?: T): val is Exclude<T, undefined | null> => val !== undefined && val !== null;
/**
 * Check if `val !== undefined && val !== null`.
 */
export const isNotEmptyString = <T extends any>(val?: T): val is Exclude<T, undefined | null> => val !== undefined && val !== null && val !== "";

