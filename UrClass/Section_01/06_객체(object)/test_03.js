// 객체와 키, 값을 입력받아 키에 값을 할당해야 합니다.

// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 이미 정의된 속성에 해당하는 키 값을 입력받은 경우, 입력받은 값을 덮어씁니다.

// let steve = {};
// addPropertyAndValue(steve, 'isMale', true);
// console.log(steve.isMale); // --> true

// addPropertyAndValue(steve, 'age', 30);
// console.log(steve.age); // --> 30

function addPropertyAndValue(obj, property, value) {
    obj[property] = value;
}

let jessica = {};
addPropertyAndValue(jessica, 'job', 'Programmer');
console.log(jessica.job); // --> 'Programmer'
