// 배열과 요소를 입력받아 주어진 요소를 배열의 맨 앞에 추가하고 해당 배열을 리턴해야 합니다.

// 반복문(for, while) 사용은 금지됩니다.
// 새로운 배열을 선언 / 할당해서 리턴하지 않습니다. => 기존 배열 자체를 변경시켜야 함.
// 기존 배열에 주어진 요소가 추가된 상태(주소값 동일)로 리턴해야 합니다.

// let output = addToFront([1, 2], 3);
// console.log(output); // -> [3, 1, 2]

function addToFront(arr, el) {
    // 방법 1.
    arr.unshift(el);
    return arr;

    // 방법 2.
    // arr.splice(0,0,el);
    // return arr;
}

console.log(addToFront([1, 2], 3));