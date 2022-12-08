// * 화살표 함수에는 세 가지가 없음.
// ? 1. 함수명  --> 익명 함수
// ? 2. arguments
// ? 3. this

// * 보통 함수가 생성되면 자신의 스코프 안에 자기 자신을 가리키는 this 와 파라미터가 담기는 arguments 가 자동으로 생성.
const func = function() {
  console.log(arguments);
}

func(1, 2, 3, 4);
func({key1: 1, key2:2}, {key1: 3, key2:4});

// * 하지만 화살표 함수는 자동 생성되지 않음.
// const arrowFunction1 = () => {
//   console.log(arguments);
// }
// arrowFunction1(1, 2, 3, 4);


const arrowFunction2 = (...args) => {
  console.log(args);
}
arrowFunction2(1, 2, 3, 4);
arrowFunction2({key1: 1, key2:2}, {key1: 3, key2:4});
