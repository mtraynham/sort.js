import {
    arraySwapPartial,
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * Standard Heap Sort
 */
export default function heapSort<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    const arraySwap: (i: number, j: number) => void = arraySwapPartial(array);

    /**
     * Heapify the array
     */
    function heapify(index: number, heapSize: number): void {
        const left: number = (2 * index) + 1;
        const right: number = left + 1;
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
    const length: number = array.length;
    let i: number = Math.floor(length / 2);
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
