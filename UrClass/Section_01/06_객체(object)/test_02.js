// 객체와 키를 입력받아 키에 해당하는 값을 true 로 설정해야 합니다.

// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 함수에 명시적인 리턴문이 없을 경우, 함수의 리턴값은 어떻게 되는지 확인해 봅니다.

// let steve = {};
// addProperty(steve, 'isMale');
// console.log(steve.isMale); // --> true

// addProperty(steve, 'isProgrammer');
// console.log(steve.isProgrammer); // --> true

// let jessica = {};
// addProperty(jessica, 'isSmart');
// console.log(jessica.isSmart); // --> true

let steve = {};

function addProperty(obj, property) {
    // return 이 없으면 'undefined'/
    obj[property] = true;
    
    // return obj[property] = true;
}

addProperty(steve, 'isMale');
console.log(steve.isMale);