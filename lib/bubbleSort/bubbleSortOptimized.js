import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, naturalComparator} from '../util/comparator';

/**
 * Optimized Bubble Sort
 * The bubble sort algorithm can be easily optimized by observing that the
 * n-th pass finds the n-th largest element and puts it into its final place.
 * So, the inner loop can avoid looking at the last n-1 items when running
 * for the n-th time
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @return {Array<*>}
 */
export default function bubbleSortOptimized (array, comparator = naturalComparator) {
    const lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array);
    let n = array.length,
        i,
        newN;
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
