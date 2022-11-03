// 객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거해야 합니다.
// 별도의 리턴문(return statement)을 작성하지 않습니다.

function removeOddValues(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number' && obj[key] % 2 === 1) {
            delete  obj[key];
        }
    }
}

const obj = {
    a: 2,
    b: 3,
    c: 4,
    d: '1',
};

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }