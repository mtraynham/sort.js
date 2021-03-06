import {
    arraySwapPartial,
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * Standard Bubble Sort
 * Sometimes referred to as sinking sort, is a simple sorting algorithm that
 * repeatedly steps through the list to be sorted, compares each pair of adjacent
 * items and swaps them if they are in the wrong order. The pass through the list
 * is repeated until no swaps are needed, which indicates that the list is sorted.
 *
 * Bubble sort has worst-case and average complexity both О(n^2), where n is the
 * number of items being sorted.
 */
export default function bubbleSort<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    const arraySwap: (i: number, j: number) => void = arraySwapPartial(array);
    let length: number = array.length;
    let i: number;
    let swapped: boolean;
    // Repeat (do-while) until no item is swapped, indicating a sorted array.
    do {
        swapped = false;
        // Step 1 to length initially, but length will be decremented til we
        // reach the lower end of the array as items will "sink" to
        // their positions and larger items will "bubble" to the top.
        for (i = 1; i < length; i++) {
            // If an item is less than it's lower position, move it down.
            if (lessThan(array[i], array[i - 1])) {
                arraySwap(i, i - 1);
                // Indicate that we'll need another iteration as a swap occurred.
                // Swap is a nice shortcut in the chance that no item needed to be moved,
                // thus the array is sorted.
                swapped = true;
            }
        }
        // Decrementing our length will ignore items that have bubbled to the top.
        length--;
    } while (swapped);
    return array;
}
