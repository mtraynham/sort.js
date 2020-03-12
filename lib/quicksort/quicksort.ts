import {Comparator, comparatorToLessThan, LessThan, naturalComparator} from '../util/comparator';

const concat = Array.prototype.concat;

/**
 * Standard quicksort
 */
export default function quicksort<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    /**
     * Simple standard quicksort
     */
    function qSort(quicksortArray: T[]): T[] {
        if (quicksortArray.length <= 1) {
            return quicksortArray;
        }
        const left: T[] = [];
        const right: T[] = [];
        const length: number = quicksortArray.length;
        const pivot: T = quicksortArray[0];
        let index = 0;

        while (++index < length) {
            const value = quicksortArray[index];
            if (lessThan(value, pivot)) {
                left.push(value);
            } else {
                right.push(value);
            }
        }
        return concat.call(qSort(left), pivot, qSort(right));
    }
    return qSort(array);
}
