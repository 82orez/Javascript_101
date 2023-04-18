const people = {
  name: 'TG',
  say: function() {
    console.log('1. people.say(): ', this);
  }
}

// * 일반 함수의 경우 this 는 자신이 종속된 people 객체를 표시.
people.say();
console.log('----------------------');

// * sayPeople 이라는 새로운 변수에 people 의 함수 say() 를 대입하면,
// * say() 가 종속된 객체는 전역(global)으로 변경되고 따라서 this 도 전역으로 변경됨.
const sayPeople = people.say;

console.log('2. sayPeople: ', sayPeople);
sayPeople();
console.log('----------------------');


// ! 하지만
// * bind() 함수를 써서 people 객체와 새로운 변수를 묶어 주면 this 는 다시 people 로 변경됨.
const sayPeople1 = people.say.bind(people);
sayPeople1();