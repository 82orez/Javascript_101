// 두 개의 객체와 키를 입력받아 첫번째 객체의 키에 두번째 객체를 할당해야 합니다.
// 별도의 리턴문(return statement)을 작성하지 않습니다.

// const person1 = {
//     name: 'Joe',
//     role: 'Team Member',
// };

// const person2 = {
//     name: 'Steve',
//     role: 'CEO',
// };

// addObjectProperty(person1, 'manager', person2);
// console.log(person1.manager);

// ** 실행 결과
// {
//     name: 'Joe',
//     role: 'Team Member',
//     manager: {
//         name: 'Steve',
//         role: 'CEO'
//     }
// }

function addObjectProperty(obj1, property, obj2) {
    obj1[property] = obj2;
}