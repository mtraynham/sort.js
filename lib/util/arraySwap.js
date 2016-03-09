/**
 * Given an array, swap the values at position i & j
 * @param {Array<*>} array
 * @param {Number} i
 * @param {Number} j
 * @return {undefined}
 */
export function arraySwap (array, i, j) {
    let tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
}

/**
 * Given an array, return a function that can swap the
 * values at i & j
 * @param {Array<*>} array
 * @return {Function}
 */
export function arraySwapPartial (array) {
    return (i, j) => {
        let tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
    };
}
