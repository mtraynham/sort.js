import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, naturalComparator} from '../util/comparator';

/**
 * Standard Heap Sort
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function heapSort (array, comparator = naturalComparator) {
    const lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array);

    /**
     * Heapify the array
     * @param {Number} index
     * @param {Number} heapSize
     * @return {undefined}
     */
    function heapify (index, heapSize) {
        const left = 2 * index + 1,
            right = left + 1;
        let largest = index;
        if (left < heapSize && lessThan(array[largest], array[left])) {
            largest = left;
        }
        if (right < heapSize && lessThan(array[largest], array[right])) {
            largest = right;
        }
        if (largest !== index) {
            arraySwap(index, largest);
            heapify(largest, heapSize);
        }
    }
    const length = array.length;
    let i = Math.floor(length / 2);
    while (i--) {
        heapify(i, length);
    }
    i = length;
    while (i--) {
        arraySwap(0, i);
        heapify(0, i);
    }
    return array;
}
