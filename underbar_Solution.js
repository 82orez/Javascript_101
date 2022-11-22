//------------------------------------------------
let sliceArr = [1, 2, 3, 4, 5];

console.log(sliceArr.slice(-5, -1));
console.log(sliceArr.slice(-1, -5));
console.log(sliceArr.slice(-3));

//------------------------------------------------
let _take = function (arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    let empty = [];

    if (n > arr.length) {
        n = arr.length;
    }

    for (let i = 0; i < n; i++) {
        empty.push(arr[i]);
    }
    return empty;
};

console.log(_take([1, 2, 3], 5));

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

console.log(_drop([1, 2, 3, 4, 5]));
console.log(_drop([1, 2, 3, 4, 5], 0));
console.log(_drop([1, 2, 3, 4, 5], 3));
console.log(_drop([1, 2, 3, 4, 5], 10));

//---------------------------------------------
let _last = function (arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    let empty = [];

    if (n === undefined || n < 0) {
        empty.push(arr[arr.length - 1]);
        return empty;
    }

    if (n > arr.length) {
        return arr;
    }

    for (let i = arr.length - n; i < arr.length; i++) {
        empty.push(arr[i]);
    }
    return empty;
};

console.log(_last([1, 2, 3, 4, 5]));
console.log(_last([1, 2, 3, 4, 5], -1));
console.log(_last([1, 2, 3, 4, 5], 2));
console.log(_last([1, 2, 3, 4, 5], 3));
console.log(_last([1, 2, 3, 4, 5], 10));

//-----------------------------------------------
let _each = function (collection, iteratee) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            iteratee(collection[i], i, collection);
        }
    } else {
        for (const key in collection) {
            iteratee(collection[key], key, collection);
        }
    }
};

//-------------------------------------------------
let _filter = function (arr, test) {
    // TODO: 여기에 코드를 작성합니다.
};
//-----------------------------------------------
let result = [];
let arr = [1, 2, 3, 3, 4, 4, 1, 4];

arr.forEach((value) => {
    for (let i = 0; i < result.length; i++) {
        if (result[i] === value) {
            return ;
        }
    }
    result.push(value);
    return result;
});

console.log(result);


