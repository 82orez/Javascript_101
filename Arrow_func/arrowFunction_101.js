// * 화살표 함수에는 세 가지가 없음.
// ? 1. 함수명  --> 익명 함수
// ? 2. arguments
// ? 3. this

// ! 함수의 arguments 정보는 함수의 인자로 들어오는 변수가 갯수를 모를 때 사용하면 유용했으나, ES6 이후 Rest(나머지 매개변수) 문법 도입 이후 사용가치가 떨어짐.

// * 보통 함수가 생성되면 자신의 스코프 안에 this(함수 호출 방식에 따라 다름) 와 파라미터(매개변수) 정보가 담긴 arguments 가 자동으로 생성.
const func = function () {
  console.log('func: ',arguments);
};
func();
func(1, 2, 3, 4);
func({ key1: 1, key2: 2 }, { key1: 3, key2: 4 });

console.log('-------------------------------')

// * 하지만 화살표 함수는 arguments 를 자동으로 생성하지 않음으로 다음은 오류 발생.
// const arrowFunction1 = () => {
//   console.log('arrow 1: ',arguments);
// }
// arrowFunction1(1, 2, 3, 4);

// * 화살표 함수의 arguments 정보를 얻고 싶으면 다음과 같이 처리해야 함.
const arrowFunction2 = (...args) => {
  console.log(args);
};
arrowFunction2(1, 2, 3, 4);
arrowFunction2({ key1: 1, key2: 2 }, { key1: 3, key2: 4 });
