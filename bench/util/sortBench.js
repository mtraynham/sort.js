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
    let sorts = merge({
            'Array.prototype.sort': (arr, comparator) => {
                arr.sort(comparator);
                return arr;
            }
        }, Sort);

    return {
        name: name,
        tests: Object.keys(sorts).map(key => {
            return {
                name: key,
                fn: () => sorts[key](array.slice(), comparator)
            };
        })
    };
}
