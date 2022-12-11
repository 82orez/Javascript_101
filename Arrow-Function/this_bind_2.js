const people = {
  name: 'TG',
  say: () => {
    console.log('1. people.say(): ', this);
  }
}

// * 화살표 함수의 경우 this 가 없으므로 이 경우 처음부터 this 는 전역임.
people.say();
console.log('----------------------');

// * sayPeople 이라는 새로운 변수에 people 의 함수 say() 를 대입하더라도,
// * say() 가 종속된 객체는 전역(global)이므로 this 는 여전히 전역임.
const sayPeople = people.say;

console.log('2. sayPeople: ', sayPeople);

sayPeople();
console.log('----------------------');


// ! 그리고
// * bind() 함수를 써서 people 객체와 새로운 변수를 묶어 줄 수도 없기 때문에 this 는 여전히 전역임.
const sayPeople1 = people.say.bind(people);
sayPeople1();