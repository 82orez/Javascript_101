// * MDN example.

// * Polygon constructor 생성(class 형).
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
    return `Hi, I am a ${this.name}.`;
  }
}


// * Polygon 생성자를 상속하는(extends) Square 생성자 생성.
class Square extends Polygon {
  constructor(length) {
    // * 인자(length)를 입력 받아서, 부모클래스의 생성자 함수를 호출하여 높이값을 넘겨줍니다.
    // * Polygon 의 길이와 높이를 넘겨줍니다.
    super(length, length);    // * 부모 클래스는 인자가 두 개 필요.

    // ? 참고: 파생 클래스에서 super() 함수가 먼저 호출되어야 합니다.
    // ? 'this' 키워드가 먼저 호출 될 경우 참조오류가 발생합니다.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }

  // * 부모 클래스의 method 를 상속 받아 새로운 method 를 구현.
  sayNameTwice() {
    return super.sayName() + super.sayName();
  }
}

let square = new Square(10);
console.log(square);
console.log(square.sayName());
console.log(square.sayNameTwice());
