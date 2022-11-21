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