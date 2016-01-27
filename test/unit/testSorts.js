import {assert} from 'chai';
import Chance from 'chance';
import quicksort from '../../lib/quicksort/quicksort';
import quicksortFunctional from '../../lib/quicksort/quicksortFunctional';
import quicksortInplace from '../../lib/quicksort/quicksortInplace';
import {reverseComparator} from '../../lib/util/comparator';

let chance = new Chance(),
    sorts = {
        'Quicksort': quicksort,
        'Quicksort (Functional)': quicksortFunctional,
        'Quicksort (Inplace)': quicksortInplace
    },
    sortTest = (array, comparator) => {
        let expected = array.slice();
        expected.sort(comparator);
        Object.keys(sorts).forEach((key) =>
            it(key, () => assert.deepEqual(expected, sorts[key](array.slice(), comparator))));
    };

describe('Small Sort', () =>
    sortTest(chance.n(chance.character, 5)));

describe('Reverse Small Sort', () =>
    sortTest(chance.n(chance.character, 5), reverseComparator));

describe('Large Sort', () =>
    sortTest(chance.n(chance.character, 1000)));

describe('Reverse Large Sort', () =>
    sortTest(chance.n(chance.character, 1000), reverseComparator));
