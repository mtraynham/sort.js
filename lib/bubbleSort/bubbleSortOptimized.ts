import {
    arraySwapPartial,
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * Optimized Bubble Sort
 * The bubble sort algorithm can be easily optimized by observing that the
 * n-th pass finds the n-th largest element and puts it into its final place.
 * So, the inner loop can avoid looking at the last n-1 items when running
 * for the n-th time
 */
export default function bubbleSortOptimized<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    const arraySwap: (i: number, j: number) => void = arraySwapPartial(array);
    let n: number = array.length;
    let i: number;
    let newN: number;
    do {
        // Instead of the swapped boolean flag, we can track the last n item that bubbled to the top.
        // Checking if n > 0 will suggest that some portion of the array was swapped
        // but also denote that it can be ignored in the next iteration of comparisons.
        newN = 0;
        for (i = 1; i < n; i++) {
            if (lessThan(array[i], array[i - 1])) {
                arraySwap(i, i - 1);
                newN = i;
            }
        }
        n = newN;
    } while (n !== 0);
    return array;
}
