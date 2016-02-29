import {comparatorToLessThan, naturalComparator} from '../util/comparator';

let concat = Array.prototype.concat;

/**
 * Standard quicksort
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @returns {Array<*>}
 */
export default function quicksort (array, comparator = naturalComparator) {
    let lessThan = comparatorToLessThan(comparator);
    function _quicksort (array) {
        if (array.length <= 1) {
            return array;
        }
        let left = [],
            right = [],
            index = 0,
            length = array.length,
            pivot = array[0],
            value;

        while (++index < length) {
            value = array[index];
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
