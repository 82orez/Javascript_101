// ! 생성자에서의 this 는 새로 생성될 인스턴스를 의미하고,
// 이와 입력받는 인자들을 묶어주는(binding) 역할.
// (참조) 일반 함수의 this 는 자신이 속한 객체를 의미.

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

console.log('----------------일반 함수의 this---------------');

const hello = {
  name: 'Mary',
  say: function () {
    // * 이 함수가 속한 객체는 hello 객체.
    // hello.name 은 Mary.
    console.log(`${this.name} hello!`);
  },
};
hello.say();
