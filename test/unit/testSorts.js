import {assert} from 'chai';
import Chance from 'chance';
import * as Sort from '../../index';
import {lexicographicComparator, reverse} from '../../lib/util/comparator';

let chance = new Chance();

function sortTest (array, comparator) {
    let expected = array.slice();
    expected.sort(comparator);
    Object.keys(Sort).forEach((key) =>
        it(key, () => assert.deepEqual(Sort[key](array.slice(), comparator), expected)));
}

function typeSpec (name, chanceFn, comparator = lexicographicComparator) {
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
            this.timeout(5000);
            return sortTest(chance.n(chanceFn, 1000), comparator);
        });

        describe('Reverse Large Sort', function () {
            this.timeout(5000);
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
