// 배열을 입력받아 배열의 마지막 요소를 삭제한 배열을 리턴해야 합니다.

// let output = removeFromBack([1, 2, 3]);
// console.log(output); // --> [1, 2]

function removeFromBack(arr) {
    arr.pop();
    return arr;
}

// ** slice 는 배열 자체를 변경시키는 것이 아니라 새로운 메모리에 반환값을 저장.

// function removeFromBack(arr) {
//     return arr.slice(0, arr.length - 1);
// }

console.log(removeFromBack([1, 2, 3]));