import {
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * Standard Insertion Sort
 */
export default function insertionSort<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    const length: number = array.length;
    let i,
        j;
    for (i = 0; i < length; i++) {
        const value = array[i];
        for (j = i - 1; j > -1 && lessThan(value, array[j]); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = value;
    }
    return array;
}
