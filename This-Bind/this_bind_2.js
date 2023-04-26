// ! 참조) this binding
// 자바스크립트 엔진은 코드를 읽고 실행할 때 실행 컨텍스트를 생성하고 렉시컬 환경을 만들고 기록하는 등 그와 관련된 일련의 과정을 거친다. 그 중 하나가 this binding 이다.

// 함수 코드 실행시 함수 호출 방식에 따른 this binding 의 종류는 다음과 같다.
// 1. 함수 선언식 또는 함수 표현식으로 된 일반 함수 호출 : 전역(Window / Global) 객체
// 2. 일반 함수 형식의 객체의 메서드 호출 : 메서드를 호출한 객체
// 3. 생성자 함수 안에서의 this binding : 생성자 함수가 생성할 인스턴스와 this binding
// 4. Function.prototype.apply / call / bind 메서드에 의한 간접 호출 : Function.prototype.apply / call / bind 메서드에 첫번째 인자로 전달한 객체

const people = {
  name: 'TG',
  say: () => {
    console.log('1. people.say(): ', this);
  }
}

// * 화살표 함수의 경우 this binding 이 없으므로 자신이 속한 상위 스코프의 this 를 참조한다.
// 이 경우 say 함수의 상위 스코프는 전역 변수 people 이고 이는 전역 객체에 속하므로 this 는 전역 객체에 binding 된다.
people.say();
console.log('----------------------');

// * sayPeople 이라는 새로운 전역 변수에 people 의 함수 say() 를 대입하면,
// say 함수의 상위 스코프는 전역 변수 sayPeople 이고 이는 전역 객체에 속하므로 this 는 전역 객체에 binding 된다.
const sayPeople = people.say;

console.log('2. sayPeople: ', sayPeople);

sayPeople();
console.log('----------------------');


// ! but 화살표 함수의 경우 처음부터 this binding 자체가 없기 때문에 bind() 함수를 써서 people 객체와 새로운 변수를 묶어 줄 수도 없다.
const sayPeople1 = people.say.bind(people);
sayPeople1();