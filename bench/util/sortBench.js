import merge from 'lodash/merge';
import * as Sort from '../../index';

/**
 * Generate a sort bench test.
 *
 * @param  {String} name
 * @param  {Array} array
 * @param  {Function} [comparator]
 * @return {BenchmarkSuite}
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
        tests: Object.keys(sorts).reduce((acc, key) => {
            acc[key] = () => sorts[key](array.slice(), comparator);
            return acc;
        }, {})
    };
}
