import {arraySwapPartial} from '../util/arraySwap';

/**
 * An in-place quicksort
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 */
const quicksortInplace = (array, lessThan) => {
    let arraySwap = arraySwapPartial(array);
    let quicksort = (left, right) => {
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
};

export default quicksortInplace;
