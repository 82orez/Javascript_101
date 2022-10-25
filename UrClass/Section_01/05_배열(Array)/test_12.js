// 배열과 요소를 입력받아 주어진 요소를 배열의 맨 뒤에 추가하고 해당 배열을 리턴해야 합니다.

// let output = addToBack([1, 2], 3);
// console.log(output); // -> [1, 2, 3]

function addToBack(arr, el) {
    arr.push(el);
    return arr;
}

console.log(addToBack([1, 2], 3));