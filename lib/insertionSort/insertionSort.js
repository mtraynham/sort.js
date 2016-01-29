import {comparatorToLessThan, lexicographicComparator} from '../util/comparator';

/**
 * Standard Insertion Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=lexicographicComparator]
 * @returns {Array<*>}
 */
export default function insertionSort (array, comparator = lexicographicComparator) {
    let lessThan = comparatorToLessThan(comparator),
        length = array.length,
        value,
        i,
        j;
    for (i = 0; i < length; i++) {
        value = array[i];
        for (j = i - 1; j > -1 && lessThan(value, array[j]); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = value;
    }
    return array;
}
