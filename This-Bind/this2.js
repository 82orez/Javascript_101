// ! 참조) this binding
// 자바스크립트 엔진은 코드를 읽고 실행할 때 실행 컨텍스트를 생성하고 렉시컬 환경을 만들고 기록하는 등 그와 관련된 일련의 과정을 거친다. 그 중 하나가 this binding 이다.

// 함수 코드 실행시 함수 호출 방식에 따른 this binding 의 종류는 다음과 같다.
// 1. 함수 선언식 또는 함수 표현식으로 된 일반 함수 호출 : 전역(Window / Global) 객체
// 2. 일반 함수 형식의 객체의 메서드 호출 : 메서드를 호출한 객체
// 3. 생성자 함수 안에서의 this binding : 생성자 함수가 생성할 인스턴스와 this binding
// 4. Function.prototype.apply / call / bind 메서드에 의한 간접 호출 : Function.prototype.apply / call / bind 메서드에 첫번째 인자로 전달한 객체

function sayHello() {
  // * 1번) sayHello 함수는 일반 함수이므로 this 는 전역 객체(Window).
  console.log(`Hello's this: ${this}`);

  function sayHello2() {
    // * 중첩된 sayHello2 함수도 마찬가지로 일반 함수이므로 this 는 전역 객체(Window).
    console.log(`Hello2's this: ${this}`);
  }
  sayHello2();

  console.log('--------------------------------');

  const computer = {
    mac: 1,
    window: 2,
    cls: function () {
      // * 2번) 일반 함수 형식의 객체의 메서드 호출 : cls 함수가 속한 객체는 computer 객체이다.
      console.log(this);
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
people.sayHello(); // * 2번) 일반 함수 형식의 객체의 메서드 호출 : sayHello 함수가 속한 객체는 people 객체이다.

console.log('----------------Arrow function----------------');

// ! 반면에 화살표 함수는 this binding 이 없다.
// 화살표 함수 내부에서 this 를 참조하면 상위 스코프의 this 를 그대로 참조한다. 이것을 렉시컬(Lexical) this 라고 한다.

const arrowPeople = {
  name: 'TG',
  sayHello: () => {
    // sayHello 함수의 상위 스코프는 변수 arrowPeople 이다. 변수 arrowPeople 은 전역 변수이다.
    // 전역 변수가 속한 객체는 전역 객체이다.
    // 따라서 sayHello 함수의 this 는 전역이다.
    console.log(`Hello ${this}`);
    console.log(`Hello ${this.name}`);
  },
};

arrowPeople.sayHello();
