// 배열의 모든 요소의 합을 리턴.

// let output = computeSumOfAllElements([1, 2, 3]);
// console.log(output); // --> 6

function computeSumOfAllElements(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    // ** for-i 구문 사용도 가능.
    // for (i=0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    return sum;
}

console.log(computeSumOfAllElements([1, 2, 3]));