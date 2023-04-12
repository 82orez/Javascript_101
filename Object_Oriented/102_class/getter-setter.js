// * onenote 내용 참조.

class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName) {
      this._name = newName;
    }
  }
}

let man = new Person('John', 10);

// * 아래 콘솔의 결과값은 getter 가 실행된 결과이다.
// man._name 이 아니라 man.name 을 호출했다.
// 콘솔의 결과가 John 이 아니라 JOHN 이다.
console.log(man.name, man.age);

// * 아래는 setter 를 실행한 모습이다.
man.name = 'John Park';
man.age = 20;
console.log(man.name, man.age);

