// 배열과 요소를 입력받아 새로운 요소가 추가된 새로운 배열을 리턴해야 합니다.

// 새로운 배열(주소값 다름)을 리턴해야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다(immutability).

// let input = [1, 2];
// let output = addToBackOfNew(input, 3);

// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

let input = [1, 2];

function addToBackOfNew(arr, el) {
    // 먼저 새로운 newArr 를 생성하고 slice()를 이용하여 arr 를 복사.
    // push 해서 newArr 를 반환하면 기존 arr 를 변경시키지 않아도 됨.
    let newArr = arr.slice();
    newArr.push(el);
    return newArr;

    // 아래 방법은 input 변경됨.
    // arr.splice(arr.length, 0, el);
    // return arr;
}

console.log(addToBackOfNew(input,3));
console.log(input);
