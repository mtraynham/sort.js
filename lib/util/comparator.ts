export interface LessThan<T> extends Function {
    (a: T, b: T): boolean;
}

export interface Comparator<T> extends Function {
    (a: T, b: T): number;
}

/**
 * Converts a comparator function to a lessThan function
 */
export function comparatorToLessThan<T>(comparator: Comparator<T>): LessThan<T> {
    return (a: T, b: T): boolean => comparator(a, b) < 0;
}

/**
 * Converts a less than function to a comparator function
 */
export function lessThanToComparator<T>(lessThan: LessThan<T>): Comparator<T> {
    return (a: T, b: T): number => (lessThan(a, b) ? -1 : (lessThan(b, a) ? 1 : 0));
}

/**
 * Reverses the inputs of a bi-function
 */
export function reverse<A, B, R>(fn: (b: B, a: A) => R): (a: A, b: B) => R {
    return (a: A, b: B): R => fn(b, a);
}

/**
 * A standard natural comparator that returns a number:
 * less that 0 denoting less than,
 * equal to 0 denoting equals, and
 * greater than 0 denoting greater than
 */
export function naturalComparator<T>(a: T, b: T): -1 | 0 | 1 {
    return a < b ? -1 : (a > b ? 1 : 0);
}

/**
 * A numeric comparator that returns the subtraction
 * of one number from another.
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export function numericComparator<T extends number>(a: T, b: T): number {
    return a - b;
}
