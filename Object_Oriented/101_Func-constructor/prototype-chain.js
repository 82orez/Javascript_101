// * 다음의 경우 Person 이라는 객체 생성자만 생성되는것이 아니라, Person 의 prototype 객체도 같이 생성이 됩니다.
function Person (name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// * Person.prototype 객체에 sum 함수 추가.
// * Person 생성자 자체는 변화 없음.
Person.prototype.sum = function () {
  return this.first + this.second;
};


console.log('Person: ', Person);
console.log('-----------------------');

console.log('Person.prototype: ' , Person.prototype);
console.log('-----------------------');

console.log('Person.prototype.constructor: ', Person.prototype.constructor);
console.log('-----------------------');


// * 새로운 객체 인스턴스 kim 을 생성하면 상속 받은 Person 의 프로퍼티와 함께 __proto__ 프로퍼티가 함께 생성된다.
let kim = new Person('kim', 10, 20);

console.log("kim: ", kim);
console.log("kim's name: ", kim.name);
console.log("kim's sum(): ", kim.sum());
console.log("kim's __proto__: ", kim.__proto__);
console.log('-----------------------');
// ! 결국 Person.prototype 와 kim.__proto__ 은 같은 객체를 의미한다.
console.log('Person.prototype === kim.__proto__: ', Person.prototype===kim.__proto__);    // * ---> true
console.log('-----------------------');


// * __proto__ 를 바로 이용해서 상위 객체를 상속 받게 할 수도 있다.
// * lee 라는 빈 객체를 생성하고 __proto__ 를 이용해서 kim(생성자, constructor 가 아닌) 을 통해 Person.prototype 을 상속 받았다.
let lee= {};
lee.__proto__ = kim;

console.log("lee: ",lee);
console.log("lee's name: ",lee.name);
console.log("lee's sum: ",lee.sum);
console.log("lee's sum(): ",lee.sum());
console.log('-----------------------');


// * 또는 Object.create() 이용해서 상속 받을 수도 있다.
// * 인자가 생성자가 아니어도 됨.

let park = Object.create(kim);

console.log("park's name: ", park.name);

// ? 다음은 오류 발생. kim is not a constructor.
// let jung = new kim;
