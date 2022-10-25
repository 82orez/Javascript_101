// 수를 요소로 갖는 배열을 입력받아 짝수만을 요소로 갖는 배열을 리턴해야 합니다.

// let output = getEvenNumbers([1, 2, 3, 4]);
// console.log(output); // --> [2, 4]

function getEvenNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 ===0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getEvenNumbers([1, 2, 3, 4]));