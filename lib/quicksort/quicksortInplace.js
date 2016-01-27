import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, defaultComparator} from '../util/comparator';

/**
 * An in-place quicksort
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 */
export default function quicksortInplace (array, comparator = defaultComparator) {
    let lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array),
        quicksort = (left, right) => {
            if (left < right) {
                let pivot = array[(left + right) >> 1],
                    i = left,
                    j = right;
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
        };
    quicksort(0, array.length - 1);
    return array;
}
