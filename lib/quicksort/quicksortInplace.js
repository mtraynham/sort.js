import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, naturalComparator} from '../util/comparator';

/**
 * An in-place quicksort
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function quicksortInplace (array, comparator = naturalComparator) {
    let lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array);
    /**
     * Simple in place quicksort
     * @param {Number} left
     * @param {Number} right
     * @return {undefined}
     */
    function quicksort (left, right) {
        if (left < right) {
            let pivot = array[(left + right) >> 1],
                i = left,
                j = right;
            do {
                while (lessThan(array[i], pivot)) {
                    i++;
                }
                while (lessThan(pivot, array[j])) {
                    j--;
                }
                if (i <= j) {
                    arraySwap(i++, j--);
                }
            } while (i <= j);
            quicksort(left, j);
            quicksort(i, right);
        }
    }
    quicksort(0, array.length - 1);
    return array;
}
