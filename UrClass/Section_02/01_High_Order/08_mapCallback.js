function square(num) {
    return Math.pow(num, 2);
}

function mapCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}


let output = mapCallback(square, [2, 4, 7]);
console.log(output); // --> [4, 16, 49]