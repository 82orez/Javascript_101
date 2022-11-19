class Person {
    constructor(name, first, second, third) {
        this.name = name;
        this.first = first;
        this.second = second;
        this. third = third;
    }
    sum() {
        return this.first + this.second + this.third;
    }
}

Person.prototype.multi = function() {
    return this.first * this.second;
}

let kim = new Person('Kim',10,20,30);
console.log(kim.sum());
console.log(kim.multi());

kim.sum = function() {
    return this.first + this.second;
}
console.log(kim.sum());


//-------------------------------------------

class PersonPlus extends Person {
    constructor(name, first, second, third, fourth) {
        super(name, first, second, third);
        this.fourth = fourth;
    }
    sum() {
        return super.sum() + this.fourth;
    }
    avg() {
        return (this.first + this.second + this.third + this.fourth) / 4;
    }
}

let park = new PersonPlus('Park', 10, 30, 40,50);
console.log('inheritance',park.avg());