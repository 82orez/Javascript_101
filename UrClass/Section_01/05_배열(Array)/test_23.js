// 배열과 인덱스를 입력받아 해당 인덱스의 요소를 제외한 배열을 리턴해야 합니다.

// let output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

// ** splice() 를 써도 됨.
// function getAllElementsButNth(arr, n) {
//     arr.splice(n,1)  // => splice(삽입을 원하는 index, 지우려는 index 갯수, 추가하고자 하는 내용들)
//     return arr;
// }

function getAllElementsButNth(arr, n) {
    // 먼저 빈 배열을 만들고 반복문을 실행시켜
    let result = [];
    // i 가 n 과 일치하지 않을 때에만 빈 문자열에 추가하면
    // n번째 인덱스 요소만 빈 문자열에서 제외됨.
    for (let i = 0; i < arr.length; i++) {
        if (i !== n) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getAllElementsButNth(['a', 'b', 'c'], 1));