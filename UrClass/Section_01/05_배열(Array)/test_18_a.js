// 배열을 입력받아 배열의 첫번째 요소가 삭제된 배열을 리턴해야 합니다.

// let output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

function removeFromFront(arr) {
    return arr.slice(1);
}

console.log(removeFromFront([1, 2, 3]));