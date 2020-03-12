import {
    arraySwapPartial,
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * Standard Merge Sort
 */
export default function mergeSortInplace<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    const arraySwap: (i: number, j: number) => void = arraySwapPartial(array);

    /**
     * Merge
     */
    function merge(min: number, max: number, mid: number): void {
        let i: number;
        let j: number;
        for (i = min; i < mid; i++) {
            if (lessThan(array[mid], array[i])) {
                arraySwap(i, mid);
                for (j = mid; j < max; j++) {
                    if (lessThan(array[j + 1], array[j])) {
                        arraySwap(j, j + 1);
                    }
                }
            }
        }
    }

    /**
     * Merge Sort
     */
    function mSort(min: number, max: number): void {
        const range: number = max - min;
        if (range === 0) {
            return;
        } else if (range === 1) {
            if (lessThan(array[max], array[min])) {
                arraySwap(min, max);
            }
        } else {
            let mid: number = Math.floor((min + max) / 2);
            mSort(min, mid);
            mSort(++mid, max);
            merge(min, max, mid);
        }
    }
    mSort(0, array.length - 1);
    return array;
}
