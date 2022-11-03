// 객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거해야 합니다.
// 별도의 리턴문(return statement)을 작성하지 않습니다.

// const obj = {
//     a: 2,
//     b: 'remaining',
//     c: 4,
// };
//
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }

// for-in 구문을 사용하여 value 의 타입이 'number' 이면 delete.

function removeNumberValues(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            delete obj[key];
        }
    }
}