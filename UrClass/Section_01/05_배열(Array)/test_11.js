// 배열과 요소를 입력받아 주어진 요소를 배열의 맨 앞에 추가하고 해당 배열을 리턴해야 합니다.

// let output = addToFront([1, 2], 3);
// console.log(output); // -> [3, 1, 2]

function addToFront(arr, el) {
    arr.unshift(el);
    return arr;
}

console.log(addToFront([1, 2], 3));