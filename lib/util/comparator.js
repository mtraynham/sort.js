/**
 * Converts a comparator function to a lessThan function
 * @param {Function} comparator
 * @return {Function}
 */
export function comparatorToLessThan (comparator) {
    return (a, b) => comparator(a, b) < 0;
}

/**
 * Converts a less than function to a comparator function
 * @param {Function} lessThan
 * @return {Function}
 */
export function lessThanToComparator (lessThan) {
    return (a, b) => lessThan(a, b) ? -1 : (lessThan(b, a) ? 1 : 0);
}

/**
 * Reverses the inputs of a bi-function
 * @param {Function} fn
 * @return {Function}
 */
export function reverse (fn) {
    return (a, b) => fn(b, a);
}

/**
 * A standard natural comparator that returns a number:
 * less that 0 denoting less than,
 * equal to 0 denoting equals, and
 * greater than 0 denoting greater than
 * @param {*} a
 * @param {*} b
 * @return {Number}
 */
export function naturalComparator (a, b) {
    return a < b ? -1 : (a > b ? 1 : 0);
}

/**
 * A numeric comparator that returns the subtraction
 * of one number from another.
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export function numericComparator (a, b) {
    return a - b;
}
