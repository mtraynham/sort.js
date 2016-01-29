import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, lexicographicComparator} from '../util/comparator';

/**
 * Standard Bubble Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=lexicographicComparator]
 * @returns {Array<*>}
 */
export default function bubbleSort (array, comparator = lexicographicComparator) {
    let lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array),
        length = array.length,
        i,
        j;
    for (i = length - 1; i >= 0; i--) {
        for (j = length - i; j >= 0; j--) {
            if (lessThan(array[j], array[j - 1])) {
                arraySwap(j, j - 1);
            }
        }
    }
    return array;
}
