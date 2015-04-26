export let arraySwap = (array, i, j) => {
    let tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
};

export let arraySwapPartial = (array) => {
    return (i, j) => {
        let tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
    };
};
