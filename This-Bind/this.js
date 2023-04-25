// * 일반 함수의 경우 함수 생성시 this 가 자동으로 생성된다.
// * 이 때 this 는 자신이 속한 객체(Object) 를 의미한다.

function sayHello() {
  // * sayHello 함수는 전역(Window) 객체에 속해 있으므로 이 때 this 는 전역 객체.
  console.log(`Hello's this: ${this}`);

  function sayHello2() {
    // * 중첩된 sayHello2 함수도 마찬가지로 this 는 전역 객체.
    console.log(`Hello2's this: ${this}`);
  }
  sayHello2();

  console.log('--------------------------------');

  const computer = {
    mac: 1,
    window: 2,
    cls: function () {
      // cls()가 속한 객체는 computer 객체이다.
      console.log(this.mac);
    },
  }
  computer.cls();
}
sayHello();

console.log('--------------------------------');

const people = {
  name: 'TG',
  // sayHello()가 속한 객체는 people 객체이다.
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};
people.sayHello(); // * sayHello 함수는 people 객체에 속해 있으므로 이 때 this 는 people.

console.log('----------------Arrow function----------------');

// ! 반면에 화살표 함수는 this 를 가지지 않는다.
// 다른 말로 표현하면 화살표 함수의 this 는 전역(Window) 객체이다.

const arrowPeople = {
  name: 'TG',
  sayHello: () => {
    // 전역 객체에는 name 이라는 속성이 없으므로 undefined.
    console.log(`Hello ${this}`);
    console.log(`Hello ${this.name}`);
  },
};

arrowPeople.sayHello();
