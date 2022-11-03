// 객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거해야 합니다.
// 별도의 리턴문(return statement)을 작성하지 않습니다.

// const obj = {
//     a: [1, 3, 4],
//     b: 2,
//     c: ['hi', 'there'],
// };

// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }

function removeArrayValues(obj) {
    for (const key in obj) {
        if (Array.isArray(obj[key]) === true) {
            delete obj[key];
        }
    }
}