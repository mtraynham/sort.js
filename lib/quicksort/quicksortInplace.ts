import {
    arraySwapPartial,
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * An in-place quicksort
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 */
export default function quicksortInplace<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    const arraySwap: (i: number, j: number) => void = arraySwapPartial(array);
    /**
     * Simple in place quicksort
     */
    function quicksort(left: number, right: number): void {
        if (left < right) {
            const pivot: T = array[(left + right) >> 1];
            let i: number = left;
            let j: number = right;
            do {
                while (lessThan(array[i], pivot)) {
                    i++;
                }
                while (lessThan(pivot, array[j])) {
                    j--;
                }
                if (i <= j) {
                    arraySwap(i++, j--);
                }
            } while (i <= j);
            quicksort(left, j);
            quicksort(i, right);
        }
    }
    quicksort(0, array.length - 1);
    return array;
}
