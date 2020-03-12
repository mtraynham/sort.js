import {
    arraySwapPartial,
    Comparator,
    comparatorToLessThan,
    LessThan,
    naturalComparator
} from '../util';

/**
 * Standard Selection Sort
 */
export default function selectionSort<T>(
    array: T[],
    comparator: Comparator<T> = naturalComparator
): T[] {
    const lessThan: LessThan<T> = comparatorToLessThan(comparator);
    const arraySwap: (i: number, j: number) => void = arraySwapPartial(array);
    const length: number = array.length;
    let min: number;
    let i: number;
    let j: number;

    for (i = 0; i < length; i++) {
        min = i;
        for (j = i + 1; j < length; j++) {
            if (lessThan(array[j], array[min])) {
                min = j;
            }
        }
        if (i !== min) {
            arraySwap(i, min);
        }
    }
    return array;
}
