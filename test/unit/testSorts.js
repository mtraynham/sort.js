import {assert} from 'chai';
import quicksort from '../../lib/quicksort/quicksort';

describe('Sort', () => {
    let initial = ['a', 'c', 'b'],
        expected = ['a', 'b', 'c'];
    it('data should be sorted', () =>
        assert.deepEqual(expected, quicksort(initial)));
});
