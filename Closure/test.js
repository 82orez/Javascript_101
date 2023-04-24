// 이 함수는 보조 함수(predicate)를 인수로 전달받고 함수를 반환하는 고차 함수이다.
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter 를 기억하는 클로저를 반환한다.
// predicate 는 콜백 함수이다.
function makeCounter(predicate) {
  let counter = 0;
  // 클로저 반환
  return function() {
    counter = predicate(counter);
    return counter;
  }
}

// 보조 함수
function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const adder = makeCounter(increase);
console.log(adder())
console.log(adder())

