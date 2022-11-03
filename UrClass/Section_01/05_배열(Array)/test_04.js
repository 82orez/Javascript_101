// 배열과 수를 입력받아 수가 가리키는 인덱스의 요소를 리턴.
// 빈 배열 -> undefined.
// 배열의 길이를 초과하는 수를 입력받은 경우, 'out of index range' 를 리턴.

// let output = getNthElement([1, 3, 5], 1);
// console.log(output); // --> 3

// output = getNthElement([1, 3, 5], 3);
// console.log(output); // --> 'out of index range'

function getNthElement(arr, index) {
    if (arr.length === 0) {
        return undefined;
    } else if (index > arr.length-1) {
        return 'out of index range';
    } else {
        return arr[index];
    }
}
