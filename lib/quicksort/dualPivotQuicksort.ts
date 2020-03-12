import {
    arraySwapPartial,
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * Standard quicksort
 */
export default function dualPivotQuicksort<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    const arraySwap: (i: number, j: number) => void = arraySwapPartial(array);
    /**
     * Dual Pivot Quicksort
     */
    function quicksort(left: number, right: number): void {
        if (left < right) {
            if (lessThan(array[right], array[left])) {
                arraySwap(left, right);
            }
            const pivot1: T = array[left];
            const pivot2: T = array[right];
            let l: number = left + 1;
            let g: number = right - 1;
            let k: number = l;
            for (k; k <= g; k++) {
                if (lessThan(array[k], pivot1)) {
                    arraySwap(k, l++);
                } else if (!lessThan(array[k], pivot2)) {
                    while (lessThan(pivot2, array[g]) && k < g) {
                        --g;
                    }
                    arraySwap(k, g--);
                    if (lessThan(array[k], pivot1)) {
                        arraySwap(k, l++);
                    }
                }
            }
            arraySwap(left, --l);
            arraySwap(right, ++g);
            quicksort(left, l - 1);
            quicksort(l + 1, g - 1);
            quicksort(g + 1, right);
        }
    }
    quicksort(0, array.length - 1);
    return array;
}
