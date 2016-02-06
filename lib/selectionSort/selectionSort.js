import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, lexicographicComparator} from '../util/comparator';

/**
 * Standard Selection Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=lexicographicComparator]
 * @returns {Array<*>}
 */
export default function selectionSort (array, comparator = lexicographicComparator) {
    let lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array),
        length = array.length,
        min,
        i,
        j;

    for (i = 0; i < length; i++) {
        min = i;
        for (j = i + 1; j < length; j++) {
            if (lessThan(array[j], array[min])) {
                min = j;
            }
        }
        if (i !== min) {
            arraySwap(i, min);
        }
    }
    return array;
}
