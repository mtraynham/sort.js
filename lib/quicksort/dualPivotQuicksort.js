import {arraySwapPartial} from '../util/arraySwap';
import {comparatorToLessThan, naturalComparator} from '../util/comparator';

/**
 * Standard quicksort
 * @param {Array<*>} array
 * @param {Function} [comparator=naturalComparator]
 * @returns {Array<*>}
 */
export default function dualPivotQuicksort (array, comparator = naturalComparator) {
    let lessThan = comparatorToLessThan(comparator),
        arraySwap = arraySwapPartial(array);
    function quicksort (left, right) {
        if (left < right) {
            if (lessThan(array[right], array[left])) {
                arraySwap(left, right);
            }
            let pivot1 = array[left],
                pivot2 = array[right],
                l = left + 1,
                g = right - 1,
                k = l;
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
