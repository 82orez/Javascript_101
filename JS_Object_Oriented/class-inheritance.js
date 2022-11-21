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

// class 외부에서도 prototype 을 이용하여 class 내부에 메서드를 추가 및 수정 가능.
// 그리고 아래와 같이 특정 class 만 변경하는 것도 가능.
kim.sum = function() {
    return this.first + this.second;
}
console.log(kim.sum());

let lee = new Person('Lee',10,50,80);
console.log(lee.sum());

//-------------------------------------------

class PersonPlus extends Person {
    avg() {
        return (this.first + this.second + this.third) / 3;
    }
}

let park = new PersonPlus('Park', 10, 30, 40);
console.log('inheritance',park.avg());