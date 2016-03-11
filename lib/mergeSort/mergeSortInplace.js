import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, naturalComparator} from '../util/comparator';

/**
 * Standard Merge Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function mergeSortInplace (array, comparator = naturalComparator) {
    const lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array);

    /**
     * Merge
     * @param {Number} min
     * @param {Number} max
     * @param {Number} mid
     * @return {undefined}
     */
    function merge (min, max, mid) {
        let i,
            j;
        for (i = min; i < mid; i++) {
            if (lessThan(array[mid], array[i])) {
                arraySwap(i, mid);
                for (j = mid; j < max; j++) {
                    if (lessThan(array[j + 1], array[j])) {
                        arraySwap(j, j + 1);
                    }
                }
            }
        }
    }

    /**
     * Merge Sort
     * @param {Number} min
     * @param {Number} max
     * @return {undefined}
     */
    function _mergeSort (min, max) {
        const range = max - min;
        if (range === 0) {
            return;
        } else if (range === 1) {
            if (lessThan(array[max], array[min])) {
                arraySwap(min, max);
            }
        } else {
            let mid = Math.floor((min + max) / 2);
            _mergeSort(min, mid);
            _mergeSort(++mid, max);
            merge(min, max, mid);
        }
    }
    _mergeSort(0, array.length - 1);
    return array;
}
