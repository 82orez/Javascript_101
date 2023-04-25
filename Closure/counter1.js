// 이 함수는 보조 함수(predicate)를 인수로 전달받고 함수를 반환하는 고차 함수이다.
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter 를 기억하는 클로저를 반환한다.
// predicate 는 콜백 함수이다.

function makeCounter(predicate) {
  let counter = 0;
  // 클로저 반환
  return function () {
    counter = predicate(counter);
    return counter;
  };
}

// 보조 함수
function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

// * 1. makeCounter 함수가 실행되면 반환된 함수 객체는 전역 변수 increaser 에 저장되고 makeCounter 함수는 소멸된다.
// 그러나 makeCounter 함수는 소멸되어도 makeCounter 함수의 렉시컬 환경은 소멸되지 않는다.
// 그리고 전역 변수 increaser 로 반환된 함수 객체는 makeCounter 함수의 렉시컬 환경을 기억하고 있다.
const increaser = makeCounter(increase);


// * 2. 다시 makeCounter 함수가 실행되면 이 번에 반환된 함수 객체는 전역 변수 decreaser 에 저장되고 makeCounter 함수는 소멸된다.
// 그러나 makeCounter 함수는 소멸되어도 makeCounter 함수의 렉시컬 환경은 소멸되지 않는다.
// 그리고 전역 변수 decreaser 로 반환된 함수 객체는 makeCounter 함수의 렉시컬 환경을 기억하고 있다.
const decreaser = makeCounter(decrease);

// ! 그러나 이 경우 increaser 와 decreaser 에 할당된 함수는 각각 자신들만의 독립된 렉시컬 환경을 가진다.
// 따라서 카운터 상태 관리를 위한 자유 변수 counter 를 공유하지 않아 서로 연동되지 않는다.
// 연동을 가능하게 하려면 렉시컬 환경을 공유하는 클로저를 만들어야 한다.
// ! 이를 위해서는 makeCounter 함수를 두 번 호출하지 않아야 한다.

console.log(increaser());
console.log(increaser());
console.log(decreaser());
console.log(decreaser());
