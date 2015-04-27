import {defaultComparator} from '../util/comparator';

let concat = Array.prototype.concat;

/**
 * A functional programming implementation of quicksort.
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 */
const quicksortFunctional = (array, comparator = defaultComparator) => {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[Math.round(array.length / 2)];
    return concat.call(
        quicksortFunctional(array.filter((x) => comparator(x, pivot) < 0)),
        array.filter((x) => comparator(x, pivot) === 0),
        quicksortFunctional(array.filter((x) => comparator(x, pivot) > 0)));
};

export default quicksortFunctional;
