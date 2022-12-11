// * 객체 생성을 아래와 같이 하드 코딩으로 할 수도 있지만,

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
console.log('-----------------------');

// * 객체 생성자(constructor, 붕어빵틀) 를 이용해서 instance(붕어빵) 를 만드는 방법이 있음. (생성자 이름은 대문자로 시작.)
// * 객체 생성자의 종류에는 함수형과 class(ES6 이후) 형이 있음.

// * 1. function(함수형) 문법
// function Person(name, first, second) {
//     // 초기값 및 method 설정
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     this.sum = function() {
//         return `${this.name}'s total score is ${this.first + this.second}!`;
//     }
// }

// * 2. class 문법(ES6 이후)
class Person {
    // * 클래스가 새롭게 생성되는 순간 자동으로 실행되는 영역
    // * 인스턴스 생성시 3개의 인자를 받아와서 초기값으로 설정.
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    // * method 생성.
    sum() {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    }
}


// * class 외부에서도 prototype 을 이용하여 class 내부에 property 또는 method 를 추가 및 수정 가능.
// ? 메모리 확보 측면에서 유리하다고 함.
Person.prototype.p_sub = function() {
    return this.first - this.second;
}


// * Person 객체 생성자로 Person 을 상속하는 steve, mary 객체 인스턴스를 생성.
let steve = new Person('Steve', 95, 80);
let mary = new Person('Mary', 82.5, 60);

console.log(steve);
console.log(steve.sum());
console.log(steve.p_sub());
console.log('-----------------------');
console.log(mary);
console.log(mary.sum());
console.log(mary.p_sub());
console.log('-----------------------');

// * prototype chain 의 예시. 원노트 노트 필기 참조.
console.log(Person.prototype);
console.log(mary.__proto__);
console.log(Person.prototype === mary.__proto__);





