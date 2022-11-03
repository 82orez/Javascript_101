// 배열을 입력받아 배열의 첫번째 요소가 삭제된 배열을 리턴해야 합니다.

// 새로운 배열을 선언 / 할당해서 리턴하지 않습니다. => slice() 사용 금지.
// 기존 배열에 첫번째 요소가 삭제된 배열(주소값 동일)을 리턴해야 합니다.

// let output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

function removeFromFront(arr) {
    arr.shift();
    return arr;
}

console.log(removeFromFront([1, 2, 3]));