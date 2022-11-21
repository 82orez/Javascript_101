let kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    }
}

let lee = {
    name: 'lee',
    first: 10,
    second: 30,
    sum: function () {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    },
};

console.log(kim.sum());
console.log(lee.sum());

// ** class 생성 (class 이름은 대문자로 시작)

// // ES5 문법
// function Person(name, first, second) {
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     this.sum = function() {
//         return `${this.name}'s total score is ${this.first + this.second}!`;
//     }
// }

// ES6 문법
class Person {
    // 클래스가 새롭게 생성되는 순간 자동으로 실행되는 영역
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum() {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    }
}


// class 외부에서도 prototype 을 이용하여 class 내부에 메서드를 추가 및 수정 가능.
Person.prototype.p_sub = function() {
    return this.first - this.second;
}

// console.log(Person());
console.log(new Person());

let steve = new Person('Steve', 95, 80);
let mary = new Person('Mary', 82.5, 60);

console.log(steve);
console.log(steve.sum());
console.log(steve.p_sub());

console.log(mary);
console.log(mary.sum());
console.log(mary.p_sub());

console.log(mary.__proto__);
console.log(Person.prototype);





