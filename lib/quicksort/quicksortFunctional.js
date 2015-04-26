
/**
 * A functional programming implementation of quicksort.
 * http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#JavaScript
 */
const quicksortFunctional = (array, lessThan) => {
    let pivot = array[Math.round(array.length / 2)];
    return quicksortFunctional(array.filter((x) => lessThan(x, pivot))).concat(
        array.filter((x) => !lessThan(x, pivot) && !lessThan(pivot, x)),
        quicksortFunctional(array.filter((x) => lessThan(pivot, x))));
};

export default quicksortFunctional;
