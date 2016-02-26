import {lexicographicComparator} from '../util/comparator';

/**
 * Simple Dual Pivot quicksort
 * @param {Array<*>} array
 * @param {Function} [comparator=lexicographicComparator]
 * @returns {Array<*>}
 */
export default function dartDualPivotQuicksort2 (array, comparator = lexicographicComparator) {

    const INSERTION_SORT_THRESHOLD = 32;

    function sort (left, right) {
        if ((right - left) < INSERTION_SORT_THRESHOLD) {
            insertionSort(left, right);
        } else {
            quicksort(left, right);
        }
    }

    function insertionSort (left, right) {
        for (let i = left + 1; i <= right; i++) {
            let el = array[i],
                j = i;
            while ((j > left) && (comparator(array[j - 1], el) > 0)) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = el;
        }
    }

    function quicksort (left, right) {

        let sixth = (right - left + 1) / 6 | 0,
            index1 = left + sixth,
            index5 = right - sixth,
            index3 = (left + right) >>> 1,
            index2 = index3 - sixth,
            index4 = index3 + sixth;

        let el1 = array[index1],
            el2 = array[index2],
            el3 = array[index3],
            el4 = array[index4],
            el5 = array[index5];

        let t;

        if (comparator(el1, el2) > 0) {
            t = el1;
            el1 = el2;
            el2 = t;
        }
        if (comparator(el4, el5) > 0) {
            t = el4;
            el4 = el5;
            el5 = t;
        }
        if (comparator(el1, el3) > 0) {
            t = el1;
            el1 = el3;
            el3 = t;
        }
        if (comparator(el2, el3) > 0) {
            t = el2;
            el2 = el3;
            el3 = t;
        }
        if (comparator(el1, el4) > 0) {
            t = el1;
            el1 = el4;
            el4 = t;
        }
        if (comparator(el3, el4) > 0) {
            t = el3;
            el3 = el4;
            el4 = t;
        }
        if (comparator(el2, el5) > 0) {
            t = el2;
            el2 = el5;
            el5 = t;
        }
        if (comparator(el2, el3) > 0) {
            t = el2;
            el2 = el3;
            el3 = t;
        }
        if (comparator(el4, el5) > 0) {
            t = el4;
            el4 = el5;
            el5 = t;
        }

        let pivot1 = el2,
            pivot2 = el4;

        array[index1] = el1;
        array[index3] = el3;
        array[index5] = el5;

        array[index2] = array[left];
        array[index4] = array[right];

        let less = left + 1,
            great = right - 1;

        let pivotsDiffer = (comparator(pivot1, pivot2) !== 0);
        if (pivotsDiffer) {
            outer1:
            for (let k = less; k <= great; k++) {
                let ak = array[k];
                if (comparator(ak, pivot1) < 0) {
                    if (k !== less) {
                        array[k] = array[less];
                        array[less] = ak;
                    }
                    less++;
                } else if (comparator(ak, pivot2) > 0) {
                    while (comparator(array[great], pivot2) > 0) {
                        if (great-- === k) {
                            break outer1;
                        }
                    }
                    if (comparator(array[great], pivot1) < 0) {
                        array[k] = array[less];
                        array[less++] = array[great];
                        array[great--] = ak;
                    } else {
                        array[k] = array[great];
                        array[great--] = ak;
                    }
                }
            }
        } else {
            for (let k = less; k <= great; ++k) {
                let ak = array[k],
                    comp = comparator(ak, pivot1);
                if (comp < 0) {
                    if (k !== less) {
                        array[k] = array[less];
                        array[less] = ak;
                    }
                    less++;
                } else if (comp > 0) {
                    while (comparator(array[great], pivot1) > 0) {
                        great--;
                    }
                    if (comparator(array[great], pivot1) < 0) {
                        array[k] = array[less];
                        array[less++] = array[great];
                        array[great--] = ak;
                    } else {
                        array[k] = array[great];
                        array[great--] = ak;
                    }
                }
            }
        }

        array[left] = array[less - 1];
        array[less - 1] = pivot1;
        array[right] = array[great + 1];
        array[great + 1] = pivot2;

        sort(left, less - 2);
        sort(great + 2, right);

        if (!pivotsDiffer) {
            return;
        }

        if (less < index1 && great > index5) {
            while (comparator(array[less], pivot1) === 0) {
                less++;
            }
            while (comparator(array[great], pivot2) === 0) {
                great--;
            }

            outer2:
            for (let k = less; k <= great; k++) {
                let ak = array[k];
                if (comparator(ak, pivot2) === 0) {
                    while (comparator(array[great], pivot2) === 0) {
                        if (great-- === k) {
                            break outer2;
                        }
                    }
                    if (comparator(array[great], pivot1) === 0) {
                        array[k] = array[less];
                        array[less] = pivot1;
                    } else {
                        array[k] = array[great];
                    }
                    array[great--] = pivot2;
                } else if (comparator(ak, pivot1) === 0) {
                    array[k] = array[less];
                    array[less++] = pivot1;
                }
            }
        }
        sort(less, great);
    }
    sort(0, array.length - 1);
    return array;
}