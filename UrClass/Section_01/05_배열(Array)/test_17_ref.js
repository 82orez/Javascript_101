// 배열을 입력받아 배열의 마지막 요소를 제외한 배열을 리턴해야 합니다.

// let input = [1, 2, 3, 4];
// let output = getAllElementsButLast(input);
// console.log(output); // --> [1, 2, 3]

function getAllElementsButLast(arr) {
    return arr.slice(0,arr.length - 1);
}

console.log(getAllElementsButLast([1, 2, 3, 4]));