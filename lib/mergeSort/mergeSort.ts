import {
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * Standard Merge Sort
 */
export default function mergeSort<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    /**
     * Merge
     */
    function merge(left: T[], right: T[]): T[] {
        const result: T[] = [];
        while (left.length > 0 && right.length > 0) {
            result.push(lessThan(left[0], right[0]) ? left.shift() : right.shift());
        }
        return result.concat(left.length ? left : right);
    }

    /**
     * Merge Sort
     */
    function mSort(mergeArray: T[]): T[] {
        if (mergeArray.length <= 1) {
            return mergeArray;
        }
        const mid: number = Math.floor(mergeArray.length / 2);
        return merge(mSort(mergeArray.slice(0, mid)), mSort(mergeArray.slice(mid)));
    }

    return mSort(array);
}
