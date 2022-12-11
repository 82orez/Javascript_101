const people = {
  name: 'TG',
  say: () => {
    console.log(this);
  }
}
// * 그러나 화살표 함수의 경우 this 가 없음.
people.say();

const sayPeople = people.say;

// ? sayPeople 에는 say() 가 대입됨.
console.log(sayPeople);

// * 역시 this 가 없음.
sayPeople();


// ! bind()를 써서 people 객체와 묶어 줄 수도 없음.
const sayPeople1 = people.say.bind(people);
sayPeople1();