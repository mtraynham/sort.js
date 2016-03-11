import {comparatorToLessThan, naturalComparator} from '../util/comparator';

/**
 * Standard Merge Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function mergeSort (array, comparator = naturalComparator) {
    const lessThan = comparatorToLessThan(comparator);
    /**
     * Merge
     * @param {Array<*>} left
     * @param {Array<*>} right
     * @return {Array<*>}
     */
    function merge (left, right) {
        const result = [];
        while (left.length > 0 && right.length > 0) {
            result.push(lessThan(left[0], right[0]) ? left.shift() : right.shift());
        }
        return result.concat(left.length ? left : right);
    }

    /**
     * Merge
     * @param {Array<*>} mergeArray
     * @return {Array<*>}
     */
    function _mergeSort (mergeArray) {
        if (mergeArray.length <= 1) {
            return mergeArray;
        }
        const mid = Math.floor(mergeArray.length / 2);
        return merge(_mergeSort(mergeArray.slice(0, mid)), _mergeSort(mergeArray.slice(mid)));
    }

    return _mergeSort(array);
}
