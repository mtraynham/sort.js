import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, naturalComparator} from '../util/comparator';

/**
 * Standard Selection Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function selectionSort (array, comparator = naturalComparator) {
    const lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array),
        length = array.length;
    let min,
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
