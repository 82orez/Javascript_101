// 배열을 입력받아 배열의 첫번째 요소를 제외한 배열을 리턴해야 합니다.

// let input = [1, 2, 3, 4];
// let output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

function getAllElementsButFirst(arr) {
    arr.shift();
    return arr;
}

console.log(getAllElementsButFirst([1, 2, 3, 4]));
console.log(getAllElementsButFirst([]));