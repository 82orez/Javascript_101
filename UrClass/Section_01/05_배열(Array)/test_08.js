// 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.

// let output = getLargestElement([1, 4, 3]);
// console.log(output); // --> 4
//
// output = getLargestElement([-4, -2, -9]);
// console.log(output); // --> -2

function getLargestElement(arr) {
    // 먼저 0번째 인덱스의 요소를 max 에 대입.
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getLargestElement( [1, 2, 3, 4]));
console.log(getLargestElement(  [2, 5, 4, 9, 8]));
console.log(getLargestElement( [-7, -2, -9, -1]));
console.log(getLargestElement(  [-1, 2, -5]));