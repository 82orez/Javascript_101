class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
        return `Hi, I am a ${this.name}.`;
    }
}

class Square extends Polygon {
    constructor(length) {
        // this.height; // 참조오류가 발생합니다. super 가 먼저 호출되어야 합니다.

        // 여기서, 부모클래스의 생성자함수를 호출하여 높이값을 넘겨줍니다.
        // Polygon 의 길이와 높이를 넘겨줍니다.
        super(length, length);

        // 참고: 파생 클래스에서 super() 함수가 먼저 호출되어야
        // 'this' 키워드를 사용할 수 있습니다. 그렇지 않을 경우 참조오류가 발생합니다.
        this.name = 'Square';
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this.area = value;
    }

    sayNameTwice () {
        return super.sayName() + super.sayName();
    }
}

let square = new Square(10);
console.log(square);
console.log(square.sayName());
console.log(square.sayNameTwice());