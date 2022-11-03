// 객체와 키를 입력받아 키가 가리키는 속성(property)을 제거해야 합니다.
// 별도의 리턴문(return statement)을 작성하지 않습니다.

// const obj = {
//     name: 'Sam',
//     age: 20,
// };

// removeProperty(obj, 'name');
// console.log(obj.name); // --> undefined

function removeProperty(obj, property) {
    delete obj[property];
}