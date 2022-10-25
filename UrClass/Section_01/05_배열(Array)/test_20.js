// 배열을 입력받아 배열의 마지막 요소가 제외된 새로운 배열을 리턴해야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다(immutability).

// let arr = [1, 2, 3];
// let output = removeFromBackOfNew(arr);

// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]

let arr = [1, 2, 3];

function removeFromBackOfNew(arr) {
    return arr.slice(0, arr.length - 1);
}


console.log(removeFromBackOfNew(arr));  // --> [1, 2]
console.log(arr);  // --> [1, 2, 3]