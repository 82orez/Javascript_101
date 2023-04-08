// ? 아래 예는 무상태성, 불변성이 아님.
const person = {
    name: 'TG',
    age: 32,
};

function increaseAge(a) {
    a.age += 1;
    return a;
}

increaseAge(person);

// * 외부의 인자 person1 이라는 객체 자체에는 상태 변경이 생김.
console.log('person: ', person);


console.log('---------------------------------');


// * Stateless(무상태성), Immutability(불변성) => O
const person1 = {
    name: 'TG',
    age: 32,
};

function increaseAge1(b) {
    // * 외부의 인자(객체)를 입력 받아 새로운 객체를 반환 => Immutability(붋변성)
    return { ...b, age: b.age + 1 };
}

console.log(increaseAge1(person1));

// * 외부의 인자 person1 이라는 객체 자체에는 상태 변경이 없음.
increaseAge1(person1)
console.log('person1: ', person1);
