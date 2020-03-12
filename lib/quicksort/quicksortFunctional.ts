import {Comparator, naturalComparator} from '../util/comparator';

const concat = Array.prototype.concat;

/**
 * A functional programming implementation of quicksort.
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 */
export default function quicksortFunctional<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    /**
     * Simple functional quicksort
     */
    function quicksort(quicksortArray: T[]): T[] {
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
