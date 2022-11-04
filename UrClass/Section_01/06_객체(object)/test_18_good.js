// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소가 제거된 새로운 배열을 리턴해야 합니다.
// 배열을 리턴해야 합니다.

// 1. 주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 마지막 요소가 제거된 배열을 리턴해야 합니다.
// 2. 그 외의 경우, 빈 배열을 리턴해야 합니다.
// 입력받은 객체를 수정하지 않아야 합니다. => immutable 함수 사용.

// const obj = {
//     key: [1, 2, 3],
// };

// let output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1,2]

// ** 아래 방법으로도 가능, 하지만
// function getAllButLastElementOfProperty(obj, key) {
//     let result = [];
//     if (Array.isArray(obj[key]) && obj[key].length !== 0) {
//         for (let i = 0; i < obj[key].length - 1; i++) {
//             result.push(obj[key][i]);
//         }
//         return result;
//     }
//     return result;
// }

function getAllButLastElementOfProperty(obj, key) {
    let objValue = obj[key];
    if (Array.isArray(objValue) && objValue.length !== 0) {
        // return objValue.slice(0, objValue.length -1);
        return objValue.slice(0, -1);
    }
    return [];
}

console.log(getAllButLastElementOfProperty({ arr: [1, 2, 4] }, 'arr'));