//------------------------------------------------
let _take = function (arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    let empty = [];

    if (n > arr.length) {
        n = arr.length;
    };

    for (let i = 0; i < n; i++) {
        empty.push(arr[i]);
    }
    return empty;
};

console.log(_take([1,2,3], 5));

//-------------------------------------------------
let _drop = function (arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    let empty = [];

    if (n === undefined || n === 0) {
        return arr;
    }

    if (n > arr.length) {
        return [];
    }

    for (let i = arr.length - n + 1; i < arr.length; i++) {
        empty.push(arr[i]);
    }
    return empty;
};

console.log(_drop([1,2,3,4,5,], ))
console.log(_drop([1,2,3,4,5,], 0))
console.log(_drop([1,2,3,4,5,], 3))
console.log(_drop([1,2,3,4,5,], 10))