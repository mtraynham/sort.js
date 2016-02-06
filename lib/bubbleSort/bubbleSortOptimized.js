import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, lexicographicComparator} from '../util/comparator';

/**
 * Optimized Bubble Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=lexicographicComparator]
 * @returns {Array<*>}
 */
export default function bubbleSortOptimized (array, comparator = lexicographicComparator) {
    let lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array),
        length = array.length,
        i,
        newLength;
    do {
        newLength = 0;
        for (i = 1; i < length; i++) {
            if (lessThan(array[i], array[i - 1])) {
                arraySwap(i, i - 1);
                newLength = i;
            }
        }
        length = newLength;
    } while (newLength !== 0);
    return array;
}
