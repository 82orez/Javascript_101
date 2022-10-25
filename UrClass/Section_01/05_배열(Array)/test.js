// 배열과 요소를 입력받아 새로운 요소가 추가된 새로운 배열을 리턴해야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다(immutability).

// let input = [1, 2];
// let output = addToBackOfNew(input, 3);

// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

let input = [1, 2];

function addToBackOfNew(arr, el) {
    let newArr = arr.slice();
    newArr.push(el);
    return newArr;
}

console.log(addToBackOfNew(input,3));