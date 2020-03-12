import Chance from 'chance';
import isEqual from 'lodash/isEqual'

import {bubbleSort, bubbleSortOptimized} from './bubbleSort';
import {heapSort} from './heapSort';
import {insertionSort} from './insertionSort';
import {mergeSort, mergeSortInplace} from './mergeSort';
import {
    dualPivotQuicksort,
    quicksort,
    quicksortFunctional,
    quicksortInplace,
    sortingNetworkDualPivotQuicksort
} from './quicksort';
import {selectionSort} from './selectionSort';
import {Comparator, naturalComparator, reverse} from './util';
import {Sort} from './typings';

const chance: Chance.Chance = new Chance();
const sorts: {[key: string]: Sort<unknown>} = {
    bubbleSort,
    bubbleSortOptimized,
    heapSort,
    insertionSort,
    mergeSort,
    mergeSortInplace,
    dualPivotQuicksort,
    quicksort,
    quicksortFunctional,
    quicksortInplace,
    sortingNetworkDualPivotQuicksort,
    selectionSort
};

/**
 * Run all sorts on a given array with a comparator
 */
function sortTest<T>(array: T[], comparator: Comparator<T>): void {
    const expected = array.slice();
    expected.sort(comparator);
    Object.keys(sorts).forEach(key =>
        // eslint-disable-next-line import/namespace
        it(key, () => expect(isEqual(sorts[key](array.slice(), comparator), expected)).toBeTruthy()));
}

/**
 * Create a suite of tests given a chance function
 */
function typeSpec<T>(
    name: string,
    chanceFn: () => T,
    comparator: Comparator<T> = naturalComparator
): void {
    describe(name, () => {
        describe('Small Sort', () =>
            sortTest(chance.n(chanceFn, 10), comparator));

        describe('Reverse Small Sort', () =>
            sortTest(chance.n(chanceFn, 10), reverse(comparator)));

        describe('Medium Sort', () =>
            sortTest(chance.n(chanceFn, 100), comparator));

        describe('Reverse Medium Sort', () =>
            sortTest(chance.n(chanceFn, 100), reverse(comparator)));

        describe('Large Sort', function () {
            // this.timeout(10000);
            return sortTest(chance.n(chanceFn, 1000), comparator);
        });

        describe('Reverse Large Sort', function () {
            // this.timeout(10000);
            return sortTest(chance.n(chanceFn, 1000), reverse(comparator));
        });
    });
}

typeSpec('Boolean Arrays', chance.bool);
typeSpec('Character Arrays', chance.character);
typeSpec('Integer Arrays', chance.integer);
typeSpec('Float Arrays', chance.floating);
typeSpec('Natural Arrays', chance.natural);
typeSpec('String Arrays', chance.string);
typeSpec('Word Arrays', chance.word);
