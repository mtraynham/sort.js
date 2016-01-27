export function comparatorToLessThan (comparator) {
    return (a, b) => comparator(a, b) < 0;
}

export function lessThanToComparator (lessThan) {
    return (a, b) => lessThan(a, b) ? -1 : (!lessThan(b, a) ? 0 : 1);
}

export function reverse (fn) {
    return (a, b) => fn(b, a);
}

export function lexicographicComparator (a, b) {
    return a < b ? -1 : (a > b ? 1 : 0);
}

export function numericComparator (a, b) {
    return a - b;
}
