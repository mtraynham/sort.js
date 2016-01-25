export const comparatorToLessThan = (comparator) =>
    (a, b) => comparator(a, b) < 0;

export const lessThanToComparator = (lessThan) =>
    (a, b) => lessThan(a, b) ? -1 : (!lessThan(b, a) ? 0 : 1);

export const defaultComparator = (a, b) => a < b ? -1 : (a > b ? 1 : 0);

export const defaultLessThan = (a, b) => a < b;
