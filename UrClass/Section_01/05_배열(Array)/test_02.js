// 배열을 입력 받아 0번째 인덱스 리턴.
// 빈 배열일 경우, undefined 를 리턴.

// let output = getFirstElement([1, 2, 3, 4, 5]);
// console.log(output); // --> 1

function getFirstElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}

console.log(getFirstElement([]));