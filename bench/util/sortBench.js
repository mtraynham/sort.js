/**
 * Generate a sort bench test.
 *
 * @param  {String} name
 * @param  {Number} size
 * @return {BenchmarkSuite}
 */
export default function sortBench (name, size = 0) {
    console.log(size);
    return {
        name: name,
        tests: {
            // TODO
        }
    };
}
