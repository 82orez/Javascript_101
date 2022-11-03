// 배열을 입력받아 배열의 첫번째 요소를 제외한 배열을 리턴해야 합니다.

// 반복문(for, while) 사용은 금지됩니다. => shift(), slice(start, end + 1)
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

// let input = [1, 2, 3, 4];
// let output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

function getAllElementsButFirst(arr) {
    // 방법 1.
    arr.shift();
    return arr;

    // 방법 2.
    // return arr.slice(1);
}

console.log(getAllElementsButFirst([1, 2, 3, 4]));
console.log(getAllElementsButFirst([]));