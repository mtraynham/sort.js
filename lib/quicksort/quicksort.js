/**
 * Returns a new array
 */
const quicksort = (array, lessThan) => {
    let left = [],
        right = [],
        pivot = array[0],
        value;

    for (var i = 1; i < array.length; i++) {
        value = array[i];
        if (lessThan(value, pivot)) {
            left.push(value);
        } else {
            right.push(value);
        }
    }
    return quicksort(left).concat(pivot, quicksort(right));
};

export default quicksort;
