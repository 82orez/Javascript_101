function Person(name, first, second) {
    // 초기값 및 method 설정
    this.name = name;
    this.first = first;
    this.second = second;

    this.sum = function () {
        return `${this.name}'s total score is ${this.first + this.second}!`;
    };
}

let tg = new Person('TG', 92.5, 80);

console.log(tg.first);
// ! 함수 생성자에서의 this 는 일반적인 함수의 this 와는 성격이 다른 것 같음.
// 일반 함수의 this 는 자신이 속한 객체를 의미.
console.log(tg.this);    // undefined


console.log('-------------------------------');

function hello() {
    console.log('hello');
    // * 이 함수가 속한 객체는 전역(global).
    console.log(this)
}

hello();
