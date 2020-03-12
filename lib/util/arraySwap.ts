/**
 * Given an array, swap the values at position i & j
 */
export function arraySwap<T>(array: T[], i: number, j: number): void {
    const tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
}

/**
 * Given an array, return a function that can swap the
 * values at i & j
 */
export function arraySwapPartial<T>(array: T[]): (i: number, j: number) => void {
    return (i: number, j: number): void => {
        const tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
    };
}
