import {comparatorToLessThan, naturalComparator} from '../util/comparator';

const concat = Array.prototype.concat;

/**
 * Standard quicksort
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function quicksort (array, comparator = naturalComparator) {
    const lessThan = comparatorToLessThan(comparator);
    /**
     * Simple standard quicksort
     * @param {Array<*>} quicksortArray
     * @return {Array<*>}
     */
    function _quicksort (quicksortArray) {
        if (quicksortArray.length <= 1) {
            return quicksortArray;
        }
        const left = [],
            right = [],
            length = quicksortArray.length,
            pivot = quicksortArray[0];
        let index = 0;

        while (++index < length) {
            const value = quicksortArray[index];
            if (lessThan(value, pivot)) {
                left.push(value);
            } else {
                right.push(value);
            }
        }
        return concat.call(_quicksort(left), pivot, _quicksort(right));
    }
    return _quicksort(array);
}
