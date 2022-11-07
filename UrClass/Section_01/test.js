// 1. 배열 합치기

let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
let lyrics1 = ['head', parts, 'and', 'toes'];

console.log(lyrics);
console.log(lyrics1);

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
console.log(arr1);

// 2. 배열 복사

let arr = [1, 2, 3];
let arr3 = [...arr]; // arr.slice() 와 유사
// 참고: spread 문법은 기존 배열을 변경하지 않으므로(immutable), arr2를 수정한다고, arr 이 바뀌지 않습니다.
arr3.push(4);
// 질문: arr 와 arr2의 값은 각각 무엇인가요?
console.log(arr);
console.log(arr3);

// 3. 객체에서 사용

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
let mergedObj = { ...obj1, ...obj2 };

console.log(clonedObj);
console.log(mergedObj);

// 4. 함수에서 나머지 파라미터 받아오기

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

console.log(myFun("one", "two", "three", "four", "five", "six"));
