// ? 아래 예는 무상태성, 불변성이 아님.
const person = {
    name: 'TG',
    age: 32,
};

function increaseAge(obj) {
    obj.age += 1;
    return obj;
}
console.log('person: ', person);

increaseAge(person);

// ! 입력받은 외부의 인자 person 객체 자체에 상태 변경이 생김.
console.log('person: ', person);
console.log();


console.log('-----------------Stateless(무상태성), Immutability(불변성)----------------');


// * Stateless(무상태성), Immutability(불변성)
const person1 = {
    name: 'TG',
    age: 32,
};

function increaseAge1(obj) {
    // * 외부의 인자(객체)를 입력 받아 전개연산자를 사용하여 새로운 객체를 반환(얕은 복사)
    // => Immutability(붋변성)
    return { ...obj, age: obj.age + 1 };
}
console.log('increaseAge1: ', increaseAge1(person1));

// ! 외부의 인자 person1 이라는 객체 자체에는 상태 변경이 없음.
console.log('person1: ', person1);
