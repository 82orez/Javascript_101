class Grub {
    constructor() {
        this.age = 0;
        this.color = 'pink';
        this.food = 'jelly';
    }
    eat() {
        return 'Mmmmmmmmm jelly';
    }
}

// * class 생성자를 상속(extends) 받을 때는 super() 를 통해 부모의 생성자 함수를 상속 받아야 한다.
class Bee extends Grub {
    constructor() {
        super();
        // * 부모와 다른 부분만 수정하거나 추가.
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
    constructor() {
        super();
        this.age = 10;
        this.job = 'find pollen';
        this.canFly = true;
        this.treasureChest = [];
    }
    // ? class 에서의 method 추가 방법.
    forage(tre) {
        this.treasureChest.push(tre);
        return this.treasureChest;
    }
}

let foragerBee = new ForagerBee();

console.log(foragerBee.treasureChest);
console.log(foragerBee.forage('pollen'));
console.log(foragerBee.treasureChest);

class HoneyMakerBee extends Bee {
    constructor() {
        super();
        this.age = 10;
        this.job = 'make honey';
        this.honeyPot = 0;
    }
    makeHoney() {
        this.honeyPot++;
        return this.honeyPot;
    }
    giveHoney() {
        this.honeyPot--;
        return this.honeyPot;
    }
}

let honeyMakerBee = new HoneyMakerBee();

console.log(honeyMakerBee);
console.log(honeyMakerBee.honeyPot);
console.log(honeyMakerBee.makeHoney());
console.log(honeyMakerBee.honeyPot);
console.log(honeyMakerBee.giveHoney());
console.log(honeyMakerBee.honeyPot);


// * prototype chain 의 예시. 원노트 노트 필기 참조.
console.log(Bee.prototype === bee.__proto__);
console.log(Bee.prototype.constructor);