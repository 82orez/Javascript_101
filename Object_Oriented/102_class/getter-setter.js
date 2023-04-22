//  onenote 내용 참조.

// ? Getter 와 Setter 는 객체 지향 프로그래밍에서 사용되는 개념이며, 일종의 메서드라고 보면 된다.
// * 즉, 단어 그대로 Getter 는 객체의 속성(property)의 값(value)을 받아 오는(반환 받는) 메서드이고,
// * Setter 는 객체의 속성 값(value)을 설정 또는 변경하는 메서드라고 보면 된다.

// ! 사용하는 이유
// * 1. 클래스 내부 정보에 대해 은닉을 하고 싶을 때
// * 2. 값(Value) 재할당(Setting) 시에 특정 조건을 달고 싶을 때

// name 과 age 를 인자로 하는 class Person 생성자를 만든다.
class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }
  // ? Getter 설정: this.name 호출시 저장된 변수 _name 에 toUpperCase() 를 적용한 값을 반환
  // ? 이는 클래스 내부 정보에 대해 클래스 외부 사용자가 알 수 없는 효과가 있다.(은닉 효과)
  get name() {
    return this._name.toUpperCase();
  }

  // ?Setter 설정: this.name = 'newName' 으로 새로운 값으로 세팅하려는 경우,
  // ? 새로 입력 받는 값이 문자열(특정 조건)일 때만 가능하게 조건을 달고 있다.
  set name(newName) {
    if (typeof(newName) === 'string') {
      this._name = newName;
    } else {
      throw new Error('Error!!!!!! 문자열을 입력바랍니다.');
    }
  }
}

// class Person 의 인스턴스 man 을 생성한다.
let man = new Person('John', 10);

// ? man 인스턴스의 name 을 호출(get) 한다.
// * 그런데 그 결과가 인스턴스 생성시 입력한 'John' 이 아닌 'JOHN' 이다.
// Getter 가 실행된 결과이다.(소문자 --> 대문자)
console.log(man.name);
console.log();

// ? 다시 man 인스턴스의 name 프로퍼티에 'tg lee' value 값을 재할당(set) 한다.
man.name = 'tg lee';
// 만약 아래와 같이 man.name 에 숫자 1을 재할당 하면 Setter 의 조건에 맞지 않아서 오류 발생.
man.name = 1;

// * 재할당 받은 man 인스턴스의 name 을 호출한다.
// * 그런데 그 결과가 인스턴스 생성시 입력한 'tg lee' 이 아닌 'TG LEE' 이다.
// Getter 가 실행된 결과이다.(소문자 --> 대문자)
console.log(man.name);

