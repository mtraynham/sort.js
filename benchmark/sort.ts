import {Event, Suite} from 'benchmark';
import Chance from 'chance';

import {
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
    selectionSort,
    naturalComparator,
    Sort
} from '../lib';

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

const chance: Chance.Chance = new Chance();

/**
 * Generate a join bench test.
 */
export default function benchmark<T>(
    name: string,
    itemFn: () => T,
    size: number
): Suite {
    const items: T[] = chance.n(itemFn, size);
    const prototypeClone: T[] = items.slice();
    const suite: Suite = (new Suite(name))
        .add('Array.prototype.sort', () => prototypeClone.sort(naturalComparator));
    for (const key in sorts) {
        const itemsClone: T[] = items.slice();
        suite.add(key, () => sorts[key](itemsClone, naturalComparator))
    }
    return suite
        .on('start', function () {
            console.log(`Running suite ${name}...`);
        })
        .on('cycle', function(this: Suite, event: Event) {
            console.log(String(event.target));
        })
        .on('complete', function(this: Suite) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            console.log('Fastest is ' + this.filter('fastest').map((d: any) => d.name));
            console.log('\n');
        });
}

const itemFnTests: {name: string; itemFn: () => string | boolean | number}[] = [
    {name: 'Boolean Arrays', itemFn: chance.bool},
    {name: 'Character Arrays', itemFn: chance.character},
    {name: 'Integer Arrays', itemFn: chance.integer},
    {name: 'Float Arrays', itemFn: chance.floating},
    {name: 'Natural Arrays', itemFn: chance.natural},
    {name: 'String Arrays', itemFn: chance.string},
    {name: 'Word Arrays', itemFn: chance.word}
]

const sizeTests: {name: string; size: number}[] = [
    {name: 'Large', size: 1000},
    {name: 'Medium', size: 100},
    {name: 'Small', size: 10}
];

for (const itemFnTest of itemFnTests) {
    for (const sizeTest of sizeTests) {
        benchmark(
            `${itemFnTest.name} ${sizeTest.name}`,
            itemFnTest.itemFn,
            sizeTest.size
        ).run();
    }
}
