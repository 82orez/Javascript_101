function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;

    // 이처럼 함수를 객체 안에서 선언하는 방법도 있지만 아래와 같이
    // 함수 밖에서 prototype 을 이용해 선언할 수도 있다.
    // this.sum = function() {
    //     return this.first + this.second + this.third;
    // }
}

// 객체 생성시 함수를 객체 밖에서 prototye 을 이용해서 선언하면,
// 메모리 절약 효과가 있음.
Person.prototype.sum = function() {
    return this.first + this.second + this.third;
}

let kim = new Person('Kim',10,20,30);
console.log(kim.sum());

kim.sum = function() {
    return this.first + this.second;
}
console.log(kim.sum());

let lee = new Person('Lee',10,50,80);
console.log(lee.sum());