// ! 참조) this binding
// 자바스크립트 엔진은 코드를 읽고 실행할 때 실행 컨텍스트를 생성하고 렉시컬 환경을 만들고 기록하는 등 그와 관련된 일련의 과정을 거친다. 그 중 하나가 this binding 이다.

// 함수 코드 실행시 함수 호출 방식에 따른 this binding 의 종류는 다음과 같다.
// 1. 함수 선언식 또는 함수 표현식으로 된 일반 함수 호출 : 전역(Window / Global) 객체
// 2. 일반 함수 형식의 객체의 메서드 호출 : 메서드를 호출한 객체
// 3. 생성자 함수 안에서의 this binding : 생성자 함수가 생성할 인스턴스와 this binding
// 4. Function.prototype.apply / call / bind 메서드에 의한 간접 호출 : Function.prototype.apply / call / bind 메서드에 첫번째 인자로 전달한 객체

const people = {
  name: 'TG',
  say: function() {
    console.log('1. people.say(): ', this.name);
  }
}
people.say();

console.log('----------------------');

// * sayPeople 이라는 새로운 전역 변수에 people 의 함수 say 를 대입하면,
// * 여기에서 say 함수는 더이상 객체의 메서드가 아니라 전역 변수에 할당된 일반 함수임.
// 따라서 여기에서는 say 함수가 전역에 속하기도 하고 일반 함수이기도함으로 this 는 전역 객체임.
const sayPeople = people.say;
console.log('2. sayPeople\'s type: ', sayPeople); // 함수

// sayPeople 함수를 실행하라.
// 전역 객체에는 name 이라는 속성이 없으므로 undefined.
sayPeople();
console.log();

console.log('-----------bind-----------');

// ! 하지만
// * bind() 메서드를 써서 say 함수를 people 객체와 인위적으로 binding 해서 새로운 전역 변수에 할당해 주면 this 는 다시 people 객체로 변경됨.
const sayPeopleBind = people.say.bind(people);

sayPeopleBind();