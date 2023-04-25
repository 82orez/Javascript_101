class Person {
  // * Private 필드 정의 Part.
  // Private 필드는 반드시 클래스의 body 에 설정해야 함.
  // constructor() 안에 설정시 문법 오류 발생.
  #name = '';

  constructor(name) {
    // * Private 필드 참조 Part.
    this.#name = name;
  }
}

const me = new Person('Lee');

// ! Private 필드 #name 은 외부에서 접근할 수 없다. --> 문법 오류 발생.
// Private 필드는 내부에서만 참조 가능.
// 단, 접근자 Getter 를 사용해서 간접적으로 접근하는 것은 가능.
console.log(me);
console.log(me.#name);