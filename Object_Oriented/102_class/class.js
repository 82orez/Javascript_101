// * Rectangle constructor 생성: class 형
// MDN example.

class Rectangle {
  // 초기값 설정.
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    return `Hi, I am a ${this.name}.`;
  }
}
// class 생성자에 method 를 추가할 경우, 함수 생성자와 마찬가지로 class 외부에서
// prototype 을 이용해서 추가 가능함.
Rectangle.prototype.area = function () {
  return `Area is ${this.height * this.width}`;
};

let rectangle = new Rectangle(10, 20);
console.log(rectangle.area());

console.log('--------------------------------');

// * Polygon 생성자를 상속하는(extends) Square 생성자 생성.
class Square extends Rectangle {
  // Square 클래스 생성시 프로퍼티 1개를 생성한다.
  constructor(length) {
    // 새로 생성한 프로퍼티(length)를 super() 로 호출된 부모 클래스(Rectangle)의 프로퍼티로 넘겨줍니다.
    // 부모 클래스의 프로퍼티는 height, width.
    super(length, length);
    // ? 참조: 파생 클래스에서 super() 함수가 this 보다 먼저 호출되어야 합니다.
    //'this' 키워드가 먼저 호출 될 경우 참조오류가 발생합니다.
    this.name = 'Square'; // Square 의 name 을 'Square' 로 수정합니다.
  }

  // * 부모 클래스의 method 를 상속 받아 새로운 method 를 구현.
  sayNameTwice() {
    return super.sayName() + super.sayName();
  }
}

let square = new Square(10);
console.log(square.name);
console.log(square.height);
console.log(square.width);
console.log(square.sayName());
console.log(square.area());
console.log(square.sayNameTwice());
