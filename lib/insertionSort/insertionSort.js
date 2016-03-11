import {comparatorToLessThan, naturalComparator} from '../util/comparator';

/**
 * Standard Insertion Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function insertionSort (array, comparator = naturalComparator) {
    const lessThan = comparatorToLessThan(comparator),
        length = array.length;
    let i,
        j;
    for (i = 0; i < length; i++) {
        const value = array[i];
        for (j = i - 1; j > -1 && lessThan(value, array[j]); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = value;
    }
    return array;
}
