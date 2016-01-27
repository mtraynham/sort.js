import {comparatorToLessThan, defaultComparator} from '../util/comparator';

let concat = Array.prototype.concat;

/**
 * Returns a new array
 */
const quicksort = (array, comparator = defaultComparator) => {
    let lessThan = comparatorToLessThan(comparator);
    if (array.length <= 1) {
        return array;
    }
    let left = [],
        right = [],
        pivot = array[0],
        i = 1,
        length = array.length,
        value;

    for (i; i < length; i++) {
        value = array[i];
        if (lessThan(value, pivot)) {
            left.push(value);
        } else {
            right.push(value);
        }
    }
    return concat.call(quicksort(left), pivot, quicksort(right));
};

export default quicksort;
