// 객체와 키를 입력받아 키에 해당하는 값을 리턴해야 합니다.

// const person = {
//     name: 'Steve',
//     age: 16,
// };

// let output = getProperty(person, 'name');
// console.log(output); // --> 'Steve'

// output = getProperty(person, 'age');
// console.log(output); // --> 16

function getProperty(obj, property) {
    return obj[property];
}