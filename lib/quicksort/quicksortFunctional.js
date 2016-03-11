import {naturalComparator} from '../util/comparator';

const concat = Array.prototype.concat;

/**
 * A functional programming implementation of quicksort.
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function quicksortFunctional (array, comparator = naturalComparator) {
    /**
     * Simple functional quicksort
     * @param {Array<*>} array
     * @return {Array<*>}
     */
    function quicksort (quicksortArray) {
        if (quicksortArray.length <= 1) {
            return quicksortArray;
        }
        const pivot = quicksortArray[Math.floor(quicksortArray.length / 2)];
        return concat.call(
            quicksort(quicksortArray.filter(x => comparator(x, pivot) < 0)),
            quicksortArray.filter(x => comparator(x, pivot) === 0),
            quicksort(quicksortArray.filter(x => comparator(x, pivot) > 0)));
    }
    return quicksort(array);
}
