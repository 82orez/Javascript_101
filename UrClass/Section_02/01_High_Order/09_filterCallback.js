function isOdd(num) {
    return num % 2 === 1;
}

function isEven(num) {
    return !isOdd(num);
}

function filterCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


let output = filterCallback(isOdd, [1, 2, 3, 4]);
console.log(output); // --> [1, 3]