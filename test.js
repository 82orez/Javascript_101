class Grub {
    // TODO..
    constructor() {
        this.age = 0;
        this.color = 'pink';
        this.food = 'jelly'
    }
    eat() {
        return 'Mmmmmmmmm jelly';
    }
}

class Bee extends Grub {
    // TODO..
    constructor() {
        super();
        this.age = 5;
        this.color = 'yellow';
        this.job = 'Keep on growing';
    }
}

let bee = new Bee();

console.log(bee);
console.log(bee.age);
console.log(bee.color);
console.log(bee.food);
console.log(bee.eat());

class ForagerBee extends Bee {
    // TODO..
    constructor() {
        super();
        this.age = 10;
        this.job = 'find pollen';
        this.canFly = true;
        this.treasureChest = [];
        // this.treasure = treasure;
    }
    forage (tre) {
        this.treasureChest.push(tre);
        return this.treasureChest;
    }
}

let foragerBee = new ForagerBee();
console.log(foragerBee.forage('pollen'));
console.log(foragerBee.treasureChest);


class HoneyMakerBee extends Bee {
    // TODO..
    constructor() {
        super();
        this.age = 10;
        this.job = 'make honey';
        this.honeyPot = 0;
    }
    makeHoney () {
        this.honeyPot ++;
        return this.honeyPot;
    }
    giveHoney () {
        this.honeyPot--;
        return this.honeyPot;
    }
}

let honeyMakerBee = new HoneyMakerBee();

console.log(honeyMakerBee);
console.log(honeyMakerBee.makeHoney());

//----------------------------------------------------
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