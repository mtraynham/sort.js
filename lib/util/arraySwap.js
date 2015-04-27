export const arraySwap = (array, i, j) => {
    let tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
};

export const arraySwapPartial = (array) =>
    (i, j) => {
        let tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
    };
