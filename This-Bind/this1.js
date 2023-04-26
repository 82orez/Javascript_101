// ! 참조) this binding
// 자바스크립트 엔진은 코드를 읽고 실행할 때 실행 컨텍스트를 생성하고 렉시컬 환경을 만들고 기록하는 등 그와 관련된 일련의 과정을 거친다. 그 중 하나가 this binding 이다.

// 함수 코드 실행시 함수 호출 방식에 따른 this binding 의 종류는 다음과 같다.
// 1. 함수 선언식 또는 함수 표현식으로 된 일반 함수 호출 : 전역(Window / Global) 객체
// 2. 일반 함수 형식의 객체의 메서드 호출 : 메서드를 호출한 객체
// 3. 생성자 함수 안에서의 this binding : 생성자 함수가 생성할 인스턴스와 this binding
// 4. Function.prototype.apply / call / bind 메서드에 의한 간접 호출 : Function.prototype.apply / call / bind 메서드에 첫번째 인자로 전달한 객체

class Prefixer {
  constructor(prefix) {
    // * 생성자의 경우 새로 생성될 인스턴스와 this binding. --> 여기서는 prefixer 인스턴스(객체)와 binding.
    this.prefix = prefix;
  }
  add(arr) {
    // * 프로토타입 메서드 add 내부에서의 this 는 add 메서드를 호출한 객체 --> 여기서는 prefixer 인스턴스(객체)와 binding.
    console.log(this.prefix);

    return arr.map(function(item) {
      // ! 콜백 함수 내부에서의 this ?
      // 결론: undefined
      // 1. 일반 함수로 호출했기 때문에 원칙적으로 전역 객체와 binding.
      // 2. 그런데 class 내부에서는 암묵적으로 strict mode 가 적용됨.
      // 3. 따라서 결과적으로 undefined 와 binding 됨.
      return this.prefix + item;
    });
  }
}

const prefixer = new Prefixer('-webkit-');

// TypeError 발생.
console.log(prefixer.add(['a', 'b']));