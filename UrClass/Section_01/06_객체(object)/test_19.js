// 두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가해야 합니다.

// 배열을 리턴해야 합니다.
// 별도의 리턴문(return statement)을 작성하지 않습니다.

// 1. 추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 둡니다.
// 2. 두번째 객체는 수정하지 않아야 합니다.

// const obj1 = {
//     a: 1,
//     b: 2,
// };

// const obj2 = {
//     b: 4,
//     c: 3,
// };

// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

function extend(obj1, obj2) {
    for (const obj2Key in obj2) {
        if (obj2Key in obj1) {
        }
        else {
            obj1[obj2Key] = obj2[obj2Key];
        }
    }
}

const obj1 = {
    a: 1,
    b: 2,
};

const obj2 = {
    b: 4,
    c: 3,
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}