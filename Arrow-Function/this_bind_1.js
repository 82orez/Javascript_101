const people = {
  name: 'TG',
  say: function() {
    console.log(this);
  }
}
// * 일반 함수의 경우 자신이 종속된 객체를 표시.
people.say();

const sayPeople = people.say;

// * sayPeople 에는 say() 가 대입됨.
console.log(sayPeople);

// * say() 가 종속된 객체는 전역(global)임.
sayPeople();


// ! 하지만
// * bind()를 써서 people 객체와 묶어 줄 수 있음.
const sayPeople1 = people.say.bind(people);
sayPeople1();