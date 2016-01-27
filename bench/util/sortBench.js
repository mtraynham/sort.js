import quicksort from '../../lib/quicksort/quicksort';
import quicksortFunctional from '../../lib/quicksort/quicksortFunctional';
import quicksortInplace from '../../lib/quicksort/quicksortInplace';

/**
 * Generate a sort bench test.
 *
 * @param  {String} name
 * @param  {Array} array
 * @param  {Function} [comparator]
 * @return {BenchmarkSuite}
 */
export default function sortBench (name, array, comparator) {
    let sorts = {
        'Standard': (arr, comparator) => {
            arr.sort(comparator);
            return arr;
        },
        'Quicksort': quicksort,
        'Quicksort (Functional)': quicksortFunctional,
        'Quicksort (Inplace)': quicksortInplace
    };
    return {
        name: name,
        tests: Object.keys(sorts).reduce((acc, key) => {
            acc[key] = () => sorts[key](array.slice(), comparator);
            return acc;
        }, {})
    };
}
