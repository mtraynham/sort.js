import {naturalComparator} from '../util/comparator';

let concat = Array.prototype.concat;

/**
 * A functional programming implementation of quicksort.
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @returns {Array<*>}
 */
export default function quicksortFunctional (array, comparator = naturalComparator) {
    function quicksort (array) {
        if (array.length <= 1) {
            return array;
        }
        let pivot = array[Math.floor(array.length / 2)];
        return concat.call(
            quicksort(array.filter(x => comparator(x, pivot) < 0)),
            array.filter(x => comparator(x, pivot) === 0),
            quicksort(array.filter(x => comparator(x, pivot) > 0)));
    }
    return quicksort(array);
}
