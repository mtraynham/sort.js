import quicksort from '../../lib/quicksort/quicksort';
import quicksortFunctional from '../../lib/quicksort/quicksortFunctional';
import quicksortInplace from '../../lib/quicksort/quicksortInplace';

/**
 * Generate a sort bench test.
 *
 * @param  {String} name
 * @param  {Number} size
 * @return {BenchmarkSuite}
 */
export default function sortBench (name, size = 0) {
    console.log(size);
    let array = ['a', 'b', 'g', 'd', 'f', 'c'];
    return {
        name: name,
        tests: {
            'Quicksort': () => quicksort(array),
            'Quicksort (Functional)': () => quicksortFunctional(array),
            'Quicksort (Inplace)': () => quicksortInplace(array)
        }
    };
}
