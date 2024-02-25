function findMaxNumber(arr) {
    // solution 1
    // return Math.max(...arr);



    // solution 2
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

module.exports = findMaxNumber;
