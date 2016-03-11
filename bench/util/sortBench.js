import merge from 'lodash/merge';
import * as Sort from '../../index';

/**
 * Generate a sort bench test.
 *
 * TODO Use Benchmark 2.0 (upgrade gulp-benchmark) to get setup scripts to work.
 * @param  {String} name
 * @param  {Array} array
 * @param  {Function} [comparator]
 * @return {Benchmark.Suite}
 */
export default function sortBench (name, array, comparator) {
    const sorts = merge({
        'Array.prototype.sort': (arr, compare) => {
            arr.sort(compare);
            return arr;
        }
    }, Sort);

    return {
        name,
        tests: Object.keys(sorts).map(key => ({
            name: key,
            fn: () => sorts[key](array.slice(), comparator)
        }))
    };
}
