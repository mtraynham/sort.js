import {comparatorToLessThan, lexicographicComparator} from '../util/comparator';

export default function mergesort (array, comparator = lexicographicComparator) {
    let lessThan = comparatorToLessThan(comparator);
    function merge (left, right) {
        let result = [];
        while (left.length > 0 && right.length > 0) {
            result.push(lessThan(left[0], right[0]) ? left.shift() : right.shift());
        }
        return result.concat(left.length ? left : right);
    }

    function _mergesort (array) {
        if (array.length <= 1) {
            return array;
        }
        let mid = Math.floor(array.length / 2);
        return merge(_mergesort(array.slice(0, mid)), _mergesort(array.slice(mid)));
    }

    return _mergesort(array);
}
