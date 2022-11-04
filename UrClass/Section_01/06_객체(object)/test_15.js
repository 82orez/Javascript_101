// 배열과 객체를 입력받아 배열의 각 요소들을 객체의 키로 했을 때 그 값을 추출하여 만든 새로운 객체를 리턴해야 합니다.

// 객체를 리턴해야 합니다.
// 입력받은 객체에 존재하지 않는 키는 무시합니다.
// 입력받은 객체를 수정하지 않아야 합니다.

// const arr = ['a', 'c', 'e'];
// const obj = { a: 1, b: 2, c: 3, d: 4 };

// let output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }

function select(arr, obj) {
    let result = {};
    for (const arrElement of arr) {
        if (arrElement in obj) {
            result[arrElement] = obj[arrElement];
        }
    }
    return result;
}

console.log(select(['a', 'c', 'e'],{ a: 1, b: 2, c: 3, d: 4 }));