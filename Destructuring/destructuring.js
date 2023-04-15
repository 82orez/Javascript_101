// * Destructuring(구조 분해 할당)

// ? 1. 배열 구조 분해 할당
const fruits = ['apple', 'banana', 'orange'];

let [apple, banana, orange] = fruits;

console.log(apple);
console.log(banana);
console.log(orange);
console.log();

let [apple1, banana1] = ['apple', 'banana', 'orange'];

console.log(apple1);
console.log(banana1);
console.log();

// 참조: Rest(나머지 매개 변수) 문법을 이용한 구조 분해 할당.
// 여러 개의 인자 또는 남아 있는 인자들을 모아서 하나의 배열로 만들어 열주는 문법.

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log('first: ', first); // 1
console.log('second: ', second); // 2
console.log('rest: ', rest); // [3, 4, 5]
console.log();

// * 두 변수의 값 교환하기
let x = 10;
let y = 20;

[x, y] = [y, x];
console.log(x);
console.log(y);
console.log();

console.log('---------------------------------------');

// ? 2. 객체 구조 분해 할당
const person = {
  name: 'Kim',
  age: 29,
};

let { name, age } = person;
console.log(name);
console.log(age);

console.log('---------------------------------------');

// * 중첩된 객체의 구조 분해 할당
const person1 = {
  name1: 'TG',
  score: {
    history: 95,
    science: 88,
  },
  friends: ['Kim', 'Lee', 'Park'],
};

let {
  name1,
  score: { history, science },
  friends: [f1, f2, f3],
} = person1;

console.log(name1);
console.log(history, science);
console.log(f1, f2, f3);
console.log();
